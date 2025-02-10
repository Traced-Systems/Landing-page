import React from 'react';
import { Sheet, SheetContent } from "@/components/ui/sheet";
import SheetBackButton from './shared/SheetBackButton';
import AboutCTA from './shared/AboutCTA';
import SheetBackgroundSection from './shared/SheetBackgroundSection';

interface UseCasesSheetProps {
  isOpen: boolean;
  onClose: () => void;
}

const UseCasesSheet = ({ isOpen, onClose }: UseCasesSheetProps) => {
  const cases = [
    {
      title: "BLK DNM: Connected Fashion",
      description: "BLK DNM has launched their 'Connected Fashion' campaign, delivering the first collection of apparel embedded with...",
      image: "/lovable-uploads/2320cd7d-0e5e-4635-b26a-2d2eaeb0aa50.png"
    },
    {
      title: "Battery Lifecycle Innovation",
      description: "What if a battery's lifecycle routing left a verifiable trail? This pilot project, powered by a blockchain-based Digital Product Passport...",
      image: "/lovable-uploads/efedcb76-b69e-4a52-8689-41020d02ede5.png"
    },
    {
      title: "Be Our Next Use Case",
      description: "Ready to innovate and comply with evolving legislation? Let's explore how the DPP framework can enhance customer experiences and drive circularity...",
      image: "/lovable-uploads/36f60108-99d8-465a-81a4-e52c86799730.png"
    }
  ];

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent 
        side="right" 
        className="!w-[75vw] 2xl:!w-[66vw] sm:!max-w-[75vw] 2xl:!max-w-[66vw] overflow-y-auto bg-[#F7F7F5] border-l shadow-xl p-0"
      >
        <SheetBackButton onBack={onClose} />

        <div className="h-full flex flex-col">
          <SheetBackgroundSection>
            <div className="pt-24 px-8">
              <div className="flex items-center gap-8 mb-12">
                <Button 
                  variant="ghost" 
                  onClick={onClose}
                  className="hover:bg-gray-100 z-50"
                >
                  <ArrowLeft className="h-6 w-6" />
                </Button>
                <h1 className="text-3xl font-bold">Use Cases</h1>
              </div>

              <div className="text-center mb-12">
                <p className="text-gray-600">
                  Discover how Traced Systems transforms challenges into opportunities for businesses.
                </p>
              </div>
            </div>
          </SheetBackgroundSection>

          <div className="px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {cases.map((item, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-[4px_4px_10px_0px_rgba(0,0,0,0.1),-4px_-4px_10px_0px_rgba(255,255,255,0.9)] hover:shadow-[6px_6px_12px_0px_rgba(0,0,0,0.15),-6px_-6px_12px_0px_rgba(255,255,255,0.95)] transition-all duration-300"
                >
                  <img 
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <button className="text-blue-500 hover:text-blue-600 transition-colors">
                    Know More →
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-auto w-full">
            <AboutCTA onClose={onClose} />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default UseCasesSheet;
