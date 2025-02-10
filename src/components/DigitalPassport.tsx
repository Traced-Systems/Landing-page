
import React from 'react';
import { Separator } from "@/components/ui/separator";

const DigitalPassport = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative w-full">
            <div className="w-[475px] mx-auto">
              <img 
                src="/lovable-uploads/6c53586d-b980-4176-b23d-2316ca76c1d5.png" 
                alt="Digital Product Passport Interface showing mobile screens with product information" 
                className="w-full h-auto"
              />
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="space-y-2">
              <p className="text-sm text-gray-600">Traced Systems developed</p>
              <div className="inline-block">
                <h2 className="text-3xl font-bold text-[#1E293B]">Digital Product Passport</h2>
                <Separator className="my-4 h-1 bg-[#D4904E]" />
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-lg mb-2">Our Solution</h3>
                <p className="text-gray-600">
                  Our solution shines a light on the often opaque world of supply chains. By 
                  leveraging supply chain transparency, we support businesses in their journey of 
                  transition towards a circular economy.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-lg mb-2">Our Service</h3>
                <p className="text-gray-600">
                  Our service plays an instrumental role in enabling businesses to align their 
                  operations with sustainable business models.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-lg mb-2">Our Versatility</h3>
                <p className="text-gray-600">
                  A complete digital record that tracks a product's entire lifecycle, ensuring transparency, 
                  sustainability, and compliance across multiple sectors, from batteries and textiles to 
                  electronics, furniture, and beyond.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalPassport;
