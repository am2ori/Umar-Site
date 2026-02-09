
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Language } from '../types';

interface HeroProps {
  onContactClick: () => void;
  lang: Language;
  t: {
    badge: string;
    rolePrefix: string;
    roleSuffix: string;
    subtext: string;
    cta: string;
    cert1: string;
    cert2: string;
    nodes: string[];
  };
}

const LiveDataFlow = ({ labels, isRTL }: { labels: string[], isRTL: boolean }) => {
  // SVG nodes layout - Fixed positions for the background visual
  const nodes = [
    { id: 'start', x: 50, y: 250, r: 5 },
    { id: 'p1', x: 150, y: 150, r: 4 },
    { id: 'p2', x: 150, y: 350, r: 4 },
    { id: 'hub', x: 300, y: 250, r: 10 },
    { id: 'e1', x: 450, y: 100, r: 4 },
    { id: 'e2', x: 450, y: 250, r: 4 },
    { id: 'e3', x: 450, y: 400, r: 4 },
  ];

  const links = [
    { from: 'start', to: 'p1' },
    { from: 'start', to: 'p2' },
    { from: 'p1', to: 'hub' },
    { from: 'p2', to: 'hub' },
    { from: 'hub', to: 'e1' },
    { from: 'hub', to: 'e2' },
    { from: 'hub', to: 'e3' },
  ];

  // Specific spatial configuration for cards based on language
  // Ordered as: 0: Project Management, 1: Business Consulting, 2: Digital Transformation, 3: AI Tools
  const floatingLabels = isRTL ? [
    // Arabic (RTL) Layout - Keep as is per user request
    { text: labels[0], x: "10%", y: "15%", delay: 0, color: "bg-blue-50 border-blue-100 text-primary" },
    { text: labels[1], x: "70%", y: "10%", delay: 0.5, color: "bg-white border-gray-100 text-gray-600 shadow-sm" },
    { text: labels[2], x: "65%", y: "80%", delay: 1, color: "bg-white border-gray-100 text-gray-600 shadow-sm" },
    { text: labels[3], x: "5%", y: "75%", delay: 1.5, color: "bg-primary text-white shadow-lg" },
  ] : [
    // English (LTR) Optimized Layout - Perfectly aligned Quadrants
    { text: labels[0], x: "5%", y: "15%", delay: 0, color: "bg-blue-50 border-blue-100 text-primary" },
    { text: labels[1], x: "65%", y: "12%", delay: 0.5, color: "bg-white border-gray-100 text-gray-600 shadow-sm" },
    { text: labels[2], x: "62%", y: "76%", delay: 1, color: "bg-white border-gray-100 text-gray-600 shadow-sm" },
    { text: labels[3], x: "8%", y: "82%", delay: 1.5, color: "bg-primary text-white shadow-lg shadow-primary/20" },
  ];

  return (
    <div className="w-full h-full min-h-[400px] md:min-h-[500px] flex items-center justify-center relative bg-white/40 backdrop-blur-sm rounded-[2rem] border border-blue-50 shadow-xl p-4 overflow-hidden">
      <svg viewBox="0 0 500 500" className="w-full h-full max-w-[500px] z-10 pointer-events-none">
        <defs>
          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#2563EB" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#2563EB" stopOpacity="0.3" />
          </linearGradient>
        </defs>

        {links.map((link, i) => {
          const start = nodes.find(n => n.id === link.from)!;
          const end = nodes.find(n => n.id === link.to)!;
          return (
            <g key={i}>
              <line x1={start.x} y1={start.y} x2={end.x} y2={end.y} stroke="url(#lineGrad)" strokeWidth="1.5" />
              <motion.circle 
                r="2.5" fill="#2563EB"
                initial={{ cx: start.x, cy: start.y, opacity: 0 }}
                animate={{ cx: [start.x, end.x], cy: [start.y, end.y], opacity: [0, 1, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear", delay: i * 0.5 }}
              />
            </g>
          );
        })}

        {nodes.map((node) => (
          <circle key={node.id} cx={node.x} cy={node.y} r={node.r} fill={node.id === 'hub' ? '#2563EB' : 'white'} stroke="#2563EB" strokeWidth="2" />
        ))}
      </svg>
      
      <div className="absolute inset-0 z-20 pointer-events-none">
        {floatingLabels.map((label, idx) => (
           <motion.div 
            key={idx}
            className={`absolute px-4 py-2.5 rounded-2xl shadow-sm border text-[10px] md:text-sm font-bold transition-all duration-300 whitespace-nowrap ${label.color}`}
            style={{ left: label.x, top: label.y }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1, y: [0, -6, 0] }}
            transition={{ opacity: { delay: 0.5 + idx * 0.2 }, y: { duration: 4, repeat: Infinity, ease: "easeInOut" } }}
          >
            {label.text}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const Hero: React.FC<HeroProps> = ({ onContactClick, t, lang }) => {
  const isRTL = lang === 'ar';
  
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center pt-24 pb-12 overflow-hidden bg-[#F9FAFB]">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-24">
          
          <motion.div 
            className={`flex-1 ${isRTL ? 'text-start' : 'text-start'}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="inline-block px-4 py-1.5 bg-blue-50/80 border border-blue-100 text-primary rounded-full text-xs font-bold mb-6">
              {t.badge}
            </span>
            
            <h1 className={`text-3xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-tight`}>
              {t.rolePrefix} <span className="text-primary">{t.roleSuffix}</span>
            </h1>
            
            <p className="text-base md:text-xl text-gray-500 leading-relaxed max-w-2xl mb-8 font-medium">
              {t.subtext}
            </p>

            <div className={`flex flex-row gap-4 md:gap-6 items-center mb-8 border-primary/20 ${isRTL ? 'border-r-4 pr-4' : 'border-l-4 pl-4'}`}>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-white rounded shadow-sm border border-gray-100 p-1">
                     <img 
                        src="https://drive.google.com/thumbnail?id=1bYOAafE1XRAvx93La2Xg-OFcqHkDAII0&sz=w100" 
                        alt="EMBA" 
                        width="32" height="32"
                        className="w-full h-full object-contain" 
                     />
                </div>
                <span className="text-xs font-semibold text-gray-700">{t.cert1}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-white rounded shadow-sm border border-gray-100 p-1">
                     <img 
                        src="https://drive.google.com/thumbnail?id=1joa-u67FNTN_vgIjcCsbTvo48-LnKvRy&sz=w100" 
                        alt="PMP" 
                        width="32" height="32"
                        className="w-full h-full object-contain" 
                     />
                </div>
                <span className="text-xs font-semibold text-gray-700">{t.cert2}</span>
              </div>
            </div>

            <button 
              onClick={onContactClick}
              className="flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-xl hover:bg-blue-700 transition-all w-full md:w-auto"
            >
              <span>{t.cta}</span>
              {isRTL ? <ArrowLeft className="w-5 h-5" /> : <ArrowRight className="w-5 h-5" />}
            </button>
          </motion.div>

          <motion.div 
            className="flex-1 w-full max-w-lg h-[350px] md:h-[450px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <LiveDataFlow labels={t.nodes} isRTL={isRTL} />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
