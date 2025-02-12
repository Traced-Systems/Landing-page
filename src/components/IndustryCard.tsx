import React from "react";

interface IndustryCardProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  onClick?: () => void;
}

const IndustryCard = ({
  title,
  description,
  imageSrc,
  imageAlt,
  onClick,
}: IndustryCardProps) => {
  return (
    <div
      className="bg-white rounded-xl min-w-[150px] shadow-[2px_2px_6px_0px_rgba(0,0,0,0.05),-2px_-2px_6px_0px_rgba(255,255,255,0.8)] 
hover:shadow-[3px_3px_8px_0px_rgba(0,0,0,0.08),-3px_-3px_8px_0px_rgba(255,255,255,0.85)] transition-all duration-300 "
      onClick={onClick}
    >
      <div className="w-full" style={{ aspectRatio: "430 / 270" }}>
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-full object-cover rounded-t-lg"
        />
      </div>
      <div className="p-6 min-h-[200px] flex flex-col">
        <h3 className="text-xl font-semibold mb-2 text-[#173A44]">{title}</h3>
        <p className="text-gray-600 flex-1">{description}</p>
      </div>
    </div>
  );
};

export default IndustryCard;
