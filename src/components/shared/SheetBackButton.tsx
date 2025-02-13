
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

interface SheetBackButtonProps {
  onBack: () => void;
}

const SheetBackButton = ({ onBack }: SheetBackButtonProps) => {
  return (
    <div className="absolute left-0 top-0 -translate-x-full">
      <Button 
        variant="ghost" 
        onClick={onBack}
        className="relative hover:bg-gray-100 bg-white shadow-md flex items-center gap-2 ml-4 mt-24"
      >
        <ArrowLeft className="h-5 w-5" />
        <span>Back</span>
      </Button>
    </div>
  );
};

export default SheetBackButton;
