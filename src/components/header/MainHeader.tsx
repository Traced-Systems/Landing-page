
import React from "react";
import { Button } from "@/components/ui/button";
import NavigationItems from "./NavigationItems";
import MobileMenu from "./MobileMenu";
import Logo from "./Logo";

interface MainHeaderProps {
  isScrolled: boolean;
  handleSheetOpen: (sheet: 'industries' | 'useCases' | 'contact' | 'values' | 'vision' | 'people' | 'blog') => void;
  className?: string;
}

const MainHeader = ({
  isScrolled,
  handleSheetOpen,
  className,
}: MainHeaderProps) => {
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[1001] transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      } ${className || ""}`}
    >
      <div className="container mx-auto relative">
        <div className="flex items-center h-16">
          <Logo />

          <div className="flex items-center justify-end space-x-8 w-full">
            <NavigationItems handleSheetOpen={handleSheetOpen} />

            <Button
              onClick={() => handleSheetOpen("contact")}
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

export default MainHeader;
