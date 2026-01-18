import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { motion } from 'framer-motion';
import { AlertTriangle, TrendingUp, Truck, Users, Activity, XCircle } from 'lucide-react';
import { cn } from '../utils/cn';

export const ProblemSection: React.FC = () => {
  const { t } = useLanguage();
  // Icons mapping
  const icons = [AlertTriangle, TrendingUp, Truck, Users];

  return (
    <section id="problems" className="py-24 bg-industrial-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#64748B 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-100 text-red-600 text-xs font-bold uppercase tracking-wider mb-4"
          >
            <Activity className="w-3 h-3" />
            <span>{t.problems.badge}</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-industrial-900 tracking-tight mb-4"
          >
            {t.problems.title}
          </motion.h2>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-3 gap-6 auto-rows-[minmax(200px, auto)]">
          
          {/* Card 1: Critical Shortage - Large Dark Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="md:col-span-6 lg:col-span-2 lg:row-span-2 relative group overflow-hidden rounded-3xl bg-industrial-900 p-8 flex flex-col justify-between shadow-2xl shadow-industrial-900/20"
          >
             {/* Decorative Grid on Dark Card */}
             <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
             <div className="absolute top-0 right-0 p-12 opacity-5 group-hover:opacity-10 transition-opacity duration-500 transform group-hover:scale-110 group-hover:rotate-12">
                 <AlertTriangle className="w-64 h-64 text-white" />
             </div>
             
             <div className="relative z-10">
                 <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-red-500/20 to-red-600/10 flex items-center justify-center mb-8 border border-red-500/30 text-red-500 shadow-lg shadow-red-900/20">
                    <AlertTriangle className="w-7 h-7" />
                 </div>
                 <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 max-w-md">
                    {t.problems.items[0].title}
                 </h3>
                 <p className="text-industrial-400 text-lg max-w-sm leading-relaxed">
                    {t.problems.items[0].desc}
                 </p>
             </div>

             <div className="mt-8 flex items-center gap-3">
                 <span className="flex h-3 w-3 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                 </span>
                 <span className="text-red-400 text-sm font-mono uppercase tracking-widest">High Criticality</span>
             </div>
          </motion.div>

          {/* Card 2: Unpredictable Costs */}
          <BentoCard 
            className="md:col-span-3 lg:col-span-1 bg-white border-industrial-200"
            icon={icons[1]}
            title={t.problems.items[1].title}
            desc={t.problems.items[1].desc}
            delay={0.2}
            accentColor="text-orange-600"
            bgAccent="bg-orange-50"
            borderColor="hover:border-orange-200"
          />

          {/* Card 3: Logistics */}
          <BentoCard 
            className="md:col-span-3 lg:col-span-1 bg-white border-industrial-200"
            icon={icons[2]}
            title={t.problems.items[2].title}
            desc={t.problems.items[2].desc}
            delay={0.3}
            accentColor="text-blue-600"
            bgAccent="bg-blue-50"
            borderColor="hover:border-blue-200"
          />

          {/* Card 4: Technical Expertise - Horizontal Strip */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="md:col-span-6 lg:col-span-3 bg-white rounded-3xl p-8 border border-industrial-200 shadow-sm flex flex-col md:flex-row md:items-center gap-6 group hover:border-industrial-300 hover:shadow-lg hover:shadow-industrial-900/5 transition-all duration-300"
          >
            <div className="w-16 h-16 rounded-2xl bg-industrial-50 border border-industrial-100 flex items-center justify-center shrink-0 group-hover:bg-industrial-100 group-hover:scale-110 transition-all duration-300">
                <Users className="w-8 h-8 text-industrial-600 group-hover:text-industrial-900" />
            </div>
            <div className="flex-1">
                <h3 className="text-xl font-bold text-industrial-900 mb-2">{t.problems.items[3].title}</h3>
                <p className="text-industrial-600 leading-relaxed max-w-3xl">{t.problems.items[3].desc}</p>
            </div>
            <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full border border-industrial-100 text-industrial-300 group-hover:border-industrial-300 group-hover:text-industrial-600 transition-colors">
                <XCircle className="w-6 h-6" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

// Reusable Bento Card Component
const BentoCard = ({ className, icon: Icon, title, desc, delay, accentColor, bgAccent, borderColor }: any) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    whileHover={{ y: -5 }}
    className={cn(
      "relative p-8 rounded-3xl border shadow-sm transition-all duration-300 group overflow-hidden flex flex-col hover:shadow-xl",
      borderColor,
      className
    )}
  >
    <div className={cn(
        "w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-colors border border-transparent group-hover:border-black/5",
        bgAccent, accentColor
    )}>
        <Icon className="w-6 h-6" />
    </div>

    <div>
        <h3 className="text-lg font-bold text-industrial-900 mb-3">{title}</h3>
        <p className="text-industrial-600 text-sm leading-relaxed">{desc}</p>
    </div>
    
    {/* Hover Line Effect */}
    <div className={cn("absolute bottom-0 left-0 w-0 h-1 transition-all duration-500 group-hover:w-full", accentColor.replace('text-', 'bg-'))} />
  </motion.div>
);