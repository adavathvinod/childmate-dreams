import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import StatsBar from '@/components/StatsBar';
import AboutSection from '@/components/AboutSection';
import FeaturesSection from '@/components/FeaturesSection';
import GallerySection from '@/components/GallerySection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FAQSection from '@/components/FAQSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Sticky Header */}
      <Header />
      
      {/* Hero Slider */}
      <HeroSection />
      
      {/* Quick Stats Bar */}
      <StatsBar />
      
      {/* About Section */}
      <AboutSection />
      
      {/* Play-Way Features */}
      <FeaturesSection />
      
      {/* Infrastructure Gallery */}
      <GallerySection />
      
      {/* Parent Testimonials */}
      <TestimonialsSection />
      
      {/* FAQ Section */}
      <FAQSection />
      
      {/* Contact & Location */}
      <ContactSection />
      
      {/* Footer */}
      <Footer />
      
      {/* Floating WhatsApp Button */}
      <WhatsAppButton />
    </div>
  );
};

export default Index;
