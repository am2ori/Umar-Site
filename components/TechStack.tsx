import React from 'react';
import { motion } from 'framer-motion';

interface Tool {
  name: string;
  iconUrl: string;
}

const tools: Tool[] = [
  { name: 'Jira', iconUrl: 'https://cdn.simpleicons.org/jira/0052CC' },
  { name: 'Trello', iconUrl: 'https://cdn.simpleicons.org/trello/0079BF' },
  { name: 'Slack', iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg' },
  { name: 'Miro', iconUrl: 'https://cdn.simpleicons.org/miro/050038' },
  { name: 'Figma', iconUrl: 'https://cdn.simpleicons.org/figma/F24E1E' },
  { name: 'ChatGPT', iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg' },
  { name: 'n8n', iconUrl: 'https://cdn.simpleicons.org/n8n/EA4B71' },
  { name: 'Firebase', iconUrl: 'https://cdn.simpleicons.org/firebase/FFCA28' },
  { name: 'Google AI Studio', iconUrl: 'https://www.gstatic.com/lamda/images/gemini_sparkle_v002_d4735304ff6292a690345.svg' },
  { name: 'GitHub', iconUrl: 'https://cdn.simpleicons.org/github/181717' },
];

interface TechStackProps {
  t: {
    title: string;
  };
}

const TechStack: React.FC<TechStackProps> = ({ t }) => {
  return (
    <section className="py-12 md:py-16 bg-[#F9FAFB] border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 mb-8 md:mb-10 text-center">
        <h2 className="text-base md:text-lg text-gray-500 font-medium tracking-wide">{t.title}</h2>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        {/* Adjusted gap and sizes to be smaller and more compact */}
        <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-6 md:gap-x-12">
          {tools.map((tool, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, duration: 0.4 }}
              className="flex items-center gap-2.5 opacity-70 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-300 cursor-default select-none group"
            >
              <img 
                src={tool.iconUrl} 
                alt={tool.name} 
                className="h-6 md:h-8 w-auto object-contain transition-transform group-hover:scale-110" 
              />
              <span className="text-sm md:text-base font-semibold text-gray-700 whitespace-nowrap">
                {tool.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;