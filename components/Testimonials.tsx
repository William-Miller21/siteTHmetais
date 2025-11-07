import React from 'react';
import { QuoteIcon } from './Icons';

const testimonials = [
  {
    quote: "A TH Metais revolucionou nossa gestão de resíduos. O processo é transparente, eficiente e o impacto positivo é notável. Recomendo fortemente!",
    name: "Juliana Costa",
    title: "CEO, Indústria Têxtil FioBelo",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop",
  },
  {
    quote: "Desde que implementamos a coleta seletiva com a TH Metais, nossos colaboradores estão mais engajados com a sustentabilidade. Um parceiro essencial.",
    name: "Ricardo Alves",
    title: "Diretor de RH, TechCorp Solutions",
    avatar: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=200&auto=format&fit=crop",
  },
  {
    quote: "Além da conformidade legal, a consultoria da TH Metais nos abriu os olhos para novas oportunidades na economia circular. Reduzimos custos e inovamos.",
    name: "Mariana Lima",
    title: "Gerente de Operações, Logística Express",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop",
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="depoimentos" className="bg-th-dark py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">O Que Nossos Clientes Dizem</h2>
          <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">Construímos parcerias de sucesso baseadas em confiança e resultados.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-th-dark-secondary p-8 rounded-lg shadow-lg relative flex flex-col h-full">
                <QuoteIcon className="absolute top-6 left-6 w-16 h-16 text-th-dark opacity-25 z-0" aria-hidden="true" />
                <div className="relative z-10 flex flex-col flex-grow">
                  <p className="text-gray-300 leading-relaxed mb-6 flex-grow">
                    {`"${testimonial.quote}"`}
                  </p>
                  <div className="flex items-center mt-auto">
                    <img className="w-14 h-14 rounded-full object-cover mr-4" src={testimonial.avatar} alt={testimonial.name} />
                    <div>
                      <p className="font-bold text-white">{testimonial.name}</p>
                      <p className="text-sm text-gray-400">{testimonial.title}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;