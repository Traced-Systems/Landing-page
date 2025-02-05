import React from 'react';
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { ArrowLeft } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { LinkedIn, Mail } from 'lucide-react';

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
        <div className="h-full flex flex-col pt-20">
          <Button 
            variant="ghost" 
            onClick={onClose}
            className="absolute left-4 top-4 hover:bg-gray-100"
          >
            <ArrowLeft className="h-6 w-6" />
          </Button>

          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-primary">Contact Us</h1>
          </div>

          <div className="px-8 mb-12">
            <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
              <h2 className="text-2xl font-semibold mb-6">Book a Demo</h2>
              
              <div>
                <Input 
                  placeholder="Your Name" 
                  required 
                  className="bg-white"
                />
              </div>
              
              <div>
                <Input 
                  type="email" 
                  placeholder="Email Address" 
                  required 
                  className="bg-white"
                />
              </div>
              
              <div>
                <Input 
                  placeholder="Subject" 
                  required 
                  className="bg-white"
                />
              </div>
              
              <div>
                <Textarea 
                  placeholder="Message" 
                  required 
                  className="bg-white min-h-[150px]"
                />
              </div>
              
              <Button 
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white rounded-[30px]"
              >
                Submit
              </Button>
            </form>
          </div>

          <div className="bg-white p-8 mt-auto">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-center mb-8">
                Elevate Your Brand, Stay Compliant
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="text-center">
                  <img 
                    src="/lovable-uploads/1a2cdca0-9689-4954-b603-5fe8c1cce981.png"
                    alt="Fashad Basout"
                    className="w-48 h-48 object-cover rounded-lg mx-auto mb-4"
                  />
                  <h3 className="font-bold text-lg">Fashad Basout</h3>
                  <p className="text-gray-600 mb-4">CEO & Co-Founder</p>
                  <div className="flex justify-center space-x-4">
                    <a href="#" className="text-gray-600 hover:text-blue-500">
                      <LinkedIn className="w-5 h-5" />
                    </a>
                    <a href="#" className="text-gray-600 hover:text-blue-500">
                      <Mail className="w-5 h-5" />
                    </a>
                  </div>
                </div>
                
                <div className="text-center">
                  <img 
                    src="/lovable-uploads/73fb0791-7878-4102-a4df-ac7ce16350f1.png"
                    alt="David Dolhomut"
                    className="w-48 h-48 object-cover rounded-lg mx-auto mb-4"
                  />
                  <h3 className="font-bold text-lg">David Dolhomut</h3>
                  <p className="text-gray-600 mb-4">Head of Partnerships & Business Developer</p>
                  <div className="flex justify-center space-x-4">
                    <a href="#" className="text-gray-600 hover:text-blue-500">
                      <LinkedIn className="w-5 h-5" />
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