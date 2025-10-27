import React from 'react';
import { Sun, Thermometer, Eye, Home, Maximize2, Smartphone, ArrowRight, MessageCircle } from 'lucide-react';

const DoresSolucoes: React.FC = () => {
  const handleWhatsClick = () => {
    window.open('https://wa.me/5541991961700?text=Oi!%20Quero%20falar%20com%20um%20especialista%20sobre%20soluções%20para%20meu%20ambiente.', '_blank');
  };

  const solucoes = [
    {
      icon: Sun,
      problema: 'Luz invadindo o quarto',
      solucao: 'BLACKBOXX',
      descricao: 'Escuro de verdade.',
      link: '#blackboxx'
    },
    {
      icon: Thermometer,
      problema: 'Calor e brilho em telas',
      solucao: 'VF Teto / Rolô Tela Solar',
      descricao: 'Conforto térmico e visual.',
      link: '#vf'
    },
    {
      icon: Eye,
      problema: 'Privacidade sem pesar',
      solucao: 'Miragem / Romana',
      descricao: 'Luz suave com elegância.',
      link: '#miragem'
    },
    {
      icon: Home,
      problema: 'Estética + função',
      solucao: 'Cortinas de Tecido',
      descricao: 'Ambiente aconchegante e protegido.',
      link: '#tecido'
    },
    {
      icon: Maximize2,
      problema: 'Grandes vãos / janelas de canto',
      solucao: 'BLACKBOXX',
      descricao: 'Estabilidade e acabamento discreto.',
      link: '#blackboxx'
    },
    {
      icon: Smartphone,
      problema: 'Operar com praticidade',
      solucao: 'Motorização/automação',
      descricao: 'Um toque/voz.',
      link: '#produtos'
    }
  ];

  return (
    <section id="dores" className="section-padding bg-gradient-to-b from-white to-gray-50">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-light mb-4 animate-blur-fade-in">
            Para cada necessidade, a solução exata
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {solucoes.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="group relative p-8 text-center bg-white/80 backdrop-blur-xl rounded-3xl border border-gray-200/50 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 cursor-pointer animate-scale-blur-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#AA2C2C]/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-16 h-16 mb-4 bg-gradient-to-br from-gray-400 to-gray-600 rounded-2xl shadow-lg group-hover:shadow-xl group-hover:shadow-gray-500/30 transition-all duration-300 group-hover:rotate-6 group-hover:scale-110">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-medium mb-3 text-gray-900">{item.problema}</h3>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <ArrowRight className="w-4 h-4 text-gray-700 group-hover:translate-x-1 transition-transform duration-300" />
                  <span className="font-medium text-gray-700">{item.solucao}</span>
                </div>
                <p className="text-sm text-gray-600">{item.descricao}</p>
              </div>

              <div className="absolute top-4 right-4 w-20 h-20 bg-gray-400/5 rounded-full blur-2xl group-hover:bg-gray-400/10 transition-colors duration-500"></div>
            </a>
          ))}
        </div>

        <div className="text-center animate-scale-blur-in animation-delay-800">
          <button
            onClick={handleWhatsClick}
            className="group inline-flex items-center px-8 py-4 bg-[#AA2C2C] text-white text-lg font-medium rounded-full hover:bg-[#8a2323] transition-all duration-300 shadow-2xl hover:shadow-[#AA2C2C]/50 hover:scale-105"
          >
            <MessageCircle className="mr-3 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
            Falar no Whats agora
          </button>
        </div>
      </div>
    </section>
  );
};

export default DoresSolucoes;
