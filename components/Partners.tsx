import React from 'react';
import { HeartIcon, CheckCircleIcon } from './Icons';

const Partners: React.FC = () => {
  return (
    <section id="parceiros" className="bg-th-dark-secondary py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="flex items-center gap-4 mb-4">
               <HeartIcon className="h-10 w-10 text-th-lime" />
               <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white">Reciclagem Solidária</h2>
                  <p className="text-xl text-th-green-light font-semibold">Em parceria com a Casa dos Velhinhos</p>
               </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Sua atitude faz a diferença! Temos a alegria de ter a Casa dos Velhinhos como parceira, transformando o que seria descarte em dignidade e carinho para nossos idosos. Toda a sua doação de materiais recicláveis se reverte em apoio direto.
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-start">
                <CheckCircleIcon className="h-6 w-6 text-th-green-light flex-shrink-0 mt-1 mr-3" />
                <div>
                  <h3 className="font-semibold text-lg text-white">Fonte de Renda Vital</h3>
                  <p className="text-gray-400">A venda dos recicláveis gera recursos para a compra de alimentos, medicamentos e melhorias na infraestrutura da casa.</p>
                </div>
              </div>
            </div>
             <div className="bg-th-dark p-6 rounded-lg">
                <h3 className="font-semibold text-lg text-white mb-2">✨ Como Participar e Transformar Vidas:</h3>
                <p className="text-gray-300">
                  Separe seus recicláveis e entregue em nosso ponto de coleta:
                </p>
                 <a href="https://www.google.com/maps/search/?api=1&query=R.+Angelino+Stella,+470+-+Gleba+Califórnia,+Piracicaba+-+SP,+13403-291" target="_blank" rel="noopener noreferrer" className="mt-2 text-th-lime hover:underline font-semibold block">
                  R. Angelino Stella, 470 - Gleba Califórnia, Piracicaba - SP
                </a>
                 <p className="mt-4 text-sm text-gray-400 italic">Recicle conosco e cuide de quem já fez tanto por todos nós!</p>
             </div>
          </div>
          <div className="order-1 lg:order-2">
            <img 
              src="https://i.imgur.com/sxPe2Ud.png" 
              alt="Idosos participando de atividades de artesanato com materiais recicláveis na Casa dos Velhinhos." 
              className="rounded-lg shadow-2xl w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
