import React from "react";
import { Twitter, Linkedin } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer
      className="relative text-[#f2f1ee] py-20 w-full border-none m-0 
             bg-[#173A44] md:bg-[#173A44] lg:bg-[#F2F1EE] lg:pt-[11
             %] px-12 md:px-16 lg:px-[220px]"
    >
      {/* Background Image - Only Visible on Large Screens */}
      <div
        className="absolute inset-0 hidden lg:block"
        style={{
          backgroundImage: "url('/lovable-uploads/BGfooter.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.9, // Ensures background doesn’t overpower content
        }}
      ></div>

      {/* Content Wrapper (Ensures Text is Visible) */}
      <div className="container mx-auto px-4 relative z-10 lg:mt-12">
        {/* First Section: "Traced" on the left, Socials on the right */}
        <div className="flex justify-between items-center">
          {/* Left - "Traced" */}
          <h1 className="text-5xl font-bold text-[#f2f1ee] relative">Traced</h1>

          {/* Right - "Follow us" and Social Icons */}
          <div className="flex items-center space-x-4 relative">
            <span className="text-lg text-[#f2f1ee] ">Follow us</span>
            <Twitter className="w-6 h-6 cursor-pointer text-[#f2f1ee] " />
            <Linkedin className="w-6 h-6 cursor-pointer text-[#f2f1ee] " />
          </div>
        </div>

        {/* Second Section: Thin Separator Line */}
        <Separator className="my-8 bg-[#f2f1ee]  w-full h-[1px] relative" />

        {/* Third Section: Footer Text and Copyright */}
        <div className="flex justify-between items-center relative">
          {/* Left - Description Text */}
          <p className="text-base text-left text-[#f2f1ee]">
            Traced Systems powered by Chromia is transforming industries with
            blockchain-based digital product passports.
          </p>

          {/* Right - Copyright */}
          <p className="text-xs text-right text-[#f2f1ee]">
            © 2025 Traced System. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
