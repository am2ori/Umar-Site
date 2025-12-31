import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpLeft, Layers, CreditCard, Mail } from 'lucide-react';
import { Project } from '../types';

const featuredProjects: Project[] = [
  {
    id: 'easypay',
    title: 'إيزي باي (Easypay)',
    role: 'استراتيجية ونمو',
    description: 'الحل الأمثل لأتمتة أنظمة المبيعات والربط السلس مع مزودي خدمات المدفوعات لتعزيز كفاءة العمليات المالية.',
    tags: ['Fintech', 'استراتيجية', 'تطوير أعمال'],
    imageUrl: "https://easypay.sa/wp-content/uploads/2024/09/EasyPay-Logo-01.png",
    link: "https://easypay.sa",
    highlight: true,
  },
  {
    id: 'webdoor',
    title: 'ويب دور (Webdoor)',
    role: 'مؤسس مشارك',
    description: 'منصة تساعدك في إنشاء الموقع الإلكتروني الخاص بك بخطوات سهلة و بواجهات عربية وحلول عملية بدون خبير تقني!',
    tags: ['SaaS', 'إدارة منتجات', 'نمو'],
    imageUrl: 'https://webdoor.site/wp-content/uploads/2024/03/Webdoor-Logo-Original-ar-en.png',
    link: "https://webdoor.site",
    highlight: true,
  }
];

interface PortfolioProps {
  onContactClick: () => void;
}

const Portfolio: React.FC<PortfolioProps> = ({ onContactClick }) => {
  return (
    <section id="portfolio" className="py-24 bg-[#F9FAFB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">أعمالي ومشاريعي</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            مزيج من بناء الشركات وابتكارات الذكاء الاصطناعي
          </p>
        </div>

        {/* Featured Projects (Easypay & Webdoor) */}
        <div className="space-y-12 mb-24">
          {featuredProjects.map((project, index) => (
            <motion.div 
              key={project.id}
              className={`flex flex-col lg:flex-row gap-8 lg:gap-12 items-center bg-white rounded-3xl p-6 lg:p-10 shadow-sm border border-gray-100 overflow-hidden ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              {/* Logo/Image Side */}
              <div className="w-full lg:w-1/2 h-full">
                <div className="relative group overflow-hidden rounded-2xl h-64 bg-gray-50 border border-gray-100 flex items-center justify-center p-8">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>

              {/* Content Side */}
              <div className="w-full lg:w-1/2 text-right">
                <div className="flex items-center gap-2 mb-4">
                  <span className="p-2 bg-blue-50 rounded-lg text-primary">
                    {project.id === 'webdoor' ? <Layers size={24} /> : <CreditCard size={24} />}
                  </span>
                  <span className="text-sm font-bold text-primary tracking-wider uppercase">{project.role}</span>
                </div>
                
                <h3 className="text-3xl font-bold text-gray-900 mb-4">{project.title}</h3>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                <a 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-fit items-center gap-2 text-primary font-semibold hover:gap-3 transition-all group border-b-2 border-transparent hover:border-primary pb-1"
                >
                  زيارة الموقع
                  <ArrowUpLeft className="w-5 h-5 group-hover:-translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Card (Unified Contact Button) */}
        <motion.div 
          className="bg-gray-900 rounded-3xl p-8 md:p-16 text-center md:text-right relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          {/* Decorative gradients */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/20 blur-3xl rounded-full translate-y-1/2 -translate-x-1/2"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">لنصنع شيئاً استثنائياً معاً</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                هل تبحث عن استراتيجية منتج ناجحة أو دمج حلول الذكاء الاصطناعي في أعمالك؟ تواصل معي اليوم.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <button 
                onClick={onContactClick}
                className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-blue-600 text-white px-10 py-4 rounded-xl font-medium transition-all transform hover:-translate-y-1 shadow-lg shadow-blue-900/50 w-full sm:w-auto"
              >
                <Mail className="w-5 h-5" />
                تواصل معي
              </button>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Portfolio;