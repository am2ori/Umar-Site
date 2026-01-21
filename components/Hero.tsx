import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Language } from '../types';

interface HeroProps {
  onContactClick: () => void;
  lang: Language;
  t: {
    badge: string;
    role: string;
    subtext: string;
    cta: string;
    cert1: string;
    cert2: string;
    nodes: string[];
  };
}

const LiveDataFlow = ({ labels }: { labels: string[] }) => {
  // Nodes configuration
  const nodes = [
    { id: 'start', x: 50, y: 250, r: 6 },
    { id: 'p1', x: 150, y: 150, r: 4 },
    { id: 'p2', x: 150, y: 350, r: 4 },
    { id: 'hub', x: 300, y: 250, r: 12 }, // Central Hub
    { id: 'e1', x: 450, y: 100, r: 4 },
    { id: 'e2', x: 450, y: 250, r: 4 },
    { id: 'e3', x: 450, y: 400, r: 4 },
  ];

  // Links configuration (from -> to)
  const links = [
    { from: 'start', to: 'p1' },
    { from: 'start', to: 'p2' },
    { from: 'p1', to: 'hub' },
    { from: 'p2', to: 'hub' },
    { from: 'hub', to: 'e1' },
    { from: 'hub', to: 'e2' },
    { from: 'hub', to: 'e3' },
    { from: 'p1', to: 'p2' }, // Cross link
  ];

  const floatingLabels = [
    { text: labels[0], x: "10%", y: "15%", delay: 0, color: "bg-blue-50 border-blue-100 text-primary" },
    { text: labels[1], x: "70%", y: "10%", delay: 1, color: "bg-white border-gray-100 text-gray-600" },
    { text: labels[2], x: "65%", y: "80%", delay: 2, color: "bg-white border-gray-100 text-gray-600" },
    { text: labels[3], x: "5%", y: "75%", delay: 3, color: "bg-primary text-white shadow-blue-500/20" },
  ];

  return (
    <div className="w-full h-full min-h-[400px] md:min-h-[500px] flex items-center justify-center relative bg-gradient-to-br from-white/60 to-blue-50/30 backdrop-blur-sm rounded-[2rem] md:rounded-[2.5rem] border border-blue-50 shadow-2xl shadow-blue-100/50 p-4 md:p-6 overflow-hidden">
      
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(37,99,235,0.03),transparent_70%)]"></div>

      <svg viewBox="0 0 500 500" className="w-full h-full max-w-[500px] z-10 pointer-events-none opacity-80">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#E5E7EB" stopOpacity="0.5" />
            <stop offset="50%" stopColor="#2563EB" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#E5E7EB" stopOpacity="0.5" />
          </linearGradient>
        </defs>

        {/* Connections */}
        {links.map((link, i) => {
          const start = nodes.find(n => n.id === link.from)!;
          const end = nodes.find(n => n.id === link.to)!;
          return (
            <g key={i}>
              <line 
                x1={start.x} y1={start.y} 
                x2={end.x} y2={end.y} 
                stroke="url(#lineGradient)" 
                strokeWidth="1.5" 
              />
              {/* Moving Particles */}
              <motion.circle 
                r="3" 
                fill="#2563EB"
                initial={{ cx: start.x, cy: start.y, opacity: 0 }}
                animate={{ 
                  cx: [start.x, end.x], 
                  cy: [start.y, end.y],
                  opacity: [0, 1, 0]
                }}
                transition={{ 
                  duration: 3 + (i * 0.3), // Slower, smoother
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: i * 0.8
                }}
              />
            </g>
          );
        })}

        {/* Nodes */}
        {nodes.map((node) => (
          <motion.g key={node.id}>
             {/* Pulse Ring */}
            <motion.circle
              cx={node.x} cy={node.y} r={node.r * 2}
              fill="#2563EB"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: [0, 0.15, 0], scale: [1, 1.5, 2] }}
              transition={{ duration: 4, repeat: Infinity, delay: Math.random() * 2 }}
            />
            {/* Core Node */}
            <circle 
              cx={node.x} cy={node.y} r={node.r} 
              fill={node.id === 'hub' ? '#2563EB' : '#FFFFFF'} 
              stroke="#2563EB" 
              strokeWidth="2" 
            />
          </motion.g>
        ))}
      </svg>
      
      {/* Updated Floating Labels Overlay */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        {floatingLabels.map((label, idx) => (
           <motion.div 
            key={idx}
            className={`absolute px-3 py-1.5 md:px-4 md:py-2 rounded-xl shadow-sm border text-[10px] md:text-sm font-bold flex items-center gap-2 ${label.color}`}
            style={{ left: label.x, top: label.y }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: [0, -8, 0] }}
            transition={{ 
              opacity: { duration: 0.8, delay: 0.5 + idx * 0.2 },
              y: { duration: 5 + idx, repeat: Infinity, ease: "easeInOut", delay: idx } 
            }}
          >
            {label.color.includes('bg-primary') && <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>}
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
    <section id="hero" className="relative min-h-screen flex items-center pt-28 pb-12 md:pt-32 md:pb-20 overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 z-0 pointer-events-none" 
           style={{
             backgroundImage: 'linear-gradient(#94a3b8 1px, transparent 1px), linear-gradient(90deg, #94a3b8 1px, transparent 1px)',
             backgroundSize: '60px 60px',
             opacity: 0.04
           }}>
      </div>
      
      {/* Soft luxurious gradients */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#F9FAFB] via-transparent to-[#F9FAFB]/80 z-0"></div>
      <div className={`absolute top-0 ${isRTL ? 'right-0' : 'left-0'} w-1/2 h-full bg-gradient-to-l from-blue-50/40 to-transparent blur-3xl z-0`}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-24">
          
          <motion.div 
            className="flex-1 text-start"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.span 
              className="inline-block px-4 py-1.5 md:px-5 md:py-2 bg-blue-50/80 border border-blue-100 text-primary rounded-full text-xs md:text-sm font-bold mb-6 tracking-wide"
              initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              {t.badge}
            </motion.span>
            
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight md:leading-tight mb-6 md:mb-8">
              {t.role}
            </h1>
            
            <p className="text-base md:text-xl text-gray-500 leading-relaxed max-w-2xl mb-8 font-medium">
              {t.subtext}
            </p>

            {/* TRUST BAR: Certifications */}
            <motion.div 
              className={`flex flex-row gap-4 md:gap-6 items-center mb-8 md:mb-10 ${isRTL ? 'border-r-4 pr-4 md:pr-6' : 'border-l-4 pl-4 md:pl-6'} border-primary/20`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {/* EMBA First */}
              <div className="flex items-center gap-2 md:gap-3 group">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-white rounded-lg shadow-sm border border-gray-100 flex items-center justify-center p-1.5 group-hover:scale-105 transition-transform">
                     <img 
                        src="https://drive.google.com/thumbnail?id=1bYOAafE1XRAvx93La2Xg-OFcqHkDAII0&sz=w200" 
                        alt="EMBA Logo" 
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-contain" 
                     />
                </div>
                <span className="text-xs md:text-sm font-semibold text-gray-700">{t.cert1}</span>
              </div>

              {/* Divider */}
              <div className="w-px h-6 md:h-8 bg-gray-200"></div>

              {/* PMP Second */}
              <div className="flex items-center gap-2 md:gap-3 group">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-white rounded-lg shadow-sm border border-gray-100 flex items-center justify-center p-1.5 group-hover:scale-105 transition-transform">
                     <img 
                        src="https://drive.google.com/thumbnail?id=1joa-u67FNTN_vgIjcCsbTvo48-LnKvRy&sz=w200" 
                        alt="PMP Logo" 
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-contain" 
                     />
                </div>
                <span className="text-xs md:text-sm font-semibold text-gray-700">{t.cert2}</span>
              </div>
            </motion.div>

            <motion.div 
              className="flex flex-wrap gap-4 md:gap-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <button 
                onClick={onContactClick}
                className="group flex items-center justify-center gap-2 md:gap-3 bg-primary text-white px-6 py-3 md:px-9 md:py-4 rounded-xl text-base md:text-lg font-semibold shadow-xl shadow-blue-500/20 hover:shadow-2xl hover:bg-blue-700 transition-all transform hover:-translate-y-1 w-full md:w-auto"
              >
                <span>{t.cta}</span>
                {isRTL ? 
                  <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" /> :
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                }
              </button>
            </motion.div>
          </motion.div>

          {/* Hero Visual */}
          <motion.div 
            className="flex-1 w-full max-w-lg lg:max-w-xl h-[400px] md:h-[500px]"
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
          >
            <LiveDataFlow labels={t.nodes} />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;