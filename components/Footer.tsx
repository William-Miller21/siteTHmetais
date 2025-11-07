import React from 'react';
import { MailIcon, PhoneIcon, LocationMarkerIcon, InstagramIcon, FacebookIcon } from './Icons';

interface FooterProps {
  onOpenPrivacyModal: () => void;
  onOpenTermsModal: () => void;
}

const Footer: React.FC<FooterProps> = ({ onOpenPrivacyModal, onOpenTermsModal }) => {
  const addressUrl = "https://www.google.com/maps/search/?api=1&query=R.+Angelino+Stella,+470+-+Gleba+Califórnia,+Piracicaba+-+SP,+13403-291";
  const instagramUrl = "https://www.instagram.com/thmetais_/";
  const facebookUrl = "https://www.facebook.com/profile.php?id=61564496177282";

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    
    if (!href) return;

    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const targetElement = document.querySelector(href);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-th-dark text-gray-300">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Coluna 1: Logo e Descrição */}
          <div className="space-y-4">
            <a href="#" onClick={handleNavClick} className="flex items-center gap-3">
              <img src="https://i.imgur.com/MTA4JYJ.png" alt="TH Metais Logo" className="h-9 w-auto" />
              <span className="text-2xl font-bold text-white">TH Metais</span>
            </a>
            <p className="text-gray-400">
              Liderando a transformação ambiental com soluções inteligentes em reciclagem e gestão de resíduos metálicos.
            </p>
            <div className="pt-2">
              <p className="font-semibold text-white mb-3">Siga-nos nas redes sociais</p>
              <div className="flex space-x-4">
                <a href={instagramUrl} target="_blank" rel="noopener noreferrer" aria-label="Instagram da TH Metais" className="text-gray-400 hover:text-white transition-colors duration-300">
                  <InstagramIcon className="h-6 w-6" />
                </a>
                <a href={facebookUrl} target="_blank" rel="noopener noreferrer" aria-label="Facebook da TH Metais" className="text-gray-400 hover:text-white transition-colors duration-300">
                  <FacebookIcon className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Coluna 2: Contato */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contato</h4>
            <ul className="space-y-3">
               <li className="flex items-start">
                <LocationMarkerIcon className="w-5 h-5 mr-3 text-th-green-light mt-1 flex-shrink-0" />
                <a href={addressUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white">R. Angelino Stella, 470 - Gleba Califórnia, Piracicaba - SP, 13403-291</a>
              </li>
              <li className="flex items-center">
                <MailIcon className="w-5 h-5 mr-3 text-th-green-light" />
                <a href="mailto:thmetais994@gmail.com" className="hover:text-white">thmetais994@gmail.com</a>
              </li>
              <li className="flex items-center">
                <PhoneIcon className="w-5 h-5 mr-3 text-th-green-light" />
                <a href="tel:+5519981277727" className="hover:text-white">(19) 98127-7727</a>
              </li>
            </ul>
          </div>
          
          {/* Coluna 3: Links Rápidos */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Navegação</h4>
            <ul className="space-y-2">
              <li><a href="#servicos" onClick={handleNavClick} className="hover:text-white">Serviços</a></li>
              <li><a href="#beneficios" onClick={handleNavClick} className="hover:text-white">Benefícios</a></li>
              <li><a href="#depoimentos" onClick={handleNavClick} className="hover:text-white">Depoimentos</a></li>
              <li><a href="#parceiros" onClick={handleNavClick} className="hover:text-white">Parceiros</a></li>
              <li><a href="https://www.instagram.com/stories/highlights/18004707086661038/" target="_blank" rel="noopener noreferrer" className="hover:text-white">Bazar</a></li>
              <li><button onClick={onOpenTermsModal} className="hover:text-white text-left">Termos de Uso</button></li>
              <li><button onClick={onOpenPrivacyModal} className="hover:text-white text-left">Política de Privacidade</button></li>
            </ul>
          </div>

          {/* Coluna 4: Horário */}
          <div>
             <h4 className="text-lg font-semibold text-white mb-4">Horário de Funcionamento</h4>
             <ul className="space-y-2 text-gray-400">
                <li>Seg - Sex: <span className="text-gray-300">08:00 – 18:00</span></li>
                <li>Sábado: <span className="text-gray-300">08:00 – 13:00</span></li>
                <li>Domingo: <span className="text-gray-300">Fechado</span></li>
             </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} TH Metais Reciclagem. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;