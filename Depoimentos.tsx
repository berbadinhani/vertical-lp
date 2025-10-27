import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, MessageCircle } from 'lucide-react';

const Depoimentos: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % depoimentos.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  const depoimentos = [
    {
      texto: 'Atendimento excelente e instalação precisa. Ficou perfeito.',
      autor: 'Eliane M.',
      rating: 5
    },
    {
      texto: 'Tela solar resolveu o brilho no home office.',
      autor: 'Daniele R.',
      rating: 5
    },
    {
      texto: 'Blackout proprietária: quarto escuro de verdade.',
      autor: 'Edilmar D.',
      rating: 5
    },
    {
      texto: 'Equipe profissional e produto de altíssima qualidade. Recomendo!',
      autor: 'Roberto S.',
      rating: 5
    },
    {
      texto: 'A VF Teto transformou nossa varanda. Muito satisfeito!',
      autor: 'Marcela P.',
      rating: 5
    },
    {
      texto: 'Showroom impecável, atendimento personalizado. Vale cada centavo.',
      autor: 'Carlos E.',
      rating: 5
    }
  ];

  const handleWhatsClick = () => {
    window.open('https://wa.me/5541991961700?text=Oi!%20Vi%20os%20depoimentos%20e%20quero%20falar%20com%20vocês.', '_blank');
  };

  const nextDepoimento = () => {
    setCurrentIndex((prev) => (prev + 1) % depoimentos.length);
  };

  const prevDepoimento = () => {
    setCurrentIndex((prev) => (prev - 1 + depoimentos.length) % depoimentos.length);
  };

  const visibleDepoimentos = [
    depoimentos[currentIndex],
    depoimentos[(currentIndex + 1) % depoimentos.length],
    depoimentos[(currentIndex + 2) % depoimentos.length]
  ];

  return (
    <section id="depoimentos" className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-light mb-4 animate-blur-fade-in">
            Quem instalou, recomenda
          </h2>
          <div className="flex items-center justify-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-[#AA2C2C] text-[#AA2C2C]" />
            ))}
          </div>
          <p className="text-gray-600">Avaliação média alta</p>
        </div>

        <div className="relative max-w-6xl mx-auto overflow-hidden">
          <div className="flex transition-transform duration-300 ease-in-out" style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}>
            {depoimentos.map((depoimento, index) => (
              <div
                key={index}
                className="w-full md:w-1/3 flex-shrink-0 px-3"
              >
                <div className="bg-gray-50 p-6 border border-gray-200 h-full">
                  <div className="flex gap-1 mb-4">
                    {[...Array(depoimento.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#AA2C2C] text-[#AA2C2C]" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{depoimento.texto}"</p>
                  <p className="font-medium text-sm">— {depoimento.autor}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevDepoimento}
              className="p-2 border border-gray-300 hover:border-[#AA2C2C] hover:text-[#AA2C2C] transition-colors"
              aria-label="Depoimento anterior"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <div className="flex gap-2">
              {depoimentos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-[#AA2C2C]' : 'bg-gray-300'
                  }`}
                  aria-label={`Ir para depoimento ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={nextDepoimento}
              className="p-2 border border-gray-300 hover:border-[#AA2C2C] hover:text-[#AA2C2C] transition-colors"
              aria-label="Próximo depoimento"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="text-center mt-12">
          <button
            onClick={handleWhatsClick}
            className="inline-flex items-center px-6 py-3 border border-[#AA2C2C] text-[#AA2C2C] font-medium hover:bg-[#AA2C2C] hover:text-white transition-all duration-300"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Falar no Whats Agora
          </button>
        </div>
      </div>
    </section>
  );
};

export default Depoimentos;
