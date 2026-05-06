import React, { useState } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";

interface BlogPost {
  title: string;
  description: string;
  image: string;
  date?: string;
  author?: string;
  post?: string;
  slug?: string;
}

interface BlogSectionProps {
  title: string;
  subtitle: string;
  posts: BlogPost[];
  onPostClick?: (index: number) => void;
  carouselView?: boolean;
}

const BlogSection = ({
  title,
  subtitle,
  posts,
  onPostClick,
  carouselView = false,
}: BlogSectionProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // For carousel view, we only show 3 posts at a time
  const visiblePosts = carouselView
    ? posts.slice(currentSlide, currentSlide + 3)
    : posts;

  const totalSlides = Math.max(0, posts.length - 3 + 1);

  const nextSlide = () => {
    setCurrentSlide((prev) => Math.min(prev + 1, posts.length - 3));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  };



  return (
    <section className="pt-32 pb-28 bg-white">
      <div className="container mx-auto px-12 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-medium mb-4 text-[#173A44]">{title}</h2>
          <p className="text-gray-700">{subtitle}</p>
        </div>

        {carouselView && posts.length > 3 && (
          <div className="flex justify-end gap-2 mb-6">
            <button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className="p-2 rounded-full border border-gray-300 disabled:opacity-50"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5 text-[#173A44]" />
            </button>
            <button
              onClick={nextSlide}
              disabled={currentSlide >= totalSlides - 1}
              className="p-2 rounded-full border border-gray-300 disabled:opacity-50"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5 text-[#173A44]" />
            </button>
          </div>
        )}

        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {visiblePosts.map((post, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              onClick={() => onPostClick?.(carouselView ? index + currentSlide : index)}
            >
              <div className="aspect-[430/243] w-full">
                <img
                  src={post.image}
                  alt={post.title}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                {post.date && (
                  <p className="text-xs text-gray-400 mb-2 flex items-center gap-1">

                    {new Date(post.date).toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </p>
                )}
                <h3 className="text-xl font-semibold mb-3 text-[#173A44]">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.description}
                </p>
                <button className="transition-colors text-[#E4AC70] hover:text-[#C66600] flex items-center gap-0.5">
                  Read more <ChevronRight className="w-4 h-4 mt-0.5" />
                </button>
              </div>
            </div>
          ))}
        </div>


        <div className="flex justify-center">
          <Link
            to="/blog" target="_top"

            className="rounded-full border-2 border-[#E4AC70] bg-[#Ffffff] text-[#143A44] flex items-center gap-2 px-7 py-4 hover:bg-[#F2F1EE]"

          >
            See all posts <ChevronRight className="w-5 h-5 text-[#143A44]" />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default BlogSection;
