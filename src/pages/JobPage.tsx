import React, { useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { jobPosts } from "@/data/jobPosts";
import BlogPostContent from "@/components/blog/BlogPostContent";
import AboutCTA from "@/components/shared/AboutCTA";
import { ArrowLeft, ChevronRight, Home } from "lucide-react";

const JobPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const post = jobPosts.find((job) => job.slug === slug);

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
    }, 10);
  }, [slug]);

  if (!post) {
    return (
      <div className="min-h-screen bg-[#F7F7F5] flex flex-col items-center justify-center px-6 py-24">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Job not found</h1>
        <p className="text-gray-500 mb-8 text-center max-w-md">
          The job posting you're looking for doesn't exist or may have been removed.
        </p>
        <button
          onClick={() => navigate("/career")}
          className="inline-flex items-center gap-2 bg-[#E4AC70] hover:bg-[#C66600] text-white font-medium px-6 py-3 rounded-lg transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Career
        </button>
      </div>
    );
  }

  const formattedDate = new Date(post.date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="min-h-screen bg-[#F7F7F5]">
      <div className="max-w-4xl mx-auto px-6 pt-28 pb-4">
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-1.5 text-sm text-gray-500"
        >
          <Link
            to="/"
            className="hover:text-[#C66600] transition-colors flex items-center gap-1"
          >
            <Home className="w-3.5 h-3.5" />
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 shrink-0" />
          <Link to="/career" className="hover:text-[#C66600] transition-colors">
            Career
          </Link>
          <ChevronRight className="w-3.5 h-3.5 shrink-0" />
          <span className="text-gray-700 truncate max-w-[200px] sm:max-w-xs">
            {post.title}
          </span>
        </nav>
      </div>

      <article className="max-w-4xl mx-auto px-6 pb-16">
        <p className="text-sm text-gray-400 mb-6">{formattedDate}</p>
        <BlogPostContent post={post} />
      </article>

      <AboutCTA />
    </div>
  );
};

export default JobPage;