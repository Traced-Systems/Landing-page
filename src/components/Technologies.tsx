
import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
const Technologies = () => {
  const handleKnowMoreClick = () => {
    window.open("https://chromia.com/", "_blank");
  };
  return <section className="py-20" style={{
    backgroundColor: "#f2f1ee"
  }}>
      <div className="container mx-auto px-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-medium text-primary">
              What technologies are behind DPP?
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Chromia merges the strengths of relational databases with
              blockchain, offering direct on-chain queries, lightning-fast
              read/write operations, and data indexing. This innovative approach
              simplifies complex data management and opens up new possibilities
              for decentralized applications making it an ideal engine behind
              DPPs.
            </p>
            <Button variant="secondary" className="rounded-full border-2 border-[#E4AC70] bg-[#F2F1EE] text-[#143A44] flex items-center gap-2 pl-7 pr-6 hover:bg-[#EEEADF]" onClick={handleKnowMoreClick}>
              Know More
              <ChevronRight className="w-5 h-5 text-[#143A44]" />
            </Button>
          </div>

          <div className="relative">
            <img alt="Chromia Technology" className="w-full rounded-2xl shadow-xl lg:ml-4" src="/lovable-uploads/937e51d8-dc00-440e-958c-b1d22c96289e.png" />
          </div>
        </div>
      </div>
    </section>;
};
export default Technologies;
