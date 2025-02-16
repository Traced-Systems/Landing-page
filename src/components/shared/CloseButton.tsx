
import React from 'react';
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { useNavigate } from 'react-router-dom';

interface CloseButtonProps {
  onClose: () => void;
}

const CloseButton = ({ onClose }: CloseButtonProps) => {
  const navigate = useNavigate();

  const handleClose = () => {
    // First close all sheets
    onClose();
    
    // After a small delay to allow for smooth animation, navigate to the index page
    setTimeout(() => {
      navigate('/');
    }, 300); // 300ms matches typical sheet close animation duration
  };

  return (
    <Button 
      variant="ghost" 
      onClick={handleClose}
      className="absolute top-6 right-6 z-[9999] hover:bg-gray-100"
    >
      <X className="h-5 w-5" />
    </Button>
  );
};

export default CloseButton;
