
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
      description: 'Gain a complete, bird\'s-eye view of each product\'s lifecycle from raw material sourcing to later stages such as component reuse, resale, repair, recycling, or proper disposal. Our platform helps you track and manage every step to boost accountability and sustainability.',
    },
    {
      title: 'Value Chain Transparency',
      icon: '/lovable-uploads/value-chain-icon.png',
      bgImage: '/lovable-uploads/Value-chain-card.png',
      hoverImage: '/lovable-uploads/value-chain-hover.png',
      description: 'Ensure every participant in the value chain benefits from the right insights—while safeguarding sensitive information. Our Digital Product Passport encrypts proprietary data, granting access only to authorized stakeholders (like legislators or trusted partners). This selective transparency drives collaboration without compromising trade secrets.',
    },
    {
      title: 'Comprehensive Data Integration',
      icon: '/lovable-uploads/date integration icon.png',
      bgImage: '/lovable-uploads/data-integration-card.png',
      hoverImage: '/lovable-uploads/data-integration-hover.png',
      description: 'We seamlessly connect with your existing ERP and operational systems via flexible APIs. You decide which data to share, minimizing workflow disruption while creating a unified overview. It\'s an adaptable solution that lets you maintain control over your information.',
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
                "relative rounded-2xl p-6 cursor-pointer transition-all duration-500 ease-in-out bg-white",
                "hover:shadow-[4px_4px_10px_0px_rgba(0,0,0,0.1),-4px_-4px_10px_0px_rgba(255,255,255,0.9)]",
                expandedCard === index ? "h-auto" : "h-[280px]"
              )}
            >
              <div className={cn(
                "flex flex-col items-start relative transition-all duration-500 ease-in-out h-full",
                expandedCard === index ? "opacity-100" : "opacity-100"
              )}>
                <div className="w-16 h-16 mb-6 flex items-center justify-center">
                  <img 
                    src={step.icon} 
                    alt={step.title}
                    className="w-full h-full object-contain"
                  />
                </div>
                
                <h3 className="text-xl font-semibold text-[#002A38] mb-4">
                  {step.title}
                </h3>

                <p className={cn(
                  "text-[#4A5567] leading-relaxed transition-all duration-500",
                  expandedCard === index ? "opacity-100" : "opacity-0 h-0"
                )}>
                  {step.description}
                </p>

                <div className={cn(
                  "absolute left-1/2 -translate-x-1/2 bottom-0 transition-all duration-300",
                  expandedCard === index ? "opacity-0" : "opacity-100"
                )}>
                  <ChevronDown className="text-[#002A38] w-6 h-6" />
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

