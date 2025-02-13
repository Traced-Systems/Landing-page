
import React from 'react';
import { BlogPost } from '@/types/blog';

interface BlogCardProps {
  post: BlogPost;
  onClick: (post: BlogPost) => void;
}

const BlogCard = ({ post, onClick }: BlogCardProps) => {
  return (
    <div 
      onClick={() => onClick(post)}
      className="bg-white rounded-xl p-6 shadow-[4px_4px_10px_0px_rgba(0,0,0,0.1),-4px_-4px_10px_0px_rgba(255,255,255,0.9)] hover:shadow-[6px_6px_12px_0px_rgba(0,0,0,0.15),-6px_-6px_12px_0px_rgba(255,255,255,0.95)] transition-all duration-300 cursor-pointer"
    >
      <img 
        src={post.image}
        alt={post.title}
        className="w-full h-48 object-cover rounded-lg mb-4"
      />
      <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
      <p className="text-gray-600 mb-4 line-clamp-3">{post.description}</p>
      <button className="text-blue-500 hover:text-blue-600 transition-colors">
        Read More →
      </button>
    </div>
  );
};

export default BlogCard;
