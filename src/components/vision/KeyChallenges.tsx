import React from "react";

const KeyChallenges = () => {
  return (
    <div className="bg-white rounded-lg px-8 py-16 shadow-lg">
      <h3 className="text-2xl text-[#173A44] font-medium text-center mb-8">
        Key Challenges We Tackle
      </h3>
      <div className="grid md:grid-cols-2 px-4 gap-12">
        <div className="space-y-4">
          <h4 className="text-[#173A44] font-medium">Resource Management</h4>
          <div className="space-y-6">
            <div className="grid grid-cols-3 !sm:grid-cols-1 gap-2">
              <div className="flex items-center gap-2">
                <img
                  src="/lovable-uploads/1597880643.svg"
                  alt="Land"
                  className="w-8 h-8"
                />
                <span>Land</span>
              </div>
              <div className="flex items-center gap-2">
                <img
                  src="/lovable-uploads/1000002919.svg"
                  alt="Water"
                  className="w-8 h-8"
                />
                <span>Water</span>
              </div>
              <div className="flex items-center gap-2">
                <img
                  src="/lovable-uploads/1597880645.svg"
                  alt="Energy"
                  className="w-8 h-8"
                />
                <span>Energy</span>
              </div>
            </div>
            <p className="text-sm text-gray-700 mt-4">
              Remain unsustainably high, driving up costs and environmental
              stress.
            </p>
          </div>
        </div>
        <div className="space-y-4">
          <h4 className="text-[#173A44] font-medium">Environmental Impact</h4>
          <div className="space-y-6">
            <div className="grid grid-cols-3 gap-4">
              <div className="flex items-center gap-2">
                <img
                  src="/lovable-uploads/1597880646.svg"
                  alt="Chemical"
                  className="w-8 h-8"
                />
                <span>Chemical</span>
              </div>
              <div className="flex items-center gap-2">
                <img
                  src="/lovable-uploads/1597880647.svg"
                  alt="Emissions"
                  className="w-8 h-8"
                />
                <span>Emissions</span>
              </div>
              <div className="flex items-center gap-2">
                <img
                  src="/lovable-uploads/1597880648.svg"
                  alt="Waste"
                  className="w-8 h-8"
                />
                <span>Waste</span>
              </div>
            </div>
            <p className="text-sm text-gray-700 mt-4">
              Require safer, more efficient handling to minimize harm to
              communities and ecosystems.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeyChallenges;
