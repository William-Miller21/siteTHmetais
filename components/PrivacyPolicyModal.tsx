import React from 'react';
import { XIcon } from './Icons';

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const policyText = `
  <h2>Política Privacidade</h2><p>A sua privacidade é importante para nós. É política do TH Metais respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site <a href="thmetais.com.br">TH Metais</a>, e outros sites que possuímos e operamos.</p><p>Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento. Também informamos por que estamos coletando e como será usado.</p><p>Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando armazenamos dados, protegemos dentro de meios comercialmente aceitáveis ​​para evitar perdas e roubos, bem como acesso, divulgação, cópia, uso ou modificação não autorizados.</p><p>Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido por lei.</p><p>O nosso site pode ter links para sites externos que não são operados por nós. Esteja ciente de que não temos controle sobre o conteúdo e práticas desses sites e não podemos aceitar responsabilidade por suas respectivas&nbsp;<a href="https://politicaprivacidade.com/" rel="noopener noreferrer" target="_blank">políticas de privacidade</a>.</p><p>Você é livre para recusar a nossa solicitação de informações pessoais, entendendo que talvez não possamos fornecer alguns dos serviços desejados.</p><p>O uso continuado de nosso site será considerado como aceitação de nossas práticas em torno de privacidade e informações pessoais. Se você tiver alguma dúvida sobre como lidamos com dados do usuário e informações pessoais, entre em contacto connosco.</p><ul><li>O serviço Google AdSense que usamos para veicular publicidade usa um cookie DoubleClick para veicular anúncios mais relevantes em toda a Web e limitar o número de vezes que um determinado anúncio é exibido para você.</li><li>Para mais informações sobre o Google AdSense, consulte as FAQs oficiais sobre privacidade do Google AdSense.</li><li>Utilizamos anúncios para compensar os custos de funcionamento deste site e fornecer financiamento para futuros desenvolvimentos. Os cookies de publicidade comportamental usados ​​por este site foram projetados para garantir que você forneça os anúncios mais relevantes sempre que possível, rastreando anonimamente seus interesses e apresentando coisas semelhantes que possam ser do seu interesse.</li><li>Vários parceiros anunciam em nosso nome e os cookies de rastreamento de afiliados simplesmente nos permitem ver se nossos clientes acessaram o site através de um dos sites de nossos parceiros, para que possamos creditá-los adequadamente e, quando aplicável, permitir que nossos parceiros afiliados ofereçam qualquer promoção que pode fornecê-lo para fazer uma compra.</li></ul><p><br></p><h3>Compromisso do Usuário</h3><p>O usuário se compromete a fazer uso adequado dos conteúdos e da informação que o TH Metais oferece no site e com caráter enunciativo, mas não limitativo:</p><ul><li>A) Não se envolver em atividades que sejam ilegais ou contrárias à boa fé a à ordem pública;</li><li>B) Não difundir propaganda ou conteúdo de natureza racista, xenofóbica, jogos de sorte ou azar, qualquer tipo de pornografia ilegal, de apologia ao terrorismo ou contra os direitos humanos;</li><li>C) Não causar danos aos sistemas físicos (hardwares) e lógicos (softwares) do TH Metais, de seus fornecedores ou terceiros, para introduzir ou disseminar vírus informáticos ou quaisquer outros sistemas de hardware ou software que sejam capazes de causar danos anteriormente mencionados.</li></ul><h3>Mais informações</h3><p>Esperemos que esteja esclarecido e, como mencionado anteriormente, se houver algo que você não tem certeza se precisa ou não, geralmente é mais seguro deixar os cookies ativados, caso interaja com um dos recursos que você usa em nosso site.</p><p>Esta política é efetiva a partir de&nbsp;7 November 2025 13:04</p>
`;

const PrivacyPolicyModal: React.FC<PrivacyPolicyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="privacy-policy-title"
    >
      <div 
        className="bg-th-dark-secondary rounded-lg shadow-xl relative max-w-3xl w-full max-h-[90vh] flex flex-col"
        onClick={e => e.stopPropagation()} // Prevent closing when clicking inside modal
      >
        <div className="p-6 border-b border-gray-700 flex justify-between items-center">
          <h2 id="privacy-policy-title" className="text-xl font-bold text-white">Política de Privacidade</h2>
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
          dangerouslySetInnerHTML={{ __html: policyText }}
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

export default PrivacyPolicyModal;