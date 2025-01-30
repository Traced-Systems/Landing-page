import React from 'react';

const LogoMarquee = () => {
  const logos = [
    { src: '/lovable-uploads/51535276-adfc-4349-815d-94303b5e8ce4.png', alt: 'BLK DNM' },
    { src: '/lovable-uploads/e36c76f9-e669-41f2-a804-f6e6662d1182.png', alt: 'EBSI' },
    { src: '/lovable-uploads/989e7920-294f-4d57-a9af-e085d1a26fd2.png', alt: 'Cling' },
    { src: '/lovable-uploads/3f5b77a2-e9d4-473f-82b3-5c8432b02de1.png', alt: 'European Commission' }
  ];
  
  return (
    <div className="py-12 bg-white overflow-hidden">
      <div className="relative">
        <div className="flex space-x-16 animate-marquee whitespace-nowrap">
          {logos.concat(logos).map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0"
            >
              <img src={logo.src} alt={logo.alt} className="h-8 w-auto" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoMarquee;