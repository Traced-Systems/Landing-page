import React from "react";

import { Button } from "@/components/ui/button";

interface AboutCTAProps {
  onClose?: () => void;
}

const AboutCTA = ({ onClose }: AboutCTAProps) => {
  const handleContactClick = () => {
    if (onClose) {
      onClose();
      // Small delay to ensure smooth transition between sheets
      setTimeout(() => {
        window.dispatchEvent(new CustomEvent("openContact"));
      }, 100);
    }
  };

  return (
    <section className="bg-[#173A44] w-full p-12 text-center mx-0 my-[84px] py-[64px]">
      <h3 className="text-2xl font-bold text-white mb-6">
        Do you want to know more?
      </h3>
      <Button
        variant="secondary"
        className="bg-[#D5A87E] hover:bg-[#C49A70] text-white px-8 py-2 rounded-full border-none shadow-[inset_3px_3px_6px_rgba(0,0,0,0.08),inset_-3px_-3px_6px_rgba(255,255,255,0.3)]"
        onClick={handleContactClick}
      >
        Get in Touch
      </Button>
    </section>
  );
};
export default AboutCTA;
