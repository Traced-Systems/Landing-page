
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
        introduction: "Sustainability, transparency, and innovation are becoming essential in today's interconnected world. At Traced Systems, we are committed to driving change through blockchain-powered solutions that promote trust and accountability.",
        sections: [
          {
            heading: "Who Are We?",
            content: "Our journey began with ChromaWay as part of the European Blockchain Services Infrastructure (EBSI) project. This EU-led initiative explores the potential of blockchain and distributed ledger technologies (DLTs).\n\nSince 2021, we have been working alongside the European Commission to develop and test solutions that bring transparency, compliance, and efficiency to industries.\n\nWe created the Digital Product Passport (DPP) using Chromia's blockchain technology, allowing businesses to track, verify, and optimize their product lifecycles with greater transparency.\n\nToday, Traced Systems is more than a digital tracking tool; it is a comprehensive solution that integrates sustainability, compliance, and innovation."
          },
          {
            heading: "Why Choose Traced Systems?",
            content: "Sustainability is no longer optional—it is a business necessity. Traced Systems helps companies manage their supply chains efficiently while staying aligned with regulations like the Ecodesign for Sustainable Products Regulation (ESPR).\n\nOur decentralized solutions go beyond compliance, helping businesses enhance transparency, engage consumers, and showcase their sustainability commitments."
          },
          {
            heading: "Empowering Industries Through Collaboration",
            content: "We are currently implementing Digital Product Passports in two key industries:\n\n• Batteries – Preparing for ESPR compliance in 2027\n• Textiles – Supporting brands in their transition to sustainable practices\n\nLooking ahead, we aim to expand our platform to serve more industries and supply chains."
          },
          {
            heading: "Battery Value Chain",
            content: "Our partnerships in the battery sector demonstrate the value of our blockchain-powered DPP solution:\n\n• Developed and implemented a Digital Product Passport for batteries with Cling Systems\n• Collaborated with key industry players to enhance lifecycle management\n• Supported second-life applications and recycling efforts\n• Promoted accountability and circular economy models\n\nThis solution helps build a transparent, resilient battery ecosystem that aligns with sustainability goals."
          },
          {
            heading: "Textile Industry",
            content: "In the textile sector, we combine traceability technology with Web3 innovations to enhance transparency and efficiency.\n\n• Digital wardrobes provide garment authenticity using blockchain-powered digital twins\n• Real-time data ensures traceability from production to recycling\n• Secure transactions empower manufacturers, retailers, and consumers\n\nBy leveraging blockchain, we are redefining sustainability in the textile industry."
          },
          {
            heading: "Join the Movement",
            content: "We invite industry leaders, sustainability advocates, and technology enthusiasts to collaborate with us.\n\nDiscover how Traced Systems supports:\n\n• Full product lifecycle transparency\n• Regulatory compliance and sustainability benchmarks\n• Innovative blockchain solutions for traceability and authentication\n\nInterested in making an impact? Get in touch with Traced Systems today."
          }
        ],
        faq: {
          title: "Frequently Asked Questions",
          subtitle: "Your right to know",
          questions: [
            {
              question: "What are the key benefits of blockchain partnerships?",
              answer: "Blockchain partnerships drive innovation, adoption, and interoperability while improving security and regulatory compliance."
            },
            {
              question: "How do blockchain companies attract the right partners?",
              answer: "Companies with cutting-edge technology, clear value propositions, and strong ecosystem support build successful partnerships."
            },
            {
              question: "What challenges do blockchain partnerships face?",
              answer: "Regulatory uncertainty, interoperability issues, and industry misconceptions are key challenges that need to be addressed."
            },
            {
              question: "How do Web3-native partnerships differ from enterprise blockchain collaborations?",
              answer: "Web3-native partnerships move quickly due to shared knowledge of tokenomics, NFTs, and governance, while enterprises require structured onboarding, clear ROI, and regulatory compliance."
            },
            {
              question: "What role does technology play in managing blockchain partnerships?",
              answer: "Partner Relationship Management (PRM) platforms help automate onboarding, track engagement, and manage deal pipelines, making blockchain partnerships more effective."
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
