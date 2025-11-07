
import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from './Icons';

const slides = [
  {
    imageDesktop: 'https://i.imgur.com/hH3uDP4.png',
    imageMobile: 'https://i.imgur.com/hH3uDP4.png',
    title: 'Coleta no seu Domicílio ou Empresa',
    subtitle: 'Em Piracicaba/SP, transformamos sucata em futuro.',
  },
  {
    imageDesktop: 'https://imgur.com/dLBbydW',
    imageMobile: 'https://imgur.com/dLBbydW',
    title: 'Soluções Completas em Reciclagem',
    subtitle: 'Gestão de resíduos com eficiência e responsabilidade.',
  },
  {
    imageDesktop: 'https://i.imgur.com/7wkWwdM.png',
    imageMobile: 'https://i.imgur.com/7wkWwdM.png',
    title: 'Valorizamos Seus Resíduos',
    subtitle: 'Compramos e reciclamos diversos materiais.',
  },
];

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, []);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 5000);
    return () => clearInterval(slideInterval);
  }, [nextSlide]);

  return (
    <section className="relative w-full h-[56.25vw] md:h-[80vh] bg-th-dark overflow-hidden">
      <div
        className="relative h-full w-full flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="h-full w-full flex-shrink-0"
          >
             {/* Mobile Image */}
            <div
              className="h-full w-full bg-contain bg-no-repeat bg-center md:hidden"
              style={{ backgroundImage: `url(${slide.imageMobile})` }}
            />
            {/* Desktop Image */}
            <div
              className="hidden h-full w-full bg-contain bg-no-repeat bg-center md:block"
              style={{ backgroundImage: `url(${slide.imageDesktop})` }}
            />
          </div>
        ))}
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col items-center justify-center text-center text-white p-4 invisible">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          {slides[currentSlide].title}
        </h1>
        <p className="text-lg md:text-2xl font-semibold text-th-green-light">
          {slides[currentSlide].subtitle}
        </p>
      </div>

      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/30 p-2 rounded-full hover:bg-black/50 transition"
      >
        <ChevronLeftIcon className="h-6 w-6 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/30 p-2 rounded-full hover:bg-black/50 transition"
      >
        <ChevronRightIcon className="h-6 w-6 text-white" />
      </button>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${currentSlide === index ? 'bg-th-green-light' : 'bg-gray-500'}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
