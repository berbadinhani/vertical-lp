import React from 'react';
import { Sparkles, Ruler, Package, Zap } from 'lucide-react';

const Beneficios: React.FC = () => {
  const beneficios = [
    {
      icon: Sparkles,
      titulo: 'Conforto e estética de alto padrão',
      descricao: 'Design sofisticado que transforma ambientes'
    },
    {
      icon: Ruler,
      titulo: 'Medição técnica e instalação perfeita',
      descricao: 'Precisão milimétrica garantida'
    },
    {
      icon: Package,
      titulo: 'Diversos produtos e soluções',
      descricao: 'Portfólio completo para cada necessidade'
    },
    {
      icon: Zap,
      titulo: 'Motorização/automação',
      descricao: 'Tecnologia integrada ao seu conforto'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {beneficios.map((item, index) => (
            <div
              key={index}
              className="group relative p-8 text-center bg-white/80 backdrop-blur-xl rounded-3xl border border-gray-200/50 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#AA2C2C]/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-16 h-16 mb-4 bg-gradient-to-br from-[#AA2C2C] to-[#8a2323] rounded-2xl shadow-lg group-hover:shadow-xl group-hover:shadow-[#AA2C2C]/30 transition-all duration-300 group-hover:rotate-6 group-hover:scale-110">
                  <item.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-lg font-medium mb-2 text-gray-900 group-hover:text-[#AA2C2C] transition-colors duration-300">
                  {item.titulo}
                </h3>

                <p className="text-sm text-gray-600">
                  {item.descricao}
                </p>
              </div>

              <div className="absolute top-4 right-4 w-20 h-20 bg-[#AA2C2C]/5 rounded-full blur-2xl group-hover:bg-[#AA2C2C]/10 transition-colors duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Beneficios;
