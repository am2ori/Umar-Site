import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail } from 'lucide-react';

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
  const phoneNumber = '966552038349';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(customMessage || '')}`;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[60]"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-0 z-[70] flex items-center justify-center p-4 pointer-events-none"
          >
            <div className="bg-white rounded-[2.5rem] shadow-2xl w-full max-w-md pointer-events-auto overflow-hidden">
              <div className="p-8 md:p-10 relative">
                <button
                  onClick={onClose}
                  className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 transition-colors bg-gray-50 rounded-full p-2"
                >
                  <X size={20} />
                </button>

                <div className="text-center mb-10">
                  <h3 className="text-3xl font-bold text-gray-900 mb-3">{t.title}</h3>
                  <p className="text-gray-600 text-lg">{t.subtitle}</p>
                </div>

                <div className="space-y-5">
                  {/* WhatsApp */}
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-5 p-5 rounded-2xl bg-green-50 text-green-700 hover:bg-green-100 transition-all group border border-green-100/50 shadow-sm"
                  >
                    <div className="bg-white p-3 rounded-xl shadow-sm group-hover:scale-110 transition-transform">
                      <WhatsAppIcon className="w-8 h-8" />
                    </div>
                    <div className="text-end flex-1">
                      <p className="font-bold text-xl mb-0.5">WhatsApp</p>
                      <p className="text-sm font-medium opacity-80 leading-none" dir="ltr">+966 55 203 8349</p>
                    </div>
                  </a>

                  {/* Email */}
                  <a
                    href="mailto:info@umarali.cc"
                    className="flex items-center gap-5 p-5 rounded-2xl bg-blue-50 text-blue-700 hover:bg-blue-100 transition-all group border border-blue-100/50 shadow-sm"
                  >
                    <div className="bg-white p-3 rounded-xl shadow-sm group-hover:scale-110 transition-transform">
                      <Mail className="w-8 h-8" />
                    </div>
                    <div className="text-end flex-1">
                      <p className="font-bold text-xl mb-0.5">Email</p>
                      <p className="text-sm font-medium opacity-80 leading-none">info@umarali.cc</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;