import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'الرئيسية', href: '#hero' },
  { label: 'عني', href: '#about' },
  { label: 'أعمالي', href: '#portfolio' },
];

interface NavbarProps {
  onContactClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onContactClick }) => {
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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#F9FAFB]/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Name */}
          <div className="flex-shrink-0">
            <a 
              href="#hero" 
              onClick={(e) => scrollToSection(e, '#hero')}
              className="text-xl font-bold text-gray-900 hover:text-primary transition-colors duration-300"
            >
              عمر طاهر علي
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="flex items-baseline gap-x-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className="text-gray-600 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <button
                onClick={onContactClick}
                className="bg-primary text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-blue-700 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                تواصل معي
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="-ml-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-primary focus:outline-none"
            >
              <span className="sr-only">فتح القائمة</span>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
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
            className="md:hidden bg-white border-b border-gray-200"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className="text-gray-600 hover:text-primary block px-3 py-2 rounded-md text-base font-medium"
                >
                  {item.label}
                </a>
              ))}
              <button
                onClick={() => {
                  setIsOpen(false);
                  onContactClick();
                }}
                className="block w-full text-center bg-primary text-white px-5 py-3 rounded-md text-base font-medium hover:bg-blue-700 mt-4"
              >
                تواصل معي
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;