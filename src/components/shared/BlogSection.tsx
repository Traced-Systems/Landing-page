import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

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
      <div className="container mx-auto px-12 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-[#173A44]">{title}</h2>
          <p className="text-gray-600">{subtitle}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {posts.map((post, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              onClick={() => onPostClick?.(index)}
            >
              <div className="aspect-[430/243] w-full">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-[#173A44]">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.description}
                </p>
                <button className="transition-colors text-[#E4AC70] hover:text-[#C66600] flex items-center gap-0.5">
                  Know More <ChevronRight className="w-4 h-4 mt-0.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {showMoreButton && (
          <div className="flex justify-center">
            <Button
              variant="outline"
              className="rounded-full border-2 border-[#E4AC70] bg-[#Ffffff] text-[#143A44] flex items-center gap-2 pl-7 pr-6 hover:bg-[#F2F1EE]"
            >
              Know More <ChevronRight className="w-5 h-5 text-[#143A44]" />
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogSection;
