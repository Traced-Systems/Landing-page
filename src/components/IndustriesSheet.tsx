import React from 'react';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const IndustriesSheet = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="text-gray-600 hover:text-primary transition-colors">Industries</button>
      </SheetTrigger>
      <SheetContent 
        side="right" 
        className="!w-[75vw] sm:!max-w-[75vw] overflow-y-auto bg-[#F7F7F5] border-l shadow-xl"
      >
        <div className="h-full flex flex-col">
          {/* Top Section */}
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-2xl font-semibold text-primary">Industries</h1>
            <Button 
              variant="ghost" 
              size="icon" 
              className="hover:bg-transparent absolute -left-12 top-4 bg-white rounded-full shadow-[4px_4px_10px_0px_rgba(0,0,0,0.1),-4px_-4px_10px_0px_rgba(255,255,255,0.9)]"
            >
              <ArrowLeft className="h-6 w-6" />
            </Button>
          </div>

          {/* Section Title */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary">Key Industries We Serve</h2>
          </div>

          {/* Industry Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {/* Textile Card */}
            <div className="bg-white rounded-xl p-6 shadow-[4px_4px_10px_0px_rgba(0,0,0,0.1),-4px_-4px_10px_0px_rgba(255,255,255,0.9)]">
              <img 
                src="/lovable-uploads/2320cd7d-0e5e-4635-b26a-2d2eaeb0aa50.png" 
                alt="Textiles" 
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Textiles</h3>
              <p className="text-gray-600">
                Traced Systems' Digital Product Passport tackles supply chain gaps, ensures ethical sourcing, and drives circularity across the textile lifecycle.
              </p>
            </div>

            {/* Battery Card */}
            <div className="bg-white rounded-xl p-6 shadow-[4px_4px_10px_0px_rgba(0,0,0,0.1),-4px_-4px_10px_0px_rgba(255,255,255,0.9)]">
              <img 
                src="/lovable-uploads/efedcb76-b69e-4a52-8689-41020d02ede5.png" 
                alt="Batteries" 
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Batteries</h3>
              <p className="text-gray-600">
                Traced Systems' Digital Product Passport streamlines battery management by enhancing transparency, ensuring compliance, and optimizing the full product lifecycle.
              </p>
            </div>
          </div>

          {/* EU Regulations Section */}
          <div className="bg-white rounded-xl p-8 mb-12 shadow-[4px_4px_10px_0px_rgba(0,0,0,0.1),-4px_-4px_10px_0px_rgba(255,255,255,0.9)]">
            <h2 className="text-2xl font-bold text-center mb-6">
              Meet Today's EU Regulations, Stay Ready for Tomorrow's
            </h2>
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1">
                <p className="text-gray-600 mb-4">
                  Our Digital Product Passport (DPP) streamlines compliance for a wide range of industries, ensuring seamless adaptation to evolving EU regulations. From the Ecodesign for Sustainable Products Regulation (ESPR) to the Right to Repair (R2R) Framework and Circular Economy Legislation, we help businesses enhance transparency, improve sustainability, and stay ahead of legislative demands.
                </p>
                <p className="text-gray-600">
                  Powered by secure, tamper-proof technology, our DPP empowers you to monitor and update product data so you can adjust quickly to new or revised regulations. This future-proof approach not only meets today's requirements but also positions your organization to thrive in tomorrow's policy landscape, making it the ideal solution for your company and the entire industry value chain.
                </p>
              </div>
              <img 
                src="/lovable-uploads/388a3ea5-e78d-4f2c-a979-646e50aa5de4.png" 
                alt="EU Regulations" 
                className="w-full md:w-1/3 rounded-lg"
              />
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-auto">
            <h3 className="text-xl text-gray-600 mb-2">From Source to Sustainability</h3>
            <h2 className="text-3xl font-bold text-primary mb-4">Unified Traceability Platform</h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              By enabling visibility at every stage, we help businesses reduce risk, protect brand reputation, and align with sustainability goals.
            </p>
            <Button 
              className="bg-white text-primary px-8 py-3 rounded-full shadow-[4px_4px_10px_0px_rgba(0,0,0,0.1),-4px_-4px_10px_0px_rgba(255,255,255,0.9)] hover:shadow-[2px_2px_5px_0px_rgba(0,0,0,0.1),-2px_-2px_5px_0px_rgba(255,255,255,0.9)] transition-shadow"
            >
              Learn More
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default IndustriesSheet;