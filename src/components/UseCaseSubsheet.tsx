
import React, { ReactNode } from "react";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import SheetBackButton from "./shared/SheetBackButton";

interface UseCaseSubsheetProps {
  isOpen: boolean;
  onClose: () => void;
  useCase: {
    title: string;
    description: string | ReactNode;
    image: string;
    fullContent?: {
      title: string;
      authorIcon: string;
      introduction: string | ReactNode;
      content: Array<{
        heading: string;
        text: string;
      }>;
    };
  };
}

const UseCaseSubsheet = ({ isOpen, onClose, useCase }: UseCaseSubsheetProps) => {
  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent
        side="right"
        className="!w-full sm:!w-[75vw] 2xl:!w-[66vw] sm:!max-w-[75vw] 2xl:!max-w-[66vw] overflow-y-auto bg-[#F7F7F5] border-l shadow-xl p-0"
      >
        <SheetBackButton onBack={onClose} />

        <div className="h-full flex flex-col">
          <div className="text-center mb-12 relative px-4 pt-16">
            <h1 className="text-4xl font-bold text-[#143A44] mb-8">
              {useCase.fullContent?.title || useCase.title}
            </h1>
          </div>

          <div className="px-4 sm:px-8 mb-12">
            <div className="max-w-4xl mx-auto">
              {useCase.fullContent?.authorIcon && (
                <img
                  src={useCase.fullContent.authorIcon}
                  alt="Author"
                  className="w-14 h-14 mb-6"
                />
              )}

              <div className="text-lg text-gray-700 mb-12">
                {useCase.fullContent?.introduction || useCase.description}
              </div>

              {useCase.fullContent?.content.map((section, index) => (
                <div key={index} className="mb-12">
                  <h2 className="text-2xl font-semibold mb-4 text-[#143A44]">
                    {section.heading}
                  </h2>
                  <div className="text-gray-700 whitespace-pre-line">
                    {section.text}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default UseCaseSubsheet;
