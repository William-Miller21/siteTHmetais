import React from 'react';
import { TruckIcon, ClipboardListIcon, LightBulbIcon } from './Icons';

interface SolutionCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const SolutionCard: React.FC<SolutionCardProps> = ({ icon, title, description }) => (
  <div className="bg-th-dark-secondary p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center">
    <div className="bg-th-green p-4 rounded-full mb-6">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
    <p className="text-gray-300 leading-relaxed">{description}</p>
  </div>
);


const Solutions: React.FC = () => {
  const solutions = [
    {
      icon: <TruckIcon className="h-8 w-8 text-th-gray" />,
      title: "Coleta e Logística Eficiente",
      description: "Implementamos e gerenciamos sistemas de coleta personalizados para sua empresa, otimizando a separação, o transporte e o descarte de resíduos."
    },
    {
      icon: <ClipboardListIcon className="h-8 w-8 text-th-gray" />,
      title: "Gestão de Resíduos Corporativos",
      description: "Oferecemos um plano completo de gestão de resíduos, desde a análise e classificação até a destinação final, garantindo conformidade e eficiência."
    },
    {
      icon: <LightBulbIcon className="h-8 w-8 text-th-gray" />,
      title: "Valorização de Materiais",
      description: "Transformamos sucatas em recursos. Compramos seus materiais recicláveis (ferro, alumínio, cobre, eletrônicos) com soluções inovadoras e rentáveis."
    }
  ];

  return (
    <section id="servicos" className="bg-th-dark py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Nossas Soluções para um Planeta Melhor</h2>
          <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">Tudo que sua empresa precisa para se tornar uma referência em responsabilidade ambiental.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <SolutionCard key={index} {...solution} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;