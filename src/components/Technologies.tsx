
import React from 'react';
import { Button } from "@/components/ui/button";

const Technologies = () => {
  const handleKnowMoreClick = () => {
    window.open('https://chromia.com/', '_blank');
  };

  return (
    <section className="py-20" style={{ backgroundColor: '#f2f1ee' }}>
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">
              What technologies are behind DPP?
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Chromia merges the strengths of relational databases with blockchain, offering direct on-chain queries, lightning-fast read/write operations, and data indexing. This innovative approach simplifies complex data management and opens up new possibilities for decentralized applications making it an ideal engine behind DPPs.
            </p>
            <Button 
              variant="secondary" 
              className="rounded-full"
              onClick={handleKnowMoreClick}
            >
              Know More
            </Button>
          </div>
          
          <div className="relative">
            <img
              src="/lovable-uploads/3a4a0905-b1c8-426c-9e11-9192f1bc54da.png"
              alt="Chromia Technology"
              className="w-full rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
