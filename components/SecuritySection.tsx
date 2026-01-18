import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { motion } from 'framer-motion';
import { ShieldCheck, Lock, FileCheck, Truck } from 'lucide-react';

export const SecuritySection: React.FC = () => {
  const { t } = useLanguage();
  const icons = [Lock, ShieldCheck, FileCheck, Truck];

  return (
    <section className="py-24 bg-industrial-50 border-t border-industrial-200 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        
        {/* Central visual header */}
        <div className="flex flex-col items-center justify-center mb-20 text-center">
            <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                className="relative mb-8"
            >
                <div className="absolute inset-0 bg-accent-500/20 rounded-full blur-xl animate-pulse"></div>
                <div className="relative bg-white p-6 rounded-full shadow-glow border border-accent-100">
                    <ShieldCheck className="w-12 h-12 text-accent-500" />
                </div>
            </motion.div>
            
            <h2 className="text-2xl font-bold uppercase tracking-[0.2em] text-industrial-900">
                {t.security.title}
            </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.security.features.map((feature, index) => {
            const Icon = icons[index % icons.length];
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center text-center p-6 bg-white rounded-2xl border border-industrial-100 shadow-card hover:shadow-card-hover hover:border-accent-200 transition-all duration-300"
              >
                <div className="mb-5 p-3 bg-industrial-50 rounded-xl text-industrial-600 group-hover:text-accent-600 transition-colors">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold mb-3 text-industrial-900">{feature.title}</h3>
                <p className="text-industrial-500 text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};