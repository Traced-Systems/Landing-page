import React from 'react';

interface VisionCardProps {
  title: string;
  content: string;
  imageSrc: string;
  imageAlt: string;
  imagePosition?: 'left' | 'right';
}

const VisionCard = ({ title, content, imageSrc, imageAlt, imagePosition = 'right' }: VisionCardProps) => {
  const cardContent = (
    <div className="bg-white rounded-lg p-8 shadow-lg flex-1">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-600">{content}</p>
    </div>
  );

  const image = (
    <img src={imageSrc} alt={imageAlt} className="w-64 h-auto object-contain" />
  );

  return (
    <div className="flex items-center gap-8">
      {imagePosition === 'left' && image}
      {cardContent}
      {imagePosition === 'right' && image}
    </div>
  );
};

export default VisionCard;