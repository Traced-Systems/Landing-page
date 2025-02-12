
import React, { useState } from 'react';
import { Sheet, SheetContent } from "@/components/ui/sheet";
import SheetBackButton from './shared/SheetBackButton';
import AboutCTA from './shared/AboutCTA';
import SheetBackgroundSection from './shared/SheetBackgroundSection';
import BlogPostSubsheet from './BlogPostSubsheet';

interface BlogSheetProps {
  isOpen: boolean;
  onClose: () => void;
}

const BlogSheet = ({ isOpen, onClose }: BlogSheetProps) => {
  const [activePost, setActivePost] = useState<typeof blogPosts[0] | null>(null);

  const blogPosts = [
    {
      title: "The Blueprint for a Successful Blockchain Partner Ecosystem",
      description: "In this edition of the Greatest Minds in Partnerships series, David Dolhomut, Head of Partnerships & Business Development at Traced Systems, shares his insights on building a thriving blockchain partner ecosystem...",
      image: "/lovable-uploads/pilot.png",
      fullContent: {
        title: "The Blueprint for a Successful Blockchain Partner Ecosystem",
        introduction: "In this edition of the Greatest Minds in Partnerships series, David Dolhomut, Head of Partnerships & Business Development at Traced Systems, shares his insights on building a thriving blockchain partner ecosystem. From overcoming industry challenges and onboarding the right partners to balancing traditional enterprises with Web3-native collaborations, David provides a blueprint for successful blockchain partnerships. Learn how to navigate regulatory landscapes, drive adoption through strategic alliances, and leverage technology like PRM platforms to scale blockchain ecosystems effectively.",
        sections: [
          {
            heading: "Building Strong Foundations",
            content: "The key to a successful blockchain partner ecosystem lies in establishing strong foundations from the start. This includes clear communication channels, well-defined objectives, and mutual understanding of goals between all parties involved.",
            quote: "While illicit activities occur in all financial sectors, blockchain and crypto-related crimes receive disproportionate attention, making it harder to advocate for the technology's legitimate and transformative applications."
          },
          {
            heading: "Navigating Challenges",
            content: "One of the biggest challenges in building a blockchain partner ecosystem is bridging the gap between traditional enterprises and Web3-native organizations. Each comes with its own set of expectations, processes, and cultural nuances that need to be carefully managed."
          },
          {
            heading: "Strategic Alliance Formation",
            content: "Successful partnerships in the blockchain space require a strategic approach to alliance formation. This includes careful partner selection, clear value proposition alignment, and structured onboarding processes."
          }
        ],
        faq: {
          title: "Frequently Asked Questions",
          subtitle: "Your right to know",
          questions: [
            {
              question: "What are the key benefits of partnerships in the blockchain industry?",
              answer: "Blockchain partnerships drive innovation, adoption, and interoperability by connecting projects with complementary expertise. Strategic collaborations help businesses integrate decentralized solutions, comply with evolving regulations, and enhance security, ultimately accelerating industry-wide adoption and trust."
            },
            {
              question: "How do blockchain companies attract the right partners?",
              answer: "Successful blockchain companies attract partners by offering cutting-edge technology, clear value propositions, and strong ecosystem support."
            },
            {
              question: "What challenges do blockchain partnerships face?",
              answer: "Blockchain partnerships must navigate regulatory uncertainty, trust issues, and interoperability challenges. Overcoming negative industry perceptions and ensuring compliance with frameworks like ESPR and GDPR are crucial."
            }
          ]
        }
      }
    },
    {
      title: "Traced Systems and Doors3: Pioneering the Future of Digital Product Passports",
      description: "Traced Systems is thrilled to announce a partnership with Doors3, a leading innovator in decentralization solutions for businesses...",
      image: "/lovable-uploads/pilot.png",
      fullContent: {
        title: "Traced Systems and Doors3: Pioneering the Future of Digital Product Passports",
        introduction: "In today's fast-paced, interconnected world, sustainability, transparency, and innovation have become more important than ever. At Traced Systems, we are at the forefront of this movement, transforming industries through blockchain-powered solutions that inspire trust and promote accountability.",
        sections: [
          {
            heading: "Who Are We?",
            content: "Our journey began as part of a ChromaWay project with the European Blockchain Services Infrastructure (EBSI), an EU-led initiative designed to explore the transformative potential of blockchain and distributed ledger technologies (DLTs). Since 2021, we have been deeply involved in shaping this vision, partnering with the EU in a multi-phased approach that combines rigorous research, advanced technological development, and extensive field testing.",
            quote: "Traced Systems' Digital Product Passport transforms complex regulatory compliance into a strategic advantage, enabling businesses to seamlessly track, verify, and optimize their product lifecycles with unprecedented transparency and sustainability intelligence."
          },
          {
            heading: "Why Choose Traced Systems?",
            content: "Sustainability is no longer a choice – it's a necessity. Traced Systems empowers businesses to embrace this mandate by providing a seamless end-to-end supply chain management service. Our solution simplifies product tracking from production to end-of-life, ensuring regulatory compliance aligned with the European Commission's priorities, support for regulations like the Ecodesign for Sustainable Products Regulation (ESPR), and future-proofed business models that embrace decentralization. But we don't stop there. By leveraging Web3's dynamic capabilities, we go beyond compliance, offering secure, personalized digital experiences that enhance user engagement, build trust, and showcase organizations' commitment to sustainability."
          },
          {
            heading: "Battery Value Chain",
            content: "Our strategic partnerships within the battery sector showcase the realized potential of our blockchain-powered DPP solution. We've developed and implemented a Digital Product Passport for batteries with Cling Systems, facilitated collaborations with key partners and initial clients, and enabled comprehensive lifecycle management from manufacturing to second-life applications and recycling. By fostering transparency and traceability, our solution ensures accountability across the supply chain, circular business models, and a resilient battery ecosystem aligned with circular economy principles."
          },
          {
            heading: "Textile Industry",
            content: "In the textile sector, we blend traceability expertise with the transformative power of Web3. We offer blockchain-powered digital wardrobes for garment authenticity, digital twins that enhance consumer engagement, and real-time data and secure transactions from production to resale & recycling. By embracing Web3 opportunities, we are redefining the future of textiles, fostering trust, efficiency, and sustainability."
          },
          {
            heading: "Join the Movement",
            content: "We invite industry leaders, sustainability advocates, and technology enthusiasts to join us in our mission to drive change. Discover how Traced Systems ensures full transparency and traceability across a product's entire lifecycle, set new benchmarks in compliance, sustainability, and innovation. Whether you're in textiles, batteries, or another industry, we're ready to help you implement Digital Product Passports. Let's collaborate to create a better tomorrow together. Connect with Traced Systems today and be part of the movement shaping the future of sustainable and transparent industries."
          }
        ],
        faq: {
          title: "Frequently Asked Questions",
          subtitle: "Your right to know",
          questions: [
            {
              question: "What are the key benefits of partnerships in the blockchain industry?",
              answer: "Blockchain partnerships drive innovation, adoption, and interoperability by connecting projects with complementary expertise. Strategic collaborations help businesses integrate decentralized solutions, comply with evolving regulations, and enhance security, ultimately accelerating industry-wide adoption and trust."
            },
            {
              question: "How do blockchain companies attract the right partners?",
              answer: "Successful blockchain companies attract partners by offering cutting-edge technology, clear value propositions, and strong ecosystem support. Businesses that provide seamless onboarding, compliance solutions, and co-marketing opportunities create long-term, mutually beneficial relationships in the decentralized space."
            },
            {
              question: "What challenges do blockchain partnerships face?",
              answer: "Blockchain partnerships must navigate regulatory uncertainty, trust issues, and interoperability challenges. Overcoming negative industry perceptions and ensuring compliance with frameworks like ESPR and GDPR are crucial for fostering credibility and securing enterprise adoption."
            },
            {
              question: "How do Web3-native partnerships differ from enterprise blockchain collaborations?",
              answer: "Web3-native partnerships move faster due to shared knowledge of tokenomics, NFTs, and decentralized governance, while enterprise collaborations require structured onboarding, clear ROI demonstration, and regulatory compliance. Successful blockchain companies balance both by translating complex Web3 concepts into business-friendly solutions."
            },
            {
              question: "What role does technology play in managing blockchain partnerships?",
              answer: "Technology, especially Partner Relationship Management (PRM) platforms, streamlines blockchain partnerships by automating onboarding, tracking engagement, and managing deal pipelines. PRMs provide shared dashboards for co-marketing, revenue tracking, and compliance monitoring, helping companies scale their partner ecosystems efficiently."
            }
          ]
        }
      }
    }
  ];

  const handlePostClick = (post: typeof blogPosts[0]) => {
    setActivePost(post);
  };

  const handleSubsheetClose = () => {
    setActivePost(null);
  };

  return (
    <>
      <Sheet open={isOpen} onOpenChange={onClose}>
        <SheetContent 
          side="right" 
          className="!w-[75vw] 2xl:!w-[66vw] sm:!max-w-[75vw] 2xl:!max-w-[66vw] overflow-y-auto bg-[#F7F7F5] border-l shadow-xl p-0"
        >
          <SheetBackButton onBack={onClose} />

          <div className="h-full flex flex-col">
            <SheetBackgroundSection>
              <div className="pt-24 px-8">
                <h1 className="text-3xl font-bold text-center mb-8">Blog</h1>

                <div className="text-center mb-12">
                  <p className="text-gray-600">
                    Insights and updates from our team about digital product passports, sustainability, and innovation.
                  </p>
                </div>
              </div>
            </SheetBackgroundSection>

            <div className="px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {blogPosts.map((post, index) => (
                  <div 
                    key={index}
                    onClick={() => handlePostClick(post)}
                    className="bg-white rounded-xl p-6 shadow-[4px_4px_10px_0px_rgba(0,0,0,0.1),-4px_-4px_10px_0px_rgba(255,255,255,0.9)] hover:shadow-[6px_6px_12px_0px_rgba(0,0,0,0.15),-6px_-6px_12px_0px_rgba(255,255,255,0.95)] transition-all duration-300 cursor-pointer"
                  >
                    <img 
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                    <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{post.description}</p>
                    <button className="text-blue-500 hover:text-blue-600 transition-colors">
                      Read More →
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-auto w-full">
              <AboutCTA onClose={onClose} />
            </div>
          </div>
        </SheetContent>
      </Sheet>

      {activePost && (
        <BlogPostSubsheet 
          isOpen={!!activePost}
          onClose={handleSubsheetClose}
          post={activePost}
        />
      )}
    </>
  );
};

export default BlogSheet;
