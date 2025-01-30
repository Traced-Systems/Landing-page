import React from 'react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="pt-32 pb-16 bg-gradient-to-b from-accent to-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary">
              Traced Systems – Digital Product Passport
            </h1>
            <p className="text-xl text-gray-600">
              One Scan. Countless Impacts.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-secondary hover:bg-secondary/90 text-white rounded-full">
                Get in Touch
              </Button>
              <Button variant="outline" className="rounded-full">
                Book Demo
              </Button>
            </div>
          </div>
          
          <div className="relative h-[400px] animate-fade-up">
            <div className="absolute inset-0 bg-gradient-to-tr from-secondary/20 to-primary/20 rounded-3xl">
              {/* Placeholder for 3D smartphone mockup */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-[500px] bg-white/50 rounded-3xl shadow-2xl transform -rotate-12" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;