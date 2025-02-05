
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import IndustriesSheet from './IndustriesSheet';
import UseCasesSheet from './UseCasesSheet';
import ContactSheet from './ContactSheet';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSheet, setActiveSheet] = useState<'industries' | 'useCases' | 'contact' | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSheetOpen = (sheet: 'industries' | 'useCases' | 'contact') => {
    setActiveSheet(sheet);
  };

  const handleSheetClose = () => {
    setActiveSheet(null);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-[999] transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
    }`}>
      <div className="container mx-auto">
        <div className="flex items-center h-16">
          <a href="/" className="text-xl font-bold text-primary">
            <img src="/lovable-uploads/adffe373-57b3-4ac5-a5db-d6d2f0fbff52.png" alt="Traced Logo" className="h-[29.45px] w-[120px]" />
          </a>
          
          <div className="flex items-center justify-end space-x-8 w-full">
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-600 hover:text-primary transition-colors">Home</a>
              <button 
                onClick={() => handleSheetOpen('industries')} 
                className="text-gray-600 hover:text-primary transition-colors"
              >
                Industries
              </button>
              <button 
                onClick={() => handleSheetOpen('useCases')} 
                className="text-gray-600 hover:text-primary transition-colors"
              >
                Use Cases
              </button>
              <a href="#" className="text-gray-600 hover:text-primary transition-colors">About Us</a>
              <a href="#" className="text-gray-600 hover:text-primary transition-colors">Blog</a>
              <button 
                onClick={() => handleSheetOpen('contact')} 
                className="text-gray-600 hover:text-primary transition-colors"
              >
                Contact Us
              </button>
            </nav>
            
            <Button 
              onClick={() => handleSheetOpen('contact')}
              className="hidden md:inline-flex bg-blue-500 hover:bg-blue-600 text-white rounded-[30px] px-6"
            >
              Book Demo
            </Button>
          </div>

          <button className="md:hidden p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

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
    </header>
  );
};

export default Header;
