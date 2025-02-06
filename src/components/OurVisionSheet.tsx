import React from 'react';
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Handshake, Leaf, Globe } from "lucide-react";
import AboutCTA from './shared/AboutCTA';

interface OurVisionSheetProps {
  isOpen: boolean;
  onClose: () => void;
}

const OurVisionSheet = ({ isOpen, onClose }: OurVisionSheetProps) => {
  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent 
        side="right" 
        className="!w-[75vw] 2xl:!w-[66vw] sm:!max-w-[75vw] 2xl:!max-w-[66vw] overflow-y-auto bg-[#F7F7F5] border-l shadow-xl"
      >
        <div className="h-full flex flex-col pt-20">
          <Button 
            variant="ghost" 
            onClick={onClose}
            className="absolute left-4 top-4 hover:bg-gray-100"
          >
            <ArrowLeft className="h-6 w-6" />
          </Button>

          <div className="px-8 space-y-16">
            {/* Vision Header */}
            <div className="text-center">
              <h1 className="text-3xl font-bold text-primary mb-4">Our Vision</h1>
              <h2 className="text-2xl font-semibold text-primary mb-2">Future Vision</h2>
              <p className="text-xl text-gray-600">Driving Sustainable Innovation</p>
            </div>

            {/* Transparency Section with Factory Image */}
            <div className="relative">
              <div className="bg-white rounded-lg p-8 shadow-lg z-10 relative">
                <h3 className="text-xl font-semibold mb-4">Overcoming Transparency and Traceability Barriers in Circular Economies</h3>
                <p className="text-gray-600">
                  Modern industries face growing pressure to reduce negative environmental impact. Through our innovative solutions, we work to make data-driven eco-responsibility a key asset rather than a burden. Companies often struggle with accurate emission tracking - our platform changes that, offering precise data at each stage in a sustainable workflow.
                </p>
              </div>
              <div className="relative mt-8 h-64">
                <img 
                  src="/lovable-uploads/6bfa3f5e-c24c-459f-a978-92aee3e92380.png"
                  alt="Factory" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>

            {/* Making a Difference Section */}
            <div className="space-y-8">
              <h3 className="text-2xl font-semibold text-center">How We're Making a Difference</h3>
              <div className="relative h-48">
                <img 
                  src="/lovable-uploads/0c1bff36-3eb3-4436-8df4-8514365436bd.png"
                  alt="Business Card" 
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-black/60 rounded-lg flex items-center justify-center p-8">
                  <p className="text-white text-center">
                    Through our blockchain-powered solutions, we seek to address the growing challenges of sustainable production. Our platform offers verified data, track records, and clear guidance from production to end-of-life.
                  </p>
                </div>
              </div>
            </div>

            {/* Key Challenges Section */}
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-semibold text-center mb-8">Key Challenges We Tackle</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h4 className="font-semibold">Resource Management</h4>
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center gap-2">
                      <img src="/lovable-uploads/32569177-570b-4ecc-b1a1-38ada299b25e.png" alt="Water" className="w-5 h-5" />
                      <span>Water</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <img src="/lovable-uploads/30a52c28-f95b-4caf-b773-783a775bb759.png" alt="Energy" className="w-5 h-5" />
                      <span>Energy</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <h4 className="font-semibold">Environmental Impact</h4>
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center gap-2">
                      <img src="/lovable-uploads/6b236869-f903-46cc-8ea1-6ddc16886e51.png" alt="Chemical" className="w-5 h-5" />
                      <span>Chemical</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <img src="/lovable-uploads/9de06d7c-a0b7-45c4-b881-0e37b24dd6fe.png" alt="Emissions" className="w-5 h-5" />
                      <span>Emissions</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <img src="/lovable-uploads/3cb78757-f134-4b04-9eca-3038871d4e7b.png" alt="Waste" className="w-5 h-5" />
                      <span>Waste</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Vision for Future Section */}
            <div className="relative">
              <div className="bg-white rounded-lg p-8 shadow-lg relative z-10">
                <h3 className="text-xl font-semibold mb-4">Our Vision for the Future</h3>
                <p className="text-gray-600">
                  Our goal is to lead industry toward a future where sustainability and profitability work hand in hand. We're doing this by providing a transparent yet adaptable framework that empowers businesses to implement and maintain responsible programs for themselves, their consumers, and society at large.
                </p>
              </div>
              <div className="relative mt-8 h-48">
                <img 
                  src="/lovable-uploads/ffcd1fd1-974b-475f-a167-7572afaca91a.png"
                  alt="Sustainability" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>

            {/* Success Section */}
            <div className="space-y-8">
              <h3 className="text-2xl font-semibold text-center">What Success Looks Like</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center space-y-4">
                  <div className="w-12 h-12 mx-auto bg-[#1E293B] rounded-full flex items-center justify-center">
                    <Handshake className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-semibold">Shared Accountability</h4>
                  <p className="text-sm text-gray-600">
                    Stakeholders from suppliers to consumers commit to shared sustainability standards.
                  </p>
                </div>
                <div className="text-center space-y-4">
                  <div className="w-12 h-12 mx-auto bg-[#1E293B] rounded-full flex items-center justify-center">
                    <Leaf className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-semibold">Reduced Footprint</h4>
                  <p className="text-sm text-gray-600">
                    Smart resource management through data-driven guidance for real analytics.
                  </p>
                </div>
                <div className="text-center space-y-4">
                  <div className="w-12 h-12 mx-auto bg-[#1E293B] rounded-full flex items-center justify-center">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-semibold">Global Impact</h4>
                  <p className="text-sm text-gray-600">
                    Empowering local communities, while working together for our planet.
                  </p>
                </div>
              </div>
            </div>

            <AboutCTA onClose={onClose} />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default OurVisionSheet;