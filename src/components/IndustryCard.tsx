import React from 'react';

interface IndustryCardProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

const IndustryCard = ({ title, description, imageSrc, imageAlt }: IndustryCardProps) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-[4px_4px_10px_0px_rgba(0,0,0,0.1),-4px_-4px_10px_0px_rgba(255,255,255,0.9)] md:w-[572.73px] md:h-[263.64px] w-full h-[375px] flex flex-col">
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