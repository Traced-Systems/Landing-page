import React from "react";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import SheetBackButton from "./shared/SheetBackButton";

interface TermsOfServiceSheetProps {
  isOpen: boolean;
  onClose: () => void;
}

const TermsOfServiceSheet = ({ isOpen, onClose }: TermsOfServiceSheetProps) => {
  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent
        side="right"
        className="!w-full sm:!w-[75vw] 2xl:!w-[66vw] sm:!max-w-[75vw] 2xl:!max-w-[66vw] overflow-y-auto bg-[#F7F7F5] border-l shadow-xl p-0"
      >
        <SheetBackButton onBack={onClose} />
        <div className="h-full pt-24 px-8">
          <div className="max-w-4xl mx-auto pb-20">
            <h1 className="text-4xl font-bold mb-8 text-[#002A38]">
              TERMS AND CONDITIONS
            </h1>
            <p className="text-gray-600 mb-6">Last updated: March 03, 2025</p>
            <div className="prose max-w-none text-gray-600">
              <h2 className="text-2xl font-semibold mb-4 text-[#002A38]">
                AGREEMENT TO OUR LEGAL TERMS
              </h2>
              <p className="mb-6">
                We are Traced Systems ("Company", "we", "us", or "our"), a
                company registered in Denmark at Njalsgade 76, 4th floor,
                Copenhagen, Denmark 2300.
              </p>
              <p className="mb-6">
                We operate the website{" "}
                <a
                  href="https://tracedsystems.com"
                  className="text-[#E4AC70] hover:text-[#C66600]"
                >
                  https://tracedsystems.com
                </a>{" "}
                (the "Site"), as well as any other related products and services
                that refer or link to these legal terms (the "Legal Terms"),
                collectively, the "Services".
              </p>
              <p className="mb-6">
                Traced Systems is a traceability and transparency solution that
                enhances sustainability in supply chains. By leveraging
                blockchain and digital identity technologies, Traced Systems
                enables businesses to track product origins, lifecycle data, and
                compliance information, ensuring authenticity and
                accountability.
              </p>
              <p className="mb-6">
                You can contact us by email at{" "}
                <a
                  href="mailto:farhad.rasouli@chromaway.com"
                  className="text-[#E4AC70] hover:text-[#C66600]"
                >
                  farhad.rasouli@chromaway.com
                </a>{" "}
                or by mail at Njalsgade 76, 4th floor, Copenhagen, Denmark 2300,
                Denmark.
              </p>
              <p className="mb-6 font-bold">
                IF YOU DO NOT AGREE WITH ALL OF THESE LEGAL TERMS, THEN YOU ARE
                EXPRESSLY PROHIBITED FROM USING THE SERVICES AND YOU MUST
                DISCONTINUE USE IMMEDIATELY.
              </p>
              <p className="mb-6">
                Supplemental terms and conditions or documents that may be
                posted on the Services from time to time are expressly
                incorporated by reference.
              </p>
              <p className="mb-6">
                We reserve the right to make changes or modifications to these
                Legal Terms at any time. We will alert you about any changes by
                updating the "Last Updated" date of these Legal Terms, and you
                waive any right to receive specific notice of each change.
              </p>
              <p className="mb-6">
                It is your responsibility to periodically review these Legal
                Terms to stay informed of updates. You will be subject to, and
                will be deemed to have accepted, the changes in any revised
                Legal Terms by your continued use of the Services after the date
                such revised Legal Terms are posted.
              </p>
              <p className="mb-6">
                All users who are minors in their jurisdiction (generally under
                the age of 18) must have the permission of, and be directly
                supervised by, their parent or guardian to use the Services. If
                you are a minor, your parent or guardian must read and agree to
                these Legal Terms prior to your use of the Services.
              </p>
              <p className="mb-6 font-bold">
                We recommend that you print a copy of these Legal Terms for your
                records.
              </p>

              <h2 className="text-2xl font-semibold mb-4 text-[#002A38]">
                TABLE OF CONTENTS
              </h2>
              <ul className="list-decimal pl-6 mb-6">
                <li>OUR SERVICES</li>
                <li>INTELLECTUAL PROPERTY RIGHTS</li>
                <li>USER REPRESENTATIONS</li>
                <li>PURCHASES AND PAYMENT</li>
                <li>SUBSCRIPTIONS</li>
                <li>PROHIBITED ACTIVITIES</li>
                <li>USER GENERATED CONTRIBUTIONS</li>
                <li>CONTRIBUTION LICENSE</li>
                <li>SERVICES MANAGEMENT</li>
                <li>PRIVACY POLICY</li>
                <li>TERM AND TERMINATION</li>
                <li>MODIFICATIONS AND INTERRUPTIONS</li>
                <li>GOVERNING LAW</li>
                <li>DISPUTE RESOLUTION</li>
                <li>CORRECTIONS</li>
                <li>DISCLAIMER</li>
                <li>LIMITATIONS OF LIABILITY</li>
                <li>INDEMNIFICATION</li>
                <li>USER DATA</li>
                <li>ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES</li>
                <li>MISCELLANEOUS</li>
                <li>CONTACT US</li>
              </ul>

              <h2 className="text-2xl font-semibold mb-4 text-[#002A38]">
                1. Our Services
              </h2>
              <p className="mb-6">
                The information provided when using the Services is not intended
                for distribution or use by any person or entity in any
                jurisdiction or country where such distribution or use would be
                contrary to law or regulation or which would subject us to any
                registration requirement within such jurisdiction or country.
              </p>
              <p className="mb-6">
                Accordingly, those persons who choose to access the Services
                from other locations do so on their own initiative and are
                solely responsible for compliance with local laws if and to the
                extent local laws are applicable.
              </p>

              <h2 className="text-2xl font-semibold mb-4 text-[#002A38]">
                2. Intellectual Property Rights
              </h2>
              <h3 className="text-xl font-semibold mb-2 text-[#002A38]">
                Our Intellectual Property
              </h3>
              <p className="mb-6">
                We are the owner or the licensee of all intellectual property
                rights in our Services, including all source code, databases,
                functionality, software, website designs, audio, video, text,
                photographs, and graphics in the Services (collectively, the
                'Content'), as well as the trademarks, service marks, and logos
                contained therein (the 'Marks').
              </p>
              <p className="mb-6">
                Our Content and Marks are protected by copyright and trademark
                laws (and various other intellectual property rights and unfair
                competition laws) and treaties around the world.
              </p>
              <p className="mb-6">
                The Content and Marks are provided 'AS IS' for your personal,
                non-commercial use only.
              </p>
              <h3 className="text-xl font-semibold mb-2 text-[#002A38]">
                Your Use of Our Services
              </h3>
              <p className="mb-6">
                Subject to your compliance with these Legal Terms, including the
                'PROHIBITED ACTIVITIES' section below, we grant you a
                non-exclusive, non-transferable, revocable license to:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>Access the Services</li>
                <li>
                  Download or print a copy of any portion of the Content to
                  which you have properly gained access, solely for your
                  personal, non-commercial use.
                </li>
              </ul>
              <p className="mb-6">
                Except as set out in this section or elsewhere in our Legal
                Terms, no part of the Services and no Content or Marks may be
                copied, reproduced, aggregated, republished, uploaded, posted,
                publicly displayed, encoded, translated, transmitted,
                distributed, sold, licensed, or otherwise exploited for any
                commercial purpose whatsoever, without our express prior written
                permission.
              </p>
              <p className="mb-6">
                If you wish to make any use of the Services, Content, or Marks
                other than as set out in this section or elsewhere in our Legal
                Terms, please address your request to:
                farhad.rasouli@chromaway.com.
              </p>
              <p className="mb-6">
                If we ever grant you the permission to post, reproduce, or
                publicly display any part of our Services or Content, you must
                identify us as the owners or licensors of the Services, Content,
                or Marks and ensure that any copyright or proprietary notice
                appears or is visible on posting, reproducing, or displaying our
                Content.
              </p>
              <p className="mb-6">
                We reserve all rights not expressly granted to you in and to the
                Services, Content, and Marks.
              </p>
              <p className="mb-6">
                Any breach of these Intellectual Property Rights will constitute
                a material breach of our Legal Terms and your right to use our
                Services will terminate immediately.
              </p>

              <h3 className="text-xl font-semibold mb-2 text-[#002A38]">
                Your Submissions
              </h3>
              <p className="mb-6">
                Please review this section and the 'PROHIBITED ACTIVITIES'
                section carefully before using our Services to understand the
                (a) rights you give us and (b) obligations you have when you
                post or upload any content through the Services.
              </p>
              <p className="mb-6">
                You are responsible for what you post or upload:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>
                  You confirm that you have read and agree with our 'PROHIBITED
                  ACTIVITIES' and will not post, send, publish, upload, or
                  transmit through the Services any Submission that is illegal,
                  harassing, hateful, defamatory, obscene, abusive,
                  discriminatory, threatening, sexually explicit, false,
                  inaccurate, or misleading.
                </li>
                <li>
                  You waive any and all moral rights to any such Submission.
                </li>
                <li>
                  You warrant that any such Submission is original to you or
                  that you have the necessary rights and licenses to submit such
                  Submissions.
                </li>
                <li>
                  You represent that your Submissions do not constitute
                  confidential information.
                </li>
                <li>
                  You are solely responsible for your Submissions and expressly
                  agree to reimburse us for any and all losses that may arise
                  due to your breach of this section, any third-party
                  intellectual property rights, or applicable law.
                </li>
              </ul>

              <h2 className="text-2xl font-semibold mb-4 text-[#002A38]">
                3. User Representations
              </h2>
              <p className="mb-6">
                By using the Services, you represent and warrant that:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>
                  You have the legal capacity and agree to comply with these
                  Legal Terms.
                </li>
                <li>
                  You are not a minor in your jurisdiction or have obtained
                  parental permission.
                </li>
                <li>
                  You will not access the Services through automated or
                  non-human means (e.g., bots or scripts).
                </li>
                <li>
                  You will not use the Services for any illegal or unauthorized
                  purpose.
                </li>
                <li>
                  Your use of the Services will comply with all applicable laws
                  and regulations.
                </li>
              </ul>
              <p className="mb-6">
                Providing false, inaccurate, or incomplete information may
                result in suspension or termination of your account.
              </p>

              <h2 className="text-2xl font-semibold mb-4 text-[#002A38]">
                4. Purchases and Payment
              </h2>
              <p className="mb-6">We accept the following forms of payment:</p>
              <ul className="list-disc pl-6 mb-6">
                <li>Visa</li>
                <li>Mastercard</li>
                <li>American Express</li>
                <li>PayPal</li>
              </ul>
              <p className="mb-6">
                You agree to provide current, complete, and accurate payment
                information for all purchases.
              </p>
              <p className="mb-6">
                We reserve the right to refuse any order placed through the
                Services. Orders may be limited or canceled at our discretion,
                including those placed using the same billing or shipping
                address.
              </p>
              <p className="mb-6">All payments shall be in Euros (€).</p>

              <h2 className="text-2xl font-semibold mb-4 text-[#002A38]">
                5. Subscriptions
              </h2>
              <h3 className="text-xl font-semibold mb-2 text-[#002A38]">
                Billing and Renewal
              </h3>
              <p className="mb-6">
                Your subscription will continue and automatically renew unless
                canceled. You consent to our charging your payment method on a
                recurring basis without requiring prior approval for each charge
                until such time as you cancel the applicable order. The length
                of your billing cycle depends on the subscription plan you
                choose.
              </p>
              <h3 className="text-xl font-semibold mb-2 text-[#002A38]">
                Cancellation
              </h3>
              <p className="mb-6">All purchases are non-refundable.</p>
              <p className="mb-6">
                You may cancel your subscription at any time by logging into
                your account.
              </p>
              <p className="mb-6">
                Your cancellation takes effect at the end of the current paid
                term.
              </p>
              <h3 className="text-xl font-semibold mb-2 text-[#002A38]">
                Fee Changes
              </h3>
              <p className="mb-6">
                We may, from time to time, make changes to subscription fees and
                will communicate any price changes in accordance with applicable
                law.
              </p>

              <h2 className="text-2xl font-semibold mb-4 text-[#002A38]">
                6. Prohibited Activities
              </h2>
              <p className="mb-6">
                You may not access or use the Services for any purpose other
                than that for which we make the Services available.
              </p>
              <p className="mb-6">
                The Services may not be used in connection with any commercial
                endeavors except those specifically endorsed or approved by us.
              </p>
              <p className="mb-6 font-semibold">
                As a user of the Services, you agree NOT to:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>
                  Systematically retrieve data or content to create or compile a
                  collection, compilation, database, or directory without
                  permission.
                </li>
                <li>
                  Trick, defraud, or mislead us or other users, especially in an
                  attempt to gain sensitive account information, such as
                  passwords.
                </li>
                <li>
                  Circumvent, disable, or interfere with security-related
                  features, including those that restrict or prevent copying or
                  use of Content.
                </li>
                <li>Disparage, tarnish, or harm us or the Services.</li>
                <li>
                  Use any information obtained from the Services to harass,
                  abuse, or harm another person.
                </li>
                <li>
                  Make improper use of support services or submit false reports
                  of abuse or misconduct.
                </li>
                <li>
                  Use the Services inconsistently with applicable laws or
                  regulations.
                </li>
                <li>
                  Engage in unauthorized framing or linking to the Services.
                </li>
                <li>
                  Upload or transmit viruses, Trojan horses, malware, or other
                  harmful material, including excessive use of capital letters
                  and repetitive text (spamming).
                </li>
                <li>
                  Interfere with or disrupt any party's uninterrupted use of the
                  Services, modify, impair, disrupt, alter, or interfere with
                  features, functions, operation, or maintenance.
                </li>
                <li>
                  Engage in any automated use of the system, including using
                  scripts, bots, data mining, or extraction tools.
                </li>
                <li>
                  Delete copyright or other proprietary notices from any
                  Content.
                </li>
                <li>
                  Impersonate another user or attempt to use another user's
                  username.
                </li>
                <li>
                  Upload or transmit any material that acts as a passive or
                  active information collection or transmission mechanism,
                  including GIFs, web bugs, cookies, or spyware.
                </li>
                <li>
                  Interfere with, disrupt, or create an undue burden on the
                  Services or connected networks.
                </li>
                <li>
                  Harass, annoy, intimidate, or threaten our employees or agents
                  providing Services.
                </li>
                <li>
                  Bypass security measures designed to restrict access to any
                  part of the Services.
                </li>
                <li>
                  Copy or adapt Service software, including but not limited to
                  Flash, PHP, HTML, JavaScript, or other code.
                </li>
                <li>
                  Decipher, decompile, disassemble, or reverse-engineer any of
                  the Services' software.
                </li>
                <li>
                  Use, launch, develop, or distribute any automated system,
                  including bots, spiders, scrapers, offline readers, or other
                  unauthorized scripts or software.
                </li>
                <li>
                  Use a buying or purchasing agent to make purchases on the
                  Services.
                </li>
                <li>
                  Collect usernames or email addresses of users by electronic or
                  other means for sending unsolicited email.
                </li>
                <li>
                  Create user accounts by automated means or under false
                  pretenses.
                </li>
                <li>
                  Use the Services as part of any effort to compete with us or
                  for any revenue-generating endeavor or commercial enterprise.
                </li>
                <li>
                  Use the Services to advertise or offer to sell goods or
                  services.
                </li>
              </ul>

              <h2 className="text-2xl font-semibold mb-4 text-[#002A38]">
                7. USER GENERATED CONTRIBUTIONS
              </h2>
              <p className="mb-6">
                The Services do not offer users the ability to submit or post
                content.
              </p>

              <h2 className="text-2xl font-semibold mb-4 text-[#002A38]">
                8. CONTRIBUTION LICENSE
              </h2>

              <p className="mb-6">
                You and the Services agree that we may access, store, process,
                and use any information and personal data that you provide
                following the terms of the Privacy Policy and your choices
                (including settings).
                <br />
                By submitting suggestions or feedback regarding the Services,
                you agree that we can use and share such feedback for any
                purpose without compensation to you.
              </p>

              <h2 className="text-2xl font-semibold mb-4 text-[#002A38]">
                9. SERVICES MANAGEMENT
              </h2>
              <p className="mb-6">
                We reserve the right, but not the obligation, to:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>
                  Monitor the Services for violations of these Legal Terms.
                </li>
                <li>
                  Take legal action against any user who, in our sole
                  discretion, violates the law or these Legal Terms, including
                  reporting users to law enforcement authorities.
                </li>
                <li>
                  Refuse, restrict access to, limit the availability of, or
                  disable (to the extent technologically feasible) any user
                  contributions or any portion thereof.
                </li>
                <li>
                  Remove files and content that are excessive in size or
                  otherwise burdensome to our systems.
                </li>
                <li>
                  Manage the Services to protect our rights and property and to
                  facilitate the proper functioning of the Services.
                </li>
              </ul>

              <h2 className="text-2xl font-semibold mb-4 text-[#002A38]">
                10. PRIVACY POLICY
              </h2>
              <p className="mb-6">
                We care about data privacy and security. Please review our
                Privacy Policy.
                <br />
                By using the Services, you agree to be bound by our Privacy
                Policy, which is incorporated into these Legal Terms.
                <br />
                Please note that the Services are hosted in the United States.
                If you access the Services from another region with different
                laws regarding data collection, usage, or disclosure, you
                acknowledge that you are transferring your data to the United
                States and consent to its processing there.
              </p>

              <h2 className="text-2xl font-semibold mb-4 text-[#002A38]">
                11. Term and Termination
              </h2>
              <p className="mb-6">
                These Legal Terms shall remain in full force and effect while
                you use the Services.
              </p>
              <p className="mb-6 font-semibold">
                WITHOUT LIMITING ANY OTHER PROVISION OF THESE LEGAL TERMS, WE
                RESERVE THE RIGHT TO, IN OUR SOLE DISCRETION AND WITHOUT NOTICE
                OR LIABILITY, DENY ACCESS TO AND USE OF THE SERVICES (INCLUDING
                BLOCKING CERTAIN IP ADDRESSES), TO ANY PERSON FOR ANY REASON OR
                FOR NO REASON, INCLUDING FOR BREACH OF ANY REPRESENTATION,
                WARRANTY, OR COVENANT CONTAINED IN THESE LEGAL TERMS OR ANY
                APPLICABLE LAW OR REGULATION.
              </p>
              <p className="mb-6">
                We may terminate your use or participation in the Services or
                delete any content or information you posted at any time,
                without warning, in our sole discretion.
              </p>
              <p className="mb-6">
                If we terminate or suspend your account for any reason, you are
                prohibited from registering and creating a new account under
                your name, a fake or borrowed name, or on behalf of any third
                party.
              </p>
              <p className="mb-6">
                In addition to termination or suspension, we reserve the right
                to take appropriate legal action, including civil, criminal, and
                injunctive redress.
              </p>

              <h2 className="text-2xl font-semibold mb-4 text-[#002A38]">
                12. Modifications and Interruptions
              </h2>
              <p className="mb-6">
                We reserve the right to change, modify, or remove content from
                the Services at any time or for any reason at our sole
                discretion without notice. However, we have no obligation to
                update any information on our Services.
              </p>
              <p className="mb-6">
                We will not be liable to you or any third party for
                modifications, price changes, suspension, or discontinuance of
                the Services.
              </p>
              <p className="mb-6">
                We do not guarantee that the Services will be available at all
                times. We may experience hardware, software, or other issues or
                need to perform maintenance, which may result in interruptions,
                delays, or errors.
              </p>
              <p className="mb-6">
                We reserve the right to change, revise, update, suspend,
                discontinue, or otherwise modify the Services at any time
                without notice.
              </p>
              <p className="mb-6">
                You agree that we have no liability for any loss, damage, or
                inconvenience caused by your inability to access or use the
                Services during downtime or discontinuance.
              </p>
              <p className="mb-6">
                Nothing in these Legal Terms obligates us to maintain, support,
                or provide updates, corrections, or releases for the Services.
              </p>

              <h2 className="text-2xl font-semibold mb-4 text-[#002A38]">
                13. Governing Law
              </h2>
              <p className="mb-6">
                These Legal Terms are governed by and interpreted following the
                laws of Denmark. The United Nations Convention on Contracts for
                the International Sale of Goods is expressly excluded.
              </p>
              <p className="mb-6">
                If your habitual residence is in the EU and you are a consumer,
                you additionally possess the protection provided by mandatory
                provisions of the law in your country of residence.
              </p>
              <p className="mb-6">
                Traced Systems and you both agree to submit to the non-exclusive
                jurisdiction of the courts of Copenhagen, Denmark, which means
                that you may make a claim to defend your consumer protection
                rights in Denmark or the EU country in which you reside.
              </p>

              <h2 className="text-2xl font-semibold mb-4 text-[#002A38]">
                14. Dispute Resolution
              </h2>
              <h3 className="text-xl font-semibold mb-2 text-[#002A38]">
                Informal Negotiations
              </h3>
              <p className="mb-6">
                To expedite resolution and control the cost of any dispute,
                controversy, or claim related to these Legal Terms (a
                ‘Dispute’), the Parties agree to first attempt to negotiate any
                Dispute informally for at least thirty (30) days before
                initiating arbitration.
              </p>
              <p className="mb-6">
                Such informal negotiations commence upon written notice from one
                Party to the other.
              </p>
              <h3 className="text-xl font-semibold mb-2 text-[#002A38]">
                Binding Arbitration
              </h3>
              <p className="mb-6">
                Any Dispute arising from these Legal Terms shall be determined
                by one arbitrator who will be chosen in accordance with the
                Arbitration and Internal Rules of the European Court of
                Arbitration, having its seat in Strasbourg.
              </p>
              <p className="mb-6">
                The seat of arbitration shall be Copenhagen, Denmark.
              </p>
              <p className="mb-6">
                The language of the proceedings shall be English.
              </p>
              <p className="mb-6">
                Applicable substantive law shall be the law of Denmark.
              </p>
              <h3 className="text-xl font-semibold mb-2 text-[#002A38]">
                Restrictions
              </h3>
              <p className="mb-6">
                The Parties agree that any arbitration shall be limited to the
                Dispute between the Parties individually.
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>
                  No arbitration shall be joined with any other proceeding.
                </li>
                <li>
                  No Dispute shall be arbitrated on a class-action basis or
                  utilize class action procedures.
                </li>
                <li>
                  No Dispute may be brought in a representative capacity on
                  behalf of the general public or other persons.
                </li>
              </ul>
              <h3 className="text-xl font-semibold mb-2 text-[#002A38]">
                Exceptions to Informal Negotiations and Arbitration
              </h3>
              <p className="mb-6">
                The Parties agree that the following Disputes are NOT subject to
                informal negotiations or binding arbitration:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>
                  Disputes seeking to enforce or protect intellectual property
                  rights.
                </li>
                <li>
                  Disputes related to allegations of theft, privacy invasion, or
                  unauthorized use.
                </li>
                <li>Claims for injunctive relief.</li>
              </ul>
              <p className="mb-6">
                If this provision is found to be illegal or unenforceable, then
                neither Party will elect arbitration for any Dispute falling
                within that portion of the provision.
              </p>
              <p className="mb-6">
                Such Disputes shall be decided by a court of competent
                jurisdiction, and the Parties agree to submit to the personal
                jurisdiction of that court.
              </p>

              <h2 className="text-2xl font-semibold mb-4 text-[#002A38]">
                15. Corrections
              </h2>
              <p className="mb-6">
                There may be information on the Services that contains
                typographical errors, inaccuracies, or omissions, including but
                not limited to:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>Descriptions</li>
                <li>Pricing</li>
                <li>Availability</li>
                <li>Other relevant details</li>
              </ul>
              <p className="mb-6">
                We reserve the right to correct any errors and update the
                information at any time, without prior notice.
              </p>

              <h2 className="text-2xl font-semibold mb-4 text-[#002A38]">
                16. Disclaimer
              </h2>
              <p className="mb-6">
                THE SERVICES ARE PROVIDED ON AN 'AS-IS' AND 'AS-AVAILABLE'
                BASIS.
              </p>
              <p className="mb-6">
                YOU AGREE THAT YOUR USE OF THE SERVICES WILL BE AT YOUR SOLE
                RISK.
              </p>
              <p className="mb-6">
                To the fullest extent permitted by law, we disclaim all
                warranties, express or implied, including but not limited to:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>Implied warranties of merchantability.</li>
                <li>Fitness for a particular purpose.</li>
                <li>Non-infringement.</li>
              </ul>
              <p className="mb-6">
                We make no warranties or representations about:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>The accuracy or completeness of the Services' content.</li>
                <li>
                  The content of any linked websites or mobile applications.
                </li>
                <li>Any errors, mistakes, or inaccuracies in content.</li>
                <li>
                  Personal injury or property damage resulting from access to or
                  use of the Services.
                </li>
                <li>
                  Unauthorized access to or use of our secure servers and any
                  personal or financial information stored therein.
                </li>
                <li>
                  Any interruption or cessation of transmission to or from the
                  Services.
                </li>
                <li>
                  Any viruses, Trojan horses, or malware transmitted to or
                  through the Services by a third party.
                </li>
                <li>
                  Errors, omissions, or damages resulting from content posted,
                  transmitted, or made available via the Services.
                </li>
              </ul>
              <p className="mb-6">
                We do not warrant, endorse, guarantee, or assume responsibility
                for any third-party product or service offered through the
                Services.
              </p>

              <h2 className="text-2xl font-semibold mb-4 text-[#002A38]">
                17. Limitations of Liability
              </h2>
              <p className="mb-6">
                IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE
                LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT,
                CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE
                DAMAGES, including but not limited to:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>Lost profit</li>
                <li>Lost revenue</li>
                <li>Loss of data</li>
                <li>Other damages arising from your use of the Services</li>
              </ul>
              <p className="mb-6">
                Even if we have been advised of the possibility of such damages,
                our liability to you for any cause whatsoever will at all times
                be limited to the amount paid by you to us during the six (6)
                month period prior to any cause of action arising.
              </p>
              <p className="mb-6">
                Certain U.S. state laws and international laws do not allow
                limitations on implied warranties or the exclusion or limitation
                of certain damages. If these laws apply to you, some or all of
                the above disclaimers or limitations may not apply to you, and
                you may have additional rights.
              </p>

              <h2 className="text-2xl font-semibold mb-4 text-[#002A38]">
                18. Indemnification
              </h2>
              <p className="mb-6">
                You agree to defend, indemnify, and hold us harmless, including
                our subsidiaries, affiliates, and all of our respective
                officers, agents, partners, and employees, from and against any
                loss, damage, liability, claim, or demand, including reasonable
                attorneys’ fees and expenses, made by any third party due to or
                arising out of:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>Your use of the Services.</li>
                <li>Your breach of these Legal Terms.</li>
                <li>
                  Any misrepresentation or breach of your warranties and
                  representations set forth in these Legal Terms.
                </li>
                <li>
                  Your violation of the rights of a third party, including but
                  not limited to intellectual property rights.
                </li>
                <li>
                  Any overt harmful act toward another user of the Services.
                </li>
              </ul>
              <p className="mb-6">
                We reserve the right, at your expense, to assume the exclusive
                defense and control of any matter for which you are required to
                indemnify us. You agree to cooperate at your expense with our
                defense of such claims.
              </p>
              <p className="mb-6">
                We will use reasonable efforts to notify you of any such claim,
                action, or proceeding subject to this indemnification upon
                becoming aware of it.
              </p>

              <h2 className="text-2xl font-semibold mb-4 text-[#002A38]">
                19. User Data
              </h2>
              <p className="mb-6">
                We will maintain certain data that you transmit to the Services
                for the purpose of managing the performance of the Services, as
                well as data relating to your use of the Services.
              </p>
              <p className="mb-6">
                Although we perform regular routine backups of data, you are
                solely responsible for all data you transmit or any activity you
                undertake using the Services.
              </p>
              <p className="mb-6">
                You agree that we shall have no liability to you for any loss or
                corruption of such data, and you hereby waive any right of
                action against us arising from any such loss or corruption.
              </p>
              <h2 className="text-2xl font-semibold mb-4 text-[#002A38]">
                20. Electronic Communications, Transactions, and Signatures
              </h2>
              <p className="mb-6">
                By visiting the Services, sending us emails, and completing
                online forms, you consent to receive electronic communications.
              </p>
              <p className="mb-6">
                You agree that all agreements, notices, disclosures, and other
                communications we provide to you electronically, via email or on
                the Services, satisfy any legal requirement that such
                communication be in writing.
              </p>
              <p className="mb-6 font-semibold">
                YOU HEREBY AGREE TO THE USE OF ELECTRONIC SIGNATURES, CONTRACTS,
                ORDERS, AND OTHER RECORDS, AND TO ELECTRONIC DELIVERY OF
                NOTICES, POLICIES, AND RECORDS OF TRANSACTIONS INITIATED OR
                COMPLETED BY US OR VIA THE SERVICES.
              </p>
              <p className="mb-6">
                You waive any rights or requirements under any applicable laws
                that require an original signature or physical retention of
                non-electronic records.
              </p>

              <h2 className="text-2xl font-semibold mb-4 text-[#002A38]">
                21. Miscellaneous
              </h2>
              <p className="mb-6">
                These Legal Terms and any policies or operating rules posted by
                us on the Services constitute the entire agreement and
                understanding between you and us.
              </p>
              <p className="mb-6">
                Our failure to exercise or enforce any right or provision of
                these Legal Terms shall not operate as a waiver of such right or
                provision.
              </p>
              <p className="mb-6">
                These Legal Terms operate to the fullest extent permitted by
                law.
              </p>
              <p className="mb-6">
                We may assign any or all of our rights and obligations to others
                at any time.
              </p>
              <p className="mb-6">
                We shall not be responsible or liable for any loss, damage,
                delay, or failure to act caused by any cause beyond our
                reasonable control.
              </p>
              <p className="mb-6">
                If any provision or part of a provision of these Legal Terms is
                found to be unlawful, void, or unenforceable, that portion is
                deemed severable and does not affect the validity and
                enforceability of any remaining provisions.
              </p>
              <p className="mb-6">
                There is no joint venture, partnership, employment, or agency
                relationship created between you and us as a result of these
                Legal Terms or use of the Services.
              </p>
              <p className="mb-6">
                You agree that these Legal Terms will not be construed against
                us by virtue of having drafted them.
              </p>
              <p className="mb-6">
                You hereby waive any and all defenses you may have based on the
                electronic form of these Legal Terms and the lack of signing by
                the parties to execute these Legal Terms.
              </p>

              <h2 className="text-2xl font-semibold mb-4 text-[#002A38]">
                22. Contact Us
              </h2>
              <p className="mb-6">
                If you need to resolve a complaint regarding the Services or
                require further information about using the Services, please
                contact us at:
              </p>
              <p className="mb-6 font-semibold">Traced Systems</p>
              <p className="mb-6">
                Njalsgade 76, 4th floor
                <br />
                Copenhagen, Denmark 2300
                <br />
                Denmark
              </p>
              <p className="mb-6">
                <strong>Email:</strong> farhad.rasouli@chromaway.com
              </p>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default TermsOfServiceSheet;
