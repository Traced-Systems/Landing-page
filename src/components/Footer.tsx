import React, { useState } from "react";
import { Twitter, Linkedin } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import PrivacyPolicySheet from "./PrivacyPolicySheet";

const Footer = () => {
  const [isPrivacyPolicyOpen, setIsPrivacyPolicyOpen] = useState(false);

  return (
    <footer
      className="relative text-[#f2f1ee] pt-28 w-full border-none m-0 
             bg-[#173A44] md:bg-[#173A44] lg:bg-[#F2F1EE] lg:pt-[11
             %] px-12 md:px-16 lg:px-32"
    >
      {/* Background Image - Only Visible on Large Screens */}
      <div
        className="absolute inset-0 hidden lg:block"
        style={{
          backgroundImage: "url('/lovable-uploads/BGfooter.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.9,
        }}
      ></div>

      <div className="container mx-auto px-4 relative z-10 lg:mt-12 pt-8 flex flex-col justify-between h-full min-h-[300px]">
        <div className="z-10">
          <div className="flex justify-between items-center pb-1">
            <img
              src="/lovable-uploads/TracedLightLogo.svg"
              alt="Traced Logo"
              className="h-[29.45px] w-[120px] min-w-[120px] min-h-[29.45px] object-contain"
            />

            <div className="flex items-center justify-center space-x-4 self-end h-2">
              <span className="text-sm text-[#EBE6D5]">Follow us</span>

              <a
                href="https://x.com/TracedSystems"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/lovable-uploads/TwitterLogo.svg"
                  alt="Twitter Logo"
                  className="w-6 h-6 cursor-pointer"
                />
              </a>

              <a
                href="https://www.linkedin.com/company/traced-systems"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/lovable-uploads/LindkinLogo.svg"
                  alt="LinkedIn Logo"
                  className="w-6 h-6 cursor-pointer"
                />
              </a>

              <a
                href="https://bsky.app/profile/tracedsystems.bsky.social"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/lovable-uploads/BlueskyLogo.svg"
                  alt="Twitter Logo"
                  className="w-5 h-5 cursor-pointer"
                />
              </a>
            </div>
          </div>

          <Separator className="my-6 bg-[#EBE6D5] h-[1px] relative" />

          <div className="flex flex-col md:flex-row justify-between items-start md:items-start relative text-[#EBE6D5] gap-2 md:gap-0">
            <div className="mr-">
              <p className="text-sm text-left">
                Traced Systems powered by Chromia is transforming industries
                with blockchain-based digital product passports.
              </p>
            </div>

            <div className="self-start md:self-auto md:flex md:justify-center">
              <button
                onClick={() => setIsPrivacyPolicyOpen(true)}
                className="text-sm hover:text-[#FDFCF9] whitespace-nowrap ml-auto"
              >
                Privacy policy
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <p className="text-xs text-right text-[#EBE6D5] mb-2 ">
            © 2025 Traced System. All rights reserved.
          </p>
        </div>
      </div>

      <PrivacyPolicySheet
        isOpen={isPrivacyPolicyOpen}
        onClose={() => setIsPrivacyPolicyOpen(false)}
      />
    </footer>
  );
};

export default Footer;
