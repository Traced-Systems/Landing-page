
import React, { useState } from 'react';
import { ArrowRight, Shirt, Battery, FileText } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import TextilesSheet from './TextilesSheet';
import BatteriesSheet from './BatteriesSheet';

const Features = () => {
  const [activeSheet, setActiveSheet] = useState<'textiles' | 'batteries' | null>(null);

  const features = [
    {
      id: 'textile-card',
      title: 'Textiles',
      description: 'Sustainable Fashion',
      image: '/lovable-uploads/7db51ad9-4f3d-4085-b9e9-2004e66476b4.png',
      icon: Shirt,
      hoverContent: "By tracking origin, durability, and recyclability, the DPP encourages circular practices—repairing, reusing, and recycling. It's a vital step toward reducing waste and achieving sustainability in the fashion and textile industries.",
    },
    {
      id: 'batteries-card',
      title: 'Batteries',
      description: 'Electric Vehicle Solutions',
      image: '/lovable-uploads/b4dba204-17e1-41a5-b674-ae3639567fd5.png',
      icon: Battery,
      hoverContent: "As the demand for batteries grows, particularly in electric vehicles and renewable energy storage, the Digital Product Passport (DPP) ensures compliance with sustainability regulations, supporting industries in meeting environmental standards and driving eco-efficient innovations.",
    },
    {
      id: 'espr-card',
      title: 'Supporting Sectors',
      description: 'Across EU Regulations',
      image: '/lovable-uploads/a4205a69-444a-4317-be96-d4751706d608.png',
      icon: FileText,
      hoverContent: "Our Digital Product Passport (DPP) streamlines compliance for various industries, ensuring seamless adaptation to evolving EU regulations. From the Ecodesign for Sustainable Products Regulation (ESPR) to the Right to Repair (R2R) Framework and Circular Economy Legislation, we help businesses enhance transparency, improve sustainability, and stay ahead of legislative demands.",
    },
  ];

  const handleCardClick = (id: string) => {
    if (id === 'textile-card') {
      setActiveSheet('textiles');
    } else if (id === 'batteries-card') {
      setActiveSheet('batteries');
    }
  };

  const handleSheetClose = () => {
    setActiveSheet(null);
  };

  return (
    <>
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="inline-block text-center mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">
              Digital Product Passport – Key Sectors
            </h2>
            <Separator className="my-4 h-1 bg-[#D4904E]" />
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.id}
                  id={feature.id}
                  className="group relative h-[340px] rounded-2xl overflow-hidden cursor-pointer [perspective:1000px] hover:scale-105 transition-transform duration-300"
                  onClick={() => handleCardClick(feature.id)}
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
                        {/* Icon and Title */}
                        <div className="flex items-center space-x-2">
                          <Icon className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          <div className="text-white text-2xl font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            {feature.title}
                          </div>
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
                    <div className="absolute inset-0 bg-[#f7f7f7] [transform:rotateY(180deg)] [backface-visibility:hidden] rounded-2xl">
                      <div className="absolute inset-0 p-6 flex flex-col justify-between">
                        {/* Content */}
                        <div className="space-y-4">
                          <div className="flex items-center space-x-2">
                            <Icon className="w-6 h-6 text-[#173A44]" />
                            <h3 className="text-2xl font-semibold text-[#173A44]">
                              {feature.title}
                            </h3>
                          </div>
                          <p className="text-[#173A44] text-sm leading-relaxed">
                            {feature.hoverContent}
                          </p>
                        </div>
                        
                        {/* Know More Button */}
                        <div className="flex justify-end">
                          <div className="text-[#173A44] flex items-center gap-2">
                            Know More
                            <ArrowRight className="w-5 h-5" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <TextilesSheet 
        isOpen={activeSheet === 'textiles'}
        onClose={handleSheetClose}
        onBack={handleSheetClose}
      />

      <BatteriesSheet 
        isOpen={activeSheet === 'batteries'}
        onClose={handleSheetClose}
        onBack={handleSheetClose}
      />
    </>
  );
};

export default Features;
