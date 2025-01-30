import React from 'react';
import { ArrowRight } from "lucide-react";

const Features = () => {
  const features = [
    {
      id: 'textile-card',
      title: 'Textile',
      description: 'Sustainable Fashion',
      image: '/lovable-uploads/cf27f368-89f4-4544-9e6b-74fd5cb37a8b.png',
    },
    {
      id: 'batteries-card',
      title: 'Batteries',
      description: 'Electric Vehicle Solutions',
      image: '/lovable-uploads/3e2d0683-8889-4971-9664-35f2d41a985a.png',
    },
    {
      id: 'espr-card',
      title: 'ESPR Compliant',
      description: 'for all sectors',
      image: '/lovable-uploads/e4138257-7864-41ca-be38-01d4409ac061.png',
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
              className="group relative h-[400px] rounded-2xl overflow-hidden cursor-pointer [perspective:1000px]"
            >
              <div className="relative w-full h-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                {/* Front of Card */}
                <div className="absolute inset-0 [backface-visibility:hidden]">
                  {/* Background Image */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${feature.image})` }}
                  />
                  
                  {/* Content Container */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-between">
                    <div />
                    
                    {/* Title */}
                    <div className="space-y-2">
                      <h3 className="text-2xl font-semibold text-white">
                        {feature.title}
                      </h3>
                    </div>
                    
                    {/* Button Area */}
                    <div className="flex justify-end">
                      <div className="w-10 h-10 rounded-full bg-[#FEC6A1] flex items-center justify-center hover:scale-110 hover:shadow-lg transition-all duration-300">
                        <ArrowRight className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Back of Card */}
                <div className="absolute inset-0 bg-gray-900/95 [transform:rotateY(180deg)] [backface-visibility:hidden] rounded-2xl">
                  <div className="absolute inset-0 p-6 flex flex-col justify-between">
                    {/* Icon Placeholder */}
                    <div className="w-12 h-12 rounded-full bg-white/10" />
                    
                    {/* Content */}
                    <div className="space-y-4 text-center">
                      <h3 className="text-2xl font-semibold text-white">
                        {feature.title}
                      </h3>
                      <p className="text-white/90">
                        {feature.description}
                      </p>
                    </div>
                    
                    {/* Know More Button */}
                    <div className="flex justify-end">
                      <div className="text-white flex items-center gap-2">
                        Know More
                        <ArrowRight className="w-5 h-5" />
                      </div>
                    </div>
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