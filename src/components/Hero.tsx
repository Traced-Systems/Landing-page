import React from "react";
import { Button } from "@/components/ui/button";

const Hero = () => {
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
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4 flex flex-col  items-start">
              <img
                src="/lovable-uploads/BigTitleTracedSystem.png"
                alt="Traced Systems"
                className="w-auto h-16 md:h-20 lg:h-24 -ml-4 md:-ml-6 lg:-ml-11"
              />
              <h2 className="text-xl md:text-2xl text-[#173A44]">
                Digital Product Passport
              </h2>
              <p className="text-lg text-[#173A44]">
                One Scan. Countless Impacts.
              </p>
            </div>

            <div className="flex gap-4">
              <Button className="bg-white border-2 border-gray-200 text-gray-800 hover:bg-gray-50 rounded-full px-8">
                Get in Touch
              </Button>
              <Button className="bg-[#F4A261] hover:bg-[#E76F51] text-white rounded-full px-8 border-none">
                Book Demo
              </Button>
            </div>
          </div>

          <div className="relative h-[500px]">
            <div className="absolute inset-0 flex items-center justify-center">
              <img
                src="/lovable-uploads/f13aac64-15e3-4a2a-9838-a7f474b842e5.png"
                alt="Product Mockup"
                className="w-full h-auto max-w-[500px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
