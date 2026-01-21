import React, { useState } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Language } from '../types';

interface NavbarProps {
  onContactClick: () => void;
  lang: Language;
  toggleLang: () => void;
  t: {
    items: { label: string; href: string }[];
    cta: string;
    name: string;
  };
}

const Navbar: React.FC<NavbarProps> = ({ onContactClick, lang, toggleLang, t }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#F9FAFB]/90 backdrop-blur-lg border-b border-gray-100 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          
          {/* Logo Name & Lang Switcher Wrapper */}
          <div className="flex items-center gap-6">
            <a 
              href="#hero" 
              onClick={(e) => scrollToSection(e, '#hero')}
              className="text-2xl md:text-3xl font-bold text-gray-900 hover:text-primary transition-colors duration-300 tracking-tight"
            >
              {t.name}
            </a>

            {/* Language Switcher (Desktop/Mobile) */}
            <button
              onClick={toggleLang}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-gray-200 hover:border-primary/50 bg-white/50 hover:bg-white text-sm font-semibold text-gray-600 hover:text-primary transition-all duration-300 group"
            >
              <Globe className="w-4 h-4 group-hover:rotate-12 transition-transform" />
              {/* Apply Arabic font specifically for the Arabic letter when in English mode */}
              <span className={lang === 'en' ? 'font-arabic text-lg leading-none pt-0.5' : ''}>
                {lang === 'ar' ? 'EN' : 'ع'}
              </span>
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="flex items-center gap-x-10">
              {t.items.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className="text-gray-600 hover:text-primary relative group text-base font-semibold transition-colors"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
              <button
                onClick={onContactClick}
                className="bg-primary text-white px-7 py-3 rounded-xl text-base font-medium hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/20 transform hover:-translate-y-0.5"
              >
                {t.cta}
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="-ml-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-primary focus:outline-none"
            >
              <span className="sr-only">Menu</span>
              {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-200 overflow-hidden"
          >
            <div className="px-4 pt-4 pb-6 space-y-2">
              {t.items.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className="text-gray-600 hover:text-primary hover:bg-gray-50 block px-3 py-3 rounded-lg text-lg font-medium transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <button
                onClick={() => {
                  setIsOpen(false);
                  onContactClick();
                }}
                className="block w-full text-center bg-primary text-white px-5 py-4 rounded-xl text-lg font-medium hover:bg-blue-700 mt-6 shadow-md"
              >
                {t.cta}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;