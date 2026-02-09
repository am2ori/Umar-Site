import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import QuoteSection from './components/QuoteSection';
import Methodology from './components/Methodology';
import ServicesSection from './components/ServicesSection';
import TechStack from './components/TechStack';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';
import WhatsAppButton from './components/WhatsAppButton';
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
    <div className={`min-h-screen bg-[#F9FAFB] text-gray-900 scroll-smooth ${lang === 'ar' ? 'font-arabic' : 'font-sans'}`}>
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
        
        <Portfolio 
          onContactClick={() => openContactModal()} 
          t={t.portfolio}
        />
      </main>
      <Footer t={t.footer} />
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)}
        customMessage={activeMessage}
        t={t.contact}
      />
      <WhatsAppButton />
    </div>
  );
}

export default App;