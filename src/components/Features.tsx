import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Features = () => {
  const features = [
    {
      title: 'Textile',
      image: '/placeholder.svg',
    },
    {
      title: 'Batteries',
      image: '/placeholder.svg',
    },
    {
      title: 'ESPR Compliant',
      image: '/placeholder.svg',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
          Digital Product Passport – Key Sectors
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-accent rounded-2xl p-6 transition-all hover:shadow-lg"
            >
              <img
                src={feature.image}
                alt={feature.title}
                className="w-full h-48 object-cover rounded-xl mb-6"
              />
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-primary">{feature.title}</h3>
                <Button
                  variant="ghost"
                  size="icon"
                  className="group-hover:translate-x-1 transition-transform"
                >
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;