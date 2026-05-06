import React from 'react';
import { useNavigate } from 'react-router-dom';
import BlogSection from './shared/BlogSection';
import { blogPosts as allBlogPosts } from '@/data/blogPosts';

const Blog = () => {
  const navigate = useNavigate();

  // ✅ Robust sort: skub poster uden (gyldig) dato nederst
  const posts = [...allBlogPosts].sort((a, b) => {
    const da = a.date ? Date.parse(a.date) : Number.NaN;
    const db = b.date ? Date.parse(b.date) : Number.NaN;

    const va = Number.isNaN(da) ? -Infinity : da;
    const vb = Number.isNaN(db) ? -Infinity : db;

    return vb - va; // nyeste først
  });

  const handlePostClick = (index: number) => {
    const clickedPost = posts[index];
    if (clickedPost && clickedPost.slug) {
      navigate(`/blog/${clickedPost.slug}`);
    }
  };

  return (
    <>
      <BlogSection
        title="Explore Our Blog"
        subtitle="Explore expert ideas and stories from our team."
        posts={posts}
        onPostClick={handlePostClick}
        carouselView={true}
      />
    </>
  );
};

export default Blog;
