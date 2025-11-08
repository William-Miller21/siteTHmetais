import React, { useState } from 'react';
import { MenuIcon, XIcon } from './Icons';

interface HeaderProps {
  onOpenHistoryModal: () => void;
}

const Header: React.FC<HeaderProps> = ({ onOpenHistoryModal }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = [
        { name: 'Bazar', href: 'https://www.instagram.com/stories/highlights/18004707086661038/' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Benefícios', href: '#beneficios' },
    { name: 'Depoimentos', href: '#depoimentos' },
    { name: 'Parceiros', href: '#parceiros' },
    { name: 'Contato', href: '#contato' },
    { name: 'Nossa História', href: '#nossa-historia' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const href = e.currentTarget.getAttribute('href');
    
    if (!href) return;

    // Handle modal trigger
    if (href === '#nossa-historia') {
      e.preventDefault();
      onOpenHistoryModal();
      if (isMenuOpen) {
        setIsMenuOpen(false);
      }
      return;
    }

    // Allow default browser behavior for external links
    if (href.startsWith('http')) {
      if (isMenuOpen) {
        setIsMenuOpen(false);
      }
      return;
    }

    // Handle internal anchor links with smooth scrolling
    e.preventDefault();

    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const targetElement = document.querySelector(href);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
    
    // Close mobile menu if it's open
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };


  return (
    <header className="bg-th-dark shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a href="#" onClick={handleNavClick} className="flex items-center gap-3">
              <img src="https://i.imgur.com/MTA4JYJ.png" alt="TH Metais Logo" className="h-10 w-auto" />
              <span className="text-2xl font-bold text-white">TH Metais</span>
            </a>
          </div>
          <nav className="hidden md:flex md:items-center md:space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={handleNavClick} 
                className="text-gray-300 hover:text-th-green-light transition-colors duration-200"
                {...(link.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="hidden md:block">
            <a href="https://wa.me/5519981277727" target="_blank" rel="noopener noreferrer" className="bg-th-green text-white px-6 py-2 rounded-full hover:bg-th-green-light transition-colors duration-200 shadow-md">
              Solicitar Orçamento
            </a>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-300 hover:text-th-green-light">
              {isMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-th-dark py-4 px-4 space-y-2">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={handleNavClick} 
              className="block text-gray-300 hover:bg-th-dark-secondary p-2 rounded"
              {...(link.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            >
              {link.name}
            </a>
          ))}
          <a href="https://wa.me/5519981277727" target="_blank" rel="noopener noreferrer" className="block bg-th-green text-white text-center px-6 py-2 rounded-full hover:bg-th-green-light transition-colors duration-200 w-full mt-2">
            Solicitar Orçamento
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
