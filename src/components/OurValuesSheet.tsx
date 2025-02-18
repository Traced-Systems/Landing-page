
import React from "react";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import SheetBackButton from "./shared/SheetBackButton";
import AboutCTA from "./shared/AboutCTA";
import TabsSection from "./our-values/TabsSection";
import AccordionSection from "./our-values/AccordionSection";
import SheetBackgroundSection from "./shared/SheetBackgroundSection";

interface OurValuesSheetProps {
  isOpen: boolean;
  onClose: () => void;
}

const OurValuesSheet = ({ isOpen, onClose }: OurValuesSheetProps) => {
  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent
        side="right"
        className="!w-full sm:!w-[75vw] 2xl:!w-[66vw] sm:!max-w-[75vw] 2xl:!max-w-[66vw] overflow-y-auto bg-[#F7F7F5] p-0"
      >
        <SheetBackButton onBack={onClose} />
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
              Our Values
            </h1>
          </div>
        </div>

        <div className="h-full flex flex-col pt-16 py-0">
          <SheetBackgroundSection>
            <div className="pt-8 px-8 py-[31px] my-0">
              <div className="text-center mb-12">
                <h2 className="text-2xl font-semibold text-primary mb-2">
                  Traced Systems
                </h2>
                <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                  Traced Systems, powered by Chromia offers businesses an
                  intuitive, secure solution to track products throughout their
                  entire lifecycle from production to end-of-life ensuring full
                  transparency, compliance, and trust at every stage.
                </p>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  By merging traditional processes with modern technology, we
                  help organizations unlock new efficiencies, engage customers
                  more deeply, and confidently embrace the future of sustainable
                  innovation.
                </p>
              </div>
            </div>
          </SheetBackgroundSection>

          <div className="px-8 space-y-12 flex-grow">
            <TabsSection />
            <AccordionSection />
          </div>

          <AboutCTA onClose={onClose} />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default OurValuesSheet;
