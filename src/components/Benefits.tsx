import React from 'react';
import { Check } from 'lucide-react';
import { Separator } from "@/components/ui/separator";

const Benefits = () => {
  const benefits = [
    {
      title: 'Flexibility',
      description: 'Adaptable solutions for various industries',
    },
    {
      title: 'Transparency',
      description: 'Clear visibility across supply chains',
    },
    {
      title: 'Sustainability',
      description: 'Eco-friendly practices and tracking',
    },
    {
      title: 'Compliance',
      description: 'Meet regulatory requirements',
    },
  ];

  return (
    <section id="section-elevating-product-lifestyle" className="py-20 bg-[#f7f7f7]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-start justify-between gap-16">
          <div className="w-full md:w-5/12">
            <img 
              src="/lovable-uploads/83145e53-565d-473e-b0e3-62990415f253.png" 
              alt="Product Lifecycle Management" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          <div className="w-full md:w-7/12 text-left">
            <div className="mb-16">
              <div className="inline-block">
                <h3 className="text-3xl md:text-4xl font-bold text-[#002A38]">
                  Elevating Product Lifecycle Management
                </h3>
                <Separator className="my-4 h-1 bg-[#D4904E]" />
              </div>
              <h2 className="text-2xl text-[#002A38] mb-8">
                with Digital Product Passports
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                The Trace Systems Digital Product Passport (DPP) is a game-changer for managing products from start to finish. 
                Built on Chromia for enterprise, it offers a complete digital record that tracks a product's journey through its entire lifecycle.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="inline-flex items-center justify-center w-8 h-8 bg-[#D67F2F]/10 rounded-full">
                      <Check className="w-5 h-5 text-[#D67F2F]" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-[#002A38] mb-1">
                      {benefit.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;