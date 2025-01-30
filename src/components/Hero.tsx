import React from 'react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="pt-32 pb-16 bg-white relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary">
                Traced Systems
              </h1>
              <h2 className="text-2xl md:text-3xl text-gray-700">
                Digital Product Passport
              </h2>
              <p className="text-xl text-gray-600">
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
              <div className="w-[300px] h-[600px] relative">
                <div className="absolute inset-0 transform rotate-[-15deg]">
                  <div className="absolute top-0 w-full h-full bg-white/30 backdrop-blur-lg rounded-3xl shadow-xl"></div>
                  <div className="absolute top-4 w-full h-full bg-white/40 backdrop-blur-lg rounded-3xl shadow-xl"></div>
                  <div className="absolute top-8 w-full h-full bg-white/50 backdrop-blur-lg rounded-3xl shadow-xl"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;