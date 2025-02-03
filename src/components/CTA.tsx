import React from 'react';
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="relative bg-[#f2f1ee] py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#1E4B56] leading-tight">
            Trace Your Impact, Reward Your Actions, Sustain Our Planet.
          </h3>
          <Button 
            variant="outline"
            className="border-[#D5A87E] text-[#D5A87E] hover:bg-[#D5A87E]/5 transition-colors duration-300"
          >
            Get in touch
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;