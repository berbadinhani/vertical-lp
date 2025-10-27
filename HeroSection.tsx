import React from 'react';
import { MessageCircle } from 'lucide-react';

const HeroSection: React.FC = () => {
  const handleWhatsClick = () => {
    window.open('https://wa.me/5541991961700?text=Oi!%20Vim%20do%20site.%20Quero%20saber%20mais%20sobre%20cortinas%20e%20persianas.', '_blank');
  };

  return (
    <section id="hero" className="relative pt-32 pb-24 md:pt-48 md:pb-40 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-black/60"></div>
        <img
          src="https://i.imgur.com/I2eM6Pu.jpeg"
          alt="Cortinas e persianas elegantes"
          className="object-cover object-center w-full h-full"
        />
      </div>

      <div className="container-custom relative z-10 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4 animate-blur-fade-in">
            Cortinas e Persianas há mais de 40 anos em Curitiba
          </h1>

          <p className="text-lg md:text-xl lg:text-2xl font-light mb-12 opacity-80 animate-blur-fade-in animation-delay-400">
           Referência no segmento com produtos de qualidade e atendimento premium
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-10 text-sm md:text-base animate-blur-fade-in animation-delay-600">
            <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="w-2 h-2 bg-[#AA2C2C] rounded-full animate-pulse"></div>
              <span>Atendimento presencial</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="w-2 h-2 bg-[#AA2C2C] rounded-full animate-pulse"></div>
              <span>+40 Anos</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="w-2 h-2 bg-[#AA2C2C] rounded-full animate-pulse"></div>
              <span>Soluções sob medida</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="w-2 h-2 bg-[#AA2C2C] rounded-full animate-pulse"></div>
              <span>Equipe especializada</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="w-2 h-2 bg-[#AA2C2C] rounded-full animate-pulse"></div>
              <span>Agilidade</span>
            </div>
          </div>

          <button
            onClick={handleWhatsClick}
            className="inline-flex items-center px-8 py-4 bg-[#AA2C2C] text-white text-lg font-medium rounded-full hover:bg-[#8a2323] transition-all duration-300 shadow-2xl hover:shadow-[#AA2C2C]/50 hover:scale-105 animate-scale-blur-in animation-delay-800 group"
          >
            <MessageCircle className="mr-3 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
           Falar no Whats agora
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
