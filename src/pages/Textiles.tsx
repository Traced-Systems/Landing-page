import React from "react";
import IndustrySheetHeader from "@/components/shared/IndustrySheetHeader";
import IndustrySheetCard from "@/components/shared/IndustrySheetCard";
import IndustrySheetCTA from "@/components/shared/IndustrySheetCTA";
import Button1 from "@/components/ui/button-1";
import ExpandableImage from "@/components/shared/ExpandableImage";
import { cards, valueChainItems } from "@/constants";
import TitleBanner from "@/components/shared/TitleBanner";

const Textiles = () => {
  return (
    <div className="container mx-auto mt-20">
      <TitleBanner title="Textiles" />
      <div className="pt-8 sm:pt-12 container mx-auto">
        <IndustrySheetHeader
          title="Textiles"
          description="Traced Systems' Digital Product Passport tackles supply chain gaps, ensures ethical sourcing, and drives circularity across the textile lifecycle."
          imageSrc="/lovable-uploads/36f60108-99d8-465a-81a4-e52c86799730.png"
        />
      </div>
      <div className="text-center my-10 sm:my-20 mx-4 sm:mx-20">
        <h2 className="text-2xl font-medium text-[#173A44] mb-8 sm:mb-12">
          How Traced Systems Elevates the Textile Industry
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 mb-10">
          {cards.map((card, index) => (
            <IndustrySheetCard
              key={index}
              title={card.title}
              content={card.content}
              iconSrc={card.iconSrc}
            />
          ))}
        </div>
      </div>

      <div className="px-4 pb-16 sm:px-20">
        <div className="mb-8 sm:mb-12 text-center">
          <h2 className="text-2xl font-medium text-[#173A44] mb-4">
            Driving Collaborative Sustainability Across the Entire Value Chain
          </h2>
          <p className="text-gray-600 mb-6 sm:mb-8 max-w-3xl mx-auto text-sm sm:text-base">
            Our digital passport system enables unprecedented transparency and
            traceability across your entire textile supply chain. From raw
            material sourcing to final product delivery, we help you track,
            verify, and optimize every step of the journey.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-3 sm:gap-6 mb-6 sm:mb-8 max-w-5xl mx-auto">
            {valueChainItems.map((item, index) => (
              <div key={index} className="w-full">
                <ExpandableImage src={item.image} alt={item.title} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-auto w-full">
        <IndustrySheetCTA
          title="Drive Innovation in Textiles With the Experts Who Understand Your Industry"
          description="Ready to elevate your textile operations? Our passion for sustainable innovation and deep industry insight will empower you to stay ahead in a fast-paced market. Let's explore how we can help you deliver on your mission—book a demo today!"
        />
      </div>
    </div>
  );
};

export default Textiles;
