import React from "react";
import { ChevronRight } from "lucide-react";

interface IndustrySheetCardProps {
  title: string;
  content: string;
  iconSrc: string;
}

const IndustrySheetCard = ({
  title,
  content,
  iconSrc,
}: IndustrySheetCardProps) => {
  return (
    <div
      className="group relative bg-white rounded-xl p-0 shadow-[2px_2px_10px_0px_rgba(0,0,0,0.05),-4px_-4px_10px_0px_rgba(255,255,255,0.95)] 
    w-full overflow-hidden cursor-pointer transition-all duration-300 
    grid gap-4 grid-cols-[repeat(auto-fit,minmax(200px,1fr))] place-items-center mb-2"
    >
      {/* Front of Card */}
      <div className="flex flex-col h-full group-hover:opacity-0 transition-opacity duration-300 absolute inset-0 p-6">
        {/* Centered Icon & Title */}
        <div className="flex flex-col items-center justify-center flex-grow">
          <img
            src={iconSrc}
            alt={title}
            className="w-16 md:w-20 h-16 md:h-20 mb-2"
          />
          <h3 className="text-lg md:text-xl font-medium text-[#173A44] pt-4 text-[#]">
            {title}
          </h3>
        </div>

        {/* Arrow Container */}
        <div className="absolute bottom-4 right-4">
          <ChevronRight className="text-[#E1B382] w-6 h-6" />
        </div>
      </div>

      {/* Back of Card */}
      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 h-full flex flex-col px-0 py-4 md:p-6">
        <h3 className="text-lg md:text-base font-medium mb-2 text-[#173A44] ">
          {title}
        </h3>
        <p className="text-gray-700 flex-grow text-sm md:text-base text-left px-2">
          {content}
        </p>
      </div>
    </div>
  );
};

export default IndustrySheetCard;
