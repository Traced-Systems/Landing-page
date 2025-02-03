import React from 'react';

const LogoMarquee = () => {
  const logos = [
    { src: '/lovable-uploads/872f4e62-69fe-401b-9c71-a0c2074f0690.png', alt: 'BLK DNM', className: 'h-8' },
    { src: '/lovable-uploads/53733f77-0c96-43ec-b9a3-8cfc7930500f.png', alt: 'Cling', className: 'h-8' },
    { src: '/lovable-uploads/447b6eb2-3642-4845-80fd-9da6b5535c71.png', alt: 'EBSI', className: 'h-8' },
    { src: '/lovable-uploads/bfe45d2d-c864-4265-9fd4-f2f7a5535d20.png', alt: 'European Commission', className: 'h-8' }
  ];

  return (
    <div className="relative overflow-hidden bg-white">
      {/* Wave background */}
      <div 
        className="absolute inset-x-0 top-0 h-32"
        style={{
          background: 'linear-gradient(180deg, transparent 0%, rgba(255, 255, 255, 0.9) 100%)',
          clipPath: 'url(#wave-clip)'
        }}
      >
        <svg className="absolute bottom-0 w-full h-24" preserveAspectRatio="none">
          <defs>
            <clipPath id="wave-clip" clipPathUnits="objectBoundingBox">
              <path d="M0,0.5 C0.3,0.7 0.7,0.3 1,0.5 L1,1 L0,1 Z" />
            </clipPath>
          </defs>
        </svg>
      </div>

      {/* Logo marquee container */}
      <div className="relative py-12">
        <div className="flex overflow-hidden">
          {/* Single continuous row of logos */}
          <div 
            className="flex animate-infinite-scroll"
            style={{
              gap: '3rem', // Equal spacing between logos
            }}
          >
            {[...logos, ...logos, ...logos].map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center flex-shrink-0 w-32 h-16"
              >
                <img 
                  src={logo.src} 
                  alt={logo.alt} 
                  className={`${logo.className} object-contain`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoMarquee;