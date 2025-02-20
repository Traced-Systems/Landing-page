
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

              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-3 text-[#002A38]">What personal information do we process?</h3>
                <p className="mb-4">When you visit, use, or navigate our Services, we may process personal information depending on how you interact with us and the Services, the choices you make, and the products and features you use.</p>

                <h3 className="text-xl font-semibold mb-3 text-[#002A38]">Do we process any sensitive personal information?</h3>
                <p className="mb-4">Some of the information may be considered "special" or "sensitive" in certain jurisdictions, for example, your racial or ethnic origins, sexual orientation, and religious beliefs. We do not process sensitive personal information.</p>

                <h3 className="text-xl font-semibold mb-3 text-[#002A38]">Do we collect any information from third parties?</h3>
                <p className="mb-4">We do not collect any information from third parties.</p>

                <h3 className="text-xl font-semibold mb-3 text-[#002A38]">How do we process your information?</h3>
                <p className="mb-4">We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with the law. We may also process your information for other purposes with your consent. We process your information only when we have a valid legal reason to do so.</p>

                <h3 className="text-xl font-semibold mb-3 text-[#002A38]">In what situations and with which parties do we share personal information?</h3>
                <p className="mb-4">We may share information in specific situations and with specific third parties.</p>

                <h3 className="text-xl font-semibold mb-3 text-[#002A38]">What are your rights?</h3>
                <p className="mb-4">Depending on where you are located geographically, the applicable privacy law may mean you have certain rights regarding your personal information.</p>

                <h3 className="text-xl font-semibold mb-3 text-[#002A38]">How do you exercise your rights?</h3>
                <p className="mb-4">The easiest way to exercise your rights is by submitting a data subject access request, or by contacting us. We will consider and act upon any request in accordance with applicable data protection laws.</p>
              </div>

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
                <p className="mb-6">All personal information that you provide to us must be true, complete, and accurate, and you must notify us of any changes to such personal information.</p>

                <h3 className="text-xl font-semibold mb-3 text-[#002A38]">Information automatically collected</h3>
                <p className="italic mb-4">In Short: Some information — such as your Internet Protocol (IP) address and/or browser and device characteristics — is collected automatically when you visit our Services.</p>
                <p className="mb-6">
                  We automatically collect certain information when you visit, use, or navigate the Services. This
                  information does not reveal your specific identity (like your name or contact information) but may
                  include device and usage information, such as:
                </p>
                <ul className="list-disc pl-6 mb-6">
                  <li className="mb-2">IP address</li>
                  <li className="mb-2">Browser and device characteristics</li>
                  <li className="mb-2">Operating system</li>
                  <li className="mb-2">Language preferences</li>
                  <li className="mb-2">Referring URLs</li>
                  <li className="mb-2">Device name</li>
                  <li className="mb-2">Country, location, and other technical data</li>
                </ul>
                <p className="mb-6">Like many businesses, we also collect information through cookies and similar technologies.</p>
              </div>

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

              <div id="section-3">
                <h2 className="text-2xl font-semibold mb-4 text-[#002A38]">3. WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR PERSONAL INFORMATION?</h2>
                <p className="mb-6">
                  The General Data Protection Regulation (GDPR) and UK GDPR require us to explain the
                  valid legal bases we rely on to process your personal information. We may rely on the following
                  legal bases:
                </p>
                <ul className="list-disc pl-6 mb-6">
                  <li className="mb-2">Consent</li>
                  <li className="mb-2">Performance of a Contract</li>
                  <li className="mb-2">Legal Obligations</li>
                  <li className="mb-2">Vital Interests</li>
                </ul>
              </div>

              <div id="section-4">
                <h2 className="text-2xl font-semibold mb-4 text-[#002A38]">4. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</h2>
                <p className="italic mb-4">In Short: We may share information in specific situations described in this section and/or with the following third parties.</p>
                
                <h3 className="text-xl font-semibold mb-3 text-[#002A38]">Vendors, Consultants, and Other Third-Party Service Providers</h3>
                <p className="mb-6">
                  We may share your data with third-party vendors, service providers, contractors, or agents
                  ("third parties") who perform services for us or on our behalf and require access to such
                  information to do that work.
                </p>
                <p className="mb-6">The third parties we may share personal information with are as follows:</p>
                <ul className="list-disc pl-6 mb-6">
                  <li className="mb-2">Web and Mobile Analytics
                    <ul className="list-disc pl-6 mt-2">
                      <li>Google Analytics</li>
                    </ul>
                  </li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 text-[#002A38]">Business Transfers</h3>
                <p className="mb-6">
                  We may share or transfer your information in connection with, or during negotiations of, any
                  merger, sale of company assets, financing, or acquisition of all or a portion of our business to
                  another company.
                </p>
              </div>

              <div id="section-5">
                <h2 className="text-2xl font-semibold mb-4 text-[#002A38]">5. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</h2>
                <p className="italic mb-4">In Short: We may use cookies and other tracking technologies to collect and store your information.</p>
                <p className="mb-6">
                  We may use cookies and similar tracking technologies (like web beacons and pixels) to gather
                  information when you interact with our Services. Some online tracking technologies help us
                  maintain the security of our Services, prevent crashes, fix bugs, save your preferences, and
                  assist with basic site functions.
                </p>
                <p className="mb-6">
                  We also permit third parties and service providers to use online tracking technologies on our
                  Services for analytics and advertising, including to help manage and display advertisements,
                  tailor advertisements to your interests, or send abandoned shopping cart reminders (depending
                  on your communication preferences). The third parties and service providers use their
                  technology to provide advertising about products and services tailored to your interests which
                  may appear either on our Services or on other websites.
                </p>
                <p className="mb-6">
                  Specific information about how we use such technologies and how you can refuse certain
                  cookies is set out in our Cookie Notice.
                </p>

                <h3 className="text-xl font-semibold mb-3 text-[#002A38]">Google Analytics</h3>
                <p className="mb-6">
                  We may share your information with Google Analytics to track and analyze the use of the
                  Services. To opt out of being tracked by Google Analytics across the Services, visit Google
                  Analytics Opt-Out. For more information on the privacy practices of Google, please visit the
                  Google Privacy & Terms page.
                </p>
              </div>

              <div id="section-6">
                <h2 className="text-2xl font-semibold mb-4 text-[#002A38]">6. HOW LONG DO WE KEEP YOUR INFORMATION?</h2>
                <p className="italic mb-4">In Short: We keep your information for as long as necessary to fulfill the purposes outlined in this Privacy Notice unless otherwise required by law.</p>
                <p className="mb-6">
                  We will only keep your personal information for as long as it is necessary for the purposes set
                  out in this Privacy Notice, unless a longer retention period is required or permitted by law (such
                  as for tax, accounting, or other legal requirements).
                </p>
                <p className="mb-6">
                  When we have no ongoing legitimate business need to process your personal information, we
                  will either delete or anonymize such information, or, if this is not possible (for example, because
                  your personal information has been stored in backup archives), we will securely store your
                  personal information and isolate it from any further processing until deletion is possible.
                </p>
              </div>

              <div id="section-7">
                <h2 className="text-2xl font-semibold mb-4 text-[#002A38]">7. DO WE COLLECT INFORMATION FROM MINORS?</h2>
                <p className="italic mb-4">In Short: We do not knowingly collect data from or market to children under 18 years of age.</p>
                <p className="mb-6">
                  We do not knowingly collect, solicit data from, or market to children under 18 years of age, nor
                  do we knowingly sell such personal information. By using the Services, you represent that you
                  are at least 18 or that you are the parent or guardian of such a minor and consent to such minor
                  dependent's use of the Services.
                </p>
                <p className="mb-6">
                  If we learn that personal information from users less than 18 years of age has been collected,
                  we will deactivate the account and take reasonable measures to promptly delete such data from
                  our records. If you become aware of any data we may have collected from children under age
                  18, please contact us at farhad.rasouli@chromaway.com.
                </p>
              </div>

              <div id="section-8">
                <h2 className="text-2xl font-semibold mb-4 text-[#002A38]">8. WHAT ARE YOUR PRIVACY RIGHTS?</h2>
                <p className="italic mb-4">In Short: In some regions, such as the European Economic Area (EEA), United Kingdom (UK), and Switzerland, you have rights that allow you greater access to and control over your personal information.</p>
                <p className="mb-6">
                  In some regions (like the EEA, UK, and Switzerland), you have certain rights under applicable
                  data protection laws. These may include the right to:
                </p>
                <ol className="list-decimal pl-6 mb-6">
                  <li className="mb-2">Request access and obtain a copy of your personal information.</li>
                  <li className="mb-2">Request rectification or erasure.</li>
                  <li className="mb-2">Restrict the processing of your personal information.</li>
                  <li className="mb-2">If applicable, request data portability.</li>
                  <li className="mb-2">Object to the processing of your personal information.</li>
                </ol>
                <p className="mb-6">
                  In certain circumstances, you may also have the right to object to the processing of your
                  personal information. You can make such a request by contacting us by using the contact
                  details provided in the section "HOW CAN YOU CONTACT US ABOUT THIS NOTICE?"
                </p>
                <p className="mb-6">
                  We will consider and act upon any request in accordance with applicable data protection laws.
                  If you are located in the EEA or UK and believe we are unlawfully processing your personal
                  information, you have the right to complain to your Member State data protection authority or
                  the UK data protection authority.
                </p>
                <p className="mb-6">
                  If you are located in Switzerland, you may contact the Federal Data Protection and Information
                  Commissioner.
                </p>

                <h3 className="text-xl font-semibold mb-3 text-[#002A38]">Withdrawing your consent</h3>
                <p className="mb-6">
                  If we are relying on your consent to process your personal information, you have the right to
                  withdraw your consent at any time. You can withdraw your consent by contacting us using the
                  contact details provided in the section "HOW CAN YOU CONTACT US ABOUT THIS
                  NOTICE?"
                </p>
                <p className="mb-6">
                  However, please note that this will not affect the lawfulness of the processing before its
                  withdrawal, nor will it affect the processing of your personal information conducted in reliance on
                  lawful processing grounds other than consent.
                </p>

                <h3 className="text-xl font-semibold mb-3 text-[#002A38]">Cookies and similar technologies</h3>
                <p className="mb-6">
                  Most web browsers are set to accept cookies by default. If you prefer, you can usually choose to
                  set your browser to remove cookies and reject cookies. If you choose to remove or reject
                  cookies, this could affect certain features or services of our Services.
                </p>
                <p className="mb-6">
                  If you have questions or comments about your privacy rights, you may email us at
                  farhad.rasouli@chromaway.com.
                </p>
              </div>

              <div id="section-9">
                <h2 className="text-2xl font-semibold mb-4 text-[#002A38]">9. CONTROLS FOR DO-NOT-TRACK FEATURES</h2>
                <p className="mb-6">
                  Most web browsers and some mobile operating systems and mobile applications include a
                  Do-Not-Track ("DNT") feature or setting you can activate to signal your privacy preference not to
                  have data about your online browsing activities monitored and collected.
                </p>
                <p className="mb-6">
                  At this stage, no uniform technology standard for recognizing and implementing DNT signals
                  has been finalized. As such, we do not currently respond to DNT browser signals or any other
                  mechanism that automatically communicates your choice not to be tracked online. If a standard
                  for online tracking is adopted that we must follow in the future, we will inform you about that
                  practice in a revised version of this Privacy Notice.
                </p>
              </div>

              <div id="section-10">
                <h2 className="text-2xl font-semibold mb-4 text-[#002A38]">10. DO WE MAKE UPDATES TO THIS NOTICE?</h2>
                <p className="italic mb-4">In Short: Yes, we will update this notice as necessary to stay compliant with relevant laws.</p>
                <p className="mb-6">
                  We may update this Privacy Notice from time to time. The updated version will be indicated by
                  an updated "Revised" date at the top of this Privacy Notice. If we make material changes, we
                  may notify you by prominently posting a notice of such changes or by sending you a notification.
                  We encourage you to review this Privacy Notice frequently to be informed of how we are
                  protecting your information.
                </p>
              </div>

              <div id="section-11">
                <h2 className="text-2xl font-semibold mb-4 text-[#002A38]">11. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</h2>
                <p className="mb-6">
                  If you have questions or comments about this notice, you may email us at
                  farhad.rasouli@chromaway.com or contact us by post at:
                </p>
                <p className="mb-6">
                  Traced Systems<br />
                  Njalsgade 76, 4th floor<br />
                  Copenhagen, Denmark 2300<br />
                  Denmark
                </p>
              </div>

              <div id="section-12">
                <h2 className="text-2xl font-semibold mb-4 text-[#002A38]">12. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</h2>
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
