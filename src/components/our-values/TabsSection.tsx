import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const TabsSection = () => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden h-[200px]">
      <Tabs defaultValue="mission" className="flex h-full">
        <TabsList className="flex flex-col h-full w-[40%] space-y-0 bg-[#F5F5F5] rounded-none p-0">
          {["mission", "focus", "solution"].map((tab) => (
            <TabsTrigger
              key={tab}
              value={tab}
              className="w-full flex-1 flex items-center px-6 py-4 text-left justify-start rounded-none border-l-4 border-transparent data-[state=active]:bg-[#204850] data-[state=active]:text-white data-[state=active]:border-[#204850] transition-all"
            >
              <span className="text-lg font-medium">
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </span>
            </TabsTrigger>
          ))}
        </TabsList>
        <div className="relative w-[60%]">
          {["mission", "focus", "solution"].map((tab) => (
            <TabsContent key={tab} value={tab} className="m-0 h-full absolute inset-0">
              <div className="relative h-full">
                <img 
                  src="/lovable-uploads/aa6a2a37-d9f1-44a7-8d11-a32893b35db5.png" 
                  alt={tab}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center p-8">
                  <p className="text-white font-bold text-lg text-center">
                    {tab === "mission" ? (
                      "Our mission is to transform supply chain efficiency and engagement by leveraging blockchain technology to enhance transparency, collaboration, and customer loyalty."
                    ) : tab === "focus" ? (
                      "Our focus is on helping companies stay ahead of evolving regulations while ensuring a tangible return on investment."
                    ) : (
                      "Our platform goes beyond mere compliance, helping businesses integrate a truly circular approach that aligns with European values."
                    )}
                  </p>
                </div>
              </div>
            </TabsContent>
          ))}
        </div>
      </Tabs>
    </div>
  );
};

export default TabsSection;