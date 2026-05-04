import EURegulationsSection from '@/components/EURegulationsSection'
import IndustriesCTA from '@/components/IndustriesCTA'
import IndustriesSheet from '@/components/IndustriesSheet'
import IndustryCard from '@/components/IndustryCard'
import AboutCTA from '@/components/shared/AboutCTA'
import { Industries } from '@/constants'
import React from 'react'

const industries = () => {
  return (
    <div className="mt-16 sm:mt-24">
      <div className="sm:hidden px-6 py-8">
        <h1 className="text-2xl font-semibold text-[#2D545E] mb-2">
          Industries
        </h1>
        <p className="text-sm text-gray-600">
          Discover how our solutions transform different sectors
        </p>
      </div>

      <div className="text-center mb-8 sm:mb-12 pt-8 sm:pt-20">
        <h2 className="text-xl sm:text-2xl text-[#173A44] font-medium px-6">
          Key Industries We Serve
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 sm:px-8 container">
        {Industries.map((industry, index) => (
          <IndustryCard key={index} {...industry} />
        ))}
      </div>
      <EURegulationsSection />
      <IndustriesCTA />
      <AboutCTA />
    </div>
  );
}

export default industries