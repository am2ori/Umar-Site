
import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Code, Lightbulb, ArrowUpLeft, ArrowUpRight } from 'lucide-react';
import { Language } from '../types';

interface ServicesSectionProps {
  lang: Language;
  onContactClick: (message?: string) => void;
  t: {
    title: string;
    subtitle: string;
    ctaLabel: string;
    items: { title: string; desc: string; whatsappMessage?: string; }[];
  };
}

const ServicesSection: React.FC<ServicesSectionProps> = ({ t, lang, onContactClick }) => {
  const icons = [
    <Briefcase className="w-8 h-8" />,
    <Code className="w-8 h-8" />,
    <Lightbulb className="w-8 h-8" />
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    },
  };

  return (
    <section id="services" className="py-20 md:py-28 bg-white border-y border-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              {t.title}
            </h2>
            <div className="w-20 h-1.5 bg-primary mx-auto rounded-full mb-6"></div>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed font-medium">
              {t.subtitle}
            </p>
          </motion.div>
        </div>

        {/* Services Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {t.items.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative bg-white p-8 md:p-10 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-blue-500/10 hover:border-primary/20 transition-all duration-500 flex flex-col h-full"
            >
              {/* Subtle background element */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50/50 rounded-bl-[4rem] -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Icon Container */}
              <div className="mb-8 w-16 h-16 flex items-center justify-center bg-blue-50 text-primary rounded-2xl group-hover:bg-primary group-hover:text-white group-hover:scale-110 transition-all duration-300 shadow-sm">
                {icons[index]}
              </div>

              {/* Content */}
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors leading-tight">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-base md:text-lg mb-8">
                {service.desc}
              </p>
              
              {/* CTA Button */}
              <div className="mt-auto flex flex-col gap-6">
                <button 
                  onClick={() => onContactClick(service.whatsappMessage)}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gray-50 text-gray-700 font-bold border border-gray-100 group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300 shadow-sm"
                >
                  <span>{t.ctaLabel}</span>
                  {lang === 'ar' ? <ArrowUpLeft className="w-4 h-4" /> : <ArrowUpRight className="w-4 h-4" />}
                </button>
                
                {/* Decorative bottom line */}
                <div className={`h-1 w-12 bg-gray-100 group-hover:w-full group-hover:bg-primary/30 transition-all duration-500 rounded-full ${lang === 'ar' ? 'mr-0' : 'ml-0'}`}></div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
