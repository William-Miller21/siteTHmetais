import React from 'react';
import { XIcon } from './Icons';

interface TermsOfUseModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const termsText = `
<h2>1. Termos</h2><p>Ao acessar ao site <a href="thmetais.com.br">TH Metais</a>, concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis ​​e concorda que é responsável pelo cumprimento de todas as leis locais aplicáveis. Se você não concordar com algum desses termos, está proibido de usar ou acessar este site. Os materiais contidos neste site são protegidos pelas leis de direitos autorais e marcas comerciais aplicáveis.</p><h2>2. Uso de Licença</h2><p>É concedida permissão para baixar temporariamente uma cópia dos materiais (informações ou software) no site TH Metais , apenas para visualização transitória pessoal e não comercial. Esta é a concessão de uma licença, não uma transferência de título e, sob esta licença, você não pode:&nbsp;</p><ol><li>modificar ou copiar os materiais;&nbsp;</li><li>usar os materiais para qualquer finalidade comercial ou para exibição pública (comercial ou não comercial);&nbsp;</li><li>tentar descompilar ou fazer engenharia reversa de qualquer software contido no site TH Metais;&nbsp;</li><li>remover quaisquer direitos autorais ou outras notações de propriedade dos materiais; ou&nbsp;</li><li>transferir os materiais para outra pessoa ou 'espelhe' os materiais em qualquer outro servidor.</li></ol><p>Esta licença será automaticamente rescindida se você violar alguma dessas restrições e poderá ser rescindida por TH Metais a qualquer momento. Ao encerrar a visualização desses materiais ou após o término desta licença, você deve apagar todos os materiais baixados em sua posse, seja em formato eletrónico ou impresso.</p><h2>3. Isenção de responsabilidade</h2><ol><li>Os materiais no site da TH Metais são fornecidos 'como estão'. TH Metais não oferece garantias, expressas ou implícitas, e, por este meio, isenta e nega todas as outras garantias, incluindo, sem limitação, garantias implícitas ou condições de comercialização, adequação a um fim específico ou não violação de propriedade intelectual ou outra violação de direitos.</li><li>Além disso, o TH Metais não garante ou faz qualquer representação relativa à precisão, aos resultados prováveis ​​ou à confiabilidade do uso dos materiais em seu site ou de outra forma relacionado a esses materiais ou em sites vinculados a este site.</li></ol><h2>4. Limitações</h2><p>Em nenhum caso o TH Metais ou seus fornecedores serão responsáveis ​​por quaisquer danos (incluindo, sem limitação, danos por perda de dados ou lucro ou devido a interrupção dos negócios) decorrentes do uso ou da incapacidade de usar os materiais em TH Metais, mesmo que TH Metais ou um representante autorizado da TH Metais tenha sido notificado oralmente ou por escrito da possibilidade de tais danos. Como algumas jurisdições não permitem limitações em garantias implícitas, ou limitações de responsabilidade por danos conseqüentes ou incidentais, essas limitações podem não se aplicar a você.</p><h2>5. Precisão dos materiais</h2><p>Os materiais exibidos no site da TH Metais podem incluir erros técnicos, tipográficos ou fotográficos. TH Metais não garante que qualquer material em seu site seja preciso, completo ou atual. TH Metais pode fazer alterações nos materiais contidos em seu site a qualquer momento, sem aviso prévio. No entanto, TH Metais não se compromete a atualizar os materiais.</p><h2>6. Links</h2><p>O TH Metais não analisou todos os sites vinculados ao seu site e não é responsável pelo conteúdo de nenhum site vinculado. A inclusão de qualquer link não implica endosso por TH Metais do site. O uso de qualquer site vinculado é por conta e risco do usuário.</p><p><br></p><h3>Modificações</h3><p>O TH Metais pode revisar estes termos de serviço do site a qualquer momento, sem aviso prévio. Ao usar este site, você concorda em ficar vinculado à versão atual desses termos de serviço.</p><h3>Lei aplicável</h3><p>Estes termos e condições são regidos e interpretados de acordo com as leis do TH Metais e você se submete irrevogavelmente à jurisdição exclusiva dos tribunais naquele estado ou localidade.</p>
`;

const TermsOfUseModal: React.FC<TermsOfUseModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="terms-of-use-title"
    >
      <div 
        className="bg-th-dark-secondary rounded-lg shadow-xl relative max-w-3xl w-full max-h-[90vh] flex flex-col"
        onClick={e => e.stopPropagation()} // Prevent closing when clicking inside modal
      >
        <div className="p-6 border-b border-gray-700 flex justify-between items-center">
          <h2 id="terms-of-use-title" className="text-xl font-bold text-white">Termos de Uso</h2>
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
          dangerouslySetInnerHTML={{ __html: termsText }}
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

export default TermsOfUseModal;