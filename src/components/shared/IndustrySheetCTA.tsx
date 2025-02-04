import React from 'react';
import { Button } from "@/components/ui/button";

interface IndustrySheetCTAProps {
  title: string;
  description: string;
  imageSrc: string;
}

const IndustrySheetCTA = ({ title, description, imageSrc }: IndustrySheetCTAProps) => {
  return (
    <div className="bg-[#F2F1EE] rounded-xl p-8 flex items-center justify-between mt-auto">
      <div className="max-w-2xl">
        <h3 className="text-2xl font-bold text-primary mb-4">
          {title}
        </h3>
        <p className="text-gray-600 mb-6">{description}</p>
        <Button className="bg-[#9b87f5] hover:bg-[#8b77e5] text-white">
          Book Demo
        </Button>
      </div>
      <img 
        src={imageSrc}
        alt="David Dolhomut"
        className="w-1/3 rounded-lg"
      />
    </div>
  );
};

export default IndustrySheetCTA;