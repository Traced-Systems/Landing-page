
import React from 'react';
import { useParams } from 'react-router-dom';

const BlogPost = () => {
  const { slug } = useParams();

  return (
    <div className="min-h-screen pt-16">
      <h1>Blog Post: {slug}</h1>
    </div>
  );
};

export default BlogPost;
