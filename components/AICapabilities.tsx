import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { motion } from 'framer-motion';
import { ScanLine, Globe2, BarChart3 } from 'lucide-react';
import { cn } from '../utils/cn';

export const AICapabilities: React.FC = () => {
  const { t } = useLanguage();
  const icons = [ScanLine, Globe2, BarChart3];

  return (
    <section id="ai" className="py-32 bg-industrial-950 text-white relative overflow-hidden">
        {/* Background Grid & Noise */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        
        {/* Ambient Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent-900/30 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-24">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-accent-400 font-mono tracking-widest uppercase text-xs border border-accent-900 bg-accent-900/10 px-2 py-1 rounded"
          >
            {t.ai.subtitle}
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-6 text-3xl font-bold sm:text-5xl text-white tracking-tight"
          >
            {t.ai.title}
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.ai.features.map((feature, index) => {
            const Icon = icons[index];
            return (
              <MeteorCard key={index} delay={index * 0.1}>
                <div className="relative z-10">
                    <div className="w-14 h-14 bg-gradient-to-br from-industrial-800 to-industrial-900 rounded-xl flex items-center justify-center mb-8 border border-industrial-700 shadow-[0_0_15px_rgba(0,0,0,0.5)] group-hover:shadow-accent-500/20 transition-all">
                        <Icon className="h-7 w-7 text-accent-400" />
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-white font-mono">{feature.title}</h3>
                    <p className="text-industrial-400 leading-relaxed text-sm font-light">
                        {feature.desc}
                    </p>
                </div>
              </MeteorCard>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const MeteorCard = ({ children, delay }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="group relative overflow-hidden rounded-3xl border border-industrial-800 bg-industrial-900/50 p-8 backdrop-blur-sm transition-colors hover:border-industrial-700 hover:bg-industrial-800/50"
    >
      {/* Meteor Effect Container */}
      <span className="absolute inset-0 overflow-hidden rounded-3xl">
         <span className="absolute top-0 left-0 h-[2px] w-[100px] bg-gradient-to-r from-transparent via-accent-500 to-transparent opacity-0 group-hover:animate-meteor transition-opacity" />
      </span>
      
      {/* Corner Accents */}
      <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-industrial-700 transition-all group-hover:border-accent-500/50 rounded-tl-3xl"></div>
      
      {children}
    </motion.div>
  );
};