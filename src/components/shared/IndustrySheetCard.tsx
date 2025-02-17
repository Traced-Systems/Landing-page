import React from 'react';
import { ArrowRight } from "lucide-react";

interface IndustrySheetCardProps {
  title: string;
  content: string;
  iconSrc: string;
}

const IndustrySheetCard = ({ title, content, iconSrc }: IndustrySheetCardProps) => {
  return (
    <div className="group relative bg-white rounded-xl p-6 shadow-[4px_4px_10px_0px_rgba(0,0,0,0.1),-4px_-4px_10px_0px_rgba(255,255,255,0.9)] min-h-[450px] overflow-hidden cursor-pointer transition-all duration-300">
      {/* Front of Card */}
      <div className="flex flex-col h-full group-hover:opacity-0 transition-opacity duration-300 absolute inset-0 p-6">
        {/* Icon Container */}
        <div className="flex-grow flex items-center justify-center mb-6">
          <img src={iconSrc} alt={title} className="w-20 md:w-24 h-20 md:h-24" />
        </div>
        
        {/* Title Container */}
        <div className="text-center mb-8">
          <h3 className="text-lg md:text-xl font-semibold text-primary">{title}</h3>
        </div>
        
        {/* Arrow Container */}
        <div className="absolute bottom-6 right-6">
          <ArrowRight className="w-5 h-5 text-[#E1B382]" />
        </div>
      </div>
      
      {/* Back of Card */}
      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 h-full flex flex-col p-4 md:p-6">
        <h3 className="text-lg md:text-xl font-semibold mb-4 text-primary">{title}</h3>
        <p className="text-gray-600 flex-grow text-sm md:text-base">{content}</p>
      </div>
    </div>
  );
};

export default IndustrySheetCard;