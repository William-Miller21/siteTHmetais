import React from 'react';
import { 
  CheckCircleIcon, 
  CanIcon,
  WireIcon,
  ComputerIcon,
  MicrowaveIcon,
  FridgeIcon
} from './Icons';

const benefits = [
  {
    title: "Impacto Ambiental Positivo",
    description: "Reduza a pegada de carbono da sua empresa e contribua diretamente para a preservação do meio ambiente."
  },
  {
    title: "Eficiência e Redução de Custos",
    description: "Nossos processos otimizados podem diminuir seus custos operacionais com descarte de resíduos."
  },
  {
    title: "Fortalecimento da Marca",
    description: "Associe sua empresa a práticas sustentáveis, atraindo clientes e talentos que valorizam a responsabilidade socioambiental."
  },
  {
    title: "Conformidade e Certificação",
    description: "Garantimos que sua empresa esteja em conformidade com todas as regulamentações ambientais, evitando multas e passivos."
  }
];

const materials = [
    { name: 'Can', Icon: CanIcon },
    { name: 'Wire', Icon: WireIcon },
    { name: 'Computer', Icon: ComputerIcon },
    { name: 'Microwave', Icon: MicrowaveIcon },
    { name: 'Fridge', Icon: FridgeIcon },
];

const WhyChooseUs: React.FC = () => {
  return (
    <section id="beneficios" className="bg-th-dark-secondary py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Por Que Escolher a TH Metais?</h2>
            <p className="text-gray-300 mb-8 leading-relaxed">
              A parceria com a TH Metais não é apenas sobre descarte de lixo, é sobre gerar valor, fortalecer sua marca e construir um legado positivo.
            </p>
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-th-green-light flex-shrink-0 mt-1 mr-4" />
                  <div>
                    <h3 className="font-semibold text-lg text-white">{benefit.title}</h3>
                    <p className="text-gray-300">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-th-dark p-8 rounded-lg shadow-lg">
             <div className="text-center">
                <h3 className="font-bold text-2xl text-white">COMPRAMOS: METAIS & ELETRÔNICOS</h3>
                <div className="flex justify-center items-center my-6 gap-4">
                     <img src="https://i.imgur.com/MTA4JYJ.png" alt="TH Metais Logo" className="h-16 w-auto" />
                     <div>
                        <p className="font-bold text-3xl text-white">TH METAIS</p>
                        <p className="font-semibold text-xl text-th-lime tracking-widest">RECICLAGEM</p>
                     </div>
                </div>
                <div className="flex justify-center items-end space-x-4 my-6">
                    {materials.map(({ name, Icon }) => (
                      <Icon key={name} className="h-12 w-12 text-th-gray" aria-label={name} />
                    ))}
                </div>
                <p className="text-gray-300 my-4">DE SUCATA A RECURSO, PELO FUTURO DE PIRACICABA/SP!</p>
                <a 
                  href="https://www.instagram.com/p/DDR7DknOObz/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-th-lime text-th-dark font-bold py-3 px-8 rounded-md shadow-md hover:brightness-105 transition inline-block"
                >
                    VALORIZE SEU MATERIAL!
                </a>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;