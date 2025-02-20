
import React, { useRef } from "react";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import SheetBackButton from "./shared/SheetBackButton";

interface PrivacyPolicySheetProps {
  isOpen: boolean;
  onClose: () => void;
}

const PrivacyPolicySheet = ({ isOpen, onClose }: PrivacyPolicySheetProps) => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent
        side="right"
        className="!w-full sm:!w-[75vw] 2xl:!w-[66vw] sm:!max-w-[75vw] 2xl:!max-w-[66vw] overflow-y-auto bg-[#F7F7F5] border-l shadow-xl p-0"
      >
        <SheetBackButton onBack={onClose} />
        <div className="h-full pt-24 px-8">
          <div className="max-w-4xl mx-auto pb-20">
            <h1 className="text-4xl font-bold mb-8 text-[#002A38]">PRIVACY POLICY</h1>
            <p className="text-gray-600 mb-6">Last updated February 18, 2025</p>
            <div className="prose max-w-none text-gray-600">
              <p className="mb-6">
                This Privacy Notice for Traced Systems ("we," "us," or "our") describes how and why we might
                access, collect, store, use, and/or share ("process") your personal information when you use
                our services ("Services"), including when you:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li className="mb-2">Visit our website at https://tracedsystems.com/, or any website of ours that links to this Privacy Notice.</li>
                <li className="mb-2">Navigate to the Traced Systems website. Traced Systems is a traceability and transparency solution that enhances sustainability in supply chains. By leveraging blockchain and digital identity technologies, Traced Systems enables businesses to track product origins, lifecycle data, and compliance information, ensuring authenticity and accountability.</li>
                <li className="mb-2">Engage with us in other related ways, including any sales, marketing, or events.</li>
              </ul>

              <h2 className="text-2xl font-semibold mb-4 text-[#002A38]">Questions or concerns?</h2>
              <p className="mb-6">
                Reading this Privacy Notice will help you understand your privacy rights and choices. We are
                responsible for making decisions about how your personal information is processed. If you do
                not agree with our policies and practices, please do not use our Services. If you still have any
                questions or concerns, please contact us at farhad.rasouli@chromaway.com.
              </p>

              <h2 className="text-2xl font-semibold mb-4 text-[#002A38]">SUMMARY OF KEY POINTS</h2>
              <p className="mb-6">
                This summary provides key points from our Privacy Notice, but you can find out more details
                about any of these topics by clicking the link following each key point or by using our table of
                contents below to find the section you are looking for.
              </p>

              <h2 className="text-2xl font-semibold mb-4 text-[#002A38]">TABLE OF CONTENTS</h2>
              <ol className="list-decimal pl-6 mb-6">
                {[
                  "WHAT INFORMATION DO WE COLLECT?",
                  "HOW DO WE PROCESS YOUR INFORMATION?",
                  "WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR PERSONAL INFORMATION?",
                  "WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?",
                  "DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?",
                  "HOW LONG DO WE KEEP YOUR INFORMATION?",
                  "DO WE COLLECT INFORMATION FROM MINORS?",
                  "WHAT ARE YOUR PRIVACY RIGHTS?",
                  "CONTROLS FOR DO-NOT-TRACK FEATURES",
                  "DO WE MAKE UPDATES TO THIS NOTICE?",
                  "HOW CAN YOU CONTACT US ABOUT THIS NOTICE?",
                  "HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?"
                ].map((item, index) => (
                  <li key={index} className="mb-2">
                    <button 
                      onClick={() => scrollToSection(`section-${index + 1}`)}
                      className="text-[#E4AC70] hover:text-[#C66600] text-left"
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ol>

              <div id="section-1">
                <h2 className="text-2xl font-semibold mb-4 text-[#002A38]">1. WHAT INFORMATION DO WE COLLECT?</h2>
                <h3 className="text-xl font-semibold mb-3 text-[#002A38]">Personal information you disclose to us</h3>
                <p className="italic mb-4">In Short: We collect personal information that you provide to us.</p>
                <p className="mb-6">
                  We collect personal information that you voluntarily provide to us when you express an interest
                  in obtaining information about us or our products and Services, when you participate in activities
                  on the Services, or otherwise when you contact us.
                </p>
                <p className="mb-6">
                  Personal Information Provided by You. The personal information that we collect depends on
                  the context of your interactions with us and the Services, the choices you make, and the
                  products and features you use. The personal information we collect may include:
                </p>
                <ul className="list-disc pl-6 mb-6">
                  <li className="mb-2">Names</li>
                  <li className="mb-2">Email addresses</li>
                </ul>
                <p className="mb-6">Sensitive Information. We do not process sensitive information.</p>
              </div>

              {/* Continue with all sections following the same pattern */}
              <div id="section-2">
                <h2 className="text-2xl font-semibold mb-4 text-[#002A38]">2. HOW DO WE PROCESS YOUR INFORMATION?</h2>
                <p className="italic mb-4">In Short: We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent.</p>
                <p className="mb-6">
                  We process your personal information for a variety of reasons, depending on how you interact
                  with our Services, including:
                </p>
                <ul className="list-disc pl-6 mb-6">
                  <li className="mb-2">To deliver and facilitate delivery of services</li>
                  <li className="mb-2">To respond to user inquiries/offer support</li>
                  <li className="mb-2">To send administrative information</li>
                  <li className="mb-2">To save or protect an individual's vital interest</li>
                </ul>
              </div>

              {/* Add remaining sections similarly */}
              <div id="section-12">
                <h2 className="text-2xl font-semibold mb-4 text-[#002A38]">
                  12. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?
                </h2>
                <p className="mb-6">
                  Based on the applicable laws of your country, you may have the right to request access to the
                  personal information we collect from you, details about how we have processed it, correct
                  inaccuracies, or delete your personal information.
                </p>
                <p>
                  To request to review, update, or delete your personal information, please fill out and submit a
                  data subject access request.
                </p>
              </div>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default PrivacyPolicySheet;
