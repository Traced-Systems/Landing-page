import React from 'react';
import { Activity, Eye, ShieldCheck } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      title: 'End-to-End Tracking',
      icon: Activity,
      description: 'Complete product lifecycle monitoring',
    },
    {
      title: 'Visibility',
      icon: Eye,
      description: 'Transparent supply chain data',
    },
    {
      title: 'Compliance Monitoring',
      icon: ShieldCheck,
      description: 'Regulatory adherence tracking',
    },
  ];

  return (
    <section className="py-20 bg-accent">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
          How We Do It?
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="text-center space-y-4"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-lg mb-4">
                <step.icon className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold text-primary">
                {step.title}
              </h3>
              <p className="text-gray-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;