
import React, { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, ArrowLeft, ChevronDown } from "lucide-react";

interface MobileMenuProps {
  handleSheetOpen: (sheet: 'industries' | 'useCases' | 'contact' | 'values' | 'vision' | 'people' | 'blog') => void;
}

const MobileMenu = ({ handleSheetOpen }: MobileMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAboutUsOpen, setIsAboutUsOpen] = useState(false);

  const handleMenuItemClick = (sheet: 'industries' | 'useCases' | 'contact' | 'values' | 'vision' | 'people' | 'blog') => {
    setIsOpen(false);
    handleSheetOpen(sheet);
  };

  const toggleAboutUs = () => {
    setIsAboutUsOpen(!isAboutUsOpen);
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="lg:hidden">
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent 
        side="top" 
        className="w-full h-[100vh] lg:hidden pt-16 bg-white"
      >
        <Button 
          variant="ghost" 
          size="icon" 
          className="absolute right-4 top-4 hover:bg-gray-100 bg-white shadow-md flex items-center gap-2"
          onClick={() => setIsOpen(false)}
        >
          <ArrowLeft className="h-5 w-5" />
          <span>Back</span>
        </Button>

        <nav className="flex flex-col space-y-4 p-4">
          <a href="#" className="text-lg text-[#173A44] hover:text-[#066985] py-2">
            Home
          </a>
          <button
            onClick={() => handleMenuItemClick('industries')}
            className="text-left text-lg text-[#173A44] hover:text-[#066985] py-2"
          >
            Industries
          </button>
          <button
            onClick={() => handleMenuItemClick('useCases')}
            className="text-left text-lg text-[#173A44] hover:text-[#066985] py-2"
          >
            Use Cases
          </button>
          <div className="space-y-2">
            <button
              onClick={toggleAboutUs}
              className="flex items-center justify-between w-full text-lg text-[#173A44] font-medium py-2"
            >
              <span>About Us</span>
              <ChevronDown 
                className={`h-5 w-5 transition-transform ${isAboutUsOpen ? 'rotate-180' : ''}`} 
              />
            </button>
            <div className={`pl-4 space-y-2 transition-all duration-300 ${isAboutUsOpen ? 'block' : 'hidden'}`}>
              <button
                onClick={() => handleMenuItemClick('values')}
                className="text-left text-lg text-[#173A44] hover:text-[#066985] py-2"
              >
                Our Values
              </button>
              <button
                onClick={() => handleMenuItemClick('vision')}
                className="text-left text-lg text-[#173A44] hover:text-[#066985] py-2"
              >
                Our Vision
              </button>
              <button
                onClick={() => handleMenuItemClick('people')}
                className="text-left text-lg text-[#173A44] hover:text-[#066985] py-2"
              >
                Our People
              </button>
            </div>
          </div>
          <button
            onClick={() => handleMenuItemClick('blog')}
            className="text-left text-lg text-[#173A44] hover:text-[#066985] py-2"
          >
            Blog
          </button>
          <button
            onClick={() => handleMenuItemClick('contact')}
            className="text-left text-lg text-[#173A44] hover:text-[#066985] py-2"
          >
            Contact Us
          </button>
          <Button
            onClick={() => handleMenuItemClick('contact')}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white rounded-[30px] px-8 shadow-[inset_3px_3px_6px_rgba(0,0,0,0.08),inset_-3px_-3px_6px_rgba(255,255,255,0.5)]"
          >
            Book Demo
          </Button>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
