import React from 'react';
import { MessageCircle, Clock, Users, Award } from 'lucide-react';

const CtaFinal: React.FC = () => {
  const handleWhatsClick = () => {
    window.open('https://wa.me/5541991961700?text=Oi!%20Vim%20do%20site.%20Quero%20falar%20com%20um%20especialista.', '_blank');
  };

  return (
    <section id="cta-final" className="section-padding bg-gradient-to-b from-gray-50 to-white text-gray-900">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-light mb-4 animate-blur-fade-in">
              Fale agora com um especialista
            </h2>
            <p className="text-xl opacity-90 animate-blur-fade-in animation-delay-200">
              Ajudamos você a escolher o tecido e o sistema ideais para o seu ambiente.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <button
              onClick={handleWhatsClick}
              className="w-full inline-flex items-center justify-center px-8 py-6 bg-gradient-to-r from-gray-600 to-gray-700 text-white text-lg font-medium rounded-2xl hover:from-gray-500 hover:to-gray-600 transition-all duration-300 shadow-2xl hover:scale-105 mb-12 animate-scale-blur-in animation-delay-400"
            >
              <MessageCircle className="mr-3 h-6 w-6" />
              Falar no Whats agora
            </button>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 animate-scale-blur-in animation-delay-600">
                <div className="inline-flex items-center justify-center w-16 h-16 mb-4 bg-gradient-to-br from-gray-500 to-gray-700 rounded-2xl shadow-lg">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-medium mb-2">Resposta rápida</h3>
                <p className="text-sm opacity-80">Atendimento ágil e personalizado</p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 animate-scale-blur-in animation-delay-800">
                <div className="inline-flex items-center justify-center w-16 h-16 mb-4 bg-gradient-to-br from-gray-500 to-gray-700 rounded-2xl shadow-lg">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-medium mb-2">Equipe própria</h3>
                <p className="text-sm opacity-80">Profissionais especializados</p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 animate-scale-blur-in animation-delay-1000">
                <div className="inline-flex items-center justify-center w-16 h-16 mb-4 bg-gradient-to-br from-gray-500 to-gray-700 rounded-2xl shadow-lg">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-medium mb-2">Medição técnica</h3>
                <p className="text-sm opacity-80">Precisão garantida</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaFinal;
