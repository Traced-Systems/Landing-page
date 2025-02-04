import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import IndustriesSheet from './IndustriesSheet';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
              <IndustriesSheet />
              <a href="#" className="text-gray-600 hover:text-primary transition-colors">Use Cases</a>
              <a href="#" className="text-gray-600 hover:text-primary transition-colors">About Us</a>
            </nav>
            
            <Button className="hidden md:inline-flex bg-blue-500 hover:bg-blue-600 text-white rounded-[30px] px-6">
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
    </header>
  );
};

export default Header;