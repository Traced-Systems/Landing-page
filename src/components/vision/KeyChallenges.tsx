import React from 'react';

interface ChallengeItemProps {
  icon: string;
  label: string;
}

const ChallengeItem = ({ icon, label }: ChallengeItemProps) => (
  <div className="flex items-center gap-2">
    <img src={icon} alt={label} className="w-5 h-5" />
    <span>{label}</span>
  </div>
);

const KeyChallenges = () => {
  return (
    <div className="bg-white rounded-lg p-8 shadow-lg">
      <h3 className="text-2xl font-semibold text-center mb-8">Key Challenges We Tackle</h3>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h4 className="font-semibold">Resource Management</h4>
          <div className="space-y-6">
            <ChallengeItem icon="/lovable-uploads/7f56d5a4-5e82-4519-b41f-f45d4cc868a8.png" label="Land" />
            <ChallengeItem icon="/lovable-uploads/e9077cf4-6696-4b67-be50-49389c7ec523.png" label="Water" />
            <ChallengeItem icon="/lovable-uploads/8486a44a-5122-4730-9328-351841ed5a58.png" label="Energy" />
            <p className="text-sm text-gray-600 mt-4">
              Remain unsustainably high, driving up costs and environmental stress.
            </p>
          </div>
        </div>
        <div className="space-y-4">
          <h4 className="font-semibold">Environmental Impact</h4>
          <div className="space-y-6">
            <ChallengeItem icon="/lovable-uploads/8462f921-e4c1-4f76-b4d8-c1d8bae08e4b.png" label="Chemical" />
            <ChallengeItem icon="/lovable-uploads/755a902f-12c1-476a-85a3-e53309583d3f.png" label="Emissions" />
            <ChallengeItem icon="/lovable-uploads/4554d4f3-b99f-4276-95a6-d80ab9108e5b.png" label="Waste" />
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