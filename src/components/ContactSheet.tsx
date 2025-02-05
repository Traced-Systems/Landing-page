
import React from 'react';
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { ArrowLeft } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Linkedin, Mail } from 'lucide-react';

interface ContactSheetProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactSheet = ({ isOpen, onClose }: ContactSheetProps) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent 
        side="right" 
        className="!w-[75vw] 2xl:!w-[66vw] sm:!max-w-[75vw] 2xl:!max-w-[66vw] overflow-y-auto bg-[#F7F7F5] border-l shadow-xl"
      >
        <div className="h-full flex flex-col pt-16">
          <Button 
            variant="ghost" 
            onClick={onClose}
            className="absolute left-4 top-4 hover:bg-gray-100"
          >
            <ArrowLeft className="h-6 w-6" />
          </Button>

          <div className="text-center mb-16 relative px-4">
            <h1 className="text-4xl font-bold text-primary mb-4">Contact Us</h1>
            <h2 className="text-2xl font-semibold mb-8">Book a Demo</h2>
          </div>

          <div className="px-4 sm:px-8 mb-12">
            <form onSubmit={handleSubmit} className="space-y-8 max-w-2xl mx-auto bg-[#f1f1f1] p-8 rounded-lg">
              <div>
                <Input 
                  placeholder="Your Name" 
                  required 
                  className="bg-white px-6 py-3 text-base"
                />
              </div>
              
              <div>
                <Input 
                  type="email" 
                  placeholder="Email Address" 
                  required 
                  className="bg-white px-6 py-3 text-base"
                />
              </div>
              
              <div>
                <Input 
                  placeholder="Subject" 
                  required 
                  className="bg-white px-6 py-3 text-base"
                />
              </div>
              
              <div>
                <Textarea 
                  placeholder="Message" 
                  required 
                  className="bg-white px-6 py-3 text-base min-h-[150px]"
                />
              </div>
              
              <div className="flex justify-center pt-4">
                <Button 
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-600 text-white rounded-[30px] px-12"
                >
                  Submit
                </Button>
              </div>
            </form>
          </div>

          <div className="bg-gradient-to-br from-[#FAFAFA] to-[#E8EDEF] p-8 mt-auto">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-center mb-12">
                Elevate Your Brand, Stay Compliant
              </h2>
              
              <div className="grid md:grid-cols-2 gap-12">
                <div className="text-center">
                  <div className="w-[61.6px] h-[61.6px] mx-auto mb-6">
                    <img 
                      src="/lovable-uploads/093c0721-b2bf-4b0e-8bab-76817fdaccb7.png"
                      alt="Farhad Rasouli"
                      className="w-full h-full object-contain rounded-lg"
                    />
                  </div>
                  <h3 className="font-bold text-lg">Farhad Rasouli</h3>
                  <p className="text-gray-600 mb-4">Executive Lead & Co-Founder</p>
                  <div className="flex justify-center space-x-4">
                    <a href="#" className="text-gray-600 hover:text-blue-500">
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a href="#" className="text-gray-600 hover:text-blue-500">
                      <Mail className="w-5 h-5" />
                    </a>
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="w-[61.6px] h-[61.6px] mx-auto mb-6">
                    <img 
                      src="/lovable-uploads/718a19dc-08d6-4a18-9312-d4deaa31be03.png"
                      alt="David Dolhomut"
                      className="w-full h-full object-contain rounded-lg"
                    />
                  </div>
                  <h3 className="font-bold text-lg">David Dolhomut</h3>
                  <p className="text-gray-600 mb-4">Head of Partnerships & Business Development</p>
                  <div className="flex justify-center space-x-4">
                    <a href="#" className="text-gray-600 hover:text-blue-500">
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a href="#" className="text-gray-600 hover:text-blue-500">
                      <Mail className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default ContactSheet;

