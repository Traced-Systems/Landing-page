
import React, { useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import LogoMarquee from '@/components/LogoMarquee';
import Features from '@/components/Features';
import About from '@/components/About';
import Benefits from '@/components/Benefits';
import Process from '@/components/Process';
import UseCases from '@/components/UseCases';
import Technologies from '@/components/Technologies';
import Footer from '@/components/Footer';
import DigitalPassport from '@/components/DigitalPassport';
import Foundation from '@/components/Foundation';
import CTA from '@/components/CTA';
import ContactSheet from '@/components/ContactSheet';

const Index = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const handleContactOpen = () => {
    setIsContactOpen(true);
  };

  const handleContactClose = () => {
    setIsContactOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <LogoMarquee />
        <DigitalPassport />
        <Features />
        <About />
        <Benefits />
        <Process />
        <UseCases />
        <Technologies />
        <Foundation />
        <CTA onContactClick={handleContactOpen} />
      </main>
      <Footer />
      <ContactSheet isOpen={isContactOpen} onClose={handleContactClose} />
    </div>
  );
};

export default Index;
