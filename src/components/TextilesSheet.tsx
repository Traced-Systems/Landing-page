import React from 'react';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

interface TextileCard {
  title: string;
  content: string;
}

const TextilesSheet = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const cards: TextileCard[] = [
    {
      title: "Deliver Lifecycle Transparency",
      content: "Track and verify every step of your textile production journey with our comprehensive digital passport system."
    },
    {
      title: "Ensure Reliable Compliance",
      content: "Stay ahead of regulations with automated compliance tracking and verification systems."
    },
    {
      title: "Enable Sustainable Growth",
      content: "Drive sustainable practices while optimizing operational efficiency and reducing waste."
    }
  ];

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent 
        side="right" 
        className="!w-[75vw] 2xl:!w-[66vw] sm:!max-w-[75vw] 2xl:!max-w-[66vw] overflow-y-auto bg-[#F7F7F5] border-l shadow-xl z-[997]"
      >
        <div className="h-full flex flex-col pt-20">
          {/* Top Section with Hero */}
          <div className="flex items-center justify-between mb-12 relative">
            <Button 
              variant="ghost" 
              onClick={onClose}
              className="absolute left-0 top-0"
            >
              <ArrowLeft className="mr-2" />
              Back
            </Button>
            
            <div className="flex items-center justify-between w-full mt-12">
              <h1 className="text-4xl font-bold text-primary">Textiles</h1>
              <img 
                src="/lovable-uploads/36f60108-99d8-465a-81a4-e52c86799730.png"
                alt="Cotton textile"
                className="w-1/3 rounded-lg object-cover"
              />
            </div>
          </div>

          {/* Subtitle */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary">
              How Traced Systems Elevates the Textile Industry
            </h2>
          </div>

          {/* Interactive Cards */}
          <div className="grid grid-cols-3 gap-6 mb-12">
            {cards.map((card, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-xl p-6 shadow-[4px_4px_10px_0px_rgba(0,0,0,0.1),-4px_-4px_10px_0px_rgba(255,255,255,0.9)] h-[200px] overflow-hidden cursor-pointer transition-all duration-300 hover:bg-[#9b87f5] hover:text-white"
              >
                <h3 className="text-xl font-semibold mb-4">{card.title}</h3>
                <p className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {card.content}
                </p>
              </div>
            ))}
          </div>

          {/* Value Chain Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-primary mb-4">
              Driving Collaborative Sustainability Across the Entire Value Chain
            </h2>
            <p className="text-gray-600">
              Our digital passport system enables unprecedented transparency and traceability 
              across your entire textile supply chain. From raw material sourcing to final product 
              delivery, we help you track, verify, and optimize every step of the journey.
            </p>
          </div>

          {/* CTA Section */}
          <div className="bg-[#F1F0FB] rounded-xl p-8 flex items-center justify-between mt-auto">
            <div className="max-w-2xl">
              <h3 className="text-2xl font-bold text-primary mb-4">
                Drive Innovation in Textiles With the Experts Who Understand Your Industry
              </h3>
              <Button className="bg-[#9b87f5] hover:bg-[#8b77e5] text-white">
                Book Demo
              </Button>
            </div>
            <img 
              src="/lovable-uploads/15f2e792-7fe5-4619-819b-467d5d6c282c.png"
              alt="David Dolhomut"
              className="w-1/4 rounded-lg"
            />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default TextilesSheet;