import React from 'react';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import IndustryCard from './IndustryCard';
import EURegulationsSection from './EURegulationsSection';
import CTASection from './CTASection';

const IndustriesSheet = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="text-gray-600 hover:text-primary transition-colors">Industries</button>
      </SheetTrigger>
      <SheetContent 
        side="right" 
        className="!w-[75vw] 2xl:!w-[66vw] sm:!max-w-[75vw] 2xl:!max-w-[66vw] overflow-y-auto bg-[#F7F7F5] border-l shadow-xl z-[998]"
      >
        <div className="h-full flex flex-col pt-20">
          {/* Top Section with Background */}
          <div 
            className="relative mb-8 py-8 px-4"
            style={{
              backgroundImage: 'url("/lovable-uploads/4187353b-b062-491f-b38c-eaae240654cd.png")',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              backgroundSize: 'cover'
            }}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <h1 className="text-2xl font-semibold text-primary">Industries</h1>
              </div>
            </div>
          </div>

          {/* Section Title */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary">Key Industries We Serve</h2>
          </div>

          {/* Industry Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-12 items-start">
            <IndustryCard 
              title="Textiles"
              description="Traced Systems' Digital Product Passport tackles supply chain gaps, ensures ethical sourcing, and drives circularity across the textile lifecycle."
              imageSrc="/lovable-uploads/2320cd7d-0e5e-4635-b26a-2d2eaeb0aa50.png"
              imageAlt="Textiles"
            />
            <IndustryCard 
              title="Batteries"
              description="Traced Systems' Digital Product Passport streamlines battery management by enhancing transparency, ensuring compliance, and optimizing the full product lifecycle."
              imageSrc="/lovable-uploads/efedcb76-b69e-4a52-8689-41020d02ede5.png"
              imageAlt="Batteries"
            />
          </div>

          <EURegulationsSection />
          <CTASection />
          
          {/* Bottom Spacing */}
          <div className="pb-[125px]"></div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default IndustriesSheet;