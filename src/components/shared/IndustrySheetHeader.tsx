
import React from "react";

interface IndustrySheetHeaderProps {
  title: string;
  description: string;
  imageSrc: string;
  onBack: () => void;
}

const IndustrySheetHeader = ({
  title,
  description,
  imageSrc,
}: IndustrySheetHeaderProps) => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between mb-8 sm:mb-12 bg-[#f1f1f1] mx-4 sm:mx-20 rounded-lg overflow-hidden">
      {/* Left Text Section */}
      <div className="flex-1 basis-[42.85%] flex flex-col gap-1 p-6 sm:p-8 w-full xl:w-auto">
        <h3 className="text-[#D4904E] text-base sm:text-l">Industries</h3>
        <h1 className="text-xl sm:text-2xl font-medium text-primary pb-2">
          {title}
        </h1>
        <p className="text-gray-600 max-w-xl mt-2 mb-4 sm:mb-8 text-sm sm:text-base">
          {description}
        </p>
      </div>

      {/* Right Image Section */}
      <div className="flex-1 basis-[57.15%] h-full w-full xl:w-auto">
        <img
          src={imageSrc}
          alt={`${title} industry`}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default IndustrySheetHeader;
