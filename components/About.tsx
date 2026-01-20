import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, ShieldCheck, Lightbulb, Activity } from 'lucide-react';

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
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="about" className="py-16 md:py-24 bg-[#F9FAFB] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 lg:gap-20 items-center">
          
          {/* Visual Side */}
          <motion.div
            className="relative order-1 lg:order-1 h-[350px] md:h-[500px] w-full"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
             <div className="relative rounded-[2rem] overflow-hidden shadow-2xl shadow-blue-900/10 border border-white/50 group h-full">
                {/* Image: Abstract Growth/Pathway */}
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop" 
                  alt="Business Meeting Strategy" 
                  className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-1000 ease-out"
                />
                
                {/* Elegant Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-900/20 to-transparent"></div>
                
                {/* Floating Badge */}
                <div className="absolute bottom-6 right-6 md:bottom-8 md:right-8 bg-white/95 backdrop-blur px-4 py-3 md:px-6 md:py-4 rounded-2xl shadow-lg border border-white/20">
                   <div className="flex items-center gap-3">
                      <div className="p-2 bg-blue-50 rounded-lg">
                        <Activity className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                      </div>
                      <div>
                        <p className="text-[10px] md:text-xs text-gray-500 font-bold uppercase tracking-wider">التركيز على</p>
                        <p className="text-gray-900 font-bold text-base md:text-lg">نتائج الأعمال</p>
                      </div>
                   </div>
                </div>
             </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            className="order-2 lg:order-2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          >
            <span className="text-primary font-bold tracking-wider text-sm uppercase mb-3 block">الرؤية والمسار</span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              سد الفجوة بين <br/>
              <span className="text-gray-400">لغة الأعمال والتقنية</span>
            </h2>
            
            <div className="space-y-4 md:space-y-6 text-base md:text-lg text-gray-600 leading-loose mb-8 md:mb-10">
              <p>
                مشكلة معظم المشاريع التقنية ليست في الكود، بل في غياب الفهم التجاري. دوري هو ضمان أن كل سطر برمجي وكل خوارزمية ذكاء اصطناعي تخدم هدفاً ربحياً وتشغيلياً للمنشأة.
              </p>
            </div>

            <motion.div 
              className="flex flex-col gap-3"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                { 
                    icon: <TrendingUp className="w-5 h-5" />, 
                    label: "فهم احتياجات الأعمال", 
                    desc: "التقنية وسيلة لتحقيق الأهداف وليست غاية." 
                },
                { 
                    icon: <ShieldCheck className="w-5 h-5" />, 
                    label: "قيادة استباقية", 
                    desc: "توقع المخاطر ومعالجتها مبكراً." 
                },
                { 
                    icon: <Lightbulb className="w-5 h-5" />, 
                    label: "ابتكار واقعي", 
                    desc: "حلول ذكية قابلة للتطبيق بعيداً عن التعقيد." 
                },
              ].map((item, idx) => (
                <motion.div 
                  key={idx} 
                  variants={itemVariants}
                  className="flex items-center gap-4 p-3 rounded-xl hover:bg-white hover:shadow-sm transition-all border border-transparent hover:border-gray-100"
                >
                  <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-blue-50 text-primary rounded-lg">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-base md:text-lg">{item.label}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
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