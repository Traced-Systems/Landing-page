import React from "react";
import { Twitter, Linkedin } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer
      className="relative text-[#f2f1ee] py-20 w-full border-none m-0 
             bg-[#173A44] md:bg-[#173A44] lg:bg-[#F2F1EE] lg:pt-[14%] px-12 md:px-16 lg:px-220"
    >
      {/* Background Image - Only Visible on Large Screens */}
      <div
        className="absolute inset-0 hidden lg:block"
        style={{
          backgroundImage: "url('/lovable-uploads/BGfooter.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      {/* Content (Ensures it's above the background) */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col space-y-8 lg:space-y-0 lg:flex-row lg:items-start lg:justify-between">
          {/* Left Section */}
          <div className="lg:w-1/3 space-y-4">
            <h2 className="text-3xl font-light">Traced</h2>
            <p className="text-sm leading-relaxed">
              Traced Systems powered by Chromia is transforming industries with
              blockchain-based digital product passports.
            </p>
          </div>

          {/* Center Section */}
          <div className="text-center lg:w-1/3 flex flex-col items-center">
            <Separator className="w-full mb-8 bg-white/20" />
            <p className="text-sm mt-auto">
              © 2025 Traced System. All rights reserved.
            </p>
          </div>

          {/* Right Section */}
          <div className="lg:w-1/3 flex flex-col lg:items-end space-y-4">
            <div className="space-y-2">
              <p className="text-sm mb-2">Follow Us</p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="hover:text-[#f2f1ee]/80 transition-colors"
                  aria-label="Follow us on Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="hover:text-[#f2f1ee]/80 transition-colors"
                  aria-label="Follow us on LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
            <a
              href="#"
              className="text-sm hover:text-[#f2f1ee]/80 transition-colors"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
