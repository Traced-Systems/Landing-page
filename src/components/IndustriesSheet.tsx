import React, { useState } from 'react';
import { Sheet, SheetContent } from "@/components/ui/sheet";
import IndustryCard from './IndustryCard';
import EURegulationsSection from './EURegulationsSection';
import CTASection from './CTASection';
import TextilesSheet from './TextilesSheet';
import BatteriesSheet from './BatteriesSheet';
import SheetBackButton from './shared/SheetBackButton';
import Button1 from './ui/button-1';

interface IndustriesSheetProps {
  isOpen: boolean;
  onClose: () => void;
  onBack?: () => void;  // Made onBack optional
}

const IndustriesSheet = ({ isOpen, onClose, onBack = onClose }: IndustriesSheetProps) => {
  const [activeSheet, setActiveSheet] = useState<'industries' | 'textiles' | 'batteries' | null>(null);

  React.useEffect(() => {
    if (isOpen) {
      setActiveSheet('industries');
    } else {
      setActiveSheet(null);
    }
  }, [isOpen]);

  const handleTextilesClick = () => {
    setActiveSheet('textiles');
  };

  const handleBatteriesClick = () => {
    setActiveSheet('batteries');
  };

  const handleSheetClose = () => {
    setActiveSheet('industries');
  };

  const handleMainSheetToggle = (open: boolean) => {
    if (!open) {
      onClose();
      setActiveSheet(null);
    }
  };

  return (
    <>
      <Sheet open={isOpen && activeSheet === 'industries'} onOpenChange={handleMainSheetToggle}>
        <SheetContent 
          side="right" 
          className="!w-[75vw] 2xl:!w-[66vw] sm:!max-w-[75vw] 2xl:!max-w-[66vw] overflow-y-auto bg-[#F7F7F5] border-l shadow-xl p-0 z-[999]"
        >
          <SheetBackButton onBack={onBack} />

          <div className="h-full flex flex-col pt-20">
            <div className="relative mb-8 py-8 px-4">
              <div className="flex items-center justify-center">
                <h1 className="text-2xl font-semibold text-primary">Industries</h1>
              </div>
            </div>

            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary">Key Industries We Serve</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-12 px-8">
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
              <div className="text-center mb-6">
                <p className="text-gray-600 mb-6">
                  Our comprehensive platform integrates seamlessly across your entire value chain, 
                  providing real-time visibility and control over your product lifecycle.
                </p>
                <img 
                  src="/lovable-uploads/c0da0885-a0e1-4ac0-b309-a464bcd66b53.png"
                  alt="Unified Platform"
                  className="w-full max-w-4xl mx-auto mb-6 rounded-lg"
                />
                <Button1>
                  Learn More
                </Button1>
              </div>
            </CTASection>
            
            <div className="pb-[125px]"></div>
          </div>
        </SheetContent>
      </Sheet>

      <TextilesSheet 
        isOpen={activeSheet === 'textiles'}
        onClose={() => setActiveSheet('industries')}
        onBack={handleSheetClose}
      />

      <BatteriesSheet 
        isOpen={activeSheet === 'batteries'}
        onClose={() => setActiveSheet('industries')}
        onBack={handleSheetClose}
      />
    </>
  );
};

export default IndustriesSheet;
