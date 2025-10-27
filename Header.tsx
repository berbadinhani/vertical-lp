import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsClick = () => {
    window.open('https://wa.me/5541991961700?text=Oi!%20Quero%20or%C3%A7amento%20e%20medi%C3%A7%C3%A3o%20t%C3%A9cnica.', '_blank');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-4 px-4">
      <div
        className={`container-custom mx-auto transition-all duration-500 ${
          isScrolled
             ? 'bg-white/60 backdrop-blur-2xl ring-1 ring-white/20 shadow-xl'
      : 'bg-white/40 backdrop-blur-2xl ring-1 ring-white/15 shadow-lg'
        } rounded-full px-6 py-4`}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" aria-label="Ir para o início" className="inline-flex items-center">
  <img
    src="https://i.imgur.com/LmkH9i1.png"
    alt="Vertical Persianas"
    className="h-8 w-auto select-none"
    loading="eager"
    decoding="async"
  />
</a>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center flex-1 justify-center">
            <ul className="flex items-center space-x-8">
              <li>
                <a
                  href="#hero"
                  className="text-sm font-medium text-gray-700 hover:text-[#AA2C2C] transition-colors duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#sobre"
                  className="text-sm font-medium text-gray-700 hover:text-[#AA2C2C] transition-colors duration-300"
                >
                  Sobre nós
                </a>
              </li>
              <li>
                <a
                  href="#produtos"
                  className="text-sm font-medium text-gray-700 hover:text-[#AA2C2C] transition-colors duration-300"
                >
                  Produtos
                </a>
              </li>
              <li>
                <a
                  href="#depoimentos"
                  className="text-sm font-medium text-gray-700 hover:text-[#AA2C2C] transition-colors duration-300"
                >
                  Depoimentos
                </a>
              </li>
            </ul>
          </nav>

          {/* CTA Button & Mobile Menu */}
          <div className="flex items-center gap-4">
            <button
              onClick={handleWhatsClick}
              className="hidden lg:inline-flex items-center px-6 py-2.5 bg-[#AA2C2C] text-white text-sm font-medium rounded-full hover:bg-[#8a2323] transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-[#AA2C2C]/30 hover:scale-105"
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              Fale Conosco
            </button>

            {/* Mobile menu button */}
            <button
              className="lg:hidden text-gray-700 hover:text-[#AA2C2C] transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-4 mx-4">
          <div className="bg-white/95 backdrop-blur-xl shadow-2xl rounded-3xl p-6 border border-gray-100">
            <nav>
              <ul className="flex flex-col space-y-1">
                <li>
                  <a
                    href="#hero"
                    className="block px-4 py-3 text-sm font-medium text-gray-700 hover:text-[#AA2C2C] hover:bg-gray-50 rounded-xl transition-all duration-300"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#sobre"
                    className="block px-4 py-3 text-sm font-medium text-gray-700 hover:text-[#AA2C2C] hover:bg-gray-50 rounded-xl transition-all duration-300"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Sobre nós
                  </a>
                </li>
                <li>
                  <a
                    href="#produtos"
                    className="block px-4 py-3 text-sm font-medium text-gray-700 hover:text-[#AA2C2C] hover:bg-gray-50 rounded-xl transition-all duration-300"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Produtos
                  </a>
                </li>
                <li>
                  <a
                    href="#depoimentos"
                    className="block px-4 py-3 text-sm font-medium text-gray-700 hover:text-[#AA2C2C] hover:bg-gray-50 rounded-xl transition-all duration-300"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Depoimentos
                  </a>
                </li>
                <li className="pt-2">
                  <button
                    onClick={() => {
                      handleWhatsClick();
                      setMobileMenuOpen(false);
                    }}
                    className="w-full flex items-center justify-center px-4 py-3 bg-[#AA2C2C] text-white text-sm font-medium rounded-xl hover:bg-[#8a2323] transition-all duration-300 shadow-lg"
                  >
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Fale Conosco
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;