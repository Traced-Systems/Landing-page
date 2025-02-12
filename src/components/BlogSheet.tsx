
import React from 'react';
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import SheetBackButton from './shared/SheetBackButton';
import BlogPostSheet from './BlogPostSheet';
import AboutCTA from './shared/AboutCTA';

interface BlogSheetProps {
  isOpen: boolean;
  onClose: () => void;
}

const BlogSheet = ({ isOpen, onClose }: BlogSheetProps) => {
  const [activePost, setActivePost] = React.useState<number | null>(null);

  const blogPosts = [
    {
      title: "The Future of Digital Product Passports",
      description: "Explore how digital product passports are revolutionizing supply chain transparency and sustainability...",
      image: "/lovable-uploads/pilot.png",
      date: "March 15, 2024",
      author: "David Anderson"
    },
    {
      title: "Sustainability in the Digital Age",
      description: "Discover how businesses are leveraging technology to achieve their sustainability goals and meet regulatory requirements...",
      image: "/lovable-uploads/pilot.png",
      date: "March 10, 2024",
      author: "Sarah Johnson"
    },
    {
      title: "Innovation in Supply Chain Management",
      description: "Learn about the latest innovations in supply chain management and how they're transforming industry practices...",
      image: "/lovable-uploads/pilot.png",
      date: "March 5, 2024",
      author: "Michael Zhang"
    }
  ];

  return (
    <>
      <Sheet open={isOpen} onOpenChange={onClose}>
        <SheetContent 
          side="right" 
          className="!w-[75vw] 2xl:!w-[66vw] sm:!max-w-[75vw] 2xl:!max-w-[66vw] overflow-y-auto bg-[#F7F7F5] border-l shadow-xl p-0"
        >
          <SheetBackButton onBack={onClose} />

          <div className="h-full flex flex-col pt-24">
            <div className="px-8 mb-12">
              <h1 className="text-3xl font-bold text-primary mb-6">Latest Blog Posts</h1>
              <p className="text-gray-600 mb-8">
                Discover insights and updates from our experts about digital product passports, 
                sustainability, and supply chain innovation.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {blogPosts.map((post, index) => (
                  <div 
                    key={index}
                    onClick={() => setActivePost(index)}
                    className="bg-white rounded-xl p-6 shadow-[4px_4px_10px_0px_rgba(0,0,0,0.1),-4px_-4px_10px_0px_rgba(255,255,255,0.9)] hover:shadow-[6px_6px_12px_0px_rgba(0,0,0,0.15),-6px_-6px_12px_0px_rgba(255,255,255,0.95)] transition-all duration-300 cursor-pointer"
                  >
                    <img 
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                    <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                    <p className="text-gray-600 mb-4">{post.description}</p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span>{post.date}</span>
                      <span>{post.author}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-auto">
              <AboutCTA onClose={onClose} />
            </div>
          </div>
        </SheetContent>
      </Sheet>

      {blogPosts.map((post, index) => (
        <BlogPostSheet
          key={index}
          isOpen={activePost === index}
          onClose={() => setActivePost(null)}
          post={post}
        />
      ))}
    </>
  );
};

export default BlogSheet;
