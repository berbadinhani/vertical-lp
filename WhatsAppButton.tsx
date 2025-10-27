import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';

const WhatsAppButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsClick = () => {
    window.open('https://wa.me/5541991961700?text=Oi!%20Vim%20do%20site.%20Quero%20falar%20com%20um%20especialista.', '_blank');
  };

  if (!isVisible) return null;

  return (
    <>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#20BA5A] transition-all duration-300 hover:scale-110"
        aria-label="WhatsApp"
      >
        {isExpanded ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageCircle className="w-6 h-6" />
        )}
      </button>

      {isExpanded && (
        <div className="fixed bottom-24 right-6 z-50 bg-white shadow-2xl rounded-lg p-6 max-w-xs animate-fade-in">
          <h3 className="font-medium text-lg mb-2">Fale conosco!</h3>
          <p className="text-gray-600 text-sm mb-4">
            Tire suas dúvidas com nossos especialistas. Estamos prontos para atender você.
          </p>
          <button
            onClick={handleWhatsClick}
            className="w-full inline-flex items-center justify-center px-4 py-3 bg-[#25D366] text-white font-medium hover:bg-[#20BA5A] transition-all duration-300"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Iniciar conversa
          </button>
        </div>
      )}
    </>
  );
};

export default WhatsAppButton;
