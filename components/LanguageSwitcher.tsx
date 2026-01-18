import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Check, Globe } from 'lucide-react';
import { cn } from '../utils/cn';

interface LanguageOption {
  code: 'fr' | 'en' | 'ar';
  label: string;
}

const languages: LanguageOption[] = [
  { code: 'fr', label: 'FR' },
  { code: 'en', label: 'EN' },
  { code: 'ar', label: 'AR' },
];

export const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const currentLang = languages.find((l) => l.code === language) || languages[0];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative z-50" ref={containerRef}>
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "group relative flex items-center gap-2 px-4 py-2 rounded-full",
          "bg-white/80 backdrop-blur-md border border-industrial-200",
          "shadow-sm transition-all duration-300",
          "hover:border-accent-300 hover:shadow-[0_0_15px_rgba(6,182,212,0.15)]",
          "focus:outline-none focus:ring-2 focus:ring-accent-500/20"
        )}
      >
        <Globe className="w-4 h-4 text-industrial-500 group-hover:text-accent-500 transition-colors" />
        <span className="text-sm font-bold text-industrial-800 tracking-wide">
          {currentLang.label}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          className="text-industrial-400 group-hover:text-accent-500"
        >
          <ChevronDown className="w-4 h-4" strokeWidth={2.5} />
        </motion.div>
        
        {/* Subtle internal shine effect */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.96 }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            className="absolute top-full mt-2 right-0 w-32 p-1.5"
          >
            <div className="bg-white/95 backdrop-blur-xl border border-white/40 rounded-xl shadow-xl shadow-industrial-900/5 overflow-hidden ring-1 ring-black/5">
              <div className="flex flex-col gap-0.5">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setLanguage(lang.code);
                      setIsOpen(false);
                    }}
                    className={cn(
                      "relative flex items-center justify-between w-full px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200",
                      language === lang.code
                        ? "bg-accent-50 text-accent-700"
                        : "text-industrial-600 hover:bg-industrial-50 hover:text-industrial-900"
                    )}
                  >
                    <span className="text-left font-semibold">{lang.label}</span>
                    {language === lang.code && (
                      <motion.div
                        layoutId="active-indicator"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="text-accent-500"
                      >
                        <Check className="w-4 h-4" strokeWidth={3} />
                      </motion.div>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};