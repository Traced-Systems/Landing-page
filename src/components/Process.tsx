import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from "@/lib/utils";

const Process = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const steps = [
    {
      title: 'Product Journey Monitoring',
      icon: '/lovable-uploads/10374958-caa8-4330-a504-1181fcff9614.png',
      description: 'Our solution is designed to enhance traceability and transparency across global supply chains, thus promoting visibility and circularity in the entire value chain within any industry.',
    },
    {
      title: 'Value Chain Transparency',
      icon: '/lovable-uploads/098369a9-7550-4c27-9737-ec59a6c5dfbd.png',
      description: 'Our service serves as a digital bridge, connecting all stakeholders in the supply chain ecosystem. By leveraging blockchain technology, we create an immutable and transparent record of every transaction, movement, and transformation of products as they journey from raw materials to finished goods.',
    },
    {
      title: 'Comprehensive Data Integration',
      icon: '/lovable-uploads/46c4bffb-cd00-4a8a-97a8-49d50add74f6.png',
      description: 'We seamlessly integrate data from various sources through APIs, to create a holistic view of the entire supply chain.',
    },
  ];

  const handleCardClick = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <section className="py-20 bg-[#f7f7f7]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#002A38] mb-4">
            How We Do It?
          </h2>
          <p className="text-gray-600">
            The DPP Solution supports EU & public authorities in monitoring sustainable practices.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              onClick={() => handleCardClick(index)}
              className={cn(
                "bg-white rounded-2xl p-6 cursor-pointer transition-all duration-500 ease-in-out h-[300px]",
                "hover:shadow-[4px_4px_10px_0px_rgba(0,0,0,0.1),-4px_-4px_10px_0px_rgba(255,255,255,0.9)]",
                "shadow-[2px_2px_5px_0px_rgba(0,0,0,0.05),-2px_-2px_5px_0px_rgba(255,255,255,0.8)]"
              )}
            >
              <div className="flex flex-col items-center relative h-full">
                <div 
                  className={cn(
                    "transition-all duration-500 ease-in-out",
                    expandedCard === index 
                      ? "w-12 h-12 absolute top-0 left-0" 
                      : "w-20 h-20 mb-4"
                  )}
                >
                  <img 
                    src={step.icon} 
                    alt={step.title}
                    className="w-full h-full object-contain"
                  />
                </div>
                
                <h3 
                  className={cn(
                    "text-xl font-semibold text-[#002A38] transition-all duration-500 ease-in-out",
                    expandedCard === index 
                      ? "opacity-0 translate-y-2 scale-95" 
                      : "opacity-100 mt-4 text-center"
                  )}
                >
                  {step.title}
                </h3>

                {expandedCard !== index && (
                  <div className="absolute bottom-1/3 left-0 right-0 flex justify-center">
                    <ChevronDown 
                      className={cn(
                        "text-gray-500 transition-transform duration-500",
                        "transform hover:translate-y-1"
                      )}
                    />
                  </div>
                )}

                <div
                  className={cn(
                    "overflow-hidden transition-all duration-500 ease-in-out",
                    expandedCard === index 
                      ? "opacity-100 mt-8 text-left transform-none" 
                      : "opacity-0 translate-y-2 scale-95 absolute"
                  )}
                >
                  <p className="text-gray-600">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;