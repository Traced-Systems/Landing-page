import React from 'react';
import { Button } from "@/components/ui/button";

const Technologies = () => {
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
            <Button variant="secondary" className="rounded-full">
              Know More
            </Button>
          </div>
          
          <div className="relative">
            <img
              src="/lovable-uploads/9621fc90-f1a7-4614-8942-50b1687d7511.png"
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