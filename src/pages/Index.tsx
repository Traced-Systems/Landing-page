import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import LogoMarquee from '@/components/LogoMarquee';
import Features from '@/components/Features';
import About from '@/components/About';
import Benefits from '@/components/Benefits';
import Process from '@/components/Process';
import Technologies from '@/components/Technologies';
import Footer from '@/components/Footer';
import DigitalPassport from '@/components/DigitalPassport';

const Index = () => {
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
        <Technologies />
      </main>
      <Footer />
    </div>
  );
};

export default Index;