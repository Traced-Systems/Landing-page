
import React from "react";

interface SectionProps {
  heading: string;
  content: string;
  quote?: string;
}

const BlogPostSection = ({ heading, content, quote }: SectionProps) => {
  // Function to process content and format it with bold text before colons
  const formatContent = (text: string) => {
    // Split the content by line breaks
    const lines = text.split('\n');
    
    // Process each line to make text before colon bold
    const processedLines = lines.map(line => {
      const colonIndex = line.indexOf(':');
      if (colonIndex > 0) {
        const beforeColon = line.substring(0, colonIndex);
        const afterColon = line.substring(colonIndex);
        return `<strong>${beforeColon}</strong>${afterColon}`;
      }
      return line;
    });
    
    // Join the lines back together with line breaks
    return processedLines.join('\n');
  };

  return (
    <section className="mb-6">
      <h2 className="text-2xl font-bold text-primary mb-3">
        {heading}
      </h2>
      <div 
        className="text-gray-600 leading-relaxed whitespace-pre-line space-y-3"
        dangerouslySetInnerHTML={{ __html: formatContent(content) }}
      />
      {quote && (
        <blockquote className="border-l-4 border-blue-500 pl-4 my-4 italic text-gray-700">
          {quote}
        </blockquote>
      )}
    </section>
  );
};

export default BlogPostSection;
