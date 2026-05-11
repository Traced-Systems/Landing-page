
import React from "react";
import Button1 from "./ui/button-1";
import { useNavigate, Link } from "react-router-dom";




const CTA = () => {
  const navigate = useNavigate();
  return (
    <section className="relative bg-[#f2f1ee] pt-20 pb-12 xl:pb-2 lg:pb-2 md:pb-20 sm:pb-12">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto flex flex-col items-center text-center space-y-8">
          <h3 className="text-3xl font-medium text-[#1E293B]">
            Trace Your Impact, Reward Your Actions, Sustain Our Planet.
          </h3>
          <Link
            to="/contact-us" target="_top"
            className="rounded-full border-2 border-[#E4AC70] bg-[#F2F1EE] text-[#143A44] flex items-center gap-2 px-9 py-4 hover:bg-[#EEEADF]"
          >
            Get in touch
          </Link> 
        </div>
      </div>
    </section>
  );
}  

export default CTA;
