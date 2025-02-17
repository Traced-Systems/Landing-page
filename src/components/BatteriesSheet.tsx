
import React from "react";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import IndustrySheetHeader from "./shared/IndustrySheetHeader";
import IndustrySheetCard from "./shared/IndustrySheetCard";
import IndustrySheetCTA from "./shared/IndustrySheetCTA";
import Button1 from "./ui/button-1";
import SheetBackButton from "./shared/SheetBackButton";
import { useNavigate } from "react-router-dom";

interface BatteriesSheetProps {
  isOpen: boolean;
  onClose: () => void;
  onBack: () => void;
}

const BatteriesSheet = ({ isOpen, onClose, onBack }: BatteriesSheetProps) => {
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
      title: "Lifecycle Traceability",
      content:
        "Our solution provides oversight of the entire battery lifecycle. Track raw material sourcing, manufacturing processes, in‑use performance, and eventual recycling or refurbishment. This helps you optimize operations, remain compliant with industry regulations, and confidently stand behind the integrity of your products.",
      iconSrc: "/lovable-uploads/859fbae4-6beb-478f-8c68-b8afd2733b38.png",
    },
    {
      title: "Blockchain-Secured Accuracy",
      content:
        "By harnessing blockchain technology, our platform guarantees that every data point ­­from material certifications to final inspection reports ­­is securely recorded and impossible to falsify. The result is higher stakeholder trust, streamlined compliance, and robust proof of quality throughout the battery supply chain.",
      iconSrc: "/lovable-uploads/36099.png",
    },
    {
      title: "Sustainable Performance",
      content:
        "Our solution equips you with the insights and tools needed to minimize waste, reduce carbon footprints, and meet evolving environmental standards. From resource optimization to responsible disposal, you can prove your commitment to green practices and position your organization as a leader in sustainable battery innovation.",
      iconSrc: "/lovable-uploads/7e022afd-d192-4c0a-92fc-014012d85fb2.png",
    },
  ];

  const valueChainItems = [
    {
      title: "Material Suppliers",
      image: "/lovable-uploads/151.png",
    },
    {
      title: "Manufacturers",
      image: "/lovable-uploads/152.png",
    },
    {
      title: "Brands",
      image: "/lovable-uploads/153.png",
    },
    {
      title: "Logistics & Retail",
      image: "/lovable-uploads/154.png",
    },
    {
      title: "Consumers",
      image: "/lovable-uploads/155.png",
    },
    {
      title: "Circular Facilities",
      image: "/lovable-uploads/156.png",
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
          className="relative w-full"
          style={{ paddingTop: `${(202 / 1082) * 100}%` }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/lovable-uploads/sideWindowBG.png')",
            }}
          />

          <div className="absolute inset-0 flex items-center pl-6 sm:pl-20 pt-12">
            <h1 className="text-2xl font-semibold text-[#2D545E]">Batteries</h1>
          </div>
        </div>
        <div className="h-full flex flex-col">
          <div className="pt-8 sm:pt-12">
            <IndustrySheetHeader
              title="Batteries"
              description="Traced Systems' Digital Product Passport streamlines battery management by enhancing transparency, ensuring compliance, and optimizing the full product lifecycle."
              imageSrc="/lovable-uploads/993d7c66-1d01-4e1e-89ce-2dee7a7c3dae.png.png"
              onBack={onBack}
            />
          </div>

          <div className="text-center my-10 sm:my-20 mx-4 sm:mx-20">
            <h2 className="text-2xl font-medium text-[#173A44] mb-8 sm:mb-12">
              How Traced Systems Elevates the Battery Industry
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
                traceability across your entire battery supply chain. From raw
                material sourcing to end-of-life recycling, we help you track,
                verify, and optimize every step of the journey.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-3 sm:gap-6 mb-6 sm:mb-8 max-w-5xl mx-auto">
                {valueChainItems.map((item, index) => (
                  <div key={index} className="w-full">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-auto rounded-lg shadow-md"
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
              title="Drive Innovation in Batteries With the Experts Who Understand Your Industry"
              description="Ready to elevate your battery operations? Our passion for sustainable innovation and deep industry insight will empower you to stay ahead in a fast-paced market. Let's explore how we can help you deliver on your mission—book a demo today!"
            />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default BatteriesSheet;
