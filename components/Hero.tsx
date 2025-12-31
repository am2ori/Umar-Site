import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

interface HeroProps {
  onContactClick: () => void;
}

const LiveDataFlow = () => {
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
    { text: "استراتيجية المنتجات", x: "10%", y: "15%", delay: 0, color: "bg-blue-50 border-blue-100 text-primary" },
    { text: "تجربة المستخدم", x: "70%", y: "10%", delay: 1, color: "bg-white border-gray-100 text-gray-600" },
    { text: "التحول الرقمي", x: "65%", y: "80%", delay: 2, color: "bg-white border-gray-100 text-gray-600" },
    { text: "نماذج اللغة الكبيرة", x: "5%", y: "75%", delay: 3, color: "bg-primary text-white shadow-blue-500/20" },
  ];

  return (
    <div className="w-full h-full min-h-[500px] flex items-center justify-center relative bg-gradient-to-br from-white/60 to-blue-50/30 backdrop-blur-sm rounded-[2.5rem] border border-blue-50 shadow-2xl shadow-blue-100/50 p-6 overflow-hidden">
      
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
            className={`absolute px-4 py-2 rounded-xl shadow-sm border text-sm font-bold flex items-center gap-2 ${label.color}`}
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

const Hero: React.FC<HeroProps> = ({ onContactClick }) => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      {/* Background Grid Pattern - Much subtler opacity (0.05) */}
      <div className="absolute inset-0 z-0 pointer-events-none" 
           style={{
             backgroundImage: 'linear-gradient(#94a3b8 1px, transparent 1px), linear-gradient(90deg, #94a3b8 1px, transparent 1px)',
             backgroundSize: '60px 60px',
             opacity: 0.04
           }}>
      </div>
      
      {/* Soft luxurious gradients */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#F9FAFB] via-transparent to-[#F9FAFB]/80 z-0"></div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-50/40 to-transparent blur-3xl z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-16 lg:gap-24">
          
          <motion.div 
            className="flex-1 text-right"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.span 
              className="inline-block px-5 py-2 bg-blue-50/80 border border-blue-100 text-primary rounded-full text-sm font-bold mb-8 tracking-wide"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              استراتيجية • ابتكار • ذكاء اصطناعي
            </motion.span>
            
            {/* Typography Fix: Added leading-relaxed (approx 1.625) to let Arabic text breathe */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-relaxed md:leading-relaxed mb-8">
              مدير منتجات تقنية <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-l from-primary to-blue-600">
                ومُمكّن للذكاء الاصطناعي
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-500 leading-loose max-w-2xl mb-12 font-medium">
              أصمم استراتيجيات المنتجات الرقمية التي تجمع بين احتياجات الإنسان وقوة الخوارزميات. رحلتي تهدف لتحويل التعقيد التقني إلى تجارب سلسة ونمو مستدام.
            </p>

            <motion.div 
              className="flex flex-wrap gap-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <button 
                onClick={onContactClick}
                className="group flex items-center justify-center gap-3 bg-primary text-white px-9 py-4 rounded-xl text-lg font-semibold shadow-xl shadow-blue-500/20 hover:shadow-2xl hover:bg-blue-700 transition-all transform hover:-translate-y-1"
              >
                <span>تواصل معي</span>
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </motion.div>

          {/* Hero Visual */}
          <motion.div 
            className="flex-1 w-full max-w-lg lg:max-w-xl h-[500px]"
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
          >
            <LiveDataFlow />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;