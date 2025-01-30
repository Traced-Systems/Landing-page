import React from 'react';
import { Layers, Eye, Leaf, Shield } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      title: 'Flexibility',
      icon: Layers,
      description: 'Adaptable solutions for various industries',
    },
    {
      title: 'Transparency',
      icon: Eye,
      description: 'Clear visibility across supply chains',
    },
    {
      title: 'Sustainability',
      icon: Leaf,
      description: 'Eco-friendly practices and tracking',
    },
    {
      title: 'Compliance',
      icon: Shield,
      description: 'Meet regulatory requirements',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-4">
          Elevating Product Lifecycle Management
        </h2>
        <h3 className="text-xl text-gray-600 text-center mb-12">
          with Digital Product Passports
        </h3>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="p-6 bg-accent rounded-2xl text-center hover:shadow-lg transition-shadow"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-secondary/10 rounded-xl mb-4">
                <benefit.icon className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;