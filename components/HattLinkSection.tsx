import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Language } from '../types';

interface HattLinkSectionProps {
  lang: Language;
  t: {
    badge: string;
    title: string;
    description: string;
    cta: string;
  };
}

const HattLinkSection: React.FC<HattLinkSectionProps> = ({ lang, t }) => {
  return (
    <section id="hattlink" className="py-16 md:py-24 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-white rounded-[2.5rem] p-8 md:p-12 lg:p-16 shadow-xl border border-gray-100 overflow-hidden relative group"
        >
          {/* Background glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors duration-500"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400/5 rounded-full blur-3xl group-hover:bg-blue-400/10 transition-colors duration-500"></div>

          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-12">
            {/* Logo */}
            <div className="w-32 h-32 md:w-40 md:h-40 bg-gray-50 rounded-3xl p-4 shadow-sm border border-gray-100 flex items-center justify-center flex-shrink-0 transform group-hover:scale-105 transition-transform duration-500">
              <img 
                src="https://drive.google.com/thumbnail?id=1JG60mUvG2YyKtSWjiUGQP6IDsljy1vOc&sz=w800" 
                alt="Hatt Link Logo" 
                className="w-full h-auto object-contain"
                loading="lazy"
              />
            </div>

            {/* Content */}
            <div className={`text-center ${lang === 'ar' ? 'md:text-right' : 'md:text-left'} flex-1`}>
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-bold tracking-wider uppercase mb-4">
                {t.badge}
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 font-outfit">
                {t.title}
              </h2>
              <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl font-inter">
                {t.description}
              </p>
              <a
                href="https://hattl.cc"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700 hover:scale-105 transition-all duration-300 shadow-lg shadow-primary/25"
              >
                <span>{t.cta}</span>
                <ExternalLink className={`w-5 h-5 ${lang === 'ar' ? 'mr-2' : 'ml-2'}`} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HattLinkSection;
