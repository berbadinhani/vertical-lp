import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, MessageCircle, Hand, Zap, Wifi, Check, X } from 'lucide-react';

interface ProductSectionProps {
  id: string;
  title: string;
  subtitle: string;
  bullets: string[];
  description: string;
  images: string[];
  bgColor?: string;
  controls?: {
    manual?: boolean;
    motorized?: boolean;
    automated?: boolean;
  };
  materials?: string[];
}

const ProductSection: React.FC<ProductSectionProps> = ({
  id,
  title,
  subtitle,
  bullets,
  description,
  images,
  bgColor = 'bg-white',
  controls,
  materials
}) => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleWhatsClick = () => {
    window.open(`https://wa.me/5541991961700?text=Oi!%20Quero%20avaliar%20${title}%20para%20meu%20ambiente.`, '_blank');
  };

  return (
    <section id={id} className={`section-padding ${bgColor}`}>
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-light mb-2">{title}</h2>
            <p className="text-lg text-gray-600 mb-6">{subtitle}</p>

            <ul className="space-y-3 mb-6">
              {bullets.map((bullet, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#AA2C2C] mt-2 flex-shrink-0"></span>
                  <span className="text-gray-700">{bullet}</span>
                </li>
              ))}
            </ul>

            <p className="text-gray-700 leading-relaxed mb-8">{description}</p>

            {controls && (
              <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                <h3 className="text-sm font-semibold text-gray-900 mb-3">Tipos de Acionamento</h3>
                <div className="flex flex-wrap gap-3">
                  {controls.manual && (
                    <div className="flex items-center gap-2 px-3 py-2 bg-white rounded-lg border border-gray-200">
                      <Hand className="w-4 h-4 text-[#AA2C2C]" />
                      <span className="text-sm text-gray-700">Manual</span>
                    </div>
                  )}
                  {controls.motorized && (
                    <div className="flex items-center gap-2 px-3 py-2 bg-white rounded-lg border border-gray-200">
                      <Zap className="w-4 h-4 text-[#AA2C2C]" />
                      <span className="text-sm text-gray-700">Motorizado</span>
                    </div>
                  )}
                  {controls.automated && (
                    <div className="flex items-center gap-2 px-3 py-2 bg-white rounded-lg border border-gray-200">
                      <Wifi className="w-4 h-4 text-[#AA2C2C]" />
                      <span className="text-sm text-gray-700">Automatizado</span>
                    </div>
                  )}
                </div>
              </div>
            )}

            {materials && materials.length > 0 && (
              <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                <h3 className="text-sm font-semibold text-gray-900 mb-3">Tipos de Material</h3>
                <div className="flex flex-wrap gap-2">
                  {materials.map((material, idx) => (
                    <span key={idx} className="px-3 py-1 bg-white text-sm text-gray-700 rounded-lg border border-gray-200">
                      {material}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <button
              onClick={handleWhatsClick}
              className="inline-flex items-center px-6 py-3 border border-[#AA2C2C] text-[#AA2C2C] font-medium hover:bg-[#AA2C2C] hover:text-white transition-all duration-300"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Quero saber mais!
            </button>
          </div>

          <div className="relative">
            <div className="relative h-96 bg-gray-200 overflow-hidden">
              <img
                src={images[currentImage]}
                alt={`${title} - ${currentImage + 1}`}
                className="w-full h-full object-cover"
              />
            </div>

            {images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 p-2 hover:bg-white transition-colors"
                  aria-label="Imagem anterior"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 p-2 hover:bg-white transition-colors"
                  aria-label="Próxima imagem"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>

                <div className="flex justify-center gap-2 mt-4">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImage(index)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === currentImage ? 'bg-[#AA2C2C]' : 'bg-gray-300'
                      }`}
                      aria-label={`Ir para imagem ${index + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const ProductDetails: React.FC = () => {
  const products = [
    {
      id: 'blackboxx',
      title: 'BLACKBOXX®',
      subtitle: 'blackout de verdade, solução exclusiva e proprietária',
      bullets: [
        'Sistema proprietário que envolve o mecanismo: mais resistência e sustentação do tecido',
        'Evita vincos e deformações — ideal para grandes vãos e janelas de canto',
        'Visual moderno e retilíneo que integra às esquadrias; combina com cortinas, xales e outras persianas',
        'Acionamento manual ou motorizado; integra à automação (voz/app)'
      ],
      description: 'BLACKBOXX resolve onde o "blackout comum" falha: estabilidade, vedação e acabamento elegante e discreto, com escurecimento intenso.',
      images: [
        'https://i.imgur.com/1zgpTtP.jpeg',
        'https://i.imgur.com/c3TjqMx.jpeg',
        'https://i.imgur.com/DnKDL8y.jpeg'
      ],
      bgColor: 'bg-white',
      controls: { manual: true, motorized: true, automated: true },
      materials: ['Blackout', 'Proteção Solar', 'Decorativo']
    },
    {
      id: 'vf',
      title: 'Cortina VF Teto®',
      subtitle: 'proteção inteligente para coberturas de vidro',
      bullets: [
        'Desenvolvida pela Vertical: reduz drasticamente a incidência solar',
        'Regula luminosidade e calor, mantendo o ambiente claro e agradável',
        'Design compacto e elegante, sem correntes ou mecanismos aparentes',
        'Instalação vertical, inclinada, horizontal e até em janelas curvas',
        'Acionamento manual ou motorizado, ideal para tetos altos e locais de difícil acesso'
      ],
      description: 'Anos de experiência e pesquisa resultaram numa solução versátil e discreta que protege do sol sem perder a estética.',
      images: [
        'https://i.imgur.com/DnowwT5.jpeg',
        'https://i.imgur.com/Hi6THuQ.jpeg',
        'https://i.imgur.com/sMtWWgD.jpeg'
      ],
      bgColor: 'bg-gray-50',
      controls: { manual: true, motorized: true, automated: true },
      materials: ['Semi Blackout', 'Proteção Solar', 'Decorativo']
    },
    {
      id: 'doublevision',
      title: 'Double Vision',
      subtitle: 'elegância e funcionalidade em uma só peça',
      bullets: [
        'Design inovador que alterna faixas translúcidas e opacas',
        'Controle superior de luminosidade e privacidade',
        'Permite criar diferentes ambientes ao longo do dia',
        'Ideal para salas, quartos e escritórios',
        'Sinônimo de modernidade e praticidade'
      ],
      description: 'A Double Vision, também conhecida como Duo, é a escolha perfeita para quem deseja combinar elegância e funcionalidade, adicionando um toque de sofisticação a qualquer espaço.',
      images: [
        'https://i.imgur.com/Wu58dy7.jpeg',
        'https://i.imgur.com/4bpGTQp.jpeg',
        'https://i.imgur.com/js64txm.jpeg'
      ],
      bgColor: 'bg-gray-50',
      controls: { manual: true, motorized: true, automated: true },
      materials: ['Semi Blackout', 'Decorativo']
    },
    {
      id: 'miragem',
      title: 'Miragem',
      subtitle: 'leveza, conforto e elegância em alto padrão',
      bullets: [
        'Controle de luminosidade pelo sistema basculante',
        'Privacidade mantendo a luz natural suave',
        'Recolhimento compacto, ideal para cortineiro (quase "invisível")',
        'Integração fácil à automação, operação suave'
      ],
      description: 'A cortina mais exclusiva do portfólio: presença refinada, luz na medida e funcionamento silencioso.',
      images: [
        'https://i.imgur.com/MYpKalj.jpeg',
        'https://i.imgur.com/iU7x3aQ.jpeg',
        'https://i.imgur.com/m5SaZq8.jpeg'
      ],
      bgColor: 'bg-white',
      controls: { manual: true, motorized: true, automated: true },
      materials: ['Semi Blackout', 'Proteção Solar', 'Decorativo']
    },
    {
      id: 'rolo',
      title: 'Rolô',
      subtitle: 'visual clean com tecidos certos para cada uso',
      bullets: [
        'Translúcidos: conforto e privacidade com luz suave',
        'Telas Solares: proteção UV, conforto térmico, fácil limpeza e privacidade na medida',
        'Blackout: escurecimento eficiente com acabamento premium',
        'Acionamento manual ou motorizado'
      ],
      description: 'Um dos sistemas mais versáteis do mercado — do home office ao corporativo, com opções que resolvem brilho e calor.',
      images: [
        'https://i.imgur.com/pP6TINf.jpeg',
        'https://i.imgur.com/2wNCQ9m.jpeg',
        'https://i.imgur.com/Qk0cZVN.jpeg'
      ],
      bgColor: 'bg-gray-50',
      controls: { manual: true, motorized: true, automated: true },
      materials: ['Semi Blackout', 'Blackout', 'Proteção Solar', 'Decorativo']
    },
    {
      id: 'romana',
      title: 'Romana',
      subtitle: 'volumetria têxtil que valoriza o ambiente',
      bullets: [
        'Tecidos translúcidos, blackout e tela solar',
        'Dobras onduladas que formam volumes na parte superior',
        'Acionamento leve e silencioso',
        'Integração com estilos do clássico ao contemporâneo'
      ],
      description: 'Discreta, delicada e funcional — vai do decorativo à controle real de luz.',
      images: [
        'https://i.imgur.com/mCYHD2O.jpeg',
        'https://i.imgur.com/zRmzmJR.jpeg',
        'https://i.imgur.com/iOtpM1e.jpeg'
      ],
      bgColor: 'bg-white',
      controls: { manual: true, motorized: true, automated: true },
      materials: ['Semi Blackout', 'Proteção Solar', 'Decorativo']
    },
    {
      id: 'tecido',
      title: 'Cortinas de Tecido',
      subtitle: 'aconchego, proteção e elegância',
      bullets: [
        'Conforto térmico, níveis de luminosidade e privacidade',
        'Protege pisos e móveis da incidência solar',
        'Funciona em projetos modernos e ousados sem perder a elegância',
        'Motorização disponível para um ambiente mais inteligente'
      ],
      description: 'Para quem não abre mão da textura e da presença do tecido — agora com tecnologia e acionamento fácil.',
      images: [
        'https://i.imgur.com/T84y2gG.jpeg',
        'https://i.imgur.com/1Q5E1f7.jpeg',
        'https://i.imgur.com/x2pOd8f.jpeg'
      ],
      bgColor: 'bg-gray-50',
      controls: { manual: true, motorized: true, automated: true },
      materials: ['Blackout', 'Decorativo']
    },
    {
      id: 'vertical',
      title: 'Persiana Vertical',
      subtitle: 'atemporal e prática com controle dinâmico de luz',
      bullets: [
        'Bom controle de luminosidade por meio da regulagem das aletas',
        'Opções em PVC, sintético, tecido ou telas solares',
        'Permite fechamento total e nuanças de luminosidade',
        'Visual dinâmico para diversos estilos de projetos e decorações'
      ],
      description: 'Atemporal e prática, as persianas verticais permitem um bom controle de luminosidade com visual bastante dinâmico, podendo ser utilizado em diversos estilos de projetos e decorações.',
      images: [
        'https://i.imgur.com/UiHiQTy.jpeg',
        'https://i.imgur.com/wQpw7Q1.jpeg',
        'https://i.imgur.com/6ZEAz25.jpeg'
      ],
      bgColor: 'bg-white',
      controls: { manual: true, motorized: false, automated: false },
      materials: ['PVC', 'Sintético', 'Tecido', 'Telas Solares']
    },
    {
      id: 'horizontal',
      title: 'Persiana Horizontal',
      subtitle: 'elegância clássica com fácil integração à automação',
      bullets: [
        'Controle de luminosidade por meio da regulagem das aletas',
        'Opções em madeira natural, madeira sintética, alumínio ou PVC',
        'Permite fechamento total e nuanças de luminosidade',
        'Acionamento de fácil manuseio e integração à automação'
      ],
      description: 'Atemporal e prática, as persianas horizontais oferecem visual dinâmico que pode ser utilizado em diversos estilos. Seu acionamento é de fácil manuseio e pode facilmente ser integrada à automação do seu lar.',
      images: [
        'https://i.imgur.com/4980nDT.jpeg',
        'https://i.imgur.com/zGdrRX9.jpeg',
        'https://i.imgur.com/d0BaFnj.jpeg'
      ],
      bgColor: 'bg-gray-50',
      controls: { manual: true, motorized: true, automated: true },
      materials: ['Madeira Natural', 'Madeira Sintética', 'Alumínio', 'PVC']
    },
    {
      id: 'toldos',
      title: 'Toldos e Coberturas Retráteis',
      subtitle: 'soluções externas únicas e personalizadas',
      bullets: [
        'Representantes Pioneiros dos Produtos Hunter Douglas',
        'Gama completa de produtos para aplicações externas',
        'Toldos, coberturas e guarda-sóis únicos e personalizados',
        'Proteção solar e conforto térmico para áreas externas'
      ],
      description: 'Dispomos de uma gama completa de produtos para atender às mais diversas aplicações externas, fornecendo toldos, coberturas e guarda-sóis únicos e personalizados.',
      images: [
        'https://i.imgur.com/IXVVtk4.jpeg',
        'https://i.imgur.com/OJPVlvl.jpeg',
        'https://i.imgur.com/YhInEyZ.jpeg'
      ],
      bgColor: 'bg-white',
      controls: { manual: true, motorized: true, automated: true },
      materials: ['Telas Solares', 'Lona Acrílica', 'Policarbonato']
    }
  ];

  return (
    <>
      {products.map((product) => (
        <ProductSection key={product.id} {...product} />
      ))}
    </>
  );
};

export default ProductDetails;
