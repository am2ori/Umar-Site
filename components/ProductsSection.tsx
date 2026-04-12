import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Language } from '../types';

interface ProductItem {
  id: string;
  badge: string;
  title: string;
  description: string;
  cta: string;
  link: string;
  logoUrl: string;
}

interface ProductsSectionProps {
  lang: Language;
  t: {
    title: string;
    items: ProductItem[];
  };
}

const ProductsSection: React.FC<ProductsSectionProps> = ({ lang, t }) => {
  return (
    <section id="products" className="py-16 md:py-24 relative overflow-hidden bg-gray-50/50 dark:bg-gray-900/50 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-12 md:mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-gray-800 dark:text-gray-100 mb-4 font-outfit tracking-tight"
          >
            {t.title}
          </motion.h2>
          <div className="w-20 h-1.5 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {t.items.map((product, index) => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
              className="bg-white dark:bg-gray-800 rounded-[2.5rem] p-8 md:p-10 lg:p-12 shadow-xl border border-gray-100 dark:border-gray-700 overflow-hidden relative group flex flex-col items-center text-center h-full transition-colors duration-300"
            >
              {/* Background glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors duration-500"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400/5 rounded-full blur-3xl group-hover:bg-blue-400/10 transition-colors duration-500"></div>

              {/* Badge */}
              <div className={`absolute top-6 md:top-8 ${lang === 'ar' ? 'left-6 md:left-8' : 'right-6 md:right-8'} z-20`}>
                <span className="inline-block px-3 py-1.5 rounded-full bg-primary/10 text-primary dark:text-white text-xs font-bold tracking-wider uppercase shadow-sm backdrop-blur-sm border border-primary/10">
                  {product.badge}
                </span>
              </div>

              {/* Logo */}
              <div className="w-28 h-28 md:w-32 md:h-32 bg-gray-50 dark:bg-gray-700/50 rounded-3xl p-4 shadow-sm border border-gray-100 dark:border-gray-600 flex items-center justify-center flex-shrink-0 transform group-hover:scale-105 transition-all duration-500 relative z-10 mb-8">
                <img 
                  src={product.logoUrl} 
                  alt={`${product.title} Logo`} 
                  className="w-full h-auto object-contain dark:brightness-0 dark:invert"
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div className="relative z-10 flex flex-col flex-grow items-center w-full">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4 font-outfit">
                  {product.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg leading-relaxed mb-8 font-inter flex-grow">
                  {product.description}
                </p>
                <a
                  href={product.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700 hover:scale-105 transition-all duration-300 shadow-lg shadow-primary/25 w-full sm:w-auto mt-auto"
                >
                  <span>{product.cta}</span>
                  <ExternalLink className={`w-5 h-5 ${lang === 'ar' ? 'mr-2' : 'ml-2'}`} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
