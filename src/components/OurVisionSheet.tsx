import React from "react";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import SheetBackButton from "./shared/SheetBackButton";
import AboutCTA from "./shared/AboutCTA";
import VisionHeader from "./vision/VisionHeader";
import TitleBanner from "@/components/shared/TitleBanner";
import KeyChallenges from "./vision/KeyChallenges";
import SuccessSection from "./vision/SuccessSection";

interface OurVisionSheetProps {
  isOpen: boolean;
  onClose: () => void;
}

const OurVisionSheet = ({ isOpen, onClose }: OurVisionSheetProps) => {
  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent
        side="right"
        className="!w-full sm:!w-[75vw] 2xl:!w-[66vw] sm:!max-w-[75vw] 2xl:!max-w-[66vw] overflow-y-auto bg-[#F7F7F5] p-0"
      >
        <SheetBackButton onBack={onClose} />

        <div>
          <TitleBanner title="Our Vision" />
        </div>

        <div className="h-full flex flex-col ">
          <div className="px-4 md:px-8 space-y-8 md:space-y-16 mx-12">
            <VisionHeader />

            {/* Mobile-optimized Vision Content */}
            <div className="space-y-8 md:space-y-16">
              {/* Transparency Section */}
              <div className="md:relative md:h-[330px] flex flex-col space-y-4 md:space-y-0 ">
                <img
                  src="/lovable-uploads/3b2f9435-b454-4680-aa2b-e440791a0138.png"
                  alt="Factory"
                  className="w-full h-48 md:h-[363px] md:w-96 object-cover rounded-lg md:absolute md:right-0 "
                />
                <div className="md:w-[50vw] md:absolute md:left-0 md:right-72 md:top-[30px] bg-white rounded-lg p-6 md:px-8 md:py-6 lg:py-16 shadow-lg">
                  <div className="mx-0">
                    <h3 className="text-xl font-medium mb-4 text-[#2D545E]">
                      Overcoming Transparency and Traceability Barriers in
                      Circular Economies
                    </h3>
                    <p className="text-gray-700 text-sm md:text-base">
                      Modern industries face growing pressure to reduce negative
                      environmental impact. Through our innovative solutions, we
                      work to make data-driven eco-responsibility a key asset
                      rather than a burden. Companies often struggle with
                      accurate emission tracking - our platform changes that,
                      offering precise data at each stage in a sustainable
                      workflow.
                    </p>
                  </div>
                </div>
              </div>

              {/* Making a Difference Section */}
              <div className="md:relative md:h-[330px] flex flex-col space-y-4 md:space-y-0 justify-center h-full">
                <img
                  src="/lovable-uploads/fe7649b5-4a75-4e41-86b0-935ace011244.png"
                  alt="Business"
                  className="w-full h-48 md:h-[363px] md:w-96 object-cover rounded-lg md:absolute md:left-0"
                />
                <div className="md:max-w-[46vw] md:absolute md:left-72 md:right-0 md:top-[33px] bg-white rounded-lg p-6 md:px-8 md:py-6 lg:py-16 shadow-lg">
                  <h3 className="text-xl font-medium mb-4 text-[#2D545E]">
                    How We're Making a Difference
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base">
                    Through our blockchain-powered solutions, we seek to address
                    the growing challenges of sustainable production. Our
                    platform offers verified data, track records, and clear
                    guidance from production to end-of-life.
                  </p>
                </div>
              </div>

              <KeyChallenges />

              {/* Vision for Future Section */}
              <div className="md:relative md:h-[330px] flex flex-col space-y-4 md:space-y-0 justify-center ">
                <img
                  src="/lovable-uploads/96f9bedc-23c9-439f-a0a6-225820086c01.png"
                  alt="Green plant image"
                  className="w-full h-48 md:h-[363px] md:w-96 object-cover rounded-lg md:absolute md:right-0"
                />
                <div className="md:w-[50vw] md:absolute md:left-0 md:right-96 md:top-[33px] bg-white rounded-lg p-6 md:px-8 md:py-16 shadow-lg">
                  <div className="mx-0">
                    <h3 className="text-xl font-medium mb-4 text-[#2D545E]">
                      Our Vision for the Future
                    </h3>
                    <p className="text-gray-700 text-sm md:text-base">
                      Our goal is to lead industry toward a future where
                      sustainability and profitability work hand in hand. We're
                      doing this by providing a transparent yet adaptable
                      framework that empowers businesses to implement and
                      maintain responsible programs for themselves, their
                      consumers, and society at large.
                    </p>
                  </div>
                </div>
              </div>

              <SuccessSection />
            </div>
          </div>

          <AboutCTA onClose={onClose} />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default OurVisionSheet;
