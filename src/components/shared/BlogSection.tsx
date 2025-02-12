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
          <h2 className="text-3xl font-bold mb-4">{title}</h2>
          <p className="text-gray-600">{subtitle}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {posts.map((post, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg transform scale-90 cursor-pointer"
              onClick={() => onPostClick?.(index)}
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.description}</p>
                {post.date && post.author && (
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{post.date}</span>
                    <span>{post.author}</span>
                  </div>
                )}
                {!post.date && (
                  <Button
                    variant="link"
                    className="text-blue-500 p-0 hover:text-blue-600"
                  >
                    Read More →
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>

        {showMoreButton && (
          <div className="flex justify-center">
            <Button variant="outline" className="px-8" onClick={onShowMore}>
              Show More
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogSection;
