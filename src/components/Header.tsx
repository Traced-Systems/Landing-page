import React from 'react';
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import IndustriesSheet from './IndustriesSheet';
import UseCasesSheet from './UseCasesSheet';
import ContactUsSheet from './ContactUsSheet';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-12">
            <img
              src="/lovable-uploads/be299dfa-b19d-4af4-b1ff-613ed0b16f58.png"
              alt="Traced Systems"
              className="h-8"
            />
            
            <nav className="hidden md:flex items-center space-x-8">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost">Industries</Button>
                </SheetTrigger>
                <IndustriesSheet />
              </Sheet>
              
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost">Use Cases</Button>
                </SheetTrigger>
                <UseCasesSheet />
              </Sheet>
              
              <a href="/blog" className="text-gray-600 hover:text-primary transition-colors">
                Blog
              </a>
              
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost">Contact Us</Button>
                </SheetTrigger>
                <ContactUsSheet />
              </Sheet>
            </nav>
          </div>

          <div className="flex items-center space-x-4">
            <Sheet>
              <SheetTrigger asChild>
                <Button className="bg-[#F4A261] hover:bg-[#E76F51] text-white">
                  Book Demo
                </Button>
              </SheetTrigger>
              <ContactUsSheet />
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;