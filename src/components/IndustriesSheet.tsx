import React, { useState } from "react";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import IndustryCard from "./IndustryCard";
import EURegulationsSection from "./EURegulationsSection";
import CTASection from "./CTASection";
import TextilesSheet from "./TextilesSheet";
import BatteriesSheet from "./BatteriesSheet";
import SheetBackButton from "./shared/SheetBackButton";
import CloseButton from "./shared/CloseButton";
import Button1 from "./ui/button-1";

interface IndustriesSheetProps {
  isOpen: boolean;
  onClose: () => void;
  onBack?: () => void;
}

const IndustriesSheet = ({
  isOpen,
  onClose,
  onBack = onClose,
}: IndustriesSheetProps) => {
  const [activeSheet, setActiveSheet] = useState<
    "industries" | "textiles" | "batteries" | null
  >(null);

  React.useEffect(() => {
    if (isOpen) {
      setActiveSheet("industries");
    } else {
      setActiveSheet(null);
    }
  }, [isOpen]);

  const handleTextilesClick = () => {
    setActiveSheet("textiles");
  };

  const handleBatteriesClick = () => {
    setActiveSheet("batteries");
  };

  const handleSheetClose = () => {
    setActiveSheet("industries");
  };

  const handleMainSheetToggle = (open: boolean) => {
    if (!open) {
      onClose();
      setActiveSheet(null);
    }
  };

  return (
    <>
      <Sheet
        open={isOpen && activeSheet === "industries"}
        onOpenChange={handleMainSheetToggle}
      >
        <SheetContent
          side="right"
          className="!w-full sm:!w-[75vw] 2xl:!w-[66vw] sm:!max-w-[75vw] 2xl:!max-w-[66vw] overflow-y-auto bg-[#F7F7F5] border-l shadow-xl p-0 z-[999]"
        >
          <div className="h-full flex flex-col relative">
            <SheetBackButton onBack={onBack} />
            <CloseButton onClose={onClose} />
            
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

              <div className="absolute inset-0 flex items-center pl-20 pt-12">
                <h1 className="text-2xl font-semibold text-[#2D545E] ">
                  Industries
                </h1>
              </div>
            </div>

            <div className="text-center mb-12 pt-20">
              <h2 className="text-2xl text-[#173A44] font-medium ">
                Key Industries We Serve
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-20 mb-24 px-20 xs:px-16">
              <div className="space-y-4">
                <IndustryCard
                  title="Textiles"
                  description="Traced Systems' Digital Product Passport tackles supply chain gaps, ensures ethical sourcing, and drives circularity across the textile lifecycle."
                  imageSrc="/lovable-uploads/2320cd7d-0e5e-4635-b26a-2d2eaeb0aa50.png"
                  imageAlt="Textiles"
                  onClick={handleTextilesClick}
                />
              </div>

              <div className="space-y-4">
                <IndustryCard
                  title="Batteries"
                  description="Traced Systems' Digital Product Passport streamlines battery management by enhancing transparency, ensuring compliance, and optimizing the full product lifecycle."
                  imageSrc="/lovable-uploads/efedcb76-b69e-4a52-8689-41020d02ede5.png"
                  imageAlt="Batteries"
                  onClick={handleBatteriesClick}
                />
              </div>
            </div>

            <EURegulationsSection />

            <CTASection>
              <div className="text-center mt-6 px-8">
                <div>
                  <h2 className="text-2xl font-medium text-center mb-2 text-[#173A44]">
                    A Unified Traceability Platform
                  </h2>
                  <h3 className="text-xl text-center mb-6 text-[#173A44]">
                    From Source to Sustainability
                  </h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Our comprehensive platform integrates seamlessly across your
                  entire value chain, providing real-time visibility and control
                  over your product lifecycle.
                </p>
                <img
                  src="/lovable-uploads/c0da0885-a0e1-4ac0-b309-a464bcd66b53.png"
                  alt="Unified Platform"
                  className="w-full max-w-4xl mx-auto pt-4 mb-12 rounded-lg"
                />
                <div className="flex justify-center">
                  <Button1 className="px-8">Get in touch</Button1>
                </div>
              </div>
            </CTASection>

            <div className="pb-[100px]"></div>
          </div>
        </SheetContent>
      </Sheet>

      <TextilesSheet
        isOpen={activeSheet === "textiles"}
        onClose={() => setActiveSheet("industries")}
        onBack={handleSheetClose}
      />

      <BatteriesSheet
        isOpen={activeSheet === "batteries"}
        onClose={() => setActiveSheet("industries")}
        onBack={handleSheetClose}
      />
    </>
  );
};

export default IndustriesSheet;
