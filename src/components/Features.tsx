import React from 'react';
import { ArrowRight } from "lucide-react";

const Features = () => {
  const features = [
    {
      id: 'espr-card',
      title: 'ESPR Compliant',
      description: 'for all sectors',
      image: '/lovable-uploads/e4138257-7864-41ca-be38-01d4409ac061.png',
    },
    {
      id: 'batteries-card',
      title: 'Batteries',
      description: 'Electric Vehicle Solutions',
      image: '/lovable-uploads/3e2d0683-8889-4971-9664-35f2d41a985a.png',
    },
    {
      id: 'textile-card',
      title: 'Textile',
      description: 'Sustainable Fashion',
      image: '/lovable-uploads/cf27f368-89f4-4544-9e6b-74fd5cb37a8b.png',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
          Digital Product Passport – Key Sectors
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              id={feature.id}
              className="group relative h-[400px] rounded-2xl overflow-hidden cursor-pointer"
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundImage: `url(${feature.image})` }}
              />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gray-900/0 group-hover:bg-gray-900/60 transition-all duration-300" />
              
              {/* Content Container */}
              <div className="absolute inset-0 p-6 flex flex-col justify-between">
                {/* Icon Placeholder (visible on hover) */}
                <div className="w-12 h-12 rounded-full bg-white/0 group-hover:bg-white/10 transition-all duration-300" />
                
                {/* Title and Description */}
                <div className="space-y-2">
                  <h3 className="text-2xl font-semibold text-white">
                    {feature.title}
                  </h3>
                  <p className="text-white/0 group-hover:text-white/90 transition-all duration-300">
                    {feature.description}
                  </p>
                </div>
                
                {/* Button Area */}
                <div className="flex justify-end">
                  {/* Default Button (visible when not hovering) */}
                  <div className="w-10 h-10 rounded-full bg-[#FEC6A1] flex items-center justify-center transition-all duration-300 group-hover:opacity-0 hover:scale-110 hover:shadow-lg">
                    <ArrowRight className="w-5 h-5 text-white" />
                  </div>
                  
                  {/* Hover Text (visible when hovering) */}
                  <div className="absolute bottom-6 right-6 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center gap-2">
                    Know More
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;