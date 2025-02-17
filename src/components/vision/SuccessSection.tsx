import React from "react";
import { Handshake, Leaf, Globe } from "lucide-react";

const SuccessSection = () => {
  return (
    <div className="space-y-8 bg-white rounded-lg p-8 shadow-lg">
      <h3 className="text-2xl font-medium text-[#173A44] text-center">
        What Success Looks Like
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center space-y-4">
          <div className="w-12 h-12 mx-auto flex items-center justify-center">
            <img
              src="/lovable-uploads/1597880522.png"
              alt="Icon"
              className="w-12 h-12 object-contain"
            />
          </div>
          <h4 className="font-medium text-[#173A44]">Shared Accountability</h4>
          <p className="text-sm text-gray-600">
            Stakeholders from suppliers to consumers commit to shared
            sustainability standards.
          </p>
        </div>
        <div className="text-center space-y-4">
          <div className="w-12 h-12 mx-auto flex items-center justify-center">
            <img
              src="/lovable-uploads/1597880521.png"
              alt="Icon"
              className="w-12 h-12 object-contain"
            />
          </div>

          <h4 className="font-medium text-[#173A44]">Reduced Footprint</h4>
          <p className="text-sm text-gray-600">
            Smart resource management through data-driven guidance for real
            analytics.
          </p>
        </div>
        <div className="text-center space-y-4">
          <div className="w-12 h-12 mx-auto flex items-center justify-center">
            <img
              src="/lovable-uploads/1597880492.png"
              alt="Icon"
              className="w-12 h-12 object-contain"
            />
          </div>
          <h4 className="font-medium text-[#173A44]">Global Impact</h4>
          <p className="text-sm text-gray-600">
            Empowering local communities, while working together for our planet.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SuccessSection;
