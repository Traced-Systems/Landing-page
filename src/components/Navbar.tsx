
import React from 'react';
import { useNavigate } from 'react-router-dom';
import NavigationItems from './header/NavigationItems';
import Logo from './header/Logo';
import MobileMenu from './header/MobileMenu';
import { Button } from './ui/button';

interface NavbarProps {
  onContactClick: () => void;
  onIndustriesClick: () => void;
  onOurVisionClick: () => void;
  onOurValuesClick: () => void;
  onOurPeopleClick: () => void;
  onBlogClick: () => void;
}

const Navbar = ({
  onContactClick,
  onIndustriesClick,
  onOurVisionClick,
  onOurValuesClick,
  onOurPeopleClick,
  onBlogClick
}: NavbarProps) => {
  const handleSheetOpen = (sheet: 'industries' | 'useCases' | 'contact' | 'values' | 'vision' | 'people' | 'blog') => {
    switch (sheet) {
      case 'industries':
        onIndustriesClick();
        break;
      case 'contact':
        onContactClick();
        break;
      case 'values':
        onOurValuesClick();
        break;
      case 'vision':
        onOurVisionClick();
        break;
      case 'people':
        onOurPeopleClick();
        break;
      case 'blog':
        onBlogClick();
        break;
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-[50] transition-all duration-300 bg-white shadow-md">
      <div className="container mx-auto relative">
        <div className="flex items-center h-16">
          <Logo />

          <div className="flex items-center justify-end space-x-8 w-full">
            <NavigationItems handleSheetOpen={handleSheetOpen} />

            <Button
              onClick={() => handleSheetOpen('contact')}
              className="hidden lg:inline-flex bg-blue-500 hover:bg-blue-600 text-white rounded-[30px] px-8 shadow-[inset_3px_3px_6px_rgba(0,0,0,0.08),inset_-3px_-3px_6px_rgba(255,255,255,0.5)]"
            >
              Book Demo
            </Button>
          </div>

          <MobileMenu handleSheetOpen={handleSheetOpen} />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
