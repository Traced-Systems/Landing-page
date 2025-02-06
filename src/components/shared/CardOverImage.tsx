import React from 'react';

interface CardOverImageProps {
  imageSrc: string;
  imageAlt: string;
  children: React.ReactNode;
  className?: string;
}

const CardOverImage = ({ imageSrc, imageAlt, children, className = '' }: CardOverImageProps) => {
  return (
    <div className={`relative w-full ${className}`}>
      <img 
        src={imageSrc}
        alt={imageAlt} 
        className="w-full h-auto object-cover rounded-lg"
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg p-8 shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] z-10 w-[90%] max-w-3xl">
        {children}
      </div>
    </div>
  );
};

export default CardOverImage;