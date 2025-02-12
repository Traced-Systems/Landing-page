
import React from 'react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Button1Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
}

const Button1 = ({ children, className, icon, ...props }: Button1Props) => {
  return (
    <Button
      className={cn(
        "bg-[#FDFDFD] text-[#143A44] border-[1.5px] border-[#E1B382] rounded-full",
        "px-6 py-2 flex items-center gap-2 hover:bg-[#E1B382]/10",
        className
      )}
      {...props}
    >
      {children}
      {icon && icon}
    </Button>
  );
};

export default Button1;
