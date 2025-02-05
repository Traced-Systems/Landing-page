import React from 'react';
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import AboutCTA from './shared/AboutCTA';

interface OurVisionSheetProps {
  isOpen: boolean;
  onClose: () => void;
}

const OurVisionSheet = ({ isOpen, onClose }: OurVisionSheetProps) => {
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
            <h1 className="text-3xl font-bold text-primary mb-4">Our Vision</h1>
            <h2 className="text-2xl font-semibold text-primary mb-2">Future Vision</h2>
            <p className="text-xl text-gray-600 mb-8">Driving Sustainable Innovation</p>
          </div>

          <div className="px-8 space-y-12">
            <div className="bg-white rounded-lg p-8 shadow-md">
              <h3 className="text-xl font-semibold mb-4">Key Sustainability Challenges</h3>
              <p className="text-gray-600">
                We recognize the complex challenges facing modern supply chains, from environmental impact to regulatory compliance. Our vision addresses these challenges head-on through innovative technology solutions.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md">
              <h3 className="text-xl font-semibold mb-4">Our Strategy</h3>
              <p className="text-gray-600">
                By leveraging blockchain technology and digital product passports, we're creating a future where transparency and sustainability are seamlessly integrated into every business operation.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md">
              <h3 className="text-xl font-semibold mb-4">Long-term Goals</h3>
              <p className="text-gray-600">
                Our ultimate goal is to establish a global standard for product lifecycle management that prioritizes sustainability, transparency, and circular economy principles.
              </p>
            </div>

            <AboutCTA onClose={onClose} />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default OurVisionSheet;