import React, { useState, useEffect } from "react";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import SheetBackButton from "./shared/SheetBackButton";
import AboutCTA from "./shared/AboutCTA";
import SheetBackgroundSection from "./shared/SheetBackgroundSection";
import CareerPostSubSheet from "./CareerPostSubSheet";
import BlogCard from "./blog/BlogCard";
import { jobPosts } from "@/data/jobPosts";
import { BlogPost } from "@/types/blog";
import nojobs   from "/public/lovable-uploads/nojobs.png"

interface CareerSheetProps {
  isOpen: boolean;
  onClose: () => void;
  initialPost?: BlogPost | null;
}

const CareerSheet = ({ isOpen, onClose, initialPost }: CareerSheetProps) => {
  const [activePost, setActivePost] = useState<BlogPost | null>(null);

  useEffect(() => {
    if (initialPost) {
      setActivePost(initialPost);
    }
  }, [initialPost]);

  const handlePostClick = (post: BlogPost) => {
    setActivePost(post);
  };

  const handleSubsheetClose = () => {
    setActivePost(null);
  };

  function CareerSheetBody(){
    if(jobPosts.length > 0  ){
      return <div className="px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {jobPosts.map((post, index) => (
            <BlogCard key={index} post={post} onClick={handlePostClick} />
          ))}
        </div>         
      </div> ;

    
    }else{
      return  <div>
                <div className="App">
                  <img src={nojobs} />
                </div>
              </div> ;
        
    }
  }

  return (
    <>
      <Sheet open={isOpen} onOpenChange={onClose}>
        <SheetContent
          side="right"
          className="!w-full sm:!w-[75vw] 2xl:!w-[66vw] sm:!max-w-[75vw] 2xl:!max-w-[66vw] overflow-y-auto bg-[#F7F7F5] shadow-xl p-0"
        >
          <SheetBackButton onBack={onClose} />

          <div className="h-full flex flex-col">
            <SheetBackgroundSection>
              <div className="pt-24 px-8">
                <h1 className="text-3xl font-bold text-center mb-8">Join us!</h1>

                <div className="text-center mb-12">
                  <p className="text-gray-600">
                    Where passion meets purpose. Join our global mission.
                  </p>
                </div>
              </div>
            </SheetBackgroundSection>

            {/* List of JOB POSTS */}
            {/* TODO: set an if to say if the there are no jobs, say it and show a nice svg  per riempire lo spazio */}
            <CareerSheetBody />
            <AboutCTA onClose={onClose} />
          </div>
        </SheetContent>
      </Sheet>

      {activePost && (
        <CareerPostSubSheet
          isOpen={!!activePost}
          onClose={handleSubsheetClose}
          post={activePost}
        />
      )}
    </>
  );
};

export default CareerSheet;


