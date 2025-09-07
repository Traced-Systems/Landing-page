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
import Footer from "@/components/Footer";
import DigitalPassport from "@/components/DigitalPassport";
import Foundation from "@/components/Foundation";
import CTA from "@/components/CTA";
import CookieConsentBanner from "@/components/CookieConsent";

// Sheets
import ContactSheet from "@/components/ContactSheet";
import IndustriesSheet from "@/components/IndustriesSheet";
import OurValuesSheet from "@/components/OurValuesSheet";
import OurVisionSheet from "@/components/OurVisionSheet";
import OurPeopleSheet from "@/components/OurPeopleSheet";
import OurPartnersSheet from "@/components/OurPartnersSheet"; // 👈 VIGTIG
import BlogSheet from "@/components/BlogSheet";

type SheetType =
  | "industries"
  | "useCases"
  | "contact"
  | "values"
  | "vision"
  | "people"
  | "blog"
  | "partners"
  | null;

const Index = () => {
  const [activeSheet, setActiveSheet] = useState<SheetType>(null);

  const handleSheetOpen = (sheet: Exclude<SheetType, null>) => {
    setActiveSheet(sheet);
  };
  const handleSheetClose = () => setActiveSheet(null);

  return (
    <div className="min-h-screen bg-white">
      {/* 🔗 Giv Header adgang til at åbne sheets */}
      <Header handleSheetOpen={handleSheetOpen} />

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
        <CTA onContactClick={() => handleSheetOpen("contact")} />
      </main>

      <Footer />

      {/* 🧩 Rendre dét sheet der er aktivt */}
      {activeSheet === "contact" && (
        <ContactSheet isOpen={true} onClose={handleSheetClose} />
      )}
      {activeSheet === "industries" && (
        <IndustriesSheet
          isOpen={true}
          onClose={handleSheetClose}
          scrollToEU={true}
        />
      )}
      {activeSheet === "values" && (
        <OurValuesSheet isOpen={true} onClose={handleSheetClose} />
      )}
      {activeSheet === "vision" && (
        <OurVisionSheet isOpen={true} onClose={handleSheetClose} />
      )}
      {activeSheet === "people" && (
        <OurPeopleSheet isOpen={true} onClose={handleSheetClose} />
      )}
      {activeSheet === "partners" && (
        <OurPartnersSheet isOpen={true} onClose={handleSheetClose} /> // 👈 VIGTIG
      )}
      {activeSheet === "blog" && (
        <BlogSheet isOpen={true} onClose={handleSheetClose} />
      )}

      <CookieConsentBanner />
    </div>
  );
};

export default Index;
