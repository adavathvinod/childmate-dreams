import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton: React.FC = () => {
  const phoneNumber = '919876543210';
  const message = encodeURIComponent('Hello! I would like to know more about Childmate Playschool admissions.');
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Chat on WhatsApp"
    >
      {/* Pulse Ring */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25"></span>
      
      {/* Button */}
      <div className="relative flex items-center gap-3 bg-[#25D366] text-white pl-4 pr-5 py-3 rounded-full shadow-elevated transition-all duration-300 hover:scale-105 hover:shadow-2xl">
        <MessageCircle className="w-6 h-6" />
        <span className="font-semibold hidden sm:inline">Chat with Principal</span>
      </div>
      
      {/* Tooltip for mobile */}
      <div className="sm:hidden absolute bottom-full right-0 mb-2 bg-foreground text-white text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        Chat with Principal
      </div>
    </a>
  );
};

export default WhatsAppButton;
