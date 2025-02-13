
import React, { useState, useEffect } from 'react';
import { Sheet, SheetContent } from "@/components/ui/sheet";
import SheetBackButton from './shared/SheetBackButton';
import AboutCTA from './shared/AboutCTA';
import SheetBackgroundSection from './shared/SheetBackgroundSection';
import BlogPostSubsheet from './BlogPostSubsheet';
import BlogCard from './blog/BlogCard';
import { blogPosts } from '@/data/blogPosts';
import { BlogPost } from '@/types/blog';

interface BlogSheetProps {
  isOpen: boolean;
  onClose: () => void;
  initialPost?: BlogPost | null;
}

const BlogSheet = ({ isOpen, onClose, initialPost }: BlogSheetProps) => {
  const [activePost, setActivePost] = useState<BlogPost | null>(null);

  useEffect(() => {
    if (initialPost) {
      setActivePost(initialPost);
    }
  }, [initialPost]);

  const handlePostClick = (post: BlogPost) => {
    setActivePost(post);
  };

  const handleSubsheetClose = () => {
    setActivePost(null);
  };

  return (
    <>
      <Sheet open={isOpen} onOpenChange={onClose}>
        <SheetContent 
          side="right" 
          className="!w-[75vw] 2xl:!w-[66vw] sm:!max-w-[75vw] 2xl:!max-w-[66vw] overflow-y-auto bg-[#F7F7F5] border-l shadow-xl p-0"
        >
          <SheetBackButton onBack={onClose} />

          <div className="h-full flex flex-col">
            <SheetBackgroundSection>
              <div className="pt-24 px-8">
                <h1 className="text-3xl font-bold text-center mb-8">Blog</h1>

                <div className="text-center mb-12">
                  <p className="text-gray-600">
                    Insights and updates from our team about digital product passports, sustainability, and innovation.
                  </p>
                </div>
              </div>
            </SheetBackgroundSection>

            <div className="px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {blogPosts.map((post, index) => (
                  <BlogCard
                    key={index}
                    post={post}
                    onClick={handlePostClick}
                  />
                ))}
              </div>
            </div>

            <div className="mt-auto w-full">
              <AboutCTA onClose={onClose} />
            </div>
          </div>
        </SheetContent>
      </Sheet>

      {activePost && (
        <BlogPostSubsheet 
          isOpen={!!activePost}
          onClose={handleSubsheetClose}
          post={activePost}
        />
      )}
    </>
  );
};

export default BlogSheet;
