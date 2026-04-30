import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { tabs } from "./tabsData";

const TabsSection = () => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden h-auto md:h-[420px] lg:h-[270px] xl:h-[240px]">
      <Tabs defaultValue="mission" className="flex flex-col md:flex-row h-full">
        <TabsList className="flex md:flex-col h-auto md:h-full w-full md:w-[40%] space-y-0 bg-[#F5F5F5] md:bg-[#f3f3f3] rounded-none p-0">
          {tabs.map((t) => (
            <TabsTrigger
              key={t.key}
              value={t.key}
              className="w-full flex-1 flex items-center px-6 py-3 md:py-4 rounded-none border-b-2 md:border-l-4 md:border-b-0 border-transparent data-[state=active]:bg-[#204850] data-[state=active]:text-white data-[state=active]:w-full data-[state=active]:border-[#204850] transition-all"
            >
              <span className="text-base md:text-lg font-medium capitalize">
                {t.label}
              </span>
            </TabsTrigger>
          ))}
        </TabsList>
        <div className="relative w-full md:w-[80%] flex-grow !mt-0">
          {tabs.map((t) => (
            <TabsContent
              key={t.key}
              value={t.key}
              className="overflow-hidden md:h-full md:absolute md:inset-0 !mt-0"
            >
              <div className="relative h-full !mt-0">
                <div className="absolute inset-0 w-full h-full">
                  <img
                    src={t.image}
                    alt={t.key}
                    className="w-full h-full object-cover brightness-[0.3] md:brightness-100 absolute inset-0"
                  />
                </div>

                <div className="relative md:absolute inset-0 bg-[#204850]/95 md:bg-black/60 flex items-start md:items-center justify-start p-6 md:p-8">
                  <p className="text-white text-sm md:text-base font-normal md:text-center text-left leading-relaxed">
                    <>
                      <strong className="block mb-3 text-base md:text-base">
                        {t.title}
                      </strong>{" "}
                      {t.body}
                    </>
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
