import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';

function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const openContactModal = () => setIsContactModalOpen(true);

  return (
    <div className="min-h-screen bg-[#F9FAFB] font-sans text-right" dir="rtl">
      <Navbar onContactClick={openContactModal} />
      <main>
        <Hero onContactClick={openContactModal} />
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