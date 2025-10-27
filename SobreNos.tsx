import React from 'react';
import { Factory, Store, Users, Clock, Award, MessageCircle } from 'lucide-react';

const SobreNos: React.FC = () => {
  const handleWhatsClick = () => {
    window.open('https://wa.me/5541999999999?text=Oi!%20Quero%20orientação%20rápida%20sobre%20cortinas%20e%20persianas.', '_blank');
  };

  const selos = [
    { icon: Factory, label: 'Fabricação própria' },
    { icon: Award, label: '5 anos de garantia' },
    { icon: Store, label: 'Direto de fábrica' },
    { icon: Clock, label: '40 anos de mercado' },
    { icon: Users, label: 'Assistência técnica permanente' },
    { icon: Award, label: 'Projeto sob medida' }
  ];

  return (
    <section id="sobre" className="section-padding bg-gradient-to-b from-gray-50 to-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-light text-center mb-6 animate-blur-fade-in">
            Não passe sufoco. Escolha quem sabe o que faz.
          </h2>

          <div className="text-center prose prose-lg max-w-none mb-12">
            <p className="text-lg leading-relaxed mb-6 text-gray-700 animate-slide-in-left animation-delay-200">
              Temos <strong className="text-[#AA2C2C]">40 anos de experiência</strong> e já vimos muitos clientes frustrados por escolherem errado: produtos de baixa qualidade, instalação mal feita e medidas incorretas. Acontece quando a empresa não conta o que realmente importa — mas entrega o problema.
            </p>

            <p className="text-lg leading-relaxed mb-8 text-gray-700 animate-slide-in-right animation-delay-400">
              Estamos há tanto tempo no mercado porque fazemos certo: fabricação própria, tecidos e sistemas de alto padrão, equipe especializada e condições comerciais competitivas. Do diagnóstico à instalação, você tem conforto, precisão e acabamento impecável.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-10">
            {selos.map((selo, index) => (
              <div
                key={index}
                className="group text-center p-6 bg-white/80 backdrop-blur-xl rounded-2xl border border-gray-200/50 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-1 animate-scale-blur-in"
                style={{ animationDelay: `${600 + index * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 mb-3 bg-gradient-to-br from-gray-400 to-gray-600 rounded-xl shadow-lg group-hover:shadow-xl group-hover:shadow-gray-500/30 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110">
                  <selo.icon className="w-6 h-6 text-white" />
                </div>
                <p className="text-sm font-medium text-gray-900 group-hover:text-gray-700 transition-colors duration-300">
                  {selo.label}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center animate-scale-blur-in animation-delay-1200">
            <button
              onClick={handleWhatsClick}
              className="group inline-flex items-center px-8 py-4 border-2 border-[#AA2C2C] text-[#AA2C2C] font-medium rounded-full hover:bg-[#AA2C2C] hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-[#AA2C2C]/30 hover:scale-105"
            >
              <MessageCircle className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
              Falar no Whats agora
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SobreNos;
