
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpLeft, Mail } from 'lucide-react';
import { Project } from '../types';

interface PortfolioProps {
  onContactClick: () => void;
  t: {
    title: string;
    projects: Project[];
    cta: {
      title: string;
      sub: string;
      button: string;
      visit: string;
    };
  };
}

const Portfolio: React.FC<PortfolioProps> = ({ onContactClick, t }) => {
  return (
    <section id="portfolio" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-8 md:mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">{t.title}</h2>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-16 md:mb-24">
          {t.projects.map((project, index) => (
            <motion.div 
              key={project.id}
              className="group bg-white rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 p-6 md:p-8 flex flex-col relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-blue-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="flex justify-between items-start mb-6">
                 <div className="bg-white border border-gray-100 shadow-sm rounded-2xl p-3 w-16 h-16 md:w-20 md:h-20 flex items-center justify-center group-hover:shadow-md transition-shadow">
                    <img 
                        src={project.imageUrl} 
                        alt={project.title} 
                        loading="lazy"
                        decoding="async"
                        width="80"
                        height="80"
                        className="w-full h-full object-contain"
                    />
                 </div>

                 <span className="bg-blue-50 text-primary text-[10px] md:text-xs font-bold px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-blue-100 mt-1">
                    {project.role}
                 </span>
              </div>

              <div className="flex flex-col flex-grow">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-6 text-sm md:text-base">
                  {project.description}
                </p>
                
                <div className="mt-auto pt-6 border-t border-gray-50 flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                        {project.tags.slice(0, 3).map(tag => (
                            <span key={tag} className="text-[10px] md:text-xs font-medium text-gray-600 bg-gray-50 px-2.5 py-1.5 rounded-lg">
                            #{tag}
                            </span>
                        ))}
                    </div>
                    
                    <a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-primary transition-colors px-2"
                    >
                        <span>{t.cta.visit}</span>
                        <ArrowUpLeft className="w-4 h-4 rtl:rotate-90" />
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
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
            <div className="text-start max-w-2xl">
              <h2 className="text-xl md:text-3xl font-bold text-white mb-2 md:mb-3">{t.cta.title}</h2>
              <p className="text-gray-400 text-sm md:text-lg">{t.cta.sub}</p>
            </div>
            
            <button 
              onClick={onContactClick}
              className="whitespace-nowrap inline-flex items-center justify-center gap-2 bg-primary hover:bg-blue-600 text-white px-6 py-3 md:px-8 md:py-4 rounded-xl font-bold transition-all shadow-lg w-full md:w-auto hover:-translate-y-1"
            >
              <Mail className="w-5 h-5" />
              {t.cta.button}
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
