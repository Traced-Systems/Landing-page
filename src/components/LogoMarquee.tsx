
import React from "react";

const LogoMarquee = () => {
  const logos = [
    {
      src: "/lovable-uploads/872f4e62-69fe-401b-9c71-a0c2074f0690.png",
      alt: "BLK DNM",
      link: "https://www.blkdnm.com/",
    },
    {
      src: "/lovable-uploads/53733f77-0c96-43ec-b9a3-8cfc7930500f.png",
      alt: "Cling",
      link: "https://www.clingsystems.com/blog-post/tech-dive-blockchain-x-batteries",
    },
    {
      src: "/lovable-uploads/447b6eb2-3642-4845-80fd-9da6b5535c71.png",
      alt: "EBSI",
      link: "https://ec.europa.eu/digital-building-blocks/sites/display/EBSI/Home",
    },
    {
      src: "/lovable-uploads/bfe45d2d-c864-4265-9fd4-f2f7a5535d20.png",
      alt: "European Commission",
      link: "https://commission.europa.eu/index_en",
    },
    {
      src: "/lovable-uploads/bonsai-technology_logo_rev-20230126-07.png",
      alt: "Bonsai Technology",
      link: "https://www.bonsaitechnology.it/",
    },
    {
      src: "/lovable-uploads/BatterireturAvdHoyenergi_staaende_RGB1.png",
      alt: "BatteriRetur",
      link: "https://batteriretur.no/en/",
    },
    {
      src: "/lovable-uploads/doorsThreeLogo.png",
      alt: "DoorsThree",
      link: "https://doors3.io/about",
    },
    {
      src: "/lovable-uploads/LOGO-instagrid-red-black-RGB.png",
      alt: "Instagrid",
      link: "https://instagrid.co/",
    },
    {
      src: "/lovable-uploads/Trace4Logo.png",
      alt: "trace4value",
      link: "https://trace4value.se/",
    },
    {
      src: "/lovable-uploads/1000002907.png",
      alt: "ChromaWay",
      link: "https://chromaway.com/",
    },
    {
      src: "/lovable-uploads/66d938d1-3fd5-4b75-8289-6883a65cdba3.png",
      alt: "Chromia Logo",
      link: "https://chromia.com/",
    },
  ];

  return (
    <div
      className="relative w-full overflow-hidden"
      style={{ paddingTop: "16.8%" }}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-[url('/lovable-uploads/BGforBrands.png')] bg-cover bg-center"
        style={{ height: "100%", width: "auto" }}
      ></div>

      {/* Content Layer */}
      <div className="absolute inset-0 flex items-center justify-center pb-12">
        <div className="flex overflow-hidden mb-14 bg-[rgba(242,241,238,0.9)]">
          <div
            className="flex whitespace-nowrap animate-infinite-scroll"
            style={{
              gap: "7rem",
              minWidth: `calc(${logos.length} * 10rem * 3)`, // Adjusts width to ensure proper animation
            }}
          >
            {[...logos, ...logos, ...logos].map((logo, index) => (
              <a
                key={index}
                href={logo.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center flex-shrink-0 w-auto h-20"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-12 md:h-16 w-auto max-h-12 md:max-h-16 object-contain transition-opacity hover:opacity-75"
                />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Keyframe Animation for Infinite Scroll */}
      <style>
        {`
          @keyframes scroll {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(-100%);
            }
          }
          .animate-infinite-scroll {
            display: flex;
            animation: scroll 80s linear infinite;
          }
        `}
      </style>
    </div>
  );
};

export default LogoMarquee;
