import React from 'react';
import { Button } from "@/components/ui/button";

interface AboutCTAProps {
  onClose?: () => void;
}

const AboutCTA = ({ onClose }: AboutCTAProps) => {
  return (
    <div className="bg-[#173A44] w-full p-12 text-center">
      <h3 className="text-2xl font-bold text-white mb-6">
        Do you want to know more?
      </h3>
      <Button 
        variant="secondary"
        className="bg-[#D5A87E] hover:bg-[#C49A70] text-white px-8 py-2 rounded-full border-none"
        onClick={onClose}
      >
        Get in Touch
      </Button>
    </div>
  );
};

export default AboutCTA;