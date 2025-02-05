import React from 'react';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const UseCasesSheet = () => {
  return (
    <SheetContent side="right" className="w-[75vw] sm:max-w-[75vw] overflow-y-auto bg-white">
      <div className="relative">
        <img
          src="/lovable-uploads/973d7c66-1d01-4e1e-89ce-2dee7a7c3dae.png"
          alt="Traced Lines"
          className="w-full h-24 object-cover"
        />
        
        <div className="flex items-center justify-between mb-12 relative bg-[#F9F9F9] p-8">
          <Button 
            variant="ghost" 
            onClick={() => window.history.back()}
            className="absolute left-4 top-4 hover:bg-gray-100"
          >
            <ArrowLeft className="h-6 w-6" />
          </Button>
          
          <div className="w-full mt-12">
            <h1 className="text-4xl font-bold text-center">Use Cases</h1>
            <p className="text-gray-600 text-center mt-2">See Our Impact</p>
          </div>
        </div>

        <div className="p-8">
          <p className="text-center text-lg mb-12">
            Discover how Traced Systems transforms challenges into opportunities for businesses.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <div className="bg-gray-200 h-48 rounded-md mb-4"></div>
                <h3 className="text-xl font-bold mb-2">Use Case Title</h3>
                <p className="text-gray-600 mb-4">Brief description of the use case and its impact.</p>
                <a href="#" className="text-blue-600 hover:underline">Know More</a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SheetContent>
  );
};

export default UseCasesSheet;