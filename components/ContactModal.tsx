import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Check, Copy, ExternalLink } from 'lucide-react';

// Custom WhatsApp Icon
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  customMessage?: string;
  t: {
    title: string;
    subtitle: string;
  };
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose, t, customMessage }) => {
  const [copied, setCopied] = useState(false);
  const phoneNumber = '966552038349';
  const email = 'info@umarali.cc';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(customMessage || '')}`;

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-gray-900/60 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative bg-white w-full max-w-lg rounded-[2.5rem] shadow-2xl overflow-hidden border border-white"
          >
            {/* Header with Decorative Background */}
            <div className="relative p-8 md:p-10 bg-gradient-to-br from-blue-50 via-white to-transparent overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 blur-3xl"></div>
              
              <button
                onClick={onClose}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/80 border border-gray-100 text-gray-400 hover:text-primary transition-all shadow-sm z-10"
              >
                <X size={20} />
              </button>

              <div className="relative z-10 text-center">
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 border border-green-100 text-green-600 text-[10px] font-bold uppercase tracking-wider mb-4"
                >
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                  Available Now
                </motion.div>
                
                <h3 className="text-3xl font-bold text-gray-900 mb-2 leading-tight">
                  {t.title}
                </h3>
                <p className="text-gray-500 text-base md:text-lg max-w-sm mx-auto">
                  {t.subtitle}
                </p>
              </div>
            </div>

            {/* Action Cards */}
            <div className="p-6 md:p-8 space-y-4">
              {/* WhatsApp Card */}
              <motion.a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group flex items-center justify-between p-5 rounded-3xl bg-green-500 text-white shadow-lg shadow-green-500/20 transition-all border border-green-400"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-white/20 p-3 rounded-2xl backdrop-blur-sm group-hover:bg-white group-hover:text-green-600 transition-colors">
                    <WhatsAppIcon className="w-8 h-8" />
                  </div>
                  <div className="text-start">
                    <p className="font-bold text-xl leading-none mb-1">WhatsApp</p>
                    <p className="text-sm font-medium opacity-80" dir="ltr">+966 55 203 8349</p>
                  </div>
                </div>
                <div className="bg-white/20 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all">
                  <ExternalLink size={18} />
                </div>
              </motion.a>

              {/* Email Card */}
              <div className="group relative flex items-center justify-between p-5 rounded-3xl bg-gray-50 border border-gray-100 hover:bg-white hover:border-primary/30 transition-all hover:shadow-xl hover:shadow-blue-500/5">
                <div className="flex items-center gap-4">
                  <div className="bg-blue-50 p-3 rounded-2xl text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <Mail className="w-8 h-8" />
                  </div>
                  <div className="text-start">
                    <p className="font-bold text-xl leading-none mb-1 text-gray-900">Email</p>
                    <p className="text-sm font-medium text-gray-500 truncate max-w-[150px] md:max-w-none">info@umarali.cc</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <button 
                    onClick={copyEmail}
                    className="p-3 rounded-xl bg-white border border-gray-100 text-gray-400 hover:text-primary hover:border-primary/50 transition-all shadow-sm"
                    title="Copy Email"
                  >
                    {copied ? <Check size={18} className="text-green-500" /> : <Copy size={18} />}
                  </button>
                  <a 
                    href={`mailto:${email}`}
                    className="p-3 rounded-xl bg-primary text-white hover:bg-blue-700 transition-all shadow-md shadow-blue-500/10"
                    title="Send Email"
                  >
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>
            </div>

            {/* Footer Text */}
            <div className="px-8 pb-8 text-center">
              <p className="text-xs text-gray-400 font-medium tracking-wide">
                LET'S TURN YOUR VISION INTO REALITY
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;