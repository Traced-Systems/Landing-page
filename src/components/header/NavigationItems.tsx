
import React from 'react';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";

interface NavigationItemsProps {
  handleSheetOpen: (sheet: 'industries' | 'useCases' | 'contact' | 'values' | 'vision' | 'people') => void;
}

const NavigationItems = ({ handleSheetOpen }: NavigationItemsProps) => {
  return (
    <nav className="hidden md:flex items-center space-x-10 relative z-[1001]">
      <a href="#" className="text-base text-gray-600 hover:text-primary transition-colors">Home</a>
      <button 
        onClick={() => handleSheetOpen('industries')} 
        className="text-base text-gray-600 hover:text-primary transition-colors"
      >
        Industries
      </button>
      <button 
        onClick={() => handleSheetOpen('useCases')} 
        className="text-base text-gray-600 hover:text-primary transition-colors"
      >
        Use Cases
      </button>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger 
              className="text-base font-normal text-gray-600 hover:text-primary transition-colors bg-transparent hover:bg-transparent p-0 [&>svg]:hidden"
            >
              About Us
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="w-48 p-2 bg-[#f7f7f7]">
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
      <a href="#" className="text-base text-gray-600 hover:text-primary transition-colors">Blog</a>
      <button 
        onClick={() => handleSheetOpen('contact')} 
        className="text-base text-gray-600 hover:text-primary transition-colors"
      >
        Contact Us
      </button>
    </nav>
  );
};

export default NavigationItems;
