
import React from 'react';

interface IndustryCardProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  onClick?: () => void;
}

const IndustryCard = ({ title, description, imageSrc, imageAlt, onClick }: IndustryCardProps) => {
  return (
    <div 
      className="bg-white rounded-xl p-6 shadow-[4px_4px_10px_0px_rgba(0,0,0,0.1),-4px_-4px_10px_0px_rgba(255,255,255,0.9)] h-[400px] flex flex-col cursor-pointer transition-all duration-300 hover:shadow-[6px_6px_12px_0px_rgba(0,0,0,0.15),-6px_-6px_12px_0px_rgba(255,255,255,0.95)]"
      onClick={onClick}
    >
      <img 
        src={imageSrc}
        alt={imageAlt}
        className="w-full h-48 object-cover rounded-lg mb-4"
      />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default IndustryCard;
