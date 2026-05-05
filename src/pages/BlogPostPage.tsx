import React, { useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { blogPosts } from "@/data/blogPosts";
import BlogPostContent from "@/components/blog/BlogPostContent";
import IndustrySheetCTA from "@/components/shared/IndustrySheetCTA";
import { ArrowLeft, ChevronRight, Home } from "lucide-react";

const BlogPostPage = () => {
    const { slug } = useParams<{ slug: string }>();
    const navigate = useNavigate();

    const blogPost = blogPosts.find((post) => post.slug === slug);
    const formattedDate = new Date(blogPost.date).toLocaleDateString("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric",
    });
    const relatedPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);

    // Scroll to top whenever the slug changes
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [slug]);


    // 404 State 
    if (!blogPost) {
        return (
            <div className="min-h-screen bg-[#F7F7F5] flex flex-col items-center justify-center px-6 py-24">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">Post not found</h1>
                <p className="text-gray-500 mb-8 text-center max-w-md">
                    The blog post you're looking for doesn't exist or may have been moved.
                </p>
                <button
                    onClick={() => navigate("/blog")}
                    className="inline-flex items-center gap-2 bg-[#E4AC70] hover:bg-[#C66600] text-white font-medium px-6 py-3 rounded-lg transition-colors"
                >
                    <ArrowLeft className="w-4 h-4" /> Back to Blog
                </button>
            </div>
        );
    }


    return (
        <div className="min-h-screen bg-[#F7F7F5]">
            {/* ── Breadcrumb ── */}
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
                    <Link to="/blog" className="hover:text-[#C66600] transition-colors">
                        Blog
                    </Link>
                    <ChevronRight className="w-3.5 h-3.5 shrink-0" />
                    <span className="text-gray-700 truncate max-w-[200px] sm:max-w-xs">
                        {blogPost.title}
                    </span>
                </nav>
            </div>


     {/* Article */}
            <article className="max-w-4xl mx-auto px-6 pb-16">
                <p className="text-sm text-gray-400 mb-6">{formattedDate}</p>
                <BlogPostContent post={blogPost} />
            </article>

     {/* CTA Banner */}
            <IndustrySheetCTA
                title="Want to Learn More About Our Solutions?"
                description="Discover how our digital product passport can transform your business operations and help you meet sustainability goals."
            />

     {/* Related posts */}
            {relatedPosts.length > 0 && (
                <section className="max-w-5xl mx-auto px-6 py-16">
                    <h2 className="text-2xl font-bold text-gray-800 mb-8">
                        More from the blog
                    </h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {relatedPosts.map((post) => (
                            <Link
                                key={post.slug}
                                to={`/blog/${post.slug}`}
                                className="bg-white rounded-xl shadow-[4px_4px_10px_0px_rgba(0,0,0,0.05),-4px_-4px_10px_0px_rgba(255,255,255,0.9)] hover:shadow-[6px_6px_12px_0px_rgba(0,0,0,0.1),-6px_-6px_12px_0px_rgba(255,255,255,0.95)] transition-all duration-300 overflow-hidden group"
                            >
                                <div className="aspect-[430/243] w-full overflow-hidden">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                                <div className="p-5">
                                    <p className="text-xs text-gray-400 mb-2">
                                        {new Date(post.date).toLocaleDateString("en-GB", {
                                            day: "numeric",
                                            month: "short",
                                            year: "numeric",
                                        })}
                                    </p>
                                    <h3 className="text-sm font-semibold text-gray-800 line-clamp-2 mb-3">
                                        {post.title}
                                    </h3>
                                    <span className="text-[#E4AC70] group-hover:text-[#C66600] text-sm font-medium inline-flex items-center gap-0.5 transition-colors">
                                        Read more <ChevronRight className="w-3.5 h-3.5 mt-0.5" />
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>
            )}
        </div>
    );
};

export default BlogPostPage;