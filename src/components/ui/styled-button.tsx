
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface StyledButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

const StyledButton = ({ children, className, ...props }: StyledButtonProps) => {
  return (
    <Button
      className={cn(
        "bg-white text-[#173A44] hover:bg-[#173A44] hover:text-white transition-colors duration-300",
        "rounded-full border border-[#173A44] px-8 py-2",
        className
      )}
      {...props}
    >
      {children}
    </Button>
  );
};

export default StyledButton;
