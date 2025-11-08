import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Solutions from './components/Solutions';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import Partners from './components/Partners';
import CTA from './components/CTA';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import PrivacyPolicyModal from './components/PrivacyPolicyModal';
import TermsOfUseModal from './components/TermsOfUseModal';
import OurHistoryModal from './components/OurHistoryModal';

const App: React.FC = () => {
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);
  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false);
  const [isHistoryModalOpen, setIsHistoryModalOpen] = useState(false);

  // Effect to prevent background scrolling when modal is open
  useEffect(() => {
    if (isPrivacyModalOpen || isTermsModalOpen || isHistoryModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isPrivacyModalOpen, isTermsModalOpen, isHistoryModalOpen]);

  return (
    <div className="bg-th-dark font-sans">
      <Header onOpenHistoryModal={() => setIsHistoryModalOpen(true)} />
      <main>
        <Hero />
        <Solutions />
        <WhyChooseUs />
        <Testimonials />
        <Partners />
        <CTA />
      </main>
      <Footer 
        onOpenPrivacyModal={() => setIsPrivacyModalOpen(true)}
        onOpenTermsModal={() => setIsTermsModalOpen(true)}
      />
      <WhatsAppButton />
      <PrivacyPolicyModal 
        isOpen={isPrivacyModalOpen} 
        onClose={() => setIsPrivacyModalOpen(false)} 
      />
      <TermsOfUseModal
        isOpen={isTermsModalOpen}
        onClose={() => setIsTermsModalOpen(false)}
      />
      <OurHistoryModal
        isOpen={isHistoryModalOpen}
        onClose={() => setIsHistoryModalOpen(false)}
      />
    </div>
  );
};

export default App;
