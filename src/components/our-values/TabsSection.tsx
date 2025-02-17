
import React, { useEffect, useRef } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

const TabsSection = () => {
  const isMobile = useIsMobile();
  const [activeTab, setActiveTab] = React.useState("mission");

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <Tabs 
        defaultValue="mission" 
        className="flex flex-col h-full"
        value={activeTab}
        onValueChange={setActiveTab}
      >
        <div className="flex flex-col md:flex-row h-full">
          <TabsList 
            className={cn(
              "flex md:w-[40%] bg-[#F5F5F5] rounded-none p-0",
              "flex-col",
              "w-full"
            )}
          >
            {["mission", "focus", "solution"].map(tab => (
              <TabsTrigger
                key={tab}
                value={tab}
                className={cn(
                  "w-full flex items-center px-6 py-4 text-left justify-between rounded-none",
                  "border-l-4 border-transparent data-[state=active]:bg-[#204850]",
                  "data-[state=active]:text-white data-[state=active]:border-[#204850]",
                  "transition-all",
                  "focus-visible:ring-offset-0 focus-visible:ring-2 focus-visible:ring-[#204850]",
                  "aria-selected:bg-[#204850] aria-selected:text-white",
                  "group"
                )}
                aria-controls={`${tab}-tab`}
              >
                <span className="text-lg font-medium">
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </span>
                <svg 
                  className={cn(
                    "w-5 h-5 transition-transform",
                    "md:hidden",
                    "group-data-[state=active]:rotate-180"
                  )} 
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </TabsTrigger>
            ))}
          </TabsList>

          <div className="relative w-full md:w-[60%]">
            {["mission", "focus", "solution"].map(tab => (
              <TabsContent 
                key={tab}
                value={tab}
                className={cn(
                  "m-0 transition-all",
                  "data-[state=inactive]:h-0 data-[state=inactive]:invisible",
                  "data-[state=active]:h-auto data-[state=active]:visible",
                  "focus-visible:ring-2 focus-visible:ring-[#204850] focus-visible:ring-offset-2 focus-visible:outline-none"
                )}
                role="tabpanel"
                id={`${tab}-tab`}
              >
                <div className="relative md:h-[200px]">
                  <img 
                    src={tab === "focus" 
                      ? "/lovable-uploads/5f3a96ab-793d-4332-8f53-403309de85cf.png" 
                      : tab === "solution" 
                      ? "/lovable-uploads/82288ca1-a71b-4e6d-be31-fc4db3f8778d.png" 
                      : "/lovable-uploads/aa6a2a37-d9f1-44a7-8d11-a32893b35db5.png"
                    } 
                    alt={tab} 
                    className="w-full h-[200px] md:h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                    <div className="p-6 md:p-8 max-h-[200px] overflow-y-auto">
                      <p className="text-white text-left text-base font-normal leading-relaxed">
                        {tab === "mission" ? (
                          <>
                            <strong className="block mb-2">Our mission is to transform supply chain efficiency and engagement by leveraging blockchain technology to enhance transparency, collaboration, and customer loyalty.</strong> 
                            From raw materials to recycling, we empower businesses to optimize workflows, build stronger brand connections, and deliver sustainable value to every stakeholder in the chain.
                          </>
                        ) : tab === "focus" ? (
                          <>
                            <strong className="block mb-2">Our focus is on helping companies stay ahead of evolving regulations while ensuring a tangible return on investment.</strong> 
                            We guide organizations in targeting and engaging the right audiences (from legislators to end consumers) across both B2B and B2C environments. By employing a progressive, future-proof approach, we enable companies to meet (and exceed) their sustainability goals without compromising budgets or growth.
                          </>
                        ) : (
                          <>
                            <strong className="block mb-2">Our platform goes beyond mere compliance.</strong> 
                            By identifying and collaborating with key partners in the value chain, we help businesses integrate a truly circular approach that aligns with European values and environmental objectives. Whether you're seeking to reduce waste, boost resource efficiency, or enhance brand loyalty, our solution puts you at the forefront of sustainable innovation today and into the future.
                          </>
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </div>
        </div>
      </Tabs>
    </div>
  );
};

export default TabsSection;
