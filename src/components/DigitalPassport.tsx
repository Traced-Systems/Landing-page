
import React from "react";

const DigitalPassport = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-8">
          Digital Product Passport
        </h2>
        <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
          Our innovative digital product passport solution enables manufacturers,
          brands, and retailers to track and trace their products throughout the
          entire lifecycle, ensuring transparency and sustainability.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <img
            src="/lovable-uploads/productJourneyIcon.png"
            alt="Product Journey"
            className="w-12 h-12 mb-6"
          />
          <h3 className="text-xl font-semibold mb-4">Product Journey</h3>
          <p className="text-gray-600">
            Track your product's complete lifecycle, from raw material sourcing to
            end-of-life, ensuring transparency and traceability at every step.
          </p>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-lg">
          <img
            src="/lovable-uploads/valueChainIcon.png"
            alt="Value Chain"
            className="w-12 h-12 mb-6"
          />
          <h3 className="text-xl font-semibold mb-4">Value Chain</h3>
          <p className="text-gray-600">
            Connect all stakeholders in your value chain, enabling seamless
            collaboration and data sharing while maintaining data sovereignty.
          </p>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-lg">
          <img
            src="/lovable-uploads/dateIntegrationIcon.png"
            alt="Data Integration"
            className="w-12 h-12 mb-6"
          />
          <h3 className="text-xl font-semibold mb-4">Data Integration</h3>
          <p className="text-gray-600">
            Easily integrate with existing systems and data sources, creating a
            unified view of your product data across the entire supply chain.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DigitalPassport;
