import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { motion } from 'framer-motion';
import { Factory, Cog, Zap, Beaker, Truck, ShoppingCart, HeartPulse, Hammer } from 'lucide-react';

export const IndustriesSection: React.FC = () => {
  const { t } = useLanguage();
  const icons = [Truck, ShoppingCart, Cog, Beaker, Hammer, Zap, HeartPulse, Factory];

  return (
    <section id="industries" className="py-24 bg-industrial-900 text-white relative overflow-hidden">
      {/* Background abstract shapes */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-accent-600/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-industrial-700/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold sm:text-4xl tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-industrial-400"
          >
            {t.industries.title}
          </motion.h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-industrial-400 font-light">
            {t.industries.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {t.industries.list.map((industry, index) => {
            const Icon = icons[index % icons.length];
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group relative overflow-hidden rounded-xl bg-industrial-800/40 border border-industrial-700/50 hover:bg-industrial-800/80 hover:border-accent-500/30 transition-all duration-300 backdrop-blur-sm"
              >
                {/* Active Border Beam */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 -translate-x-full group-hover:animate-shimmer pointer-events-none" />

                <div className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-2.5 bg-industrial-800 border border-industrial-600 rounded-lg text-industrial-300 group-hover:text-accent-400 group-hover:border-accent-500/50 transition-colors shadow-lg">
                       <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-bold text-white tracking-wide">{industry.name}</h3>
                  </div>
                  <p className="text-industrial-400 text-sm pl-4 border-l-2 border-industrial-700 group-hover:border-accent-500 transition-colors">
                    {industry.example}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};