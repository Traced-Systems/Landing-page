
import React from "react";
import { Button } from "@/components/ui/button";

interface BlogPost {
  title: string;
  description: string;
  image: string;
  date?: string;
  author?: string;
}

interface BlogSectionProps {
  title: string;
  subtitle: string;
  posts: BlogPost[];
  onPostClick?: (index: number) => void;
  showMoreButton?: boolean;
  onShowMore?: () => void;
}

const BlogSection = ({
  title,
  subtitle,
  posts,
  onPostClick,
  showMoreButton = false,
  onShowMore,
}: BlogSectionProps) => {
  return (
    <section className="pt-32 pb-28 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-[#173A44]">{title}</h2>
          <p className="text-gray-600">{subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {posts.map((post, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              onClick={() => onPostClick?.(index)}
            >
              <div className="w-full h-64 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-[#173A44]">{post.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{post.description}</p>
                <Button
                  variant="link"
                  className="text-blue-500 p-0 hover:text-blue-600"
                >
                  Read More →
                </Button>
              </div>
            </div>
          ))}
        </div>

        {showMoreButton && (
          <div className="flex justify-center">
            <Button 
              variant="outline" 
              className="px-8 border-2 border-[#E4AC70] text-[#143A44] hover:bg-[#EEEADF]"
              onClick={onShowMore}
            >
              Show More
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogSection;
