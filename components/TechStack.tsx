
import React from 'react';
import { motion } from 'framer-motion';

interface Tool {
  name: string;
  iconUrl: string;
  hideLabel?: boolean;
}

const tools: Tool[] = [
  // Productivity & PM
  { name: 'Jira', iconUrl: 'https://cdn.simpleicons.org/jira/0052CC' },
  { name: 'Trello', iconUrl: 'https://cdn.simpleicons.org/trello/0079BF' },
  { name: 'Slack', iconUrl: 'https://cdn.simpleicons.org/slack/4A154B' },
  { name: 'Microsoft 365', iconUrl: 'https://api.iconify.design/logos:microsoft-icon.svg' },
  { name: 'Google Workspace', iconUrl: 'https://api.iconify.design/logos:google-workspace.svg', hideLabel: true },
  { name: 'Miro', iconUrl: 'https://cdn.simpleicons.org/miro/050038' },
  
  // Design
  { name: 'Figma', iconUrl: 'https://cdn.simpleicons.org/figma/F24E1E' },
  { name: 'Photoshop', iconUrl: 'https://api.iconify.design/logos:adobe-photoshop.svg' },
  { name: 'Illustrator', iconUrl: 'https://api.iconify.design/logos:adobe-illustrator.svg' },
  { name: 'InDesign', iconUrl: 'https://api.iconify.design/logos:adobe-indesign.svg' },

  // AI Platforms (Sequential)
  { name: 'ChatGPT', iconUrl: 'https://api.iconify.design/logos:openai-icon.svg' },
  { name: 'Claude', iconUrl: 'https://cdn.simpleicons.org/claude/D97757' },
  { name: 'Perplexity', iconUrl: 'https://cdn.simpleicons.org/perplexity/20B2AA' },
  { name: 'Google AI Studio', iconUrl: 'https://www.gstatic.com/lamda/images/gemini_sparkle_v002_d4735304ff6292a690345.svg' },
  
  // Automation & Dev
  { name: 'n8n', iconUrl: 'https://cdn.simpleicons.org/n8n/EA4B71' },
  { name: 'Firebase', iconUrl: 'https://cdn.simpleicons.org/firebase/FFCA28' },
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
                width="32"
                height="32"
                loading="lazy"
                decoding="async"
                className="h-6 md:h-8 w-auto object-contain transition-transform group-hover:scale-110" 
              />
              {!tool.hideLabel && (
                <span className="text-sm md:text-base font-semibold text-gray-700 whitespace-nowrap">
                  {tool.name}
                </span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
