import React from 'react';

const LogoMarquee = () => {
  const logos = ['BLK DNM', 'EBSI', 'Cling', 'European Commission'];
  
  return (
    <div className="py-12 bg-white overflow-hidden">
      <div className="relative">
        <div className="flex space-x-16 animate-marquee whitespace-nowrap">
          {logos.concat(logos).map((logo, index) => (
            <div
              key={index}
              className="text-2xl font-bold text-gray-400 flex-shrink-0"
            >
              {logo}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoMarquee;