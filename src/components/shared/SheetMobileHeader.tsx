
import React from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

interface SheetMobileHeaderProps {
  onMenuClick: () => void;
}

const SheetMobileHeader = ({ onMenuClick }: SheetMobileHeaderProps) => {
  return (
    <div className="lg:hidden fixed top-4 left-4 z-[999]">
      <Button 
        variant="ghost" 
        size="icon" 
        onClick={onMenuClick}
        className="bg-white shadow-md hover:bg-gray-100"
      >
        <Menu className="h-6 w-6" />
      </Button>
    </div>
  );
};

export default SheetMobileHeader;
