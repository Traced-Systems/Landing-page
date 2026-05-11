import React, { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LogoMarquee from "@/components/LogoMarquee";
import Features from "@/components/Features";
import About from "@/components/About";
import Benefits from "@/components/Benefits";
import Process from "@/components/Process";
import UseCases from "@/components/UseCases";
import Blog from "@/components/Blog";
import OurTech from "@/components/OurTech";
import Technologies from "@/components/Technologies";
import DigitalPassport from "@/components/DigitalPassport";
import Foundation from "@/components/Foundation";
import CTA from "@/components/CTA";
import CookieConsentBanner from "@/components/CookieConsent";


const Index = () => {
 

  return (
    <div className="min-h-screen bg-white">
      {/* 🔗 Giv Header adgang til at åbne sheets */}

      <main>
        <Hero />
        <LogoMarquee />
        <DigitalPassport />
        <Features />
        <About />
        <Benefits />
        <Process />
        <UseCases />
        <Blog />
        <OurTech />
        <Technologies />
        <Foundation />
        {/* CTA-knap åbner contact-sheet via samme mekanisme */}
        <CTA  />
      </main>
    
    

      

      <CookieConsentBanner />
    </div>
  );
};

export default Index;
