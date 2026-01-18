import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { Cpu } from 'lucide-react';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-white border-t border-industrial-200 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
             <div className="bg-industrial-900 p-2 rounded-lg shadow-md">
                <Cpu className="h-6 w-6 text-accent-500" />
            </div>
            <span className="font-bold text-2xl text-industrial-900 tracking-tight">
              Next<span className="text-accent-600">Industri</span>
            </span>
          </div>
          
          <p className="text-industrial-500 text-sm max-w-md text-center md:text-end font-light">
            {t.footer.about}
          </p>
        </div>
        
        <div className="mt-12 border-t border-industrial-100 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-industrial-400 text-sm">
                &copy; {new Date().getFullYear()} NextIndustri. {t.footer.rights}
            </p>
        </div>
      </div>
    </footer>
  );
};