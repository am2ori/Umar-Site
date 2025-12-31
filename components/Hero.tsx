import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

interface HeroProps {
  onContactClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onContactClick }) => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-32 md:pt-20 overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.4]" 
           style={{
             backgroundImage: 'linear-gradient(#e5e7eb 1px, transparent 1px), linear-gradient(90deg, #e5e7eb 1px, transparent 1px)',
             backgroundSize: '40px 40px'
           }}>
      </div>
      
      {/* Radial Gradient overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#F9FAFB] via-transparent to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          <motion.div 
            className="flex-1 text-right"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.span 
              className="inline-block px-3 py-1 bg-blue-100 text-primary rounded-full text-sm font-semibold mb-6"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              إدارة منتجات • إدارة مشاريع • ذكاء اصطناعي
            </motion.span>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-normal mb-6">
              مدير منتجات تقنية <br/>
              <span className="text-primary block mt-2">ومُمكّن للذكاء الاصطناعي</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mb-10">
              حلقة وصل بين متطلبات الأعمال والتنفيذ التقني. أقود فرق العمل بمرونة (Agile) لبناء منتجات ناجحة، وأساعد الأفراد والمنشآت على توظيف أدوات الذكاء الاصطناعي لرفع الإنتاجية.
            </p>

            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <button 
                onClick={onContactClick}
                className="group flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-lg text-lg font-medium shadow-lg shadow-blue-500/30 hover:shadow-xl hover:bg-blue-700 transition-all transform hover:-translate-y-1"
              >
                <span>تواصل معي</span>
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </motion.div>

          <motion.div 
            className="flex-1 w-full max-w-md md:max-w-full relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative aspect-square md:aspect-[4/5] w-full rounded-2xl overflow-hidden shadow-2xl bg-gray-100">
              <img 
                src="https://picsum.photos/seed/umar_tahir/800/1000" 
                alt="عمر طاهر علي" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              
              <div className="absolute bottom-6 right-6 left-6 text-white text-right">
                <p className="text-sm font-medium opacity-90">مدير منتجات</p>
                <p className="font-bold text-lg">بناء المستقبل الرقمي</p>
              </div>
            </div>

            {/* Floating Badge */}
            <motion.div 
              className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-gray-100 hidden md:block"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-500">خبرة في</p>
                  <p className="font-bold text-gray-900">تمكين الذكاء الاصطناعي</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;