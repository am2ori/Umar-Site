import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpLeft, Mail, ExternalLink } from 'lucide-react';
import { Project } from '../types';

const featuredProjects: Project[] = [
  {
    id: 'easypay',
    title: 'إيزي باي (Easypay)',
    role: 'استراتيجية ونمو',
    description: 'الحل الأمثل لأتمتة أنظمة المبيعات والربط السلس مع مزودي خدمات المدفوعات.',
    tags: ['Fintech', 'استراتيجية', 'تطوير أعمال'],
    imageUrl: "https://easypay.sa/wp-content/uploads/2024/09/EasyPay-Logo-01.png",
    link: "https://easypay.sa",
    highlight: true,
  },
  {
    id: 'webdoor',
    title: 'ويب دور (Webdoor)',
    role: 'مؤسس مشارك',
    description: 'منصة تساعدك في إنشاء الموقع الإلكتروني الخاص بك بخطوات سهلة وواجهات عربية.',
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
    <section id="portfolio" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-8 md:mb-12 gap-4 md:gap-6">
            <div>
                <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">أعمالي ومشاريعي</h2>
            </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-16 md:mb-24">
          {featuredProjects.map((project, index) => (
            <motion.div 
              key={project.id}
              className="group bg-white rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 p-6 md:p-8 flex flex-col relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              {/* Subtle Background Pattern */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-blue-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-gray-50 rounded-bl-[4rem] -z-10 group-hover:scale-110 transition-transform duration-500 ease-out origin-top-right"></div>

              {/* Widget Header: Logo & Role */}
              <div className="flex justify-between items-start mb-6">
                 {/* Logo Container (Right/Start) */}
                 <div className="bg-white border border-gray-100 shadow-sm rounded-2xl p-3 w-16 h-16 md:w-20 md:h-20 flex items-center justify-center group-hover:shadow-md transition-shadow">
                    <img 
                        src={project.imageUrl} 
                        alt={project.title} 
                        className="w-full h-full object-contain"
                    />
                 </div>

                 {/* Role/Category Tag (Left/End) */}
                 <span className="bg-blue-50 text-primary text-[10px] md:text-xs font-bold px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-blue-100 mt-1">
                    {project.role}
                 </span>
              </div>

              {/* Card Content */}
              <div className="flex flex-col flex-grow">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-6 text-sm md:text-base">
                  {project.description}
                </p>
                
                {/* Footer: Tags & Action */}
                <div className="mt-auto pt-6 border-t border-gray-50 flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                        {project.tags.slice(0, 3).map(tag => (
                            <span key={tag} className="text-[10px] md:text-xs font-medium text-gray-500 bg-gray-50 px-2.5 py-1.5 rounded-lg">
                            #{tag}
                            </span>
                        ))}
                    </div>
                    
                    <a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-primary transition-colors pl-2"
                    >
                        <span>زيارة</span>
                        <ArrowUpLeft className="w-4 h-4" />
                    </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Unified CTA Card */}
        <motion.div 
          className="bg-gray-900 rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-12 text-center relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          {/* Decorative gradients */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[100px] rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/20 blur-[100px] rounded-full -translate-x-1/3 translate-y-1/3 pointer-events-none"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
            <div className="text-right max-w-2xl">
              <h2 className="text-xl md:text-3xl font-bold text-white mb-2 md:mb-3">جاهز لنقل مشروعك للمستوى التالي؟</h2>
              <p className="text-gray-400 text-sm md:text-lg">
                سواء كنت تبحث عن استراتيجية منتج أو حلول ذكاء اصطناعي، أنا هنا للمساعدة.
              </p>
            </div>
            
            <button 
              onClick={onContactClick}
              className="whitespace-nowrap inline-flex items-center justify-center gap-2 bg-primary hover:bg-blue-600 text-white px-6 py-3 md:px-8 md:py-4 rounded-xl font-bold transition-all shadow-lg shadow-blue-900/50 w-full md:w-auto hover:-translate-y-1"
            >
              <Mail className="w-5 h-5" />
              تواصل معي
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Portfolio;