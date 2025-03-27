import * as SheetPrimitive from "@radix-ui/react-dialog";
import { VariantProps } from "class-variance-authority";
import { sheetVariants } from "./variants";

export interface SheetContentProps
  extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content>,
    VariantProps<typeof sheetVariants> {
  onOpenChange?: (open: boolean) => void;
}
