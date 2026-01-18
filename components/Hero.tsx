import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { cn } from '../utils/cn';

export const Hero: React.FC = () => {
  const { t, isRTL } = useLanguage();

  const handleScrollDown = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('problems');
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="hero" className="relative min-h-[95vh] flex items-center justify-center overflow-hidden bg-industrial-950 pt-20">
      
      {/* Spotlight Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[50vh] bg-accent-500/20 rounded-full blur-[120px] opacity-40 pointer-events-none animate-pulse-slow" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 flex flex-col items-center text-center">
        {/* Badge */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-industrial-800/50 border border-industrial-700/50 backdrop-blur-md mb-8 hover:border-accent-500/30 transition-colors"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-500"></span>
          </span>
          <span className="text-xs font-medium text-industrial-300 tracking-wide uppercase">{t.hero.trust}</span>
        </motion.div>

        {/* Heading */}
        <motion.h1 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-8 max-w-5xl leading-[1.1]"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-industrial-400">
            {t.hero.title}
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg md:text-xl text-industrial-400 max-w-2xl leading-relaxed mb-16 font-light"
        >
          {t.hero.subtitle}
        </motion.p>

        {/* Animated Arrow (Replaces CTA) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col items-center"
        >
           <a 
            href="#problems" 
            onClick={handleScrollDown}
            className="group relative flex items-center justify-center p-4 focus:outline-none"
            aria-label="Scroll to content"
           >
              <div className="absolute inset-0 bg-accent-500/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative flex items-center justify-center w-14 h-14 rounded-full border border-industrial-800 bg-industrial-900/40 backdrop-blur-sm group-hover:border-accent-500/50 group-hover:bg-industrial-900 transition-all duration-300 shadow-2xl">
                <motion.div
                  animate={{ y: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="text-industrial-400 group-hover:text-accent-400"
                >
                  <ChevronDown className="w-6 h-6" />
                </motion.div>
              </div>
           </a>
        </motion.div>
      </div>

      {/* Decorative Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-industrial-50 to-transparent z-10 pointer-events-none"></div>
    </section>
  );
};