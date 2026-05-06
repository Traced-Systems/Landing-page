
import React from "react";
import { useNavigate } from "react-router-dom";
import { BlogPost } from "@/types/blog";
import { ChevronRight } from "lucide-react";

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard = ({ post }: BlogCardProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/blog/${post.slug}`);
  };

  return (
    <div
      onClick={handleClick}
      className="bg-white rounded-xl shadow-[4px_4px_10px_0px_rgba(0,0,0,0.05),-4px_-4px_10px_0px_rgba(255,255,255,0.9)] hover:shadow-[6px_6px_12px_0px_rgba(0,0,0,0.1),-6px_-6px_12px_0px_rgba(255,255,255,0.95)] transition-all duration-300 cursor-pointer overflow-hidden group"
    >
      <div className="aspect-[430/243] w-full overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <p className="text-xs text-gray-400 mb-2">
          {new Date(post.date).toLocaleDateString("en-GB", {
            day: "numeric",
            month: "short",
            year: "numeric",
          })}
        </p>
        <h3 className="text-base font-semibold mb-2 line-clamp-2">{post.title}</h3>
        <p className="text-gray-500 mb-4 line-clamp-3 text-sm">{post.description}</p>
        <span className="transition-colors text-[#E4AC70] group-hover:text-[#C66600] flex items-center gap-0.5 text-sm font-medium">
          Read More<ChevronRight className="w-4 h-4 mt-0.5" />
        </span>
      </div>
    </div>
  );
};

export default BlogCard;
