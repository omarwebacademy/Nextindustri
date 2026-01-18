import React, { useState, useEffect } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { Menu, X, Cpu } from 'lucide-react';
import { LanguageSwitcher } from './LanguageSwitcher';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../utils/cn';

export const Header: React.FC = () => {
  const { t } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const navItems = [
    { label: t.nav.home, href: '#hero' },
    { label: t.problems.title, href: '#problems' },
    { label: t.nav.howItWorks, href: '#process' },
    { label: t.nav.features, href: '#ai' },
    { label: t.nav.industries, href: '#industries' },
  ];

  // Handle scroll effect and active section
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Determine active section
      const sections = navItems.map(item => item.href.substring(1));
      let current = '';
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= (element.offsetTop - 150)) {
          current = section;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  const handleScrollTo = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.querySelector(id);
    if (element) {
      window.scrollTo({
        top: (element as HTMLElement).offsetTop - 100,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <motion.header 
        initial={{ y: -100, backgroundColor: "rgba(255, 255, 255, 0)", boxShadow: "none", borderColor: "rgba(0,0,0,0)", paddingTop: "20px", paddingBottom: "20px" }}
        animate={{ 
            y: 0,
            backgroundColor: scrolled ? "rgba(255, 255, 255, 0.8)" : "rgba(255, 255, 255, 0)",
            boxShadow: scrolled ? "0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)" : "none",
            borderColor: scrolled ? "rgba(226, 232, 240, 0.8)" : "rgba(0,0,0,0)",
            paddingTop: scrolled ? "12px" : "20px",
            paddingBottom: scrolled ? "12px" : "20px",
            backdropFilter: scrolled ? "blur(16px)" : "blur(0px)",
        }}
        transition={{ 
            y: { duration: 0.5, type: 'spring', stiffness: 100 },
            default: { duration: 0.3, ease: "easeInOut" }
        }}
        className="fixed top-0 left-0 right-0 z-50 border-b border-transparent"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <a href="#hero" onClick={(e) => handleScrollTo('#hero', e)} className="flex items-center gap-2 group z-50">
              <div className="relative">
                <div className="absolute inset-0 bg-accent-500 blur-lg opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>
                <div className="relative bg-industrial-900 p-2 rounded-xl border border-industrial-800 shadow-xl group-hover:scale-105 transition-transform duration-300">
                  <Cpu className="h-6 w-6 text-accent-400" />
                </div>
              </div>
              <span className={cn(
                "font-bold text-xl tracking-tight transition-colors duration-300",
                scrolled || isMobileMenuOpen ? "text-industrial-900" : "text-white"
              )}>
                Next<span className="text-accent-500">Industri</span>
              </span>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1 p-1 bg-white/50 backdrop-blur-md rounded-full border border-white/20 shadow-sm">
               {navItems.map((item) => {
                 const isActive = activeSection === item.href.substring(1) || (item.href === '#hero' && activeSection === '');
                 return (
                   <a 
                     key={item.href}
                     href={item.href}
                     onClick={(e) => handleScrollTo(item.href, e)}
                     className={cn(
                       "relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 z-10",
                       isActive ? "text-white" : "text-industrial-600 hover:text-industrial-900"
                     )}
                   >
                     {isActive && (
                       <motion.div
                         layoutId="nav-pill"
                         className="absolute inset-0 bg-industrial-900 rounded-full -z-10"
                         transition={{ type: "spring", stiffness: 300, damping: 30 }}
                       />
                     )}
                     {item.label}
                   </a>
                 );
               })}
            </nav>

            {/* Actions */}
            <div className="hidden lg:flex items-center gap-4">
              <LanguageSwitcher />
              <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={(e) => handleScrollTo('#contact', e)}
                  className="bg-accent-500 text-white px-5 py-2.5 rounded-full shadow-[0_0_20px_-5px_rgba(6,182,212,0.5)] hover:shadow-[0_0_25px_-5px_rgba(6,182,212,0.7)] transition-all font-semibold text-sm"
              >
                {t.nav.contact}
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden items-center gap-4">
              <LanguageSwitcher />
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={cn(
                  "p-2 rounded-full transition-colors",
                  scrolled ? "text-industrial-900 hover:bg-industrial-100" : "text-white hover:bg-white/10"
                )}
              >
                {isMobileMenuOpen ? <X className="h-6 w-6 text-industrial-900" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white/95 backdrop-blur-xl lg:hidden pt-24 px-6"
          >
            <div className="flex flex-col space-y-4">
               {navItems.map((item, idx) => (
                 <motion.a 
                   key={item.href}
                   initial={{ opacity: 0, x: -20 }}
                   animate={{ opacity: 1, x: 0 }}
                   transition={{ delay: idx * 0.05 }}
                   href={item.href}
                   onClick={(e) => handleScrollTo(item.href, e)}
                   className="text-2xl font-bold text-industrial-800 py-3 border-b border-industrial-100 active:text-accent-600"
                 >
                   {item.label}
                 </motion.a>
               ))}
               <motion.button 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  onClick={(e) => handleScrollTo('#contact', e)} 
                  className="w-full mt-8 bg-industrial-900 text-white py-4 rounded-xl font-bold text-lg shadow-xl"
                >
                  {t.nav.contact}
                </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};