
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
    <>
      <Button 
        variant="ghost" 
        onClick={onBack}
        className="absolute -left-12 top-4 hover:bg-gray-100 bg-white shadow-md flex items-center gap-2 z-50"
      >
        <ArrowLeft className="h-5 w-5" />
        <span>Back</span>
      </Button>
      
      <div className="flex items-center justify-between mb-12 relative bg-[#F9F9F9] p-8">
        <div className="w-full mt-12">
          <div className="mb-4">
            <h3 className="text-[#D4904E] text-lg mb-2">Industries</h3>
            <h1 className="text-4xl font-bold text-primary">{title}</h1>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-gray-600 max-w-xl">
              {description}
            </p>
            <img 
              src={imageSrc}
              alt={`${title} industry`}
              className="w-full md:w-[522.87px] h-auto md:h-[315.8px] object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default IndustrySheetHeader;
