import React from 'react';

const LogoMarquee = () => {
  const logos = [
    { src: '/lovable-uploads/51535276-adfc-4349-815d-94303b5e8ce4.png', alt: 'BLK DNM', className: 'h-4' },
    { src: '/lovable-uploads/e36c76f9-e669-41f2-a804-f6e6662d1182.png', alt: 'EBSI', className: 'h-8' },
    { src: '/lovable-uploads/989e7920-294f-4d57-a9af-e085d1a26fd2.png', alt: 'Cling', className: 'h-8' },
    { src: '/lovable-uploads/3f5b77a2-e9d4-473f-82b3-5c8432b02de1.png', alt: 'European Commission', className: 'h-8' }
  ];
  
  return (
    <div className="relative">
      {/* Connecting wave image */}
      <div 
        className="absolute top-0 left-0 w-full h-48 -mt-24"
        style={{
          backgroundImage: `url('/lovable-uploads/c2f90225-bc21-4eee-8b0c-5d0ba0e94791.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          zIndex: -1,
        }}
      />
      
      {/* Logo marquee section */}
      <div className="py-12 overflow-hidden" style={{ backgroundColor: 'rgba(242, 241, 238, 0.7)' }}>
        <div className="relative">
          <div className="flex space-x-16 animate-marquee whitespace-nowrap">
            {logos.concat(logos).map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0"
              >
                <img src={logo.src} alt={logo.alt} className={logo.className} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoMarquee;