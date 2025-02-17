
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface SheetBackButtonProps {
  onBack: () => void;
}

const SheetBackButton = ({ onBack }: SheetBackButtonProps) => {
  const navigate = useNavigate();

  const handleBack = () => {
    // First close the current sheet
    onBack();

    // After a small delay to allow for smooth animation, navigate to the index page
    setTimeout(() => {
      navigate("/");
    }, 300); // 300ms matches typical sheet close animation duration
  };

  return (
    <Button
      variant="ghost"
      onClick={handleBack}
      className="fixed md:left-2 right-4 md:top-2 top-4 z-[9999] hover:bg-gray-100 bg-white shadow-sm flex items-center gap-2 md:h-10 md:px-4 md:py-2 md:rounded-md md:justify-center md:whitespace-nowrap"
    >
      <ArrowLeft className="h-4 w-4" />
      <span>Back</span>
    </Button>
  );
};

export default SheetBackButton;
