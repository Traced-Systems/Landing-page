
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

interface SheetBackButtonProps {
  onBack: () => void;
}

const SheetBackButton = ({ onBack }: SheetBackButtonProps) => {
  return (
    <Button 
      variant="ghost" 
      onClick={onBack}
      className="absolute -left-14 top-24 z-[9999] hover:bg-gray-100 bg-white shadow-md flex items-center gap-2"
    >
      <ArrowLeft className="h-5 w-5" />
      <span>Back</span>
    </Button>
  );
};

export default SheetBackButton;
