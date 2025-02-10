
import React from 'react';

interface SheetBackgroundSectionProps {
  children: React.ReactNode;
}

const SheetBackgroundSection = ({ children }: SheetBackgroundSectionProps) => {
  return (
    <div 
      className="relative w-full"
      style={{
        backgroundImage: 'url("/lovable-uploads/010480b1-96b0-4011-9547-f090189e193c.png")',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover'
      }}
    >
      {children}
    </div>
  );
};

export default SheetBackgroundSection;
