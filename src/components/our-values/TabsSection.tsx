
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const TabsSection = () => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden h-auto md:h-[280px]">
      <Tabs defaultValue="mission" className="flex flex-col md:flex-row h-full">
        {/* Mobile TabsList */}
        <TabsList className="flex md:hidden h-auto w-full space-y-0 bg-[#F5F5F5] rounded-none p-0">
          {["mission", "focus", "solution"].map((tab) => (
            <TabsTrigger
              key={tab}
              value={tab}
              className="w-full flex-1 flex items-center px-6 py-3 text-left justify-start rounded-none border-b-2 border-transparent text-black/80 bg-transparent data-[state=active]:bg-[#204850] data-[state=active]:text-white transition-all hover:bg-[#204850]/10"
            >
              <span className="text-base font-medium capitalize">
                {tab}
              </span>
            </TabsTrigger>
          ))}
        </TabsList>

        {/* Desktop TabsList */}
        <TabsList className="hidden md:flex md:flex-col h-full w-[35%] space-y-0 bg-[#f7f7f7] rounded-none p-0">
          {["mission", "focus", "solution"].map((tab) => (
            <TabsTrigger
              key={tab}
              value={tab}
              className="w-full min-h-[93px] flex items-center px-8 text-left justify-start rounded-none border-b border-gray-200 last:border-b-0 text
              -gray-900 bg-[#f7f7f7] data-[state=active]:bg-[#2D545E] data-[state=active]:text-[#f7f7f7] transition-all"
            >
              <span className="text-[22px] font-medium">
                Our {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </span>
            </TabsTrigger>
          ))}
        </TabsList>

        <div className="relative w-full md:w-[65%] flex-grow">
          {["mission", "focus", "solution"].map((tab) => (
            <TabsContent
              key={tab}
              value={tab}
              className="m-0 h-full absolute inset-0"
            >
              <div className="relative h-full">
                <img
                  src={
                    tab === "focus"
                      ? "/lovable-uploads/5f3a96ab-793d-4332-8f53-403309de85cf.png"
                      : tab === "solution"
                      ? "/lovable-uploads/82288ca1-a71b-4e6d-be31-fc4db3f8778d.png"
                      : "/lovable-uploads/aa6a2a37-d9f1-44a7-8d11-a32893b35db5.png"
                  }
                  alt={tab}
                  className="w-full h-full object-cover brightness-[0.3] md:brightness-100 absolute inset-0"
                />
                <div className="relative md:absolute inset-0 bg-[#204850]/95 md:bg-[#2D545E]/90 flex items-start md:items-center justify-start p-6 md:p-10">
                  <div className="max-w-[640px]">
                    {tab === "mission" ? (
                      <>
                        <p className="text-white text-base md:text-lg font-normal leading-relaxed">
                          Our mission is to transform supply chain efficiency
                          and engagement by leveraging blockchain technology to
                          enhance transparency, collaboration, and customer
                          loyalty.
                        </p>
                        <p className="text-white/90 text-base mt-4 leading-relaxed">
                          From raw materials to recycling, we empower businesses
                          to optimize workflows, build stronger brand connections,
                          and deliver sustainable value to every stakeholder in
                          the chain.
                        </p>
                      </>
                    ) : tab === "focus" ? (
                      <>
                        <p className="text-white text-base md:text-lg font-normal leading-relaxed">
                          Our focus is on helping companies stay ahead of
                          evolving regulations while ensuring a tangible return
                          on investment.
                        </p>
                        <p className="text-white/90 text-base mt-4 leading-relaxed">
                          We guide organizations in targeting and engaging the
                          right audiences (from legislators to end consumers)
                          across both B2B and B2C environments. By employing a
                          progressive, future-proof approach, we enable companies
                          to meet (and exceed) their sustainability goals without
                          compromising budgets or growth.
                        </p>
                      </>
                    ) : (
                      <>
                        <p className="text-white text-base md:text-lg font-normal leading-relaxed">
                          Our platform goes beyond mere compliance.
                        </p>
                        <p className="text-white/90 text-base mt-4 leading-relaxed">
                          By identifying and collaborating with key partners in
                          the value chain, we help businesses integrate a truly
                          circular approach that aligns with European values and
                          environmental objectives. Whether you're seeking to
                          reduce waste, boost resource efficiency, or enhance
                          brand loyalty, our solution puts you at the forefront of
                          sustainable innovation today and into the future.
                        </p>
                      </>
                    )}
                  </div>
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
