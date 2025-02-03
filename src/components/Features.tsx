import React from 'react';
import { ArrowRight } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const Features = () => {
  const features = [
    {
      id: 'textile-card',
      title: 'Textile',
      description: 'Sustainable Fashion',
      image: '/lovable-uploads/7db51ad9-4f3d-4085-b9e9-2004e66476b4.png',
    },
    {
      id: 'batteries-card',
      title: 'Batteries',
      description: 'Electric Vehicle Solutions',
      image: '/lovable-uploads/973d7c66-1d01-4e1e-89ce-2dee7a7c3dae.png',
    },
    {
      id: 'espr-card',
      title: 'ESPR Compliant',
      description: 'for all sectors',
      image: '/lovable-uploads/a4205a69-444a-4317-be96-d4751706d608.png',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="inline-block text-center mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            Digital Product Passport – Key Sectors
          </h2>
          <Separator className="my-4 h-1 bg-[#D4904E]" />
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {features.map((feature) => (
            <div
              key={feature.id}
              id={feature.id}
              className="group relative h-[340px] rounded-2xl overflow-hidden cursor-pointer [perspective:1000px]"
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