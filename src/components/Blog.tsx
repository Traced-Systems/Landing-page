
import React, { useState } from 'react';
import BlogSheet from './BlogSheet';
import BlogSection from './shared/BlogSection';

const Blog = () => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  
  const blogPosts = [
    {
      title: "Traced Systems and Doors3: Pioneering the Future of Digital Product Passports",
      description: "Sustainability, transparency, and innovation are becoming essential in today's interconnected world. At Traced Systems, we are committed to driving change through blockchain-powered solutions that promote trust and accountability.",
      image: "/lovable-uploads/ecdba3ef-2ae6-4fa3-96d6-e01f4e951b66.png"
    },
    {
      title: "The Blueprint for a Successful Blockchain Partner Ecosystem",
      description: "In this edition of the Greatest Minds in Partnerships series, David Dolhomut, Head of Partnerships & Business Development at Traced Systems, shares his insights on building a thriving blockchain partner ecosystem. From overcoming industry challenges and onboarding the right partners to balancing traditional enterprises with Web3-native collaborations, David provides a blueprint for successful blockchain partnerships...",
      image: "/lovable-uploads/c0e03054-5e46-4abd-ab45-c5a523b99799.png"
    }
  ];

  return (
    <>
      <BlogSection
        title="Explore Our Blog"
        subtitle="Explore expert ideas and stories from our team."
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
