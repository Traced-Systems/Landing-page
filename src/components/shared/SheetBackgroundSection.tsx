
import React from 'react';

interface SheetBackgroundSectionProps {
  children: React.ReactNode;
}

const SheetBackgroundSection = ({ children }: SheetBackgroundSectionProps) => {
  return (
    <div className="relative w-full">
      {children}
    </div>
  );
};

export default SheetBackgroundSection;
