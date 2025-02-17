
import React from "react";

const DigitalPassport = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        <div className="lg:w-1/2">
          <img
            src="/lovable-uploads/832d948c-7f61-4083-84b6-e1dea08a60a0.png"
            alt="Digital Product Passport"
            className="w-full h-auto"
          />
        </div>
        <div className="lg:w-1/2 space-y-8">
          <div>
            <p className="text-primary mb-2">Traced Systems developed</p>
            <h2 className="text-4xl font-bold text-primary mb-4">
              Digital Product Passport
            </h2>
            <div className="w-16 h-1 bg-[#CD8B65]"></div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Our Solution</h3>
              <p className="text-gray-600">
                Our solution shines a light on the often opaque world of supply chains. By leveraging supply chain transparency, we support businesses in their journey of transition towards a circular economy.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Our Service</h3>
              <p className="text-gray-600">
                Our service plays an instrumental role in enabling businesses to align their operations with sustainable business models.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Our Versatility</h3>
              <p className="text-gray-600">
                A complete digital record that tracks a product's entire lifecycle, ensuring transparency, sustainability, and compliance across multiple sectors, from batteries and textiles to electronics, furniture, and beyond.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalPassport;
