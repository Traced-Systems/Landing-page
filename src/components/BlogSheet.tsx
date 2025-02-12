
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
        introduction: "Traced Systems is thrilled to announce a partnership with Doors3, a leading innovator in decentralization solutions for businesses. This collaboration marks a pivotal moment in our journey toward creating sustainable, transparent, and technologically advanced solutions that transform industries. Together, we're setting out to transform the way businesses and consumers interact with products through the implementation of Digital Product Passports.",
        sections: [
          {
            heading: "A Strategic Partnership",
            content: "This collaboration brings together Traced Systems' expertise in digital product passports and Doors3's innovative decentralization solutions, creating a powerful synergy that will drive innovation in supply chain transparency."
          },
          {
            heading: "Transforming Industries",
            content: "Through this partnership, we aim to revolutionize how businesses track, manage, and share product information across their supply chains, making transparency and sustainability not just achievable but efficient."
          },
          {
            heading: "Looking Ahead",
            content: "As we move forward with this partnership, we're excited about the possibilities it creates for businesses looking to embrace digital transformation and sustainable practices."
          }
        ],
        faq: {
          title: "Frequently Asked Questions",
          subtitle: "Common questions about our partnership",
          questions: [
            {
              question: "What is a Digital Product Passport?",
              answer: "A Digital Product Passport is a comprehensive digital record that contains all relevant information about a product's lifecycle, from raw materials to end-of-life."
            },
            {
              question: "How does this partnership benefit businesses?",
              answer: "This partnership combines Traced Systems' expertise in product traceability with Doors3's decentralization solutions, enabling businesses to achieve greater transparency and efficiency in their supply chains."
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
