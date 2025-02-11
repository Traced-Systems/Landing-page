
import React from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const LogoMarquee = () => {
  const logos = [
    {
      src: "/lovable-uploads/872f4e62-69fe-401b-9c71-a0c2074f0690.png",
      alt: "BLK DNM",
      className: "h-8",
    },
    {
      src: "/lovable-uploads/53733f77-0c96-43ec-b9a3-8cfc7930500f.png",
      alt: "Cling",
      className: "h-8",
    },
    {
      src: "/lovable-uploads/447b6eb2-3642-4845-80fd-9da6b5535c71.png",
      alt: "EBSI",
      className: "h-8",
    },
    {
      src: "/lovable-uploads/bfe45d2d-c864-4265-9fd4-f2f7a5535d20.png",
      alt: "European Commission",
      className: "h-8",
    },
    {
      src: "/lovable-uploads/bonsai-technology_logo_rev-20230126-07.png",
      alt: "Bonsai Technology",
      className: "h-8",
    },
    {
      src: "/lovable-uploads/ChromaWayLogo.png",
      alt: "ChromaWay",
      className: "h-8",
    },
    {
      src: "/lovable-uploads/BatterireturAvdHoyenergi_staaende_RGB1.png",
      alt: "BatteriRetur",
      className: "h-8",
    },
    {
      src: "/lovable-uploads/LOGO-instagrid-red-black-RGB.png",
      alt: "Instagrid",
      className: "h-8",
    },
    {
      src: "/lovable-uploads/ChromiaLogo.png",
      alt: "Chromia Logo",
      className: "h-8",
    },
  ];

  return (
    <div className="relative w-full">
      <AspectRatio ratio={16 / 3}>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/lovable-uploads/BGforBrands.png')",
          }}
        >
          <div className="relative py-12 z-10">
            <div className="flex overflow-hidden">
              <div
                className="flex animate-infinite-scroll"
                style={{
                  gap: "6rem",
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
                      className="h-15 w-auto object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </AspectRatio>
    </div>
  );
};

export default LogoMarquee;

