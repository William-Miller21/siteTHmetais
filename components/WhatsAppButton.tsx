import React from 'react';
import { WhatsAppIcon } from './Icons';

const WhatsAppButton: React.FC = () => {
  return (
    <a
      href="https://wa.me/5519981277727"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contatar via WhatsApp"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#128C7E] transition-all duration-300 transform hover:scale-110 animate-pulse"
    >
      <WhatsAppIcon className="w-8 h-8" />
    </a>
  );
};

export default WhatsAppButton;