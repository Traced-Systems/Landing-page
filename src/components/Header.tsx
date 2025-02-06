import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import IndustriesSheet from './IndustriesSheet';
import UseCasesSheet from './UseCasesSheet';
import ContactSheet from './ContactSheet';
import OurValuesSheet from './OurValuesSheet';
import OurVisionSheet from './OurVisionSheet';
import OurPeopleSheet from './OurPeopleSheet';
import NavigationItems from './header/NavigationItems';
import MobileMenu from './header/MobileMenu';
import Logo from './header/Logo';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSheet, setActiveSheet] = useState<'industries' | 'useCases' | 'contact' | 'values' | 'vision' | 'people' | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSheetOpen = (sheet: 'industries' | 'useCases' | 'contact' | 'values' | 'vision' | 'people') => {
    setActiveSheet(sheet);
  };

  const handleSheetClose = () => {
    setActiveSheet(null);
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-300 ${
          isScrolled || activeSheet ? 'bg-white shadow-md' : 'bg-transparent'
        }`}
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

      <IndustriesSheet 
        isOpen={activeSheet === 'industries'} 
        onClose={handleSheetClose} 
      />
      <UseCasesSheet 
        isOpen={activeSheet === 'useCases'} 
        onClose={handleSheetClose} 
      />
      <ContactSheet 
        isOpen={activeSheet === 'contact'} 
        onClose={handleSheetClose} 
      />
      <OurValuesSheet
        isOpen={activeSheet === 'values'}
        onClose={handleSheetClose}
      />
      <OurVisionSheet
        isOpen={activeSheet === 'vision'}
        onClose={handleSheetClose}
      />
      <OurPeopleSheet
        isOpen={activeSheet === 'people'}
        onClose={handleSheetClose}
      />
    </>
  );
};

export default Header;