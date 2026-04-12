import React, { useState } from 'react';
import { Menu, X, Globe, Moon, Sun } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Language } from '../types';

interface NavbarProps {
  onContactClick: () => void;
  lang: Language;
  toggleLang: () => void;
  isDarkMode: boolean;
  toggleTheme: () => void;
  t: {
    items: { label: string; href: string }[];
    cta: string;
    name: string;
  };
}

const Navbar: React.FC<NavbarProps> = ({ onContactClick, lang, toggleLang, isDarkMode, toggleTheme, t }) => {
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
    <nav className="fixed top-4 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="bg-white/60 dark:bg-gray-900/60 backdrop-blur-xl border border-white/80 dark:border-gray-700/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)] hover:shadow-[0_8px_30px_rgba(37,99,235,0.08)] transition-shadow duration-500 rounded-full px-6 py-3 md:py-4 flex items-center justify-between">
        {/* Logo Name & Lang Switcher Wrapper */}
        <div className="flex items-center gap-4 md:gap-6">
          <a 
            href="#hero" 
            onClick={(e) => scrollToSection(e, '#hero')}
            className="text-xl md:text-2xl font-bold text-gray-800 dark:text-gray-100 hover:text-primary dark:hover:text-primary transition-colors duration-300 tracking-tight font-outfit"
          >
            {t.name}
          </a>

          <div className="flex items-center gap-2">
            {/* Theme Switcher */}
            <button
              onClick={toggleTheme}
              className="flex items-center justify-center w-9 h-9 rounded-full border border-gray-200 dark:border-gray-700 hover:border-primary/50 dark:hover:border-primary/50 bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-all duration-300"
              aria-label="Toggle Dark Mode"
            >
              {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Language Switcher (Desktop/Mobile) */}
            <button
              onClick={toggleLang}
              className="flex items-center gap-2 px-3 py-1.5 h-9 rounded-full border border-gray-200 dark:border-gray-700 hover:border-primary/50 dark:hover:border-primary/50 bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800 text-sm font-semibold text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-all duration-300 group"
            >
              <Globe className="w-4 h-4 group-hover:rotate-12 transition-transform" />
              {/* Apply Arabic font specifically for the Arabic letter when in English mode */}
              <span className={lang === 'en' ? 'font-arabic text-lg leading-none pt-0.5' : ''}>
                {lang === 'ar' ? 'EN' : 'ع'}
              </span>
            </button>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-x-8">
          {t.items.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => scrollToSection(e, item.href)}
              className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary relative group text-sm font-semibold transition-colors"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          <button
            onClick={onContactClick}
            className="bg-primary text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-blue-700 transition-all shadow-md shadow-blue-500/20 transform hover:-translate-y-0.5"
          >
            {t.cta}
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden">
          <button
            onClick={toggleMenu}
            className="inline-flex items-center justify-center p-2 rounded-full text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none transition-colors"
          >
            <span className="sr-only">Menu</span>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-full left-4 right-4 mt-2 bg-white/90 dark:bg-gray-900/95 backdrop-blur-lg border border-gray-200/50 dark:border-gray-700/50 rounded-2xl shadow-xl overflow-hidden"
          >
            <div className="px-4 py-6 space-y-2">
              {t.items.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary hover:bg-gray-50 dark:hover:bg-gray-800 block px-4 py-3 rounded-xl text-base font-medium transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-4 px-2">
                <button
                  onClick={() => {
                    setIsOpen(false);
                    onContactClick();
                  }}
                  className="block w-full text-center bg-primary text-white px-5 py-3.5 rounded-xl text-base font-medium hover:bg-blue-700 shadow-md transition-colors"
                >
                  {t.cta}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;