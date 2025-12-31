import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const QuoteSection: React.FC = () => {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
        {/* Subtle decorative background elements */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-50/50 rounded-full blur-3xl opacity-60 pointer-events-none"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-gray-50/80 rounded-full blur-3xl opacity-60 pointer-events-none"></div>

        <div className="max-w-5xl mx-auto px-4 relative z-10">
            <motion.div
                className="flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: "easeOut" }}
            >
                <div className="mb-8 p-4 bg-blue-50 rounded-full text-primary/80">
                    <Quote size={32} className="rotate-180" />
                </div>
                
                <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-loose md:leading-relaxed font-sans tracking-tight">
                    "أؤمن بأن الذكاء الاصطناعي ليس مجرد أداة،<br className="hidden md:block" /> بل شريك في الابتكار."
                </h2>
                
                <div className="mt-12 w-24 h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent rounded-full"></div>
            </motion.div>
        </div>
    </section>
  );
};

export default QuoteSection;