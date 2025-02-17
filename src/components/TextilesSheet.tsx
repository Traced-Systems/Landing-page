import React from "react";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import IndustrySheetHeader from "./shared/IndustrySheetHeader";
import IndustrySheetCard from "./shared/IndustrySheetCard";
import IndustrySheetCTA from "./shared/IndustrySheetCTA";
import Button1 from "./ui/button-1";
import SheetBackButton from "./shared/SheetBackButton";
import { useNavigate } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import ExpandableImage from "./shared/ExpandableImage";

interface TextilesSheetProps {
  isOpen: boolean;
  onClose: () => void;
  onBack: () => void;
}

const TextilesSheet = ({ isOpen, onClose, onBack }: TextilesSheetProps) => {
  const navigate = useNavigate();

  const handleSheetClose = (open: boolean) => {
    if (!open) {
      onClose();
      // Navigate to index after closing
      setTimeout(() => {
        navigate("/");
      }, 300);
    }
  };

  const cards = [
    {
      title: "Deliver Lifecycle Transparency",
      content:
        "Our platform unites data and stakeholders at every stage from raw materials to recycling or resale offering actionable transparency. By integrating all touchpoints in the supply chain, we help businesses reduce waste, build trust, and make more informed decisions.",
      iconSrc: "/lovable-uploads/859fbae4-6beb-478f-8c68-b8afd2733b38.png",
    },
    {
      title: "Ensure Reliable Compliance",
      content:
        "Powered by secure blockchain, our solution provides tamper‐proof records to meet both internal and external standards. Data validation and sharing streamlined compliance, boost stakeholder confidence, and lay the groundwork for truly sustainable operations.",
      iconSrc: "/lovable-uploads/af862426-05dd-45c3-ac0a-40e68e59f5cc.png",
    },
    {
      title: "Enable Sustainable Growth",
      content:
        "We equip organizations to meet the rising demand for credible, eco‐friendly products whether in B2B or B2C markets. By verifying sustainability claims and improving transparency, our tool helps businesses stand out, reduce environmental impact, and foster profitable growth.",
      iconSrc: "/lovable-uploads/7e022afd-d192-4c0a-92fc-014012d85fb2.png",
    },
  ];

  const valueChainItems = [
    {
      title: "Material Suppliers",
      image: "/lovable-uploads/b9909e8a-e966-4e3c-b02a-76a8af0d8ff9.png",
    },
    {
      title: "Manufacturers",
      image: "/lovable-uploads/8377c4c7-04ad-4a5c-84c4-156e77bae080.png",
    },
    {
      title: "Brands",
      image: "/lovable-uploads/a573ee0f-f1c1-41a5-aa75-5cc16f34c7f7.png",
    },
    {
      title: "Logistics & Retail",
      image: "/lovable-uploads/d7a8b79a-12ba-4345-b97d-9ea4a42ab4f2.png",
    },
    {
      title: "Consumers",
      image: "/lovable-uploads/ada7eeee-d085-43cf-a1e5-7bb8a5cb193f.png",
    },
    {
      title: "Circular Facilities",
      image: "/lovable-uploads/c9ebed1f-6c72-47ae-a32f-1d84fc775cdb.png",
    },
  ];

  return (
    <Sheet open={isOpen} onOpenChange={handleSheetClose}>
      <SheetContent
        side="right"
        className="!w-full sm:!w-[75vw] 2xl:!w-[66vw] sm:!max-w-[75vw] 2xl:!max-w-[66vw] overflow-y-auto bg-[#F7f7f7] border-l shadow-xl p-0 z-[995]"
      >
        <SheetBackButton onBack={onBack} />
        <div
          className="relative w-full hidden sm:block"
          style={{ paddingTop: `${(202 / 1082) * 100}%` }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/lovable-uploads/sideWindowBG.png')",
            }}
          />

          <div className="absolute inset-0 flex items-center pl-6 sm:pl-20 pt-12">
            <h1 className="text-2xl font-semibold text-[#2D545E]">Textiles</h1>
          </div>
        </div>
        <div className="h-full flex flex-col">
          <div className="pt-8 sm:pt-12">
            <IndustrySheetHeader
              title="Textiles"
              description="Traced Systems' Digital Product Passport tackles supply chain gaps, ensures ethical sourcing, and drives circularity across the textile lifecycle."
              imageSrc="/lovable-uploads/36f60108-99d8-465a-81a4-e52c86799730.png"
              onBack={onBack}
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

          <div className="px-4 sm:px-20">
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
                    <ExpandableImage
                      src={item.image}
                      alt={item.title}
                    />
                  </div>
                ))}
              </div>

              <Button1
                className="mx-auto bg-[#f7f7f7]"
                icon={
                  <img
                    src="/lovable-uploads/5e409765-ccc7-4562-9b05-c46afe65a486.png"
                    alt="arrow"
                    className="w-3 h-3 object-contain"
                  />
                }
              >
                Know more
              </Button1>
            </div>
          </div>

          <div className="mt-auto w-full">
            <IndustrySheetCTA
              title="Drive Innovation in Textiles With the Experts Who Understand Your Industry"
              description="Ready to elevate your textile operations? Our passion for sustainable innovation and deep industry insight will empower you to stay ahead in a fast-paced market. Let's explore how we can help you deliver on your mission—book a demo today!"
            />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default TextilesSheet;
