import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Beneficios from './components/Beneficios';
import SobreNos from './components/SobreNos';
import DoresSolucoes from './components/DoresSolucoes';
import Produtos from './components/Produtos';
import ProductDetails from './components/ProductDetails';
import Depoimentos from './components/Depoimentos';
import CtaFinal from './components/CtaFinal';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="min-h-screen bg-white text-black font-inter">
      <Header />
      <main>
        <HeroSection />
        <SobreNos />
        <Produtos />
        <DoresSolucoes />
        <ProductDetails />
        <Depoimentos />
        <CtaFinal />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;