import React from "react";
import { BlogPost } from "@/types/blog";
import { ChevronRight } from "lucide-react";

interface BlogCardProps {
  post: BlogPost;
  onClick: (post: BlogPost) => void;
}

const BlogCard = ({ post, onClick }: BlogCardProps) => {
  return (
    <div
      onClick={() => onClick(post)}
      className="bg-white rounded-xl shadow-[4px_4px_10px_0px_rgba(0,0,0,0.05),-4px_-4px_10px_0px_rgba(255,255,255,0.9)] hover:shadow-[6px_6px_12px_0px_rgba(0,0,0,0.1),-6px_-6px_12px_0px_rgba(255,255,255,0.95)] transition-all duration-300 cursor-pointer"
    >
      <div className="aspect-[430/243] w-full">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-48 object-cover rounded-t-lg mb-4"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{post.description}</p>
        <button className="transition-colors text-[#E4AC70] hover:text-[#C66600] flex items-center gap-0.5">
          Know More <ChevronRight className="w-4 h-4 mt-0.5" />
        </button>
      </div>
    </div>
  );
};

export default BlogCard;
