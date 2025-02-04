import React from 'react';
import { ArrowRight } from "lucide-react";

interface IndustrySheetCardProps {
  title: string;
  content: string;
  icon: string;
}

const IndustrySheetCard = ({ title, content, icon }: IndustrySheetCardProps) => {
  return (
    <div className="group relative bg-white rounded-xl p-6 shadow-[4px_4px_10px_0px_rgba(0,0,0,0.1),-4px_-4px_10px_0px_rgba(255,255,255,0.9)] h-[200px] overflow-hidden cursor-pointer transition-all duration-300 hover:bg-[#9b87f5] hover:text-white">
      <div className="flex flex-col items-center group-hover:opacity-0 transition-opacity duration-300">
        <img src={icon} alt={title} className="w-12 h-12 mb-4" />
        <h3 className="text-xl font-semibold text-center">{title}</h3>
      </div>
      
      <p className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute inset-6">
        {content}
      </p>
      
      <div className="absolute bottom-4 right-4">
        <ArrowRight className="w-5 h-5 text-[#E1B382]" />
      </div>
    </div>
  );
};

export default IndustrySheetCard;