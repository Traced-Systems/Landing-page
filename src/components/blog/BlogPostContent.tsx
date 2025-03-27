import React from "react";
import { BlogPost } from "@/types/blog";
import BlogPostAuthor from "./BlogPostAuthor";
import BlogPostImage from "./BlogPostImage";
import BlogPostSection from "./BlogPostSection";
import BlogPostFAQ from "./BlogPostFAQ";

interface BlogPostContentProps {
  post: BlogPost;
}

const BlogPostContent = ({ post }: BlogPostContentProps) => {
  if (post.fullContent) {
    return (
      <>
        <div className="flex items-center gap-2 mb-4">
          <BlogPostAuthor postTitle={post.title} />
        </div>

        <div className="mb-4">
          <h1 className="text-4xl font-bold text-primary mb-3">
            {post.fullContent.title}
          </h1>
        </div>

        <div className="flex justify-center mt-12 mb-6">
          <BlogPostImage title={post.title} image={post.image} />
        </div>

        <div className="prose max-w-none mb-8">
          <p className="text-gray-600 mb-4 text-lg leading-relaxed">
            {post.fullContent.introduction}
          </p>

          {post.fullContent.sections.map((section, index) => (
            <BlogPostSection
              key={index}
              heading={section.heading}
              content={section.content}
              quote={section.quote}
            />
          ))}

          {post.fullContent.faq && (
            <BlogPostFAQ
              title={post.fullContent.faq.title}
              subtitle={post.fullContent.faq.subtitle}
              questions={post.fullContent.faq.questions}
            />
          )}
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="mb-4">
          <h1 className="text-4xl font-bold text-primary mb-3">{post.title}</h1>
        </div>

        <img
          src={post.image}
          alt={post.title}
          className="w-full h-[400px] object-cover rounded-lg mb-5"
        />

        <div className="prose max-w-none mb-8">
          <p className="text-gray-600 mb-3">{post.description}</p>
        </div>
      </>
    );
  }
};

export default BlogPostContent;
