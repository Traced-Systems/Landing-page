
import React from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  title: string;
  subtitle: string;
  questions: FAQItem[];
}

const BlogPostFAQ = ({ title, subtitle, questions }: FAQSectionProps) => {
  return (
    <section className="bg-gray-50 rounded-lg p-5 mb-8">
      <h2 className="text-2xl font-bold text-primary mb-2">
        {title}
      </h2>
      <p className="text-gray-600 mb-4">
        {subtitle}
      </p>
      <div className="space-y-3">
        {questions.map((faq, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg shadow-sm"
          >
            <h3 className="font-semibold text-lg mb-1.5 text-primary">
              {faq.question}
            </h3>
            <p className="text-gray-600">{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogPostFAQ;
