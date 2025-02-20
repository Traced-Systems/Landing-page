
import React from "react";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import SheetBackButton from "./shared/SheetBackButton";
import IndustrySheetCTA from "./shared/IndustrySheetCTA";

interface BeOurNextUseCaseSheetProps {
  isOpen: boolean;
  onClose: () => void;
}

const BeOurNextUseCaseSheet = ({ isOpen, onClose }: BeOurNextUseCaseSheetProps) => {
  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent
        side="right"
        className="!w-full sm:!w-[75vw] 2xl:!w-[66vw] sm:!max-w-[75vw] 2xl:!max-w-[66vw] overflow-y-auto bg-[#F7F7F5] border-l shadow-xl p-0"
      >
        <SheetBackButton onBack={onClose} />

        <div className="h-full flex flex-col">
          <div className="pt-24 px-8">
            <div className="max-w-4xl mx-auto">
              <div className="mb-8">
                <h1 className="text-4xl font-bold text-primary mb-4">Be Our Next Success Story</h1>
                <p className="text-gray-600 text-lg">
                  Ready to innovate and comply with evolving legislation? Let's explore how the DPP framework can enhance customer experiences and drive circularity...
                </p>
              </div>

              <div className="flex justify-center">
                <img
                  src="/lovable-uploads/993d7c66-1d01-4e1e-89ce-2dee7a7c3dae.png"
                  alt="Be Our Next Success Story"
                  className="w-[70vw] lg:w-[45vw] object-cover rounded-lg mb-8"
                />
              </div>

              <div className="prose max-w-none mb-12">
                <h2 className="text-2xl font-bold text-primary mb-4">The Challenge</h2>
                <p className="text-gray-600 mb-8">
                  Global supply chains are increasingly complex, regulations are tightening, and consumers expect transparency. Without the right tools, businesses face higher costs, reputational risks, and lost opportunities.
                </p>

                <h2 className="text-2xl font-bold text-primary mb-4">The Solution</h2>
                <p className="text-gray-600 mb-8">
                  Traced Systems' Digital Product Passport (DPP) is sector-agnostic, integrating supplier data, compliance requirements, and consumer insights on a secure blockchain. This provides full traceability, streamlined processes, and sustainability metrics.
                </p>

                <h2 className="text-2xl font-bold text-primary mb-4">The Results</h2>
                <p className="text-gray-600 mb-8">
                  Companies using our DPP reduce compliance headaches, strengthen brand trust, and minimize waste. They gain actionable insights that drive innovation and boost profitability.
                </p>

                <h2 className="text-2xl font-bold text-primary mb-4">Why You Need a DPP</h2>
                <p className="text-gray-600 mb-8">
                  With mounting pressures from regulators and consumers, a reliable DPP is your strategic advantage. Embrace transparency, protect your brand, and lead in sustainability—become our next success story.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-auto w-full">
            <IndustrySheetCTA
              title="Want to Learn More About Our Solutions?"
              description="Discover how our digital product passport can transform your business operations and help you meet sustainability goals."
            />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default BeOurNextUseCaseSheet;
