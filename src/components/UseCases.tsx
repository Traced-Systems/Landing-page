import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import UseCasesSheet from "./UseCasesSheet";
import { ChevronRight } from "lucide-react";

const UseCases = () => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const cases = [
    {
      title: "BLK DNM: Connected Fashion",
      description:
        "BLK DNM has launched their 'Connected Fashion' campaign, delivering the first collection of apparel embedded with...",
      image: "/lovable-uploads/2320cd7d-0e5e-4635-b26a-2d2eaeb0aa50.png",
    },
    {
      title: "Battery Lifecycle Innovation",
      description:
        "What if a battery's lifecycle routing left a verifiable trail? This pilot project, powered by a blockchain-based Digital Product Passport...",
      image: "/lovable-uploads/efedcb76-b69e-4a52-8689-41020d02ede5.png",
    },
    {
      title: "Be Our Next Use Case",
      description:
        "Ready to innovate and comply with evolving legislation? Let's explore how the DPP framework can enhance customer experiences and drive circularity...",
      image: "/lovable-uploads/36f60108-99d8-465a-81a4-e52c86799730.png",
    },
  ];

  return (
    <section className="py-20 bg-[#f7f7f7]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#002A38] mb-2">
            Use Cases
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {cases.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-[2px_2px_6px_0px_rgba(0,0,0,0.05),-2px_-2px_6px_0px_rgba(255,255,255,0.8)] 
hover:shadow-[3px_3px_8px_0px_rgba(0,0,0,0.08),-3px_-3px_8px_0px_rgba(255,255,255,0.85)] transition-all duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 mb-4">{item.description}</p>
              <button className="text-blue-500 hover:text-blue-600 transition-colors">
                Know More →
              </button>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <Button
            variant="outline"
            className="rounded-full border-2 border-[#E4AC70] bg-[#F7F7F7] text-[#143A44] flex items-center gap-2 pl-7 pr-6 hover:bg-[#E6E5E0]"
            onClick={() => setIsSheetOpen(true)}
          >
            Know More <ChevronRight className="w-5 h-5 text-[#143A44]" />
          </Button>
        </div>
      </div>

      <UseCasesSheet
        isOpen={isSheetOpen}
        onClose={() => setIsSheetOpen(false)}
      />
    </section>
  );
};

export default UseCases;
