
import React from 'react';
import { Button } from "@/components/ui/button";
import NavigationItems from './NavigationItems';
import MobileMenu from './MobileMenu';
import Logo from './Logo';

interface MainHeaderProps {
  isScrolled: boolean;
  handleSheetOpen: (sheet: 'industries' | 'useCases' | 'contact' | 'values' | 'vision' | 'people' | 'blog') => void;
  className?: string; // Added className as an optional prop
}

const MainHeader = ({ isScrolled, handleSheetOpen, className }: MainHeaderProps) => {
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-[50] transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      } ${className || ''}`}
    >
      <div className="container mx-auto relative">
        <div className="flex items-center h-16">
          <Logo />
          
          <div className="flex items-center justify-end space-x-8 w-full">
            <NavigationItems handleSheetOpen={handleSheetOpen} />
            
            <Button 
              onClick={() => handleSheetOpen('contact')}
              className="hidden md:inline-flex bg-blue-500 hover:bg-blue-600 text-white rounded-[30px] px-6"
            >
              Book Demo
            </Button>
          </div>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
