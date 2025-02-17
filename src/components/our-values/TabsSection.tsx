
import React, { useEffect, useRef } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import { useMobile } from "@/hooks/use-mobile";

const TabsSection = () => {
  const isMobile = useMobile();
  const tabsListRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = React.useState("mission");

  const handleScroll = (direction: 'left' | 'right') => {
    if (tabsListRef.current) {
      const scrollAmount = 100;
      tabsListRef.current.scrollLeft += direction === 'left' ? -scrollAmount : scrollAmount;
    }
  };

  useEffect(() => {
    // Scroll active tab into view on mobile
    if (isMobile && tabsListRef.current) {
      const activeElement = tabsListRef.current.querySelector('[data-state="active"]');
      if (activeElement) {
        activeElement.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }
  }, [activeTab, isMobile]);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden h-auto md:h-[200px]">
      <Tabs 
        defaultValue="mission" 
        className="flex flex-col md:flex-row h-full"
        value={activeTab}
        onValueChange={setActiveTab}
      >
        <div className="relative">
          <div 
            className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-[#F5F5F5] to-transparent z-10 md:hidden"
            onClick={() => handleScroll('left')}
            role="button"
            aria-label="Scroll tabs left"
          >
            <ChevronRight className="h-5 w-5 absolute top-1/2 -translate-y-1/2 -translate-x-1 rotate-180" />
          </div>
          
          <TabsList 
            ref={tabsListRef}
            className={cn(
              "flex h-full md:w-[40%] space-y-0 bg-[#F5F5F5] rounded-none p-0",
              "md:flex-col",
              "overflow-x-auto scrollbar-hide flex-row w-full",
              "relative"
            )}
          >
            {["mission", "focus", "solution"].map(tab => (
              <TabsTrigger
                key={tab}
                value={tab}
                className={cn(
                  "w-full flex-1 flex items-center px-6 py-4 text-left justify-start rounded-none",
                  "border-l-4 border-transparent data-[state=active]:bg-[#204850]",
                  "data-[state=active]:text-white data-[state=active]:border-[#204850]",
                  "transition-all min-w-[150px] md:min-w-0",
                  "focus-visible:ring-offset-0 focus-visible:ring-2 focus-visible:ring-[#204850]",
                  "aria-selected:bg-[#204850] aria-selected:text-white"
                )}
                aria-controls={`${tab}-tab`}
              >
                <span className="text-lg font-medium">
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </span>
              </TabsTrigger>
            ))}
          </TabsList>

          <div 
            className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-[#F5F5F5] to-transparent z-10 md:hidden"
            onClick={() => handleScroll('right')}
            role="button"
            aria-label="Scroll tabs right"
          >
            <ChevronRight className="h-5 w-5 absolute top-1/2 -translate-y-1/2 -translate-x-4" />
          </div>
        </div>

        <div className="relative w-full md:w-[60%]">
          {["mission", "focus", "solution"].map(tab => (
            <TabsContent 
              key={tab}
              value={tab}
              className={cn(
                "m-0 h-full data-[state=active]:animate-accordion-down data-[state=inactive]:animate-accordion-up",
                "focus-visible:ring-2 focus-visible:ring-[#204850] focus-visible:ring-offset-2 focus-visible:outline-none"
              )}
              role="tabpanel"
              id={`${tab}-tab`}
            >
              <div className="relative h-[300px] md:h-full">
                <img 
                  src={tab === "focus" 
                    ? "/lovable-uploads/5f3a96ab-793d-4332-8f53-403309de85cf.png" 
                    : tab === "solution" 
                    ? "/lovable-uploads/82288ca1-a71b-4e6d-be31-fc4db3f8778d.png" 
                    : "/lovable-uploads/aa6a2a37-d9f1-44a7-8d11-a32893b35db5.png"
                  } 
                  alt={tab} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center p-8">
                  <p className="text-white text-center text-base font-normal">
                    {tab === "mission" ? (
                      <>
                        <strong>Our mission is to transform supply chain efficiency and engagement by leveraging blockchain technology to enhance transparency, collaboration, and customer loyalty.</strong> From raw materials to recycling, we empower businesses to optimize workflows, build stronger brand connections, and deliver sustainable value to every stakeholder in the chain.
                      </>
                    ) : tab === "focus" ? (
                      <>
                        <strong>Our focus is on helping companies stay ahead of evolving regulations while ensuring a tangible return on investment.</strong> We guide organizations in targeting and engaging the right audiences (from legislators to end consumers) across both B2B and B2C environments. By employing a progressive, future-proof approach, we enable companies to meet (and exceed) their sustainability goals without compromising budgets or growth.
                      </>
                    ) : (
                      <>
                        <strong>Our platform goes beyond mere compliance.</strong> By identifying and collaborating with key partners in the value chain, we help businesses integrate a truly circular approach that aligns with European values and environmental objectives. Whether you're seeking to reduce waste, boost resource efficiency, or enhance brand loyalty, our solution puts you at the forefront of sustainable innovation today and into the future.
                      </>
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
