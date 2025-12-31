import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import QuoteSection from './components/QuoteSection';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';

function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const openContactModal = () => setIsContactModalOpen(true);

  return (
    <div className="min-h-screen bg-[#F9FAFB] font-sans text-right scroll-smooth" dir="rtl">
      <Navbar onContactClick={openContactModal} />
      <main>
        <Hero onContactClick={openContactModal} />
        {/* New Quote Section placed between Hero and About */}
        <QuoteSection />
        <About />
        <Portfolio onContactClick={openContactModal} />
      </main>
      <Footer />
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </div>
  );
}

export default App;