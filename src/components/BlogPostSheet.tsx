
import React from 'react';
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import SheetBackButton from './shared/SheetBackButton';
import IndustrySheetCTA from './shared/IndustrySheetCTA';

interface BlogPost {
  title: string;
  description: string;
  image: string;
  date: string;
  author: string;
}

interface BlogPostSheetProps {
  isOpen: boolean;
  onClose: () => void;
  post: BlogPost;
}

const BlogPostSheet = ({ isOpen, onClose, post }: BlogPostSheetProps) => {
  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent 
        side="right" 
        className="!w-[75vw] 2xl:!w-[66vw] sm:!max-w-[75vw] 2xl:!max-w-[66vw] overflow-y-auto bg-[#F7F7F5] border-l shadow-xl p-0 z-[995]"
      >
        <SheetBackButton onBack={onClose} />

        <div className="h-full flex flex-col">
          <div className="pt-24 px-8">
            <div className="max-w-4xl mx-auto">
              <div className="mb-8">
                <h1 className="text-4xl font-bold text-primary mb-4">{post.title}</h1>
                <div className="flex items-center gap-4 text-gray-600">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>By {post.author}</span>
                </div>
              </div>

              <img 
                src={post.image}
                alt={post.title}
                className="w-full h-[400px] object-cover rounded-lg mb-8"
              />

              <div className="prose max-w-none mb-12">
                <p className="text-gray-600 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>

                <h2 className="text-2xl font-bold text-primary mb-4">The Challenge</h2>
                <p className="text-gray-600 mb-4">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                  fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
                  culpa qui officia deserunt mollit anim id est laborum.
                </p>

                <h2 className="text-2xl font-bold text-primary mb-4">The Solution</h2>
                <p className="text-gray-600 mb-4">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium 
                  doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore 
                  veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                </p>
              </div>
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

export default BlogPostSheet;
