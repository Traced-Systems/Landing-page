import React from 'react';
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import AboutCTA from './shared/AboutCTA';
import VisionHeader from './vision/VisionHeader';
import VisionCard from './vision/VisionCard';
import KeyChallenges from './vision/KeyChallenges';
import SuccessSection from './vision/SuccessSection';

interface OurVisionSheetProps {
  isOpen: boolean;
  onClose: () => void;
}

const OurVisionSheet = ({ isOpen, onClose }: OurVisionSheetProps) => {
  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent 
        side="right" 
        className="!w-[75vw] 2xl:!w-[66vw] sm:!max-w-[75vw] 2xl:!max-w-[66vw] overflow-y-auto bg-[#F7F7F5] border-l"
      >
        <div className="h-full flex flex-col pt-20">
          <Button 
            variant="ghost" 
            onClick={onClose}
            className="absolute left-4 top-4 hover:bg-gray-100"
          >
            <ArrowLeft className="h-6 w-6" />
          </Button>

          <div className="px-8 space-y-16">
            <VisionHeader />

            <VisionCard
              title="Overcoming Transparency and Traceability Barriers in Circular Economies"
              content="Modern industries face growing pressure to reduce negative environmental impact. Through our innovative solutions, we work to make data-driven eco-responsibility a key asset rather than a burden. Companies often struggle with accurate emission tracking - our platform changes that, offering precise data at each stage in a sustainable workflow."
              imageSrc="/lovable-uploads/Factory.png"
              imageAlt="Factory"
              imagePosition="right"
            />

            <VisionCard
              title="How We're Making a Difference"
              content="Through our blockchain-powered solutions, we seek to address the growing challenges of sustainable production. Our platform offers verified data, track records, and clear guidance from production to end-of-life."
              imageSrc="/lovable-uploads/Businesscard.png"
              imageAlt="Business"
              imagePosition="left"
            />

            <KeyChallenges />

            <VisionCard
              title="Our Vision for the Future"
              content="Our goal is to lead industry toward a future where sustainability and profitability work hand in hand. We're doing this by providing a transparent yet adaptable framework that empowers businesses to implement and maintain responsible programs for themselves, their consumers, and society at large."
              imageSrc="/lovable-uploads/Green.png"
              imageAlt="Green"
              imagePosition="right"
            />

            <SuccessSection />

            <AboutCTA onClose={onClose} />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default OurVisionSheet;