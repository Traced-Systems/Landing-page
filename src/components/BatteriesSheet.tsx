import React from 'react';
import { Sheet, SheetContent } from "@/components/ui/sheet";
import IndustrySheetHeader from './shared/IndustrySheetHeader';
import IndustrySheetCard from './shared/IndustrySheetCard';
import IndustrySheetCTA from './shared/IndustrySheetCTA';

interface BatteriesSheetProps {
  isOpen: boolean;
  onClose: () => void;
  onBack: () => void;
}

const BatteriesSheet = ({ isOpen, onClose, onBack }: BatteriesSheetProps) => {
  const cards = [
    {
      title: "Lifecycle Traceability",
      content: "Our solution provides oversight of the entire battery lifecycle. Track raw material sourcing, manufacturing processes, in‑use performance, and eventual recycling or refurbishment. This helps you optimize operations, remain compliant with industry regulations, and confidently stand behind the integrity of your products.",
      iconSrc: "/lovable-uploads/transparency.png"
    },
    {
      title: "Blockchain-Secured Accuracy",
      content: "By harnessing blockchain technology, our platform guarantees that every data point ­­from material certifications to final inspection reports ­­is securely recorded and impossible to falsify. The result is higher stakeholder trust, streamlined compliance, and robust proof of quality throughout the battery supply chain.",
      iconSrc: "/lovable-uploads/blockchain-secured-icon.png"
    },
    {
      title: "Sustainable Performance",
      content: "Our solution equips you with the insights and tools needed to minimize waste, reduce carbon footprints, and meet evolving environmental standards. From resource optimization to responsible disposal, you can prove your commitment to green practices and position your organization as a leader in sustainable battery innovation.",
      iconSrc: "/lovable-uploads/growth-icon.png"
    }
  ];

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent 
        side="right" 
        className="!w-[75vw] 2xl:!w-[66vw] sm:!max-w-[75vw] 2xl:!max-w-[66vw] overflow-y-auto bg-[#F7F7F5] border-l shadow-xl z-[997]"
      >
        <div className="h-full flex flex-col pt-20">
          <IndustrySheetHeader
            title="Batteries"
            description="Traced Systems' Digital Product Passport streamlines battery management by enhancing transparency, ensuring compliance, and optimizing the full product lifecycle."
            imageSrc="/lovable-uploads/973d7c66-1d01-4e1e-89ce-2dee7a7c3dae.png"
            onBack={onBack}
          />

          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary">
              How Traced Systems Elevates the Battery Industry
            </h2>
          </div>

          <div className="grid grid-cols-3 gap-6 mb-12 px-8">
            {cards.map((card, index) => (
              <IndustrySheetCard
                key={index}
                title={card.title}
                content={card.content}
                iconSrc={card.iconSrc}
              />
            ))}
          </div>

          <div className="mb-12 px-8">
            <h2 className="text-2xl font-bold text-primary mb-4">
              Driving Collaborative Sustainability Across the Entire Value Chain
            </h2>
            <p className="text-gray-600">
              Our digital passport system enables unprecedented transparency and traceability 
              across your entire battery supply chain. From raw material sourcing to end-of-life 
              recycling, we help you track, verify, and optimize every step of the journey.
            </p>
          </div>

          <div className="px-8 mb-8">
            <IndustrySheetCTA 
              title="Drive Innovation in Batteries With the Experts Who Understand Your Industry"
              description="Ready to elevate your battery operations? Our passion for sustainable innovation and deep industry insight will empower you to stay ahead in a fast-paced market. Let's explore how we can help you deliver on your mission—book a demo today!"
              imageSrc="/lovable-uploads/15f2e792-7fe5-4619-819b-467d5d6c282c.png"
            />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default BatteriesSheet;