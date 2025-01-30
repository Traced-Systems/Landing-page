import React from 'react';
import { Button } from "@/components/ui/button";

const Technologies = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">
              What technologies are behind DPP?
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Our Digital Product Passport solution leverages cutting-edge technologies to ensure secure, scalable, and efficient product tracking across the entire supply chain.
            </p>
            <Button variant="secondary" className="rounded-full">
              Know More
            </Button>
          </div>
          
          <div className="relative">
            <img
              src="/placeholder.svg"
              alt="Technology Stack"
              className="w-full rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;