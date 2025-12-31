import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Box, Zap, Cpu } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              رؤيتي ومسيرتي
            </h2>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                بصفتي مديراً للمشاريع التقنية وممارساً لمنهجيات الأجايل (Agile)، أقف في المنطقة الوسطى بين متطلبات الأعمال والتنفيذ التقني. شغفي ليس مجرد التخطيط، بل قيادة الفرق لتحويل الأفكار إلى منتجات ملموسة بكفاءة عالية.
              </p>
              <p>
                خلال رحلتي في Webdoor و Easypay، ركزت على ضبط مسار العمل وتسهيل التواصل بين الفرق لضمان إطلاق حلول تقنية ناجحة. لذا أركز على دمج تطبيقات الذكاء الاصطناعي في سير العمل اليومي لتمكين الأفراد والشركات من العمل بذكاء أكبر، لا بجهد أكثر.
              </p>
            </div>

            {/* Companies Logos */}
            <div className="mt-10 flex flex-wrap items-center gap-8 opacity-100">
               <img 
                src="https://easypay.sa/wp-content/uploads/2024/09/EasyPay-Logo-01.png"
                alt="Easypay" 
                className="h-12 md:h-14 w-auto object-contain"
              />
              <img 
                src="https://webdoor.site/wp-content/uploads/2024/03/Webdoor-Logo-Original-ar-en.png" 
                alt="Webdoor" 
                className="h-10 md:h-12 w-auto object-contain"
              />
            </div>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { icon: <Zap className="w-6 h-6" />, label: "إدارة المشاريع الرشيقة" },
                { icon: <Box className="w-6 h-6" />, label: "تطوير المنتجات" },
                { icon: <Cpu className="w-6 h-6" />, label: "تمكين الذكاء الاصطناعي" },
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col items-center p-4 bg-surface rounded-lg text-center hover:bg-blue-50 transition-colors">
                  <div className="text-primary mb-3">{item.icon}</div>
                  <span className="font-medium text-gray-800">{item.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Expressive Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
             <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop" 
                  alt="Team collaboration and strategy" 
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
             </div>
          </motion.div>
        </div>

        {/* Full Width Quote Section */}
        <motion.div
            className="relative w-full max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative bg-gradient-to-br from-surface to-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
              <Quote className="w-16 h-16 text-primary/20 mb-6 mx-auto rotate-180" />
              <blockquote className="text-2xl md:text-4xl font-bold text-gray-900 leading-snug">
                "أؤمن أن الذكاء الاصطناعي ليس مجرد أداة، بل شريك يضاعف إمكانياتنا البشرية ويفتح آفاقاً جديدة للإبداع وحل المشكلات."
              </blockquote>
            </div>
          </motion.div>

      </div>
    </section>
  );
};

export default About;