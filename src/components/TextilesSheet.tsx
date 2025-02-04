import React from 'react';
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import IndustrySheetCard from './shared/IndustrySheetCard';
import IndustrySheetCTA from './shared/IndustrySheetCTA';

interface TextilesSheetProps {
  isOpen: boolean;
  onClose: () => void;
  onBack: () => void;
}

const TextilesSheet = ({ isOpen, onClose, onBack }: TextilesSheetProps) => {
  const cards = [
    {
      title: "Lifecycle Traceability",
      content: "Our platform unites data and stakeholders at every stage from raw materials to recycling or resale offering actionable transparency. By integrating all touchpoints in the supply chain, we help businesses reduce waste, build trust, and make more informed decisions.",
      icon: "/lovable-uploads/transparency.png"
    },
    {
      title: "Ensure Reliable Compliance",
      content: "Powered by secure blockchain, our solution provides tamper‐proof records to meet both internal and external standards. Data validation and sharing streamlined compliance, boost stakeholder confidence, and lay the groundwork for truly sustainable operations.",
      icon: "/lovable-uploads/compliance.png"
    },
    {
      title: "Enable Sustainable Growth",
      content: "We equip organizations to meet the rising demand for credible, eco‐friendly products whether in B2B or B2C markets. By verifying sustainability claims and improving transparency, our tool helps businesses stand out, reduce environmental impact, and foster profitable growth.",
      icon: "/lovable-uploads/growth-icon.png"
    }
  ];

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent 
        side="right" 
        className="!w-[75vw] 2xl:!w-[66vw] sm:!max-w-[75vw] 2xl:!max-w-[66vw] overflow-y-auto bg-[#F7F7F5] border-l shadow-xl z-[997]"
      >
        <div className="h-full flex flex-col pt-20">
          <div className="flex items-center justify-between mb-12 relative bg-[#F9F9F9] p-8">
            <Button 
              variant="ghost" 
              onClick={onBack}
              className="absolute left-4 top-4"
            >
              <ArrowLeft className="mr-2" />
              Back
            </Button>
            
            <div className="w-full mt-12">
              <h3 className="text-[#D4904E] text-lg mb-2">Industries</h3>
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-4xl font-bold text-primary mb-4">Textiles</h1>
                  <p className="text-gray-600 max-w-xl">
                    Traced Systems' Digital Product Passport tackles supply chain gaps, ensures ethical sourcing, and drives circularity across the textile lifecycle.
                  </p>
                </div>
                <img 
                  src="/lovable-uploads/36f60108-99d8-465a-81a4-e52c86799730.png"
                  alt="Cotton textile"
                  className="w-[522.87px] h-[315.8px] object-cover rounded-lg"
                />
              </div>
            </div>
          </div>

          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary">
              How Traced Systems Elevates the Textile Industry
            </h2>
          </div>

          <div className="grid grid-cols-3 gap-6 mb-12 px-8">
            {cards.map((card, index) => (
              <IndustrySheetCard
                key={index}
                title={card.title}
                content={card.content}
                icon={card.icon}
              />
            ))}
          </div>

          <div className="mb-12 px-8">
            <h2 className="text-2xl font-bold text-primary mb-4">
              Driving Collaborative Sustainability Across the Entire Value Chain
            </h2>
            <p className="text-gray-600">
              Our digital passport system enables unprecedented transparency and traceability 
              across your entire textile supply chain. From raw material sourcing to final product 
              delivery, we help you track, verify, and optimize every step of the journey.
            </p>
          </div>

          <div className="px-8 mb-8">
            <IndustrySheetCTA 
              title="Drive Innovation in Textiles With the Experts Who Understand Your Industry"
              description="Ready to elevate your textile operations? Our passion for sustainable innovation and deep industry insight will empower you to stay ahead in a fast-paced market. Let's explore how we can help you deliver on your mission—book a demo today!"
              imageSrc="/lovable-uploads/15f2e792-7fe5-4619-819b-467d5d6c282c.png"
            />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default TextilesSheet;