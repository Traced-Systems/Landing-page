import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import UseCasesSheet from './UseCasesSheet';

const UseCases = () => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#002A38] mb-2">
            Use Cases/Blogs
          </h2>
          <h3 className="text-lg text-gray-600">
            See Our Impact
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          
        </div>

        <div className="flex justify-center">
          <Button 
            variant="outline" 
            className="bg-[#F1F0FB] px-8 py-6 rounded-xl text-lg font-medium
                     shadow-[4px_4px_8px_0px_rgba(0,0,0,0.1),-4px_-4px_8px_0px_rgba(255,255,255,0.8)]
                     hover:shadow-[6px_6px_12px_0px_rgba(0,0,0,0.12),-6px_-6px_12px_0px_rgba(255,255,255,0.9)]
                     hover:translate-y-[-2px] transition-all duration-300"
            onClick={() => setIsSheetOpen(true)}
          >
            Know More
          </Button>
        </div>
      </div>

      <UseCasesSheet 
        isOpen={isSheetOpen}
        onClose={() => setIsSheetOpen(false)}
      />
    </section>
  );
};

export default UseCases;
