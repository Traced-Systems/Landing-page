
import React, { useState } from "react";
import { cn } from "@/lib/utils";

interface FloatingInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const FloatingInput = React.forwardRef<HTMLInputElement, FloatingInputProps>(
  ({ className, label, error, ...props }, ref) => {
    const [isFocused, setIsFocused] = useState(false);
    const [hasValue, setHasValue] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setHasValue(e.target.value.length > 0);
      props.onChange?.(e);
    };

    return (
      <div className="relative">
        <input
          {...props}
          ref={ref}
          className={cn(
            "block w-full px-6 py-3 text-base bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-200",
            hasValue || isFocused ? "pt-6 pb-2" : "py-3",
            className
          )}
          onFocus={(e) => {
            setIsFocused(true);
            props.onFocus?.(e);
          }}
          onBlur={(e) => {
            setIsFocused(false);
            props.onBlur?.(e);
          }}
          onChange={handleChange}
        />
        <label
          className={cn(
            "absolute left-6 transition-all duration-200 pointer-events-none text-gray-500",
            hasValue || isFocused
              ? "transform -translate-y-1 scale-75 top-2"
              : "top-1/2 -translate-y-1/2"
          )}
        >
          {label}
        </label>
        {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
      </div>
    );
  }
);

FloatingInput.displayName = "FloatingInput";

export { FloatingInput };
