import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

interface IndustrySheetHeaderProps {
  title: string;
  description: string;
  imageSrc: string;
  onBack: () => void;
}

const IndustrySheetHeader = ({ title, description, imageSrc, onBack }: IndustrySheetHeaderProps) => {
  return (
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
            <h1 className="text-4xl font-bold text-primary mb-4">{title}</h1>
            <p className="text-gray-600 max-w-xl">
              {description}
            </p>
          </div>
          <img 
            src={imageSrc}
            alt={`${title} industry`}
            className="w-[522.87px] h-[315.8px] object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default IndustrySheetHeader;