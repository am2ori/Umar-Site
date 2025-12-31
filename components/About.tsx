import React from 'react';
import { motion } from 'framer-motion';
import { Box, Zap, Cpu, TrendingUp } from 'lucide-react';

const About: React.FC = () => {
  // Stagger variants for list items
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="about" className="py-32 bg-[#F9FAFB] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Visual Side - Swapped to appear on Right in RTL Grid (First in DOM) */}
          <motion.div
            className="relative order-1 lg:order-1"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
             <div className="relative rounded-[2rem] overflow-hidden shadow-2xl shadow-blue-900/10 border border-white/50 group h-full max-h-[600px]">
                {/* Image: Abstract Growth/Pathway */}
                <img 
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop" 
                  alt="Future Growth Pathway" 
                  className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-1000 ease-out"
                />
                
                {/* Elegant Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 via-transparent to-transparent"></div>
                
                {/* Floating Badge */}
                <div className="absolute bottom-8 right-8 bg-white/95 backdrop-blur px-6 py-4 rounded-2xl shadow-lg border border-white/20">
                   <div className="flex items-center gap-3">
                      <div className="p-2 bg-green-50 rounded-lg">
                        <TrendingUp className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">النمو المستمر</p>
                        <p className="text-gray-900 font-bold text-lg">رؤية للمستقبل</p>
                      </div>
                   </div>
                </div>
             </div>
          </motion.div>

          {/* Text Content - Swapped to appear on Left in RTL Grid (Second in DOM) */}
          <motion.div
            className="order-2 lg:order-2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          >
            <span className="text-primary font-bold tracking-wider text-sm uppercase mb-4 block">الرؤية والمسار</span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
              بناء الجسور بين <br/>
              <span className="text-gray-400">الحاضر والمستقبل</span>
            </h2>
            
            <div className="space-y-8 text-lg text-gray-600 leading-loose">
              <p>
                بصفتي مديراً للمشاريع التقنية وممارساً لمنهجيات الأجايل (Agile)، أقف في المنطقة الوسطى بين متطلبات الأعمال والتنفيذ التقني. شغفي ليس مجرد التخطيط، بل قيادة الفرق لتحويل الأفكار إلى منتجات ملموسة بكفاءة عالية.
              </p>
              <p>
                أركز حالياً على دمج نماذج اللغة الكبيرة (LLMs) في صميم العمليات التجارية، مما يخلق فرصاً لا نهائية للأتمتة والابتكار. هدفي هو تمكين المنشآت من اتخاذ قرارات أذكى وأسرع.
              </p>
            </div>

            <motion.div 
              className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                { icon: <Zap className="w-6 h-6" />, label: "مرونة عالية" },
                { icon: <Box className="w-6 h-6" />, label: "منتجات قابلة للتوسع" },
                { icon: <Cpu className="w-6 h-6" />, label: "ذكاء اصطناعي مدمج" },
              ].map((item, idx) => (
                <motion.div 
                  key={idx} 
                  variants={itemVariants}
                  className="flex flex-col items-center p-6 bg-white rounded-2xl text-center shadow-sm hover:shadow-md transition-shadow border border-gray-100"
                >
                  <div className="text-primary mb-4 p-3 bg-blue-50 rounded-full">{item.icon}</div>
                  <span className="font-semibold text-gray-800">{item.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;