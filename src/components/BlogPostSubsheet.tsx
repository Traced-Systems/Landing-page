
import React from 'react';
import { Sheet, SheetContent } from "@/components/ui/sheet";
import SheetBackButton from './shared/SheetBackButton';
import IndustrySheetCTA from './shared/IndustrySheetCTA';

interface BlogPostSubsheetProps {
  isOpen: boolean;
  onClose: () => void;
  post: {
    title: string;
    description: string;
    image: string;
    fullContent?: {
      title: string;
      authorIcon: string;
      introduction: string;
      content: Array<{
        heading: string;
        text: string;
      }>;
    };
  };
}

const BlogPostSubsheet = ({ isOpen, onClose, post }: BlogPostSubsheetProps) => {
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
              {post.fullContent ? (
                <>
                  <div className="flex items-center gap-2 mb-6">
                    <img 
                      src={post.fullContent.authorIcon}
                      alt="Traced Systems"
                      className="w-6 h-6"
                    />
                    <span className="text-gray-600">Written by Traced Systems</span>
                  </div>
                  <div className="mb-8">
                    <h1 className="text-4xl font-bold text-primary mb-4">{post.fullContent.title}</h1>
                  </div>

                  <img 
                    src={post.image}
                    alt={post.title}
                    className="w-full h-[400px] object-cover rounded-lg mb-8"
                  />

                  <div className="prose max-w-none mb-12">
                    <p className="text-gray-600 mb-8 text-lg">
                      {post.fullContent.introduction}
                    </p>

                    {post.fullContent.content.map((section, index) => (
                      <div key={index} className="mb-8">
                        <h2 className="text-2xl font-bold text-primary mb-4">{section.heading}</h2>
                        <div className="text-gray-600 whitespace-pre-line">
                          {section.text}
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                <>
                  <div className="mb-8">
                    <h1 className="text-4xl font-bold text-primary mb-4">{post.title}</h1>
                  </div>

                  <img 
                    src={post.image}
                    alt={post.title}
                    className="w-full h-[400px] object-cover rounded-lg mb-8"
                  />

                  <div className="prose max-w-none mb-12">
                    <p className="text-gray-600 mb-4">
                      {post.description}
                    </p>
                  </div>
                </>
              )}
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
