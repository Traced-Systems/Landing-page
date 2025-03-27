import React from "react";
import { Button } from "@/components/ui/button";
import Button1 from "./ui/button-1";

interface Button1HeroProps {
  onContactClick?: () => void;
}

// const CTA = ({ onContactClick }: Button1HeroProps) => {
//   const handleContactClick = () => {
//     window.dispatchEvent(new CustomEvent('openContact'));
//   };

const Hero = ({ onContactClick }: Button1HeroProps) => {
  const handleContactClick = () => {
    window.dispatchEvent(new CustomEvent("openContact"));
  };

  return (
    <section className="pt-32 pb-16 relative overflow-hidden z-[5]">
      {/* Gradient background */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 50% 0%, #F0E6D2 0%, #F7F7F5 40%, #E1ECEB 100%)",
          }}
        />
        {/* Background Image for md and larger screens */}
        <img
          src="/lovable-uploads/FinalBGHero.svg"
          alt="Background Overlay"
          className="absolute inset-0 h-[740px] object-cover hidden sm:block"
          style={{ top: "-64px", left: "50%", transform: "translateX(-50%)" }}
        />

        {/* Background Image for small (sm) and smaller screens */}
        <img
          src="/lovable-uploads/Phone_pipes_background.png" // Replace with the actual mobile image
          alt="Mobile Background Overlay"
          className="absolute inset-0 w-full h-[560px] object-cover block sm:hidden "
          style={{ top: "2px", left: "50%", transform: "translateX(-50%)" }}
        />
      </div>

      <div className="container mx-auto relative z-[10] flex justify-center">
        <div className="grid md:grid-cols-2 gap-[8vw] items-center max-w-[77vw] xl:max-w-[80vw] mx-auto">
          <div className="space-y-8">
            <div className="space-y-4 flex flex-col  items-start">
              <div>
                <img
                  src="/lovable-uploads/BigTitleTracedSystem.png"
                  alt="Traced Systems"
                  className="h-24 lg:h-28 w-auto object-contain -ml-8 md:-ml-6 lg:-ml-8 xl:-ml-12"
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
              <Button1
                onClick={handleContactClick}
                className="bg-[#E4AC70] hover:bg-[#E6964F] text-white rounded-full px-8 border-none shadow-[inset_3px_3px_6px_rgba(0,0,0,0.08),inset_-3px_-3px_6px_rgba(255,255,255,0.5)] h-10"
              >
                Get in Touch
              </Button1>
            </div>
          </div>

          <div className="relative h-[350px] md:h-[480px] md:mr-8 ">
            <div className="absolute inset-0 flex items-center justify-center">
              <img
                src="/lovable-uploads/f13aac64-15e3-4a2a-9838-a7f474b842e5.png"
                alt="Product Mockup"
                className="w-full h-auto max-w-[500px] -mt-25 md:mt-15"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
