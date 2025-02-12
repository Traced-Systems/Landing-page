
import React, { useState } from 'react';
import BlogSheet from './BlogSheet';
import BlogSection from './shared/BlogSection';

const Blog = () => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  
  const blogPosts = [
    {
      title: "The Blueprint for a Successful Blockchain Partner Ecosystem",
      description: "In this edition of the Greatest Minds in Partnerships series, David Dolhomut, Head of Partnerships & Business Development at Traced Systems, shares his insights on building a thriving blockchain partner ecosystem. From overcoming industry challenges and onboarding the right partners to balancing traditional enterprises with Web3-native collaborations, David provides a blueprint for successful blockchain partnerships. Learn how to navigate regulatory landscapes, drive adoption through strategic alliances, and leverage technology like PRM platforms to scale blockchain ecosystems effectively.",
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
