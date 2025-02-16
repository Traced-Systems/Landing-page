
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from 'react-router-dom';

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
      navigate('/');
    }, 300); // 300ms matches typical sheet close animation duration
  };

  return (
    <Button 
      variant="ghost" 
      onClick={handleBack}
      className="absolute top-6 right-6 z-[9999] hover:bg-gray-100 bg-white shadow-md flex items-center gap-2"
    >
      <ArrowLeft className="h-5 w-5" />
      <span>Back</span>
    </Button>
  );
};

export default SheetBackButton;
