
import React from 'react';

interface IndustrySheetHeaderProps {
  title: string;
  description: string;
  imageSrc: string;
  onBack: () => void;
}

const IndustrySheetHeader = ({ title, description, imageSrc }: IndustrySheetHeaderProps) => {
  return (
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
  );
};

export default IndustrySheetHeader;
