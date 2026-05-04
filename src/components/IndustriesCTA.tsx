import React from 'react'
import ExpandableImage from './shared/ExpandableImage'

const IndustriesCTA = () => {
  return (
    <div className="text-center  my-6 md:my-12 px-4 sm:px-8">
      <div>
        <h2 className="text-xl sm:text-2xl font-medium text-center mb-2 text-[#173A44]">
          A Unified Traceability Platform
        </h2>
        <h3 className="text-lg sm:text-xl text-center mb-4 sm:mb-6 text-[#173A44]">
          From Source to Sustainability
        </h3>
      </div>
      <p className="text-sm sm:text-base text-gray-600 mb-6">
        Our comprehensive platform integrates seamlessly across your entire
        value chain, providing real-time visibility and control over your
        product lifecycle.
      </p>
      <div className="w-[95%] sm:w-full max-w-4xl mx-auto">
        <ExpandableImage
          src="/lovable-uploads/c0da0885-a0e1-4ac0-b309-a464bcd66b53.png"
          alt="Unified Traceability Platform"
        />
      </div>
    </div>
  );
}

export default IndustriesCTA