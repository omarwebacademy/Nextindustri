import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { motion } from 'framer-motion';
import { Check, Shield, Zap, Truck, Warehouse, FileCheck } from 'lucide-react';

export const TrustSection: React.FC = () => {
  const { t } = useLanguage();
  const icons = [Zap, Warehouse, Truck, Shield, Check, FileCheck];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-industrial-900 sm:text-4xl tracking-tight"
          >
            {t.trust.title}
          </motion.h2>
          <div className="mt-4 h-1 w-20 bg-industrial-200 mx-auto rounded-full overflow-hidden">
            <motion.div 
                className="h-full bg-accent-500 w-1/2"
                animate={{ x: ["-100%", "200%"] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.trust.pillars.map((pillar, index) => {
            const Icon = icons[index % icons.length];
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                whileHover={{ y: -5 }}
                className="group relative bg-industrial-50 p-8 rounded-2xl border border-industrial-100 hover:bg-white hover:shadow-xl hover:shadow-accent-500/10 hover:border-accent-200 transition-all duration-300"
              >
                <div className="relative">
                    <div className="h-12 w-12 rounded-lg bg-white border border-industrial-200 flex items-center justify-center shadow-sm mb-6 group-hover:border-accent-500 group-hover:bg-accent-50 group-hover:scale-110 transition-all duration-300">
                      <Icon className="h-6 w-6 text-industrial-600 group-hover:text-accent-600" strokeWidth={2} />
                    </div>
                    
                    <h3 className="text-lg font-bold text-industrial-900 mb-3 group-hover:text-accent-700 transition-colors">
                        {pillar.title}
                    </h3>
                    <p className="text-industrial-600 text-sm leading-relaxed">
                      {pillar.desc}
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