
import React, { useState } from 'react';
import BlogSheet from './BlogSheet';
import BlogSection from './shared/BlogSection';

const Blog = () => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  
  const blogPosts = [
    {
      title: "All Steps to follow and all angles need",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus.",
      image: "/lovable-uploads/pilot.png"
    },
    {
      title: "All Steps to follow and all angles need",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus.",
      image: "/lovable-uploads/pilot.png"
    },
    {
      title: "All Steps to follow and all angles need",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus.",
      image: "/lovable-uploads/pilot.png"
    }
  ];

  return (
    <>
      <BlogSection
        title="Explore Our Blog"
        subtitle="Experience insights from our digital product passport team"
        posts={blogPosts}
        showMoreButton={true}
        onShowMore={() => setIsSheetOpen(true)}
      />

      <BlogSheet 
        isOpen={isSheetOpen}
        onClose={() => setIsSheetOpen(false)}
      />
    </>
  );
};

export default Blog;
