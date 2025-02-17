
import React, { useState } from "react";
import { ChevronRight, X } from "lucide-react";

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
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      {/* Mobile Expanded View */}
      {isExpanded && (
        <div className="fixed inset-0 bg-black/50 z-[999] sm:hidden" onClick={handleToggle}>
          <div 
            className="absolute inset-4 bg-white rounded-xl p-6 shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={handleToggle}
              className="absolute right-4 top-4 p-1 rounded-full hover:bg-gray-100"
            >
              <X className="w-5 h-5 text-gray-600" />
            </button>
            
            <div className="flex flex-col h-full pt-2">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={iconSrc}
                  alt={title}
                  className="w-12 h-12"
                />
                <h3 className="text-xl font-medium text-[#173A44]">
                  {title}
                </h3>
              </div>
              <p className="text-gray-700 text-base">
                {content}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Normal Card View */}
      <div 
        className="group relative bg-white rounded-xl p-6 sm:p-8 shadow-[2px_2px_10px_0px_rgba(0,0,0,0.05),-4px_-4px_10px_0px_rgba(255,255,255,0.95)] w-full overflow-hidden cursor-pointer transition-all duration-300"
        onClick={() => {
          if (window.innerWidth < 640) { // Only trigger on mobile
            handleToggle();
          }
        }}
      >
        {/* Front of Card (Mobile & Desktop) */}
        <div className="flex flex-col h-full sm:group-hover:opacity-0 transition-opacity duration-300 sm:absolute inset-0 p-4 sm:p-6">
          {/* Centered Icon & Title */}
          <div className="flex flex-col items-center justify-center flex-grow">
            <img
              src={iconSrc}
              alt={title}
              className="w-14 h-14 sm:w-16 sm:h-16 mb-2"
            />
            <h3 className="text-lg sm:text-xl font-medium text-[#173A44] pt-4 text-center">
              {title}
            </h3>
          </div>

          {/* Arrow Container */}
          <div className="absolute bottom-4 right-4">
            <ChevronRight className="text-[#E1B382] w-5 h-5 sm:w-6 sm:h-6" />
          </div>
        </div>

        {/* Back of Card (Desktop Only) */}
        <div className="hidden sm:block opacity-0 group-hover:opacity-100 transition-opacity duration-300 h-full flex-col">
          <h3 className="text-lg sm:text-xl font-medium mb-2 text-[#173A44]">
            {title}
          </h3>
          <p className="text-gray-700 flex-grow text-sm sm:text-base">{content}</p>
        </div>
      </div>
    </>
  );
};

export default IndustrySheetCard;
