
import React from 'react';
import { Button } from "@/components/ui/button";

interface IndustrySheetCTAProps {
  title: string;
  description: string;
}

const IndustrySheetCTA = ({ title, description }: IndustrySheetCTAProps) => {
  return (
    <div className="w-full bg-[#F2F1EE] -mx-6">
      <div className="max-w-7xl mx-auto p-5 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex-grow max-w-2xl">
          <h3 className="text-2xl font-bold text-primary mb-4">
            {title}
          </h3>
          <p className="text-gray-600 mb-6">{description}</p>
          <Button className="bg-[#9b87f5] hover:bg-[#8b77e5] text-white px-8">
            Book Demo
          </Button>
        </div>
        <div className="w-full md:w-1/3 text-center">
          <picture>
            <source 
              media="(min-width: 768px)" 
              srcSet="/lovable-uploads/1a2cdca0-9689-4954-b603-5fe8c1cce981.png"
            />
            <img 
              src="/lovable-uploads/73fb0791-7878-4102-a4df-ac7ce16350f1.png"
              alt="David Dolhomut"
              className="w-48 md:w-full h-auto rounded-lg shadow-lg object-cover mx-auto"
            />
          </picture>
          {/* Mobile-only text */}
          <div className="block md:hidden mt-4">
            <h3 className="font-bold text-lg text-primary">David Dolhomut</h3>
            <p className="text-gray-600">Head of Partnerships & Business Developer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustrySheetCTA;

