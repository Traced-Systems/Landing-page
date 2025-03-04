
import React from "react";

interface SectionProps {
  heading: string;
  content: string;
  quote?: string;
}

const BlogPostSection = ({ heading, content, quote }: SectionProps) => {
  return (
    <section className="mb-6">
      <h2 className="text-2xl font-bold text-primary mb-3">
        {heading}
      </h2>
      <div className="text-gray-600 leading-relaxed whitespace-pre-line space-y-3">
        {content}
      </div>
      {quote && (
        <blockquote className="border-l-4 border-blue-500 pl-4 my-4 italic text-gray-700">
          {quote}
        </blockquote>
      )}
    </section>
  );
};

export default BlogPostSection;
