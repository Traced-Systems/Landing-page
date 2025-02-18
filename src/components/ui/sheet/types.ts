
import * as SheetPrimitive from "@radix-ui/react-dialog"
import { VariantProps } from "class-variance-authority"
import { sheetVariants } from "./variants"

export interface SheetContentProps
  extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content>,
    VariantProps<typeof sheetVariants> {
  onSwipeRight?: () => void;
  swipeDirection?: "right" | "left" | "up" | "down";
  swipeThreshold?: number;
}
