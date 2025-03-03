
import React from "react";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import SheetBackButton from "./shared/SheetBackButton";
import IndustrySheetCTA from "./shared/IndustrySheetCTA";
import { BlogPost } from "@/types/blog";

interface BlogPostSubsheetProps {
  isOpen: boolean;
  onClose: () => void;
  post: BlogPost;
}

const BlogPostSubsheet = ({ isOpen, onClose, post }: BlogPostSubsheetProps) => {
  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent
        side="right"
        className="!w-full sm:!w-[75vw] 2xl:!w-[66vw] sm:!max-w-[75vw] 2xl:!max-w-[66vw] overflow-y-auto bg-[#F7F7F5] border-l shadow-xl p-0 z-[995]"
      >
        <SheetBackButton onBack={onClose} />

        <div className="h-full flex flex-col">
          <div className="pt-24 px-8">
            <div className="max-w-4xl mx-auto">
              {post.fullContent ? (
                <>
                  <div className="flex items-center gap-2 mb-6">
                    {post.title ===
                    "The Blueprint for a Successful Blockchain Partner Ecosystem" ? (
                      <>
                        <img
                          src="/lovable-uploads/0d25c486-df3a-4a98-b070-691da893d470.png"
                          alt="Kiflo"
                          className="h-8"
                        />
                        <span className="text-gray-600">
                          Written by{" "}
                          <a
                            href="https://www.kiflo.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:text-blue-600"
                          >
                            Kiflo
                          </a>
                        </span>
                      </>
                    ) : (
                      <>
                        <img
                          src="/lovable-uploads/a163e1df-6783-427e-940a-22d1f8c80d11.png"
                          alt="Traced Systems"
                          className="w-12 h-12"
                        />
                        <span className="text-gray-600">
                          Written by Traced Systems x{" "}
                          <a
                            href="https://trace4value.se/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:text-blue-600"
                          >
                            TRACE4VALUE + SwePass
                          </a>
                        </span>
                      </>
                    )}
                  </div>

                  <div className="mb-8">
                    <h1 className="text-4xl font-bold text-primary mb-4">
                      {post.fullContent.title}
                    </h1>
                  </div>
                  <div className="flex justify-center">
                    {post.title === "Traced Systems and Doors3: Pioneering the Future of Digital Product Passports" ? (
                      <img
                        src="/lovable-uploads/bef43ea2-5eea-4e47-867d-5dd43437a0fb.png"
                        alt={post.title}
                        className="w-[70vw] lg:w-[45vw] object-cover rounded-lg mb-8"
                      />
                    ) : (
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-[70vw] lg:w-[45vw] object-cover rounded-lg mb-8"
                      />
                    )}
                  </div>

                  <div className="prose max-w-none mb-12">
                    <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                      {post.fullContent.introduction}
                    </p>

                    {post.fullContent.sections.map((section, index) => (
                      <section key={index} className="mb-12">
                        <h2 className="text-2xl font-bold text-primary mb-6">
                          {section.heading}
                        </h2>
                        <div className="text-gray-600 leading-relaxed whitespace-pre-line">
                          {section.content}
                        </div>
                        {section.quote && (
                          <blockquote className="border-l-4 border-blue-500 pl-4 my-6 italic text-gray-700">
                            {section.quote}
                          </blockquote>
                        )}
                      </section>
                    ))}

                    {post.fullContent.faq && (
                      <section className="bg-gray-50 rounded-lg p-8 mb-12">
                        <h2 className="text-2xl font-bold text-primary mb-2">
                          {post.fullContent.faq.title}
                        </h2>
                        <p className="text-gray-600 mb-8">
                          {post.fullContent.faq.subtitle}
                        </p>
                        <div className="space-y-6">
                          {post.fullContent.faq.questions.map((faq, index) => (
                            <div
                              key={index}
                              className="bg-white p-6 rounded-lg shadow-sm"
                            >
                              <h3 className="font-semibold text-lg mb-2 text-primary">
                                {faq.question}
                              </h3>
                              <p className="text-gray-600">{faq.answer}</p>
                            </div>
                          ))}
                        </div>
                      </section>
                    )}
                  </div>
                </>
              ) : (
                <>
                  <div className="mb-8">
                    <h1 className="text-4xl font-bold text-primary mb-4">
                      {post.title}
                    </h1>
                  </div>

                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-[400px] object-cover rounded-lg mb-8"
                  />

                  <div className="prose max-w-none mb-12">
                    <p className="text-gray-600 mb-4">{post.description}</p>
                  </div>
                </>
              )}
            </div>
          </div>

          <div className="mt-auto w-full">
            <IndustrySheetCTA
              title="Want to Learn More About Our Solutions?"
              description="Discover how our digital product passport can transform your business operations and help you meet sustainability goals."
            />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default BlogPostSubsheet;
