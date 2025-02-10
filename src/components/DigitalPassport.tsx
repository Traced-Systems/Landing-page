
import React from 'react';
import { Separator } from "@/components/ui/separator";

const DigitalPassport = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative w-full h-full flex items-center">
            <div className="w-[475px] mx-auto">
              <img 
                src="/lovable-uploads/84a52b04-4231-4b58-ab6a-c4326f80eb31.png" 
                alt="Digital Product Passport Interface showing mobile screens with product information" 
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-sm text-gray-600">Traced Systems developed</p>
              <div className="inline-block">
                <h2 className="text-3xl font-bold text-[#1E293B]">Digital Product Passport</h2>
                <Separator className="my-4 h-1 bg-[#D4904E]" />
              </div>
            </div>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-lg mb-1">Our Solution</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Our solution shines a light on the often opaque world of supply chains. By 
                  leveraging supply chain transparency, we support businesses in their journey of 
                  transition towards a circular economy.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-lg mb-1">Our Service</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Our service plays an instrumental role in enabling businesses to align their 
                  operations with sustainable business models.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-lg mb-1">Our Versatility</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
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

