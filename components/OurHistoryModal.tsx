import React from 'react';
import { XIcon } from './Icons';

interface OurHistoryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const historyText = `
  <h2>♻️ Nossa História</h2>
  <p>Desde 2019, a TH Metais atua com seriedade e eficiência no setor de compra e coleta de sucatas e materiais recicláveis, oferecendo soluções práticas e vantajosas para quem busca transformar resíduos em lucro e sustentabilidade.</p>
  <p>Nascemos com um propósito claro: valorizar o que muitos consideram descarte. Com experiência e compromisso ambiental, atendemos empresas e pessoas físicas, garantindo o destino correto de metais e recicláveis, com pagamento justo e coleta rápida.</p>
  <p>Ao longo dos anos, conquistamos a confiança de nossos parceiros com um atendimento diferenciado, transparência nas negociações e pontualidade nos serviços. Trabalhamos com coletas agendadas, avaliações no local e melhores preços de mercado, sempre buscando facilitar o dia a dia de quem precisa vender sucata com segurança e praticidade.</p>
  <p>Na TH Metais, acreditamos que reciclar é mais do que um negócio — é uma forma de cuidar do planeta e gerar valor para todos.</p>
  <p><strong>Seja parceiro dessa ideia. Transforme seu material em renda e contribua para um futuro mais sustentável.</strong></p>
`;

const OurHistoryModal: React.FC<OurHistoryModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="our-history-title"
    >
      <div 
        className="bg-th-dark-secondary rounded-lg shadow-xl relative max-w-3xl w-full max-h-[90vh] flex flex-col"
        onClick={e => e.stopPropagation()} // Prevent closing when clicking inside modal
      >
        <div className="p-6 border-b border-gray-700 flex justify-between items-center">
          <h2 id="our-history-title" className="text-xl font-bold text-white">Nossa História</h2>
          <button 
            onClick={onClose} 
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="Fechar"
          >
            <XIcon className="h-6 w-6" />
          </button>
        </div>
        
        <div 
          className="p-6 overflow-y-auto prose prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: historyText }}
        />

        <div className="p-4 border-t border-gray-700 text-right bg-th-dark rounded-b-lg">
          <button
            onClick={onClose}
            className="bg-th-green text-white px-6 py-2 rounded-full hover:bg-th-green-light transition-colors duration-200 shadow-md"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};

export default OurHistoryModal;
