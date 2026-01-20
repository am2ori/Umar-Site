import React from 'react';
import { motion } from 'framer-motion';
import { Search, Calendar, Sparkles, Rocket } from 'lucide-react';

const steps = [
  {
    title: 'التحليل والوضوح',
    desc: 'فهم عميق للمتطلبات وتحديد الأهداف بدقة.',
    icon: <Search className="w-6 h-6" />,
    step: '01'
  },
  {
    title: 'التخطيط المرن',
    desc: 'تجزئة المشروع إلى مهام قابلة للتنفيذ (Sprints).',
    icon: <Calendar className="w-6 h-6" />,
    step: '02'
  },
  {
    title: 'التنفيذ المعزز بالذكاء الاصطناعي',
    desc: 'دمج قدرات الذكاء الاصطناعي لاختصار الوقت ورفع جودة المخرجات.',
    icon: <Sparkles className="w-6 h-6" />,
    step: '03'
  },
  {
    title: 'التسليم والتحسين',
    desc: 'إطلاق المنتج ومراقبة الأداء لضمان التطوير المستمر.',
    icon: <Rocket className="w-6 h-6" />,
    step: '04'
  }
];

const Methodology: React.FC = () => {
  return (
    <section id="methodology" className="py-16 md:py-24 bg-gradient-to-b from-white via-blue-50/20 to-white relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10 md:mb-16">
          <motion.h2 
            className="text-3xl md:text-5xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            منهجيتي في العمل
          </motion.h2>
          <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto">
            عملية مدروسة تمزج بين الانضباط والتكنولوجيا
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-8 left-0 right-0 h-1 bg-gray-100 rounded-full overflow-hidden">
             <motion.div 
               className="h-full bg-gradient-to-l from-primary to-blue-300 origin-right"
               initial={{ scaleX: 0 }}
               whileInView={{ scaleX: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 1.5, ease: "easeInOut" }}
             />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="relative z-10 flex flex-col items-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + (index * 0.2), duration: 0.5 }}
              >
                {/* Step Indicator (Circle) */}
                <div className="hidden lg:flex w-16 h-16 rounded-full bg-white border-[3px] border-gray-100 text-primary font-bold text-xl items-center justify-center mb-8 shadow-sm z-10 transition-colors duration-300 hover:border-primary hover:bg-blue-50">
                  {step.step}
                </div>

                {/* Card */}
                <div className="w-full bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl hover:border-blue-200/50 transition-all duration-300 group h-full hover:-translate-y-1">
                   {/* Layout: Icon + Title */}
                   <div className="flex flex-row lg:flex-col items-center lg:items-start gap-4 mb-4">
                      {/* Icon */}
                      <div className="p-3 rounded-xl bg-blue-50 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                        {step.icon}
                      </div>
                      
                      {/* Mobile Step Indicator */}
                      <span className="lg:hidden text-2xl font-bold text-gray-100 mr-auto">
                        {step.step}
                      </span>
                   </div>
                   
                   <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                   <p className="text-gray-600 text-sm leading-relaxed">
                     {step.desc}
                   </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Methodology;