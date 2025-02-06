import React from 'react';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";

interface NavigationItemsProps {
  handleSheetOpen: (sheet: 'industries' | 'useCases' | 'contact' | 'values' | 'vision' | 'people') => void;
}

const NavigationItems = ({ handleSheetOpen }: NavigationItemsProps) => {
  return (
    <nav className="hidden md:flex items-center space-x-8">
      <a href="#" className="text-gray-600 hover:text-primary transition-colors z-[999]">Home</a>
      <button 
        onClick={() => handleSheetOpen('industries')} 
        className="text-gray-600 hover:text-primary transition-colors z-[999]"
      >
        Industries
      </button>
      <button 
        onClick={() => handleSheetOpen('useCases')} 
        className="text-gray-600 hover:text-primary transition-colors z-[999]"
      >
        Use Cases
      </button>
      <NavigationMenu className="z-[999]">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-gray-600 hover:text-primary transition-colors bg-transparent">
              About Us
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="w-48 p-2">
                <button
                  onClick={() => handleSheetOpen('values')}
                  className="w-full text-left px-3 py-2 text-sm rounded hover:bg-gray-100"
                >
                  Our Values
                </button>
                <button
                  onClick={() => handleSheetOpen('vision')}
                  className="w-full text-left px-3 py-2 text-sm rounded hover:bg-gray-100"
                >
                  Our Vision
                </button>
                <button
                  onClick={() => handleSheetOpen('people')}
                  className="w-full text-left px-3 py-2 text-sm rounded hover:bg-gray-100"
                >
                  Our People
                </button>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <a href="#" className="text-gray-600 hover:text-primary transition-colors z-[999]">Blog</a>
      <button 
        onClick={() => handleSheetOpen('contact')} 
        className="text-gray-600 hover:text-primary transition-colors z-[999]"
      >
        Contact Us
      </button>
    </nav>
  );
};

export default NavigationItems;