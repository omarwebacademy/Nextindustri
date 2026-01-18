import React, { useRef } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Camera, Search, FileText, Settings } from 'lucide-react';
import { cn } from '../utils/cn';

export const HowItWorks: React.FC = () => {
  const { t, isRTL } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const icons = [Camera, Search, FileText, Settings];

  return (
    <section id="process" className="py-24 bg-white relative overflow-hidden" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="text-center mb-24">
          <h2 className="text-3xl font-bold text-industrial-900 sm:text-4xl tracking-tight">
            {t.process.title}
          </h2>
        </div>

        <div className="relative">
          {/* Tracing Beam Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-1 bg-industrial-100 -z-10 rounded-full overflow-hidden">
            <motion.div 
                className="h-full bg-accent-500 shadow-[0_0_15px_rgba(6,182,212,0.8)]"
                style={{ width: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]) }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {t.process.steps.map((step, index) => {
              const Icon = icons[index];
              return (
                <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className="relative flex flex-col items-center text-center group"
                >
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-24 h-24 bg-white border-4 border-industrial-50 rounded-2xl flex items-center justify-center mb-8 shadow-card group-hover:shadow-glow group-hover:border-accent-100 transition-all duration-300 z-10"
                  >
                    <Icon className="h-8 w-8 text-industrial-800 group-hover:text-accent-600 transition-colors" />
                    
                    {/* Step Number Badge */}
                    <div className={cn(
                        "absolute -top-3 bg-accent-500 text-white w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm shadow-md",
                        isRTL ? "-right-3" : "-left-3"
                    )}>
                      {index + 1}
                    </div>
                  </motion.div>

                  <h3 className="text-xl font-bold text-industrial-900 mb-3">{step.title}</h3>
                  <p className="text-industrial-600 max-w-[260px] mb-4 text-sm leading-relaxed">{step.desc}</p>
                  
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-industrial-50 border border-industrial-100 text-xs font-mono text-industrial-500">
                    <ClockIcon /> {step.time}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

const ClockIcon = () => (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
);