import React from 'react';
import { Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contato" className="py-12 bg-[linear-gradient(to_bottom,_#f3f4f6,_#ffffff)] text-black border-t border-gray-20">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="font-semibold text-2xl text-black mb-4">Vertical Persianas</div>
              <p className="text-sm text-gray-600 mb-4">
                Há mais de 40 anos trazendo soluções em cortinas e persianas para Curitiba e região.
              </p>
              <p className="text-xs text-gray-500">CNPJ: 03.329.719/0001-69</p>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-4 text-black">Produtos</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#blackboxx" className="hover:text-gray-900 transition-colors">BLACKBOXX®</a></li>
                <li><a href="#vf" className="hover:text-gray-900 transition-colors">Cortina VF Teto®</a></li>
                <li><a href="#miragem" className="hover:text-gray-900 transition-colors">Miragem</a></li>
                <li><a href="#rolo" className="hover:text-gray-900 transition-colors">Rolô</a></li>
                <li><a href="#romana" className="hover:text-gray-900 transition-colors">Romana</a></li>
                <li><a href="#tecido" className="hover:text-gray-900 transition-colors">Cortinas de Tecido</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-4 text-black">Contato</h3>
              <div className="space-y-3 text-sm text-gray-600">
                <a
                  href="https://wa.me/5541991961700"
                  className="flex items-center hover:text-gray-900 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Phone className="h-4 w-4 mr-2 flex-shrink-0" />
                  +55 41 99196-1700
                </a>
                <a
                  href="mailto:contato@verticalpersianas.com.br"
                  className="flex items-center hover:text-gray-900 transition-colors"
                >
                  <Mail className="h-4 w-4 mr-2 flex-shrink-0" />
                  contato@verticalpersianas.com.br
                </a>
                <div className="flex items-start">
                  <MapPin className="h-4 w-4 mr-2 flex-shrink-0 mt-1" />
                  <span>Curitiba, PR<br />Avenida Prefeito Omar Sabbag, 548 - Jardim Botânico</span>
                </div>
                <a
                  href="https://instagram.com/verticalpersianas"
                  className="flex items-center hover:text-gray-900 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="h-4 w-4 mr-2 flex-shrink-0" />
                  @verticalpersianas
                </a>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-200 text-center">
            <p className="text-xs text-gray-500">
              © {new Date().getFullYear()} Vertical Persianas. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
