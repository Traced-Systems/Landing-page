
import React from 'react';
import { Sheet, SheetContent } from "@/components/ui/sheet";
import IndustrySheetHeader from './shared/IndustrySheetHeader';
import IndustrySheetCard from './shared/IndustrySheetCard';
import IndustrySheetCTA from './shared/IndustrySheetCTA';
import { Button } from "@/components/ui/button";

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
      iconSrc: "/lovable-uploads/859fbae4-6beb-478f-8c68-b8afd2733b38.png"
    },
    {
      title: "Blockchain-Secured Accuracy",
      content: "By harnessing blockchain technology, our platform guarantees that every data point ­­from material certifications to final inspection reports ­­is securely recorded and impossible to falsify. The result is higher stakeholder trust, streamlined compliance, and robust proof of quality throughout the battery supply chain.",
      iconSrc: "/lovable-uploads/1db656b0-9049-4b94-bfe5-fe1dbab7669d.png"
    },
    {
      title: "Sustainable Performance",
      content: "Our solution equips you with the insights and tools needed to minimize waste, reduce carbon footprints, and meet evolving environmental standards. From resource optimization to responsible disposal, you can prove your commitment to green practices and position your organization as a leader in sustainable battery innovation.",
      iconSrc: "/lovable-uploads/7e022afd-d192-4c0a-92fc-014012d85fb2.png"
    }
  ];

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent 
        side="right" 
        className="!w-[75vw] 2xl:!w-[66vw] sm:!max-w-[75vw] 2xl:!max-w-[66vw] overflow-y-auto bg-[#F7F7F5] border-l shadow-xl p-0 z-[995]"
      >
        <div className="h-full flex flex-col">
          <div className="pt-12">
            <IndustrySheetHeader
              title="Batteries"
              description="Traced Systems' Digital Product Passport streamlines battery management by enhancing transparency, ensuring compliance, and optimizing the full product lifecycle."
              imageSrc="/lovable-uploads/973d7c66-1d01-4e1e-89ce-2dee7a7c3dae.png"
              onBack={onBack}
            />
          </div>

          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary">
              How Traced Systems Elevates the Battery Industry
            </h2>
          </div>

          <div className="px-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {cards.map((card, index) => (
                <IndustrySheetCard
                  key={index}
                  title={card.title}
                  content={card.content}
                  iconSrc={card.iconSrc}
                />
              ))}
            </div>

            <div className="mb-12 text-center">
              <h2 className="text-2xl font-bold text-primary mb-4">
                Driving Collaborative Sustainability Across the Entire Value Chain
              </h2>
              <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
                Our digital passport system enables unprecedented transparency and traceability 
                across your entire battery supply chain. From raw material sourcing to end-of-life 
                recycling, we help you track, verify, and optimize every step of the journey.
              </p>
              <img 
                src="/lovable-uploads/62b9aceb-3c3f-4bff-ab8e-38a8fc27dd88.png"
                alt="Battery Value Chain"
                className="w-full max-w-4xl mx-auto mb-6 rounded-lg"
              />
              <Button className="bg-[#9b87f5] hover:bg-[#8b77e5] text-white px-8">
                Learn More
              </Button>
            </div>
          </div>

          <div className="mt-auto w-full">
            <IndustrySheetCTA 
              title="Drive Innovation in Batteries With the Experts Who Understand Your Industry"
              description="Ready to elevate your battery operations? Our passion for sustainable innovation and deep industry insight will empower you to stay ahead in a fast-paced market. Let's explore how we can help you deliver on your mission—book a demo today!"
            />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default BatteriesSheet;
