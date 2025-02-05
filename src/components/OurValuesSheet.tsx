import React from 'react';
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import TabsSection from './our-values/TabsSection';
import AccordionSection from './our-values/AccordionSection';
import AboutCTA from './shared/AboutCTA';

interface OurValuesSheetProps {
  isOpen: boolean;
  onClose: () => void;
}

const OurValuesSheet = ({ isOpen, onClose }: OurValuesSheetProps) => {
  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent 
        side="right" 
        className="!w-[75vw] 2xl:!w-[66vw] sm:!max-w-[75vw] 2xl:!max-w-[66vw] overflow-y-auto bg-[#F7F7F5] border-l shadow-xl"
      >
        <div className="h-full flex flex-col pt-20">
          <Button 
            variant="ghost" 
            onClick={onClose}
            className="absolute left-4 top-4 hover:bg-gray-100"
          >
            <ArrowLeft className="h-6 w-6" />
          </Button>

          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-primary mb-4">Our Values</h1>
            <h2 className="text-2xl font-semibold text-primary mb-2">Traced Systems</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Traced Systems, powered by Chromia offers businesses an intuitive, secure solution to track products throughout their entire lifecycle from production to end-of-life ensuring full transparency, compliance, and trust at every stage.
            </p>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              By merging traditional processes with modern technology, we help organizations unlock new efficiencies, engage customers more deeply, and confidently embrace the future of sustainable innovation.
            </p>
          </div>

          <div className="px-8 space-y-12">
            <TabsSection />
            <AccordionSection />
            <AboutCTA onClose={onClose} />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default OurValuesSheet;