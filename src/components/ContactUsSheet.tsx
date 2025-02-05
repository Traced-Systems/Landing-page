import React from 'react';
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const ContactUsSheet = () => {
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
            <h1 className="text-4xl font-bold text-center">Contact Us</h1>
          </div>
        </div>

        <div className="p-8">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Book a Demo</h2>
            
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Your Name</label>
                <input
                  type="text"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700">Email Address</label>
                <input
                  type="email"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700">Subject</label>
                <input
                  type="text"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  required
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                ></textarea>
              </div>
              
              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                Submit
              </Button>
            </form>
          </div>

          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold mb-8">Elevate Your Brand, Stay Compliant</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
              <div>
                <img src="/placeholder.svg" alt="Fashad Basout" className="w-32 h-32 rounded-full mx-auto mb-4" />
                <h3 className="text-xl font-bold">Fashad Basout</h3>
                <p className="text-gray-600">Position</p>
              </div>
              <div>
                <img src="/placeholder.svg" alt="David Dolhomut" className="w-32 h-32 rounded-full mx-auto mb-4" />
                <h3 className="text-xl font-bold">David Dolhomut</h3>
                <p className="text-gray-600">Position</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SheetContent>
  );
};

export default ContactUsSheet;