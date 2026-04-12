import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import QuoteSection from './components/QuoteSection';
import Methodology from './components/Methodology';
import ServicesSection from './components/ServicesSection';
import TechStack from './components/TechStack';
import ProductsSection from './components/ProductsSection';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';
import WhatsAppButton from './components/WhatsAppButton';
import ProgressBar from './components/ProgressBar';
import BackToTop from './components/BackToTop';
import { translations } from './translations';
import { Language } from './types';

function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [activeMessage, setActiveMessage] = useState<string>('');
  const [lang, setLang] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const savedLang = localStorage.getItem('lang');
      if (savedLang === 'ar' || savedLang === 'en') return savedLang;
      if (navigator.language && navigator.language.toLowerCase().startsWith('ar')) {
        return 'ar';
      }
      return 'en';
    }
    return 'ar';
  });

  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark' ||
        (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return false;
  });

  const openContactModal = (message?: string) => {
    setActiveMessage(message || translations[lang].services.defaultWhatsappMessage);
    setIsContactModalOpen(true);
  };
  
  const toggleLang = () => {
    setLang(prev => {
      const newLang = prev === 'ar' ? 'en' : 'ar';
      localStorage.setItem('lang', newLang);
      return newLang;
    });
  };

  const t = translations[lang];

  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <div className={`min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 scroll-smooth relative transition-colors duration-300 ${lang === 'ar' ? 'font-arabic' : 'font-sans'}`}>
      {/* Subtle Animated Mesh Gradient Background */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <motion.div 
          animate={{ 
            x: [0, 50, 0], 
            y: [0, 30, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/10 blur-[120px]" 
        />
        <motion.div 
          animate={{ 
            x: [0, -50, 0], 
            y: [0, -30, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-400/10 blur-[120px]" 
        />
      </div>

      <ProgressBar />
      
      <div className="relative z-10">
        <Navbar 
          onContactClick={() => openContactModal()} 
          lang={lang} 
          toggleLang={toggleLang}
          isDarkMode={isDarkMode}
          toggleTheme={toggleTheme}
          t={t.navbar}
        />
        <main>
        <Hero 
          onContactClick={() => openContactModal()} 
          t={t.hero}
          lang={lang}
        />
        <QuoteSection t={t.quote} />
        <About t={t.about} />
        
        <Methodology t={t.methodology} lang={lang} />
        <ServicesSection 
          t={t.services} 
          lang={lang} 
          onContactClick={(msg) => openContactModal(msg)} 
        />
        <TechStack t={t.techStack} />
        <ProductsSection t={t.products} lang={lang} />
      </main>
      <Footer t={t.footer} />
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)}
        customMessage={activeMessage}
        t={t.contact}
      />
      <WhatsAppButton />
      <BackToTop />
      </div>
    </div>
  );
}

export default App;