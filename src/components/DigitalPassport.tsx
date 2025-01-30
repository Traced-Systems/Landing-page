import React from 'react';

const DigitalPassport = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative w-full">
            <div className="w-[475px] mx-auto">
              <img 
                src="/lovable-uploads/d79b81d9-46b1-42a6-bed4-357f36f911ab.png" 
                alt="Digital Product Passport Interface showing a vintage denim jacket" 
                className="w-full h-auto"
              />
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="space-y-2">
              <p className="text-sm text-gray-600">Traced Systems developed</p>
              <h2 className="text-3xl font-bold text-[#1E293B]">Digital Product Passport</h2>
              <div className="w-16 h-1 bg-[#0EA5E9] mt-4"></div>
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
                <h3 className="font-semibold text-lg mb-2">[A Subtitle]</h3>
                <p className="text-gray-600">
                  A complete digital record that tracks a product's entire lifecycle, enhancing 
                  transparency, sustainability, and compliance across key sectors like batteries and textile.
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