
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from "@/lib/utils";

const Process = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const steps = [
    {
      title: 'Product Journey Monitoring',
      icon: '/lovable-uploads/product-journey-icon.png',
      bgImage: '/lovable-uploads/product journey card.png',
      hoverImage: '/lovable-uploads/product-journey.png',
      description: 'Our solution is designed to enhance traceability and transparency across global supply chains, thus promoting visibility and circularity in the entire value chain within any industry.',
    },
    {
      title: 'Value Chain Transparency',
      icon: '/lovable-uploads/value-chain-icon.png',
      bgImage: '/lovable-uploads/Value-chain-card.png',
      hoverImage: '/lovable-uploads/value-chain-hover.png',
      description: 'Our service serves as a digital bridge, connecting all stakeholders in the supply chain ecosystem. By leveraging blockchain technology, we create an immutable and transparent record of every transaction, movement, and transformation of products as they journey from raw materials to finished goods.',
    },
    {
      title: 'Comprehensive Data Integration',
      icon: '/lovable-uploads/date integration icon.png',
      bgImage: '/lovable-uploads/data-integration-card.png',
      hoverImage: '/lovable-uploads/data-integration-hover.png',
      description: 'We seamlessly integrate data from various sources through APIs, to create a holistic view of the entire supply chain.',
    },
  ];

  const handleCardClick = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <section className="py-20 bg-[#f9f9f9]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#002A38] mb-4">
            How We Do It?
          </h2>
          <p className="text-base text-gray-600">
            The DPP Solution supports EU & public authorities in monitoring sustainable practices.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              onClick={() => handleCardClick(index)}
              className={cn(
                "relative rounded-2xl p-6 cursor-pointer transition-all duration-500 ease-in-out h-[400px] group",
                "hover:shadow-[4px_4px_10px_0px_rgba(0,0,0,0.1),-4px_-4px_10px_0px_rgba(255,255,255,0.9)]",
                {
                  "shadow-[2px_2px_5px_0px_rgba(0,0,0,0.05),-2px_-2px_5px_0px_rgba(255,255,255,0.8)]": expandedCard !== index
                }
              )}
              style={{
                backgroundImage: `url(${expandedCard === index ? step.hoverImage : step.bgImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                transition: 'background-image 0.5s ease-in-out'
              }}
            >
              <div className={cn(
                "flex flex-col items-start relative h-full transition-all duration-500 ease-in-out",
                expandedCard === index ? "opacity-100" : "opacity-100"
              )}>
                <div 
                  className={cn(
                    "transition-all duration-500 ease-in-out bg-white rounded-full p-4",
                    expandedCard === index 
                      ? "w-16 h-16 mb-4" 
                      : "w-16 h-16 mb-4"
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
                    "text-xl font-semibold text-white transition-all duration-500 ease-in-out mb-4",
                    expandedCard === index 
                      ? "opacity-100" 
                      : "opacity-100"
                  )}
                >
                  {step.title}
                </h3>

                <p className={cn(
                  "text-white text-sm transition-opacity duration-500",
                  expandedCard === index ? "opacity-100" : "opacity-0"
                )}>
                  {step.description}
                </p>

                {expandedCard !== index && (
                  <div className="absolute bottom-4 left-6">
                    <ChevronDown 
                      className={cn(
                        "text-white transition-transform duration-500",
                        "transform hover:translate-y-1"
                      )}
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
