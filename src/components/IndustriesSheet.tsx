import React from 'react';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import IndustryCard from './IndustryCard';
import EURegulationsSection from './EURegulationsSection';
import CTASection from './CTASection';

const IndustriesSheet = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="text-gray-600 hover:text-primary transition-colors">Industries</button>
      </SheetTrigger>
      <SheetContent 
        side="right" 
        className="!w-[75vw] 2xl:!w-[66vw] sm:!max-w-[75vw] 2xl:!max-w-[66vw] overflow-y-auto bg-[#F7F7F5] border-l shadow-xl"
      >
        <div className="h-full flex flex-col">
          {/* Top Section */}
          <div className="relative mb-8 py-8 px-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <img 
                  src="/lovable-uploads/da1c3072-d9ff-4e07-b36e-c838da0abbd0.png" 
                  alt="Industries flow diagram"
                  className="h-12 object-contain"
                />
                <h1 className="text-2xl font-semibold text-primary">Industries</h1>
              </div>
              <Button 
                variant="ghost" 
                size="icon" 
                className="hover:bg-transparent absolute -left-12 top-4 bg-white rounded-full shadow-[4px_4px_10px_0px_rgba(0,0,0,0.1),-4px_-4px_10px_0px_rgba(255,255,255,0.9)]"
              >
                <ArrowLeft className="h-6 w-6" />
              </Button>
            </div>
          </div>

          {/* Section Title */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary">Key Industries We Serve</h2>
          </div>

          {/* Industry Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-12 items-start">
            <IndustryCard 
              title="Textiles"
              description="Traced Systems' Digital Product Passport tackles supply chain gaps, ensures ethical sourcing, and drives circularity across the textile lifecycle."
              imageSrc="/lovable-uploads/2320cd7d-0e5e-4635-b26a-2d2eaeb0aa50.png"
              imageAlt="Textiles"
            />
            <IndustryCard 
              title="Batteries"
              description="Traced Systems' Digital Product Passport streamlines battery management by enhancing transparency, ensuring compliance, and optimizing the full product lifecycle."
              imageSrc="/lovable-uploads/efedcb76-b69e-4a52-8689-41020d02ede5.png"
              imageAlt="Batteries"
            />
          </div>

          <EURegulationsSection />
          <CTASection />
          
          {/* Bottom Spacing */}
          <div className="pb-[125px]"></div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default IndustriesSheet;