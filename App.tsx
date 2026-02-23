import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import QuoteSection from './components/QuoteSection';
import Methodology from './components/Methodology';
import ServicesSection from './components/ServicesSection';
import TechStack from './components/TechStack';
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
  const [lang, setLang] = useState<Language>('ar');

  const openContactModal = (message?: string) => {
    setActiveMessage(message || translations[lang].services.defaultWhatsappMessage);
    setIsContactModalOpen(true);
  };
  
  const toggleLang = () => setLang(prev => prev === 'ar' ? 'en' : 'ar');

  const t = translations[lang];

  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <div className={`min-h-screen bg-white text-gray-900 scroll-smooth relative ${lang === 'ar' ? 'font-arabic' : 'font-sans'}`}>
      {/* Subtle Mesh Gradient Background */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-primary/5 blur-[120px]" />
      </div>

      <ProgressBar />
      
      <div className="relative z-10">
        <Navbar 
          onContactClick={() => openContactModal()} 
          lang={lang} 
          toggleLang={toggleLang}
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