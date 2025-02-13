
import React, { useState, useEffect } from 'react';
import IndustriesSheet from './IndustriesSheet';
import UseCasesSheet from './UseCasesSheet';
import ContactSheet from './ContactSheet';
import OurValuesSheet from './OurValuesSheet';
import OurVisionSheet from './OurVisionSheet';
import OurPeopleSheet from './OurPeopleSheet';
import BlogSheet from './BlogSheet';
import MainHeader from './header/MainHeader';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSheet, setActiveSheet] = useState<'industries' | 'useCases' | 'contact' | 'values' | 'vision' | 'people' | 'blog' | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSheetOpen = (sheet: 'industries' | 'useCases' | 'contact' | 'values' | 'vision' | 'people' | 'blog') => {
    setActiveSheet(sheet);
  };

  const handleSheetClose = () => {
    setActiveSheet(null);
  };

  return (
    <>
      <MainHeader 
        isScrolled={isScrolled} 
        handleSheetOpen={handleSheetOpen} 
        className={activeSheet ? 'hidden' : ''}
      />

      <IndustriesSheet 
        isOpen={activeSheet === 'industries'} 
        onClose={handleSheetClose} 
      />
      <UseCasesSheet 
        isOpen={activeSheet === 'useCases'} 
        onClose={handleSheetClose}
        initialCase={null}
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
      <BlogSheet
        isOpen={activeSheet === 'blog'}
        onClose={handleSheetClose}
      />
    </>
  );
};

export default Header;
