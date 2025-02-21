
import React from "react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const handleContactClick = () => {
    window.dispatchEvent(new CustomEvent('openContact'));
  };

  return (
    <section className="pt-32 pb-16 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 50% 0%, #F0E6D2 0%, #F7F7F5 40%, #E1ECEB 100%)",
          }}
        />
        {/* Background Image */}
        <img
          src="/lovable-uploads/herobg.png"
          alt="Background Overlay"
          className="absolute inset-0 w-full h-full object-cover hidden md:block"
        />
      </div>

      <div className="container mx-auto relative z-10 flex justify-center">
        <div className="grid md:grid-cols-2 gap-[16vw] items-center max-w-[77vw] xl:max-w-[80vw] mx-auto">
          <div className="space-y-8">
            <div className="space-y-4 flex flex-col  items-start">
              <div>
                <img
                  src="/lovable-uploads/BigTitleTracedSystem.png"
                  alt="Traced Systems"
                  className="h-16 md:h-30 lg:h-28 w-auto object-contain -ml-6 md:-ml-6 lg:-ml-11"
                />
              </div>
              <h2 className="text-xl md:text-2xl text-[#173A44]">
                Digital Product Passport
              </h2>
              <p className="text-lg text-[#173A44]">
                One Scan. Countless Impacts.
              </p>
            </div>

            <div className="flex gap-4">
              <Button 
                className="bg-[#E4AC70] hover:bg-[#E6964F] text-white rounded-full px-8 border-none shadow-[inset_3px_3px_6px_rgba(0,0,0,0.08),inset_-3px_-3px_6px_rgba(255,255,255,0.5)]"
                onClick={handleContactClick}
              >
                Get in Touch
              </Button>
            </div>
          </div>

          <div className="relative h-[500px]">
            <div className="absolute inset-0 flex items-center justify-center">
              <img
                src="/lovable-uploads/f13aac64-15e3-4a2a-9838-a7f474b842e5.png"
                alt="Product Mockup"
                className="w-full h-auto max-w-[500px] "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
