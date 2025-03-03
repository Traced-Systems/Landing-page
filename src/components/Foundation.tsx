import React from "react";
import { Card } from "@/components/ui/card";
const Foundation = () => {
  return <section className="w-full bg-[#f7f7f7] py-16 pt-20">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <h2 className="text-3xl font-medium text-[#1E293B] mb-8 text-center">
          The Foundation of Our Innovation
        </h2>
        <Card className="inline-block p-8 w-full border-none shadow-none">
          <div className="flex flex-wrap items-center justify-center xl:justify-between gap-[10vw] mx-6">
            {/* <div className="grid grid-cols-1  gap-10 lg:gap-2"> */}
            {/* Left Section (Funded by) */}
            <div className="flex flex-col items-center space-y-4">
              <span className="text-[#1E293B] text-lg font-base">
                Funded by
              </span>
              <div className="flex flex-wrap  items-center justify-center gap-12 lg:gap-16 ">
                <a href="https://chromaway.com/" target="_blank" rel="noopener noreferrer">
                  <img src="/lovable-uploads/1000002907.svg" alt="ChromaWay" className="h-12 xl:h-16" />
                </a>
                <a href="https://commission.europa.eu/index_en" target="_blank" rel="noopener noreferrer">
                  <img src="/lovable-uploads/ff086cb2-38b6-4ca2-a158-69f69cf213ee.png" alt="European Commission" className="h-12 xl:h-16" />
                </a>
                <a href="https://ec.europa.eu/digital-building-blocks/sites/display/EBSI/Home" target="_blank" rel="noopener noreferrer">
                  <img src="/lovable-uploads/e1307a99-b10d-4799-b274-47c5f4487c18.png" alt="EBSI" className="h-16 xl:h-20 mt-2" />
                </a>
              </div>
            </div>

            {/* Middle Section - Thin Separator (Hidden on Small Screens) */}
            {/* <div className="hidden md:block w-px h-20 bg-gray-300 mt-3"></div> */}

            {/* Right Section (Powered by) */}
            <div className="flex flex-col items-center space-y-1 ">
              <span className="text-[#1E293B] text-lg font-base mb-4">
                Powered by
              </span>
              <a href="https://chromia.com/" target="_blank" rel="noopener noreferrer">
                <img alt="Chromia" className="h-12 xl:h-16 mt-2 mb-1" src="/lovable-uploads/f916c022-de91-44d1-9ab2-5acc9aa341e3.png" />
              </a>
            </div>
          </div>
        </Card>
      </div>
    </section>;
};
export default Foundation;