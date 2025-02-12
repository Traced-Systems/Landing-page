
import React from 'react';
import { Handshake, Leaf, Globe } from "lucide-react";

const SuccessSection = () => {
  return (
    <div className="space-y-8 bg-white rounded-lg p-8 shadow-lg">
      <h3 className="text-2xl font-semibold text-center">What Success Looks Like</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center space-y-4">
          <div className="w-12 h-12 mx-auto bg-[#173A44] rounded-full flex items-center justify-center">
            <Handshake className="w-6 h-6 text-white" />
          </div>
          <h4 className="font-semibold">Shared Accountability</h4>
          <p className="text-sm text-gray-600">
            Stakeholders from suppliers to consumers commit to shared sustainability standards.
          </p>
        </div>
        <div className="text-center space-y-4">
          <div className="w-12 h-12 mx-auto bg-[#173A44] rounded-full flex items-center justify-center">
            <Leaf className="w-6 h-6 text-white" />
          </div>
          <h4 className="font-semibold">Reduced Footprint</h4>
          <p className="text-sm text-gray-600">
            Smart resource management through data-driven guidance for real analytics.
          </p>
        </div>
        <div className="text-center space-y-4">
          <div className="w-12 h-12 mx-auto bg-[#173A44] rounded-full flex items-center justify-center">
            <Globe className="w-6 h-6 text-white" />
          </div>
          <h4 className="font-semibold">Global Impact</h4>
          <p className="text-sm text-gray-600">
            Empowering local communities, while working together for our planet.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SuccessSection;
