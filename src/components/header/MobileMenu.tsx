
import React, { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, ArrowLeft, ChevronDown } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

interface MobileMenuProps {
  handleSheetOpen: (sheet: 'industries' | 'useCases' | 'contact' | 'values' | 'vision' | 'people' | 'blog' | 'career' ) => void;
}

const MobileMenu = ({
  handleSheetOpen
}: MobileMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAboutUsOpen, setIsAboutUsOpen] = useState(false);
  const navigate = useNavigate();

  const handleMenuItemClick = (sheet: 'industries' | 'useCases' | 'contact' | 'values' | 'vision' | 'people' | 'blog' | 'career' ) => {
    setIsOpen(false);
    handleSheetOpen(sheet);
  };

  const handleBookDemo = () => {
    setIsOpen(false);
    window.dispatchEvent(new CustomEvent('openContact'));
  };

  const toggleAboutUs = () => {
    setIsAboutUsOpen(!isAboutUsOpen);
  };

  const handleHomeClick = () => {
    setIsOpen(false);
    navigate('/');
  };

  const handleMenuClose = () => {
    setIsOpen(false);
  }

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button 
          variant="ghost" 
          size="icon" 
          className="lg:hidden fixed top-4 right-4 z-[999] bg-white shadow-md hover:bg-gray-100"
        >
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent 
        side="top" 
        className="w-full h-[100vh] lg:hidden pt-16"
        style={{
          backgroundImage: "url('/lovable-uploads/2a414ed9-114b-4c33-a9f7-3bff2e04f401.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute left-4 top-[18px] z-[999]">
          <img
            src="/lovable-uploads/adffe373-57b3-4ac5-a5db-d6d2f0fbff52.svg"
            alt="Traced Logo"
            className="h-[29.45px] w-[120px]"
          />
        </div>
        
        

        <nav className="flex flex-col space-y-4 p-4">
          <button onClick={handleHomeClick} className="text-left text-lg text-[#173A44] hover:text-[#066985] py-2">
            Home
          </button>
          <Link to="/industries" onClick={handleMenuClose} className="text-left text-lg text-[#173A44] hover:text-[#066985] py-2">
            Industries
          </Link>
          <Link to="/use-cases" onClick={handleMenuClose} className="text-left text-lg text-[#173A44] hover:text-[#066985] py-2">
            Use Cases
          </Link>
          <div className="flex flex-col space-y-2">
            <button onClick={toggleAboutUs} className="flex items-center justify-between w-full text-lg text-[#173A44] font-medium py-2">
              <span>About Us</span>
              <ChevronDown className={`h-5 w-5 transition-transform ${isAboutUsOpen ? 'rotate-180' : ''}`} />
            </button>
            <div className={`flex flex-col space-y-3 pl-4 transition-all duration-300 ${isAboutUsOpen ? 'block' : 'hidden'}`}>
              <button onClick={() => handleMenuItemClick('values')} className="text-left text-lg text-[#173A44] hover:text-[#066985] py-2 w-full">
                Our Values
              </button>
              <button onClick={() => handleMenuItemClick('vision')} className="text-left text-lg text-[#173A44] hover:text-[#066985] py-2 w-full">
                Our Vision
              </button>
              <button onClick={() => handleMenuItemClick('people')} className="text-left text-lg text-[#173A44] hover:text-[#066985] py-2 w-full">
                Our People
              </button>
            </div>
          </div>
          <button onClick={() => handleMenuItemClick('career')} className="text-left text-lg text-[#173A44] hover:text-[#066985] py-2">
            Career
          </button>
          <Link to="/blog" onClick={handleMenuClose} className="text-left text-lg text-[#173A44] hover:text-[#066985] py-2">
            Blog
          </Link>
          <button onClick={() => handleMenuItemClick('contact')} className="text-left text-lg text-[#173A44] hover:text-[#066985] py-2">
            Contact Us
          </button>
          <Button onClick={handleBookDemo} className="w-full bg-blue-500 hover:bg-blue-600 text-white rounded-[30px] px-8 shadow-[inset_3px_3px_6px_rgba(0,0,0,0.08),inset_-3px_-3px_6px_rgba(255,255,255,0.5)]">
            Book Demo
          </Button>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
