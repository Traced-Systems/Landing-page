import React from 'react';
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="relative bg-[#F7F7F5] py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#1E4B56] leading-tight">
            Trace Your Impact, Reward Your Actions, Sustain Our Planet.
          </h2>
          <Button 
            variant="outline"
            className="border-[#D5A87E] text-[#D5A87E] hover:bg-[#D5A87E]/5 transition-colors duration-300"
          >
            Get in touch
          </Button>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 md:h-24 overflow-hidden">
        <svg
          className="absolute bottom-0 w-full h-full"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#1E4B56"
            fillOpacity="1"
            d="M0,128L48,122.7C96,117,192,107,288,101.3C384,96,480,96,576,101.3C672,107,768,117,864,117.3C960,117,1056,107,1152,101.3C1248,96,1344,96,1392,96L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default CTA;