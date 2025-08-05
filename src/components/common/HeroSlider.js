import React, { useState, useEffect } from 'react';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
      title: 'Welcome to Kings Modern Academy',
      subtitle: 'Nurturing Tomorrow\'s Leaders Today'
    },
    {
      image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
      title: 'Excellence in Education',
      subtitle: 'From Nursery to Secondary'
    },
    {
      image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
      title: 'Holistic Development',
      subtitle: 'Academic Excellence & Character Building'
    }
  ];

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const currentSlideData = slides[currentSlide];

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000"
        style={{ 
          backgroundImage: `url(${currentSlideData.image})`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>
      
      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-white px-4 max-w-7xl mx-auto z-10">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-center mb-6 animate-fadeInUp">
          {currentSlideData.title}
        </h1>
        <p className="text-xl md:text-2xl text-center mb-10 animate-fadeInUp animation-delay-300">
          {currentSlideData.subtitle}
        </p>
        <button 
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 animate-fadeInUp animation-delay-600"
        >
          Learn More
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-white scale-125' : 'bg-white bg-opacity-50'
            }`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <button 
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        className="absolute bottom-28 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer z-20"
      >
        <div className="w-8 h-12 rounded-full border-2 border-white border-opacity-70 flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white bg-opacity-70 rounded-full animate-pulse"></div>
        </div>
      </button>
    </div>
  );
};

export default HeroSlider;
