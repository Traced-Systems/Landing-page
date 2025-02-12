import React, { useState, useEffect } from "react";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const Process = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const steps = [
    {
      title: "Product Journey Monitoring",
      icon: "/lovable-uploads/productJourneyIcon.png",
      description:
        "Gain a complete, bird's-eye view of each product's lifecycle from raw material sourcing to later stages such as component reuse, resale, repair, recycling, or proper disposal. Our platform helps you track and manage every step to boost accountability and sustainability.",
    },
    {
      title: "Value Chain Transparency",
      icon: "/lovable-uploads/valueChainIcon.png",
      description:
        "Ensure every participant in the value chain benefits from the right insights—while safeguarding sensitive information. Our Digital Product Passport encrypts proprietary data, granting access only to authorized stakeholders (like legislators or trusted partners). This selective transparency drives collaboration without compromising trade secrets.",
    },
    {
      title: "Comprehensive Data Integration",
      icon: "/lovable-uploads/dateIntegrationIcon.png",
      description:
        "We seamlessly connect with your existing ERP and operational systems via flexible APIs. You decide which data to share, minimizing workflow disruption while creating a unified overview. It's an adaptable solution that lets you maintain control over your information.",
    },
  ];

  // Handle Click to Expand/Collapse
  const handleCardClick = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  // Handle Click Outside to Close (For Mobile)
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        !document
          .getElementById("process-container")
          ?.contains(event.target as Node)
      ) {
        setExpandedCard(null);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <section className="py-20 bg-[#fff]">
      <div className="container mx-auto px-4" id="process-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#002A38] mb-4">
            How We Do It?
          </h2>
          <p className="text-base text-gray-600">
            The DPP Solution supports EU & public authorities in monitoring
            sustainable practices.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              onClick={() => handleCardClick(index)}
              className={cn(
                "relative rounded-2xl p-6 cursor-pointer transition-all duration-500 ease-in-out bg-[#f9f9f9]",
                "hover:shadow-[4px_4px_10px_0px_rgba(0,0,0,0.05),-4px_-4px_10px_0px_rgba(255,255,255,0.9)]",
                expandedCard === index ? "h-auto" : "h-[280px]"
              )}
            >
              <div
                className={cn(
                  "flex flex-col transition-all duration-500 ease-in-out",
                  expandedCard === index
                    ? "items-start"
                    : "items-center justify-center h-full"
                )}
              >
                {/* Icon & Title in a Row When Expanded */}
                <div
                  className={cn(
                    "flex items-center transition-all duration-500",
                    expandedCard === index
                      ? "mb-4 space-x-4"
                      : "flex-col justify-center gap-3"
                  )}
                >
                  <div
                    className={cn(
                      "transition-all duration-500",
                      expandedCard === index ? "w-10 h-10" : "w-16 h-16"
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
                      "text-lg font-medium text-[#002A38] transition-all duration-500",
                      expandedCard === index
                        ? "text-left text-lg"
                        : "text-center"
                    )}
                  >
                    {step.title}
                  </h3>
                </div>

                {/* Description appears when expanded */}
                <p
                  className={cn(
                    "text-[#4A5567] leading-relaxed transition-all duration-500",
                    expandedCard === index
                      ? "opacity-100 max-h-[500px]"
                      : "opacity-0 max-h-0 overflow-hidden"
                  )}
                >
                  {step.description}
                </p>

                {/* Arrow at the bottom-right corner */}
                <div className="absolute bottom-4 right-4 transition-all duration-300">
                  <ChevronRight className="text-[#E1B382] w-6 h-6" />
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
