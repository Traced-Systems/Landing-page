
import React from 'react';
import { Sheet, SheetContent } from "@/components/ui/sheet";
import SheetBackButton from './shared/SheetBackButton';
import BlogPostSheet from './BlogPostSheet';
import AboutCTA from './shared/AboutCTA';
import BlogSection from './shared/BlogSection';

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
              <BlogSection
                title="Latest Blog Posts"
                subtitle="Discover insights and updates from our experts about digital product passports, sustainability, and supply chain innovation."
                posts={blogPosts}
                onPostClick={setActivePost}
              />
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
