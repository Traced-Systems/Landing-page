
import React from "react";

interface BlogPostImageProps {
  title: string;
  image: string;
}

const BlogPostImage = ({ title, image }: BlogPostImageProps) => {

  
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
