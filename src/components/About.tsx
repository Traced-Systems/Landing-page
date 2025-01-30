import React from 'react';
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section className="py-20 bg-accent">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">
              Who are we?
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We are pioneering the future of product lifecycle management through innovative digital solutions. Our Digital Product Passport technology enables transparent, sustainable, and compliant supply chains.
            </p>
            <Button variant="secondary" className="rounded-full">
              Know More
            </Button>
          </div>
          
          <div className="relative">
            <img
              src="/lovable-uploads/beb0e791-c147-4bc1-8cb1-a5f6e1d1219d.png"
              alt="Analytics Dashboard"
              className="w-full rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;