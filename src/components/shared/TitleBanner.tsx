import React from "react";

interface TitleBannerProps {
  title: string;
}

const TitleBanner: React.FC<TitleBannerProps> = ({ title }) => {
  return (
    <div
      className="relative w-full mb-12 mb:mb-0"
      style={{ paddingTop: `${(202 / 1082) * 100}%` }}
    >
      {/* Background Image (Visible only on md and larger) */}
      <div
        className="absolute inset-0 bg-cover bg-center hidden md:block"
        style={{ backgroundImage: "url('/lovable-uploads/sideWindowBG.png')" }}
      />

      {/* Title Section */}
      <div className="-mb-20  absolute inset-0 flex items-center justify-center text-center md:pl-20 md:pt-12 md:-mb-0 md:justify-start md:text-left">
        <h1 className="text-2xl font-semibold text-[#2D545E]">{title}</h1>
      </div>
    </div>
  );
};

export default TitleBanner;
