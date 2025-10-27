import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';

const Produtos: React.FC = () => {
  const handleWhatsClick = () => {
    window.open('https://wa.me/5541991961700?text=Oi!%20Quero%20orçamento%20e%20medição%20técnica.', '_blank');
  };

  const produtos = [
    {
      nome: 'BLACKBOXX',
      descricao: 'blackout de verdade (sistema proprietário)',
      link: '#blackboxx',
      image: 'https://i.imgur.com/1zgpTtP.jpeg'
    },
    {
      nome: 'Cortina VF Teto®',
      descricao: 'proteção para coberturas de vidro',
      link: '#vf',
      image: 'https://i.imgur.com/48a5WqZ.jpeg'
    },
    {
      nome: 'Double Vision',
      descricao: 'elegância e controle superior de luz e privacidade',
      link: '#doublevision',
      image: 'https://i.imgur.com/F9nUjJZ.jpeg'
    },
    {
      nome: 'Miragem',
      descricao: 'leveza, conforto e elegância premium',
      link: '#miragem',
      image: 'https://i.imgur.com/KKZehtf.jpeg'
    },
    {
      nome: 'Rolô',
      descricao: 'visual clean em translúcido, tela solar ou blackout',
      link: '#rolo',
      image: 'https://i.imgur.com/YZfKkdR.jpeg0'
    },
    {
      nome: 'Romana',
      descricao: 'dobras elegantes, presença sofisticada',
      link: '#romana',
      image: 'https://i.imgur.com/5eG8yjN.jpeg'
    },
    {
      nome: 'Cortinas de Tecido',
      descricao: 'clássico que combina com o moderno',
      link: '#tecido',
      image: 'https://i.imgur.com/pRKG4yg.jpeg'
    },
    {
      nome: 'Persiana Vertical',
      descricao: 'atemporal e prática, controle dinâmico de luz',
      link: '#vertical',
      image: 'https://i.imgur.com/DKf2uFf.jpeg'
    },
    {
      nome: 'Persiana Horizontal',
      descricao: 'elegância clássica com fácil integração à automação',
      link: '#horizontal',
      image: 'https://i.imgur.com/gmXTd4U.jpeg'
    },
    {
      nome: 'Toldos e Coberturas',
      descricao: 'soluções externas personalizadas e exclusivas',
      link: '#toldos',
      image: 'https://i.imgur.com/iA8RsW7.jpeg'
    }
  ];

  return (
    <section id="produtos" className="section-padding bg-gradient-to-b from-gray-50 to-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-light mb-4 animate-blur-fade-in">
            Produtos exclusivos e soluções sob medida
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {produtos.map((produto, index) => (
            <a
              key={index}
              href={produto.link}
              className="group bg-white/80 backdrop-blur-xl overflow-hidden rounded-3xl hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 border border-gray-200/50 animate-scale-blur-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={produto.image}
                  alt={produto.nome}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute inset-0 bg-[#AA2C2C]/0 group-hover:bg-[#AA2C2C]/10 transition-colors duration-500"></div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-medium mb-2 group-hover:text-[#AA2C2C] transition-colors duration-300">{produto.nome}</h3>
                <p className="text-gray-600 mb-4">{produto.descricao}</p>
                <div className="flex items-center justify-center text-[#AA2C2C] font-medium group-hover:gap-3 transition-all">
                  <span>Ver detalhes</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center animate-scale-blur-in animation-delay-800">
          <button
            onClick={handleWhatsClick}
            className="group inline-flex items-center px-8 py-4 bg-[#AA2C2C] text-white text-lg font-medium rounded-full hover:bg-[#8a2323] transition-all duration-300 shadow-2xl hover:shadow-[#AA2C2C]/50 hover:scale-105"
          >
            <MessageCircle className="mr-3 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
            Falar no Whatsapp 
        
          </button>
        </div>
      </div>
    </section>
  );
};

export default Produtos;
