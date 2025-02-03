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
    <section id="section-elevating-product-lifestyle" className="py-20 bg-[#F2F2EC]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#002A38] mb-6">
            Elevating Product Lifecycle Management
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            The Trace Systems Digital Product Passport (DPP) is a game-changer for managing products from start to finish. 
            Built on Chromia for enterprise, it offers a complete digital record that tracks a product's journey through its entire lifecycle.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex items-start space-x-4 p-6 bg-white rounded-xl hover:shadow-lg transition-shadow"
            >
              <div className="flex-shrink-0">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-[#D67F2F]/10 rounded-xl">
                  <benefit.icon className="w-6 h-6 text-[#D67F2F]" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-[#002A38] mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;