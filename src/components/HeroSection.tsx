import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
import heroChildren from '@/assets/hero-children.jpg';
import heroDigital from '@/assets/hero-digital.jpg';
import heroPlayway from '@/assets/hero-playway.jpg';

const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: heroChildren,
      title: 'The Future Begins Here',
      subtitle: 'Established 2025',
      description: 'Where every child discovers the joy of learning through play',
    },
    {
      image: heroDigital,
      title: 'Modern Digital Classrooms',
      subtitle: 'Smart Learning',
      description: 'Technology-enabled education for the 21st century learners',
    },
    {
      image: heroPlayway,
      title: 'Play-Way Learning Method',
      subtitle: 'Learn Through Play',
      description: 'Nurturing creativity and curiosity in every child',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative h-screen min-h-[700px] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" />
          </div>
        </div>
      ))}

      {/* Content */}
      <div className="relative z-20 h-full container mx-auto px-4 flex items-center">
        <div className="max-w-2xl text-white">
          {/* Badge */}
          <div 
            className="inline-flex items-center gap-2 bg-primary/90 backdrop-blur-sm px-4 py-2 rounded-full mb-6 animate-fade-in"
            style={{ animationDelay: '0.2s' }}
          >
            <span className="text-sm font-medium">{slides[currentSlide].subtitle}</span>
          </div>

          {/* Title */}
          <h1 
            className="font-serif text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight animate-fade-in"
            style={{ animationDelay: '0.4s' }}
          >
            {slides[currentSlide].title}
          </h1>

          {/* Description */}
          <p 
            className="text-lg md:text-xl text-white/90 mb-8 max-w-lg animate-fade-in"
            style={{ animationDelay: '0.6s' }}
          >
            {slides[currentSlide].description}
          </p>

          {/* CTAs */}
          <div 
            className="flex flex-wrap gap-4 animate-fade-in"
            style={{ animationDelay: '0.8s' }}
          >
            <a href="#contact" className="btn-hero">
              Schedule a Visit
            </a>
            <button className="flex items-center gap-3 text-white font-medium hover:text-sunny transition-colors group">
              <span className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-sunny group-hover:scale-110 transition-all">
                <Play className="w-5 h-5 ml-0.5" />
              </span>
              <span>Virtual Tour</span>
            </button>
          </div>
        </div>
      </div>

      {/* Slide Navigation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-4">
        <button
          onClick={prevSlide}
          className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white hover:text-foreground transition-all"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        
        <div className="flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentSlide 
                  ? 'w-8 bg-white' 
                  : 'w-2 bg-white/50 hover:bg-white/75'
              }`}
            />
          ))}
        </div>
        
        <button
          onClick={nextSlide}
          className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white hover:text-foreground transition-all"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-20" />
    </section>
  );
};

export default HeroSection;
