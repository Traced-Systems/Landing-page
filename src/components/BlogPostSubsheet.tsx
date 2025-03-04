
import React from "react";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import SheetBackButton from "./shared/SheetBackButton";
import IndustrySheetCTA from "./shared/IndustrySheetCTA";
import { BlogPost } from "@/types/blog";
import BlogPostContent from "./blog/BlogPostContent";

interface BlogPostSubsheetProps {
  isOpen: boolean;
  onClose: () => void;
  post: BlogPost;
}

const BlogPostSubsheet = ({ isOpen, onClose, post }: BlogPostSubsheetProps) => {
  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent
        side="right"
        className="!w-full sm:!w-[75vw] 2xl:!w-[66vw] sm:!max-w-[75vw] 2xl:!max-w-[66vw] overflow-y-auto bg-[#F7F7F5] border-l shadow-xl p-0 z-[995]"
      >
        <SheetBackButton onBack={onClose} />

        <div className="h-full flex flex-col">
          <div className="pt-20 px-8">
            <div className="max-w-4xl mx-auto">
              <BlogPostContent post={post} />
            </div>
          </div>

          <div className="mt-auto w-full">
            <IndustrySheetCTA
              title="Want to Learn More About Our Solutions?"
              description="Discover how our digital product passport can transform your business operations and help you meet sustainability goals."
            />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default BlogPostSubsheet;
