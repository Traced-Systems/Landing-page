
import React from "react";

interface BlogPostImageProps {
  title: string;
  image: string;
}

const BlogPostImage = ({ title, image }: BlogPostImageProps) => {
  // Special case for a specific blog post
  if (title === "Traced Systems and Doors3: Pioneering the Future of Digital Product Passports") {
    return (
      <img
        src="/lovable-uploads/bef43ea2-5eea-4e47-867d-5dd43437a0fb.png"
        alt={title}
        className="w-[70vw] lg:w-[45vw] object-cover rounded-lg mb-5"
      />
    );
  }
  
  // Default image display
  return (
    <img
      src={image}
      alt={title}
      className="w-[70vw] lg:w-[45vw] object-cover rounded-lg mb-5"
    />
  );
};

export default BlogPostImage;
