import React from 'react';
import { Separator } from "@/components/ui/separator";

const Foundation = () => {
  return (
    <section className="py-16 px-4 bg-[#F1F1F1]">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-semibold text-center mb-12 text-primary">
          The Foundation of Our Innovation
        </h2>
        
        <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] p-8">
          <div className="flex flex-col md:flex-row items-center justify-between relative">
            {/* Left Section with Funded by */}
            <div className="mb-8 md:mb-0 flex-1">
              <p className="text-sm text-gray-500 font-medium mb-6">Funded by</p>
              <div className="flex flex-col md:flex-row items-center justify-start space-y-4 md:space-y-0 md:space-x-12">
                <img 
                  src="/lovable-uploads/2749a449-2417-480e-9ef7-a470c066694f.png" 
                  alt="ChromaWay" 
                  className="h-8 object-contain"
                />
                <img 
                  src="/lovable-uploads/0fd6c657-0b5d-4b83-9a2c-1974fc3e6532.png" 
                  alt="European Commission" 
                  className="h-12 object-contain"
                />
                <img 
                  src="/lovable-uploads/50df1d07-065b-49ab-89b0-30f54800fc2e.png" 
                  alt="EBSI" 
                  className="h-10 object-contain"
                />
              </div>
            </div>

            {/* Vertical Separator */}
            <div className="hidden md:block absolute left-1/2 top-1/2 -translate-y-1/2">
              <Separator orientation="vertical" className="h-16 bg-gray-200" />
            </div>

            {/* Right Section with Powered by */}
            <div className="flex flex-col items-center space-y-6 flex-1">
              <p className="text-sm text-gray-500 font-medium">Powered by</p>
              <img 
                src="/lovable-uploads/973d9db4-a05a-4a45-af13-2f7b06166f5b.png" 
                alt="Chromia" 
                className="h-8 object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Foundation;