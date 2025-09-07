import React, { useState } from 'react';
import BlogSheet from './BlogSheet';
import BlogPostSubsheet from './BlogPostSubsheet';
import BlogSection from './shared/BlogSection';
import { blogPosts as allBlogPosts } from '@/data/blogPosts';
import { BlogPost } from '@/types/blog';

const Blog = () => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [showPostDirectly, setShowPostDirectly] = useState(false);

  // ✅ Robust sort: skub poster uden (gyldig) dato nederst
  const posts = [...allBlogPosts].sort((a, b) => {
    const da = a.date ? Date.parse(a.date) : Number.NaN;
    const db = b.date ? Date.parse(b.date) : Number.NaN;

    const va = Number.isNaN(da) ? -Infinity : da;
    const vb = Number.isNaN(db) ? -Infinity : db;

    return vb - va; // nyeste først
  });

  const handlePostClick = (index: number) => {
    // Brug de sorterede poster for korrekt mapping
    const clickedPost = posts[index];
    if (clickedPost) {
      setSelectedPost(clickedPost);
      setShowPostDirectly(true);
    }
  };

  const handleClose = () => {
    setIsSheetOpen(false);
    setSelectedPost(null);
    setShowPostDirectly(false);
  };

  const handleShowMoreClick = () => {
    setShowPostDirectly(false);
    setIsSheetOpen(true);
  };

  return (
    <>
      <BlogSection
        title="Explore Our Blog"
        subtitle="Explore expert ideas and stories from our team."
        posts={posts}                // 👈 passer de sorterede posts
        showMoreButton={true}
        onShowMore={handleShowMoreClick}
        onPostClick={handlePostClick} // 👈 index matcher nu de sorterede posts
        carouselView={true}
      />

      <BlogSheet 
        isOpen={isSheetOpen}
        onClose={handleClose}
        initialPost={null}
      />

      {showPostDirectly && selectedPost && (
        <BlogPostSubsheet 
          isOpen={true}
          onClose={handleClose}
          post={selectedPost}
        />
      )}
    </>
  );
};

export default Blog;
