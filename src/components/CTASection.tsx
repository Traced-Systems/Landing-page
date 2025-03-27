
import React from "react";
import { Button } from "@/components/ui/button";

interface CTASectionProps {
  children?: React.ReactNode;
}

const CTASection: React.FC<CTASectionProps> = ({ children }) => {
  if (children) {
    return <div className="px-12 sm:px-12 -mx-6 sm:mx-0">{children}</div>;
  }

  return (
    <div className="text-center mt-auto px-12">
      <h3 className="text-xl text-gray-600 mb-2">
        From Source to Sustainability
      </h3>
      <h2 className="text-3xl font-bold text-primary mb-4">
        Unified Traceability Platform
      </h2>
      <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
        By enabling visibility at every stage, we help businesses reduce risk,
        protect brand reputation, and align with sustainability goals.
      </p>
      <Button className="bg-white text-primary px-8 py-3 rounded-full shadow-[4px_4px_10px_0px_rgba(0,0,0,0.1),-4px_-4px_10px_0px_rgba(255,255,255,0.9)] hover:shadow-[2px_2px_5px_0px_rgba(0,0,0,0.1),-2px_-2px_5px_0px_rgba(255,255,255,0.9)] transition-shadow">
        Learn More
      </Button>
    </div>
  );
};

export default CTASection;
