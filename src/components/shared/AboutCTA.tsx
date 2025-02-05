import React from 'react';
import { Button } from "@/components/ui/button";

interface AboutCTAProps {
  onClose?: () => void;
}

const AboutCTA = ({ onClose }: AboutCTAProps) => {
  return (
    <div className="bg-[#173A44] rounded-lg shadow-md p-12 text-center">
      <h3 className="text-2xl font-bold text-white mb-6">
        Do you want to know more?
      </h3>
      <Button 
        variant="secondary"
        className="px-8 py-2 rounded-full"
        onClick={onClose}
      >
        Get in Touch
      </Button>
    </div>
  );
};

export default AboutCTA;