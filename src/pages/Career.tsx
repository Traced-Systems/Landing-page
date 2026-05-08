import React, { useEffect, useState } from "react";
import { Separator } from "@/components/ui/separator";
import AboutCTA from "@/components/shared/AboutCTA";
import { jobPosts } from "@/data/jobPosts";
import { BlogPost } from "@/types/blog";
import BlogCard from "@/components/blog/BlogCard";
import nojobs from "/lovable-uploads/nojobs.png"

const Career = () => {




    function CareerSheetBody() {
        if (jobPosts.length > 0) {
            return <div className="px-8">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {jobPosts.map((post, index) => (
                        <BlogCard key={index} post={post} basePath="/career" />
                    ))}
                </div>
            </div>;


        } else {
            return <div>
                <div className="App">
                    <img src={nojobs} />
                </div>
            </div>;

        }
    }

    return (
        
            <div className="container mx-auto" >
                <div className="flex flex-col overflow-y-auto">
                    <div className="h-full flex flex-col">
                        <div className="pt-24">
                            <div className="pt-24 px-8">
                                <h1 className="text-3xl font-bold text-center mb-8">Join us!</h1>

                                <div className="text-center mb-12">
                                    <p className="text-gray-600">
                                        Where passion meets purpose. Join our global mission.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* List of JOB POSTS */}
                        {/* TODO: set an if to say if the there are no jobs, say it and show a nice svg  per riempire lo spazio */}
                        <CareerSheetBody />
                        <AboutCTA />
                    </div>
                </div>
            </div>
    );
};

export default Career;