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
      <div 
        className="relative w-full h-32 mb-12"
        style={{
          backgroundImage: 'url("/lovable-uploads/4187353b-b062-491f-b38c-eaae240654cd.png")',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: '85% auto'
        }}
      />
      
      <div className="flex items-center justify-between mb-12 relative bg-[#F9F9F9] p-8">
        <Button 
          variant="ghost" 
          onClick={onBack}
          className="absolute left-4 top-4 hover:bg-gray-100"
        >
          <ArrowLeft className="h-6 w-6" />
        </Button>
        
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