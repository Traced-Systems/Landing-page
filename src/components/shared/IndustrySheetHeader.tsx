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
    <div className="flex flex-col lg:flex-row items-center justify-between mb-12 bg-[#f1f1f1] px-0 py-0 mx-20 rounded-lg">
      {/* Left Text Section (3/7 width on large, full-width on smaller screens) */}
      <div className="flex-1 basis-[42.85%] flex flex-col gap-1 px-8 w-full xl:w-auto">
        <h3 className="text-[#D4904E] text-l mt-8">Industries</h3>
        <h1 className="text-2xl font-medium text-primary pb-2">{title}</h1>
        <p className="text-gray-600 max-w-xl mt-2 mb-8">{description}</p>
      </div>

      {/* Right Image Section (4/7 width on large, full-width on smaller screens) */}
      <div
        className="flex-1 basis-[57.15%] h-full overflow-hidden w-full xl:w-auto 
                rounded-b-lg xl:rounded-bl-none xl:rounded-r-lg"
      >
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
