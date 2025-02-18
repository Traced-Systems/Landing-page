
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

interface SheetBackButtonProps {
  onBack: () => void;
}

const SheetBackButton = ({ onBack }: SheetBackButtonProps) => {
  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={onBack}
      className="md:absolute md:left-8 md:top-8 fixed top-4 right-4 z-[999] bg-white shadow-md hover:bg-gray-100 md:shadow-none md:bg-transparent md:hover:bg-transparent flex items-center gap-2 px-[42px] py-[18px]"
    >
      <ArrowLeft className="h-5 w-5" />
      <span>Back</span>
    </Button>
  );
};

export default SheetBackButton;
