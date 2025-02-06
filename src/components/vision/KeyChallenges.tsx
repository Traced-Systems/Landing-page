import React from 'react';

const KeyChallenges = () => {
  return (
    <div className="bg-white rounded-lg p-8 shadow-lg">
      <h3 className="text-2xl font-semibold text-center mb-8">Key Challenges We Tackle</h3>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h4 className="font-semibold">Resource Management</h4>
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <img src="/lovable-uploads/b96f1414-f079-4fb6-9d9c-7b99adc06200.png" alt="Land" className="w-5 h-5" />
              <span>Land</span>
            </div>
            <div className="flex items-center gap-2">
              <img src="/lovable-uploads/6ae3a088-7cbf-47a4-9200-81399f3e41b0.png" alt="Water" className="w-5 h-5" />
              <span>Water</span>
            </div>
            <div className="flex items-center gap-2">
              <img src="/lovable-uploads/e7327db9-17b1-49f5-8957-36b6d81086c4.png" alt="Energy" className="w-5 h-5" />
              <span>Energy</span>
            </div>
            <p className="text-sm text-gray-600 mt-4">
              Remain unsustainably high, driving up costs and environmental stress.
            </p>
          </div>
        </div>
        <div className="space-y-4">
          <h4 className="font-semibold">Environmental Impact</h4>
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <img src="/lovable-uploads/aa8818bc-839a-466f-b603-7896cedad9b0.png" alt="Chemical" className="w-5 h-5" />
              <span>Chemical</span>
            </div>
            <div className="flex items-center gap-2">
              <img src="/lovable-uploads/9de06d7c-a0b7-45c4-b881-0e37b24dd6fe.png" alt="Emissions" className="w-5 h-5" />
              <span>Emissions</span>
            </div>
            <div className="flex items-center gap-2">
              <img src="/lovable-uploads/dde7850d-445b-4250-a018-00ed4568d2da.png" alt="Waste" className="w-5 h-5" />
              <span>Waste</span>
            </div>
            <p className="text-sm text-gray-600 mt-4">
              Require safer, more efficient handling to minimize harm to communities and ecosystems.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeyChallenges;