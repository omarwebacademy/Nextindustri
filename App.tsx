import React from 'react';
import { LanguageProvider, useLanguage } from './hooks/useLanguage';
import { cn } from './utils/cn';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { HowItWorks } from './components/HowItWorks';
import { AICapabilities } from './components/AICapabilities';
import { TrustSection } from './components/TrustSection';
import { IndustriesSection } from './components/IndustriesSection';
import { SecuritySection } from './components/SecuritySection';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';

const AppContent: React.FC = () => {
  const { isRTL } = useLanguage();
  
  return (
    <div className={cn(
      "min-h-screen bg-white text-gray-900",
      isRTL ? "font-arabic" : "font-sans"
    )}>
      <Header />
      <main>
        <Hero />
        <ProblemSection />
        <HowItWorks />
        <AICapabilities />
        <TrustSection />
        <IndustriesSection />
        <SecuritySection />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
};

export default App;