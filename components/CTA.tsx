import React from 'react';
import { MailIcon, WhatsAppIcon, ShoppingCartIcon } from './Icons';

const CTA: React.FC = () => {
  return (
    <section id="contato" className="bg-th-green py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold">Pronto para Fazer a Diferença?</h2>
        <p className="mt-4 text-lg max-w-3xl mx-auto opacity-90">
          Junte-se às empresas que estão liderando a transição para um futuro mais sustentável. Entre em contato conosco para uma avaliação sem compromisso.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4">
          <a href="mailto:thmetais994@gmail.com" className="flex items-center justify-center gap-2 bg-white text-th-dark font-semibold px-8 py-3 rounded-full hover:bg-gray-200 transition-colors w-full sm:w-auto">
            <MailIcon className="h-5 w-5" />
            <span>Enviar E-mail</span>
          </a>
          <a href="https://www.instagram.com/stories/highlights/18004707086661038/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-white text-th-dark font-semibold px-8 py-3 rounded-full hover:bg-gray-200 transition-colors w-full sm:w-auto">
            <ShoppingCartIcon className="h-5 w-5" />
            <span>Conheça nosso Bazar</span>
          </a>
          <a href="https://wa.me/5519981277727" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-th-lime text-th-dark font-semibold px-8 py-3 rounded-full hover:brightness-105 transition w-full sm:w-auto">
            <WhatsAppIcon className="h-5 w-5" />
            <span>Chamar no WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;