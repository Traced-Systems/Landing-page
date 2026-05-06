import React from 'react'
import { blogPosts } from "@/data/blogPosts";
import BlogCard from "@/components/blog/BlogCard";
import { BlogPost } from "@/types/blog";
import TitleBanner from '@/components/shared/TitleBanner';

const Blog = () => {
  return (
    <div className='container mx-auto mt-20'>
      <TitleBanner
        title="Blog"
        description="Insights and updates from our team about digital product passports, sustainability, and innovation."
      />
      <div

        className="!w-full sm:!w-[75vw] 2xl:!w-[66vw] sm:!max-w-[75vw] 2xl:!max-w-[66vw] overflow-y-auto bg-[#F7F7F5] shadow-xl p-0"
      >

        <div className="h-full flex flex-col">

          <div className="pt-24 px-8">


          </div>


          <div className="px-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {blogPosts.map((post, index) => (
                <BlogCard key={index} post={post} />
              ))}
            </div>
          </div>

        </div>
      </div>




    </div>
  )
}

export default Blog