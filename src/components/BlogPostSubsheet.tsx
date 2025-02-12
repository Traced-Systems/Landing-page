
import React from 'react';
import { Sheet, SheetContent } from "@/components/ui/sheet";
import SheetBackButton from './shared/SheetBackButton';
import IndustrySheetCTA from './shared/IndustrySheetCTA';
import { Link } from 'react-router-dom';

interface BlogPostSubsheetProps {
  isOpen: boolean;
  onClose: () => void;
  post: {
    title: string;
    description: string;
    image: string;
    fullContent?: {
      title: string;
      introduction: string;
      sections: Array<{
        heading: string;
        content: string;
        quote?: string;
      }>;
      faq?: {
        title: string;
        subtitle: string;
        questions: Array<{
          question: string;
          answer: string;
        }>;
      };
    };
  };
}

const BlogPostSubsheet = ({ isOpen, onClose, post }: BlogPostSubsheetProps) => {
  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent 
        side="right" 
        className="!w-[75vw] 2xl:!w-[66vw] sm:!max-w-[75vw] 2xl:!max-w-[66vw] overflow-y-auto bg-[#F7F7F5] border-l shadow-xl p-0 z-[995]"
      >
        <SheetBackButton onBack={onClose} />

        <div className="h-full flex flex-col">
          <div className="pt-24 px-8">
            <div className="max-w-4xl mx-auto">
              {post.fullContent ? (
                <>
                  <div className="flex items-center gap-2 mb-6">
                    <img 
                      src="/lovable-uploads/30fc5d00-8d83-4afc-96dd-3258675f2996.png"
                      alt="Kiflo"
                      className="w-24 h-auto"
                    />
                    <span className="text-gray-600">
                      Written by{" "}
                      <a 
                        href="https://www.kiflo.com/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800"
                      >
                        Kiflo
                      </a>
                    </span>
                  </div>

                  <div className="mb-8">
                    <h1 className="text-4xl font-bold text-primary mb-4">{post.fullContent.title}</h1>
                  </div>

                  <img 
                    src={post.image}
                    alt={post.title}
                    className="w-full h-[400px] object-cover rounded-lg mb-8"
                  />

                  <div className="prose max-w-none mb-12">
                    <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                      For this edition of the Greatest Minds in Partnerships series, we sat down with David Dolhomut, Head of Partnerships & Business Development at Traced Systems, to explore building and scaling a thriving partner ecosystem in the blockchain industry.
                    </p>

                    <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                      With years of experience fostering B2B and B2G collaborations, David has played a pivotal role in bridging traditional enterprises and Web3-native projects. From working at the Embassy of Canada in Poland to shaping the Nordic Blockchain Association, his journey into blockchain partnerships has been defined by a passion for trust, innovation, and real-world adoption.
                    </p>

                    <p className="text-gray-600 mb-12 text-lg leading-relaxed">
                      In this conversation, he shares key insights into overcoming blockchain-specific challenges, onboarding the right partners, balancing traditional and decentralized partnerships, and leveraging technology to scale collaborations in this rapidly evolving space.
                    </p>

                    <section className="mb-12">
                      <h2 className="text-2xl font-bold text-primary mb-6">Navigating the Challenges of Blockchain Partnerships</h2>
                      <p className="text-gray-600 mb-6">
                        Unlike many industries, blockchain partnerships must contend with technical and reputational challenges. According to David, one of the biggest hurdles is the negative perception of blockchain, often fueled by sensationalized media coverage of crypto-related scandals.
                      </p>
                      <blockquote className="border-l-4 border-blue-500 pl-4 my-6 italic text-gray-700">
                        "While illicit activities occur in all financial sectors, blockchain and crypto-related crimes receive disproportionate attention, making it harder to advocate for the technology's legitimate and transformative applications."
                      </blockquote>
                      <p className="text-gray-600">
                        This perception affects enterprise adoption and regulatory frameworks, leading many policymakers to react to negative headlines rather than evaluating blockchain's potential.
                      </p>
                      <p className="text-gray-600 mt-6">
                        Despite these challenges, real-world use cases are proving blockchain's value. In supply chain industries like textile and battery manufacturing, blockchain is already enhancing traceability and accountability, helping businesses comply with sustainability standards and combat counterfeiting. However, partnerships in this space require a proactive approach to shifting the narrative, highlighting tangible success stories over hype-driven fears.
                      </p>
                    </section>

                    <section className="mb-12">
                      <h2 className="text-2xl font-bold text-primary mb-6">How to Identify and Onboard the Right Partners in a Decentralized Industry</h2>
                      <p className="text-gray-600 mb-6">
                        In blockchain, partnerships drive adoption, interoperability, and innovation. Unlike traditional industries, where partnerships often follow structured, centralized agreements, Web3 collaboration thrives on flexibility and shared ecosystems.
                      </p>
                      <p className="text-gray-600 mb-6">
                        At Traced Systems, David and his team focus on four key types of partners:
                      </p>
                      <ul className="list-disc pl-6 mb-6 text-gray-600">
                        <li>Consulting firms that guide businesses into Web3 adoption</li>
                        <li>Technology providers that enhance blockchain solutions</li>
                        <li>Compliance experts that ensure regulatory alignment</li>
                        <li>Marketplaces that connect businesses to decentralized tools</li>
                      </ul>
                      <blockquote className="border-l-4 border-blue-500 pl-4 my-6 italic text-gray-700">
                        "We start by aligning objectives, improving adoption, compliance, or interoperability. For tech partners, we focus on seamless integration through APIs, while compliance partnerships ensure regulatory adherence."
                      </blockquote>
                    </section>

                    <section className="mb-12">
                      <h2 className="text-2xl font-bold text-primary mb-6">Balancing Traditional Enterprises and Web3-Native Partnerships</h2>
                      <p className="text-gray-600 mb-6">
                        One of the biggest challenges in blockchain partnerships is bridging the gap between traditional businesses and Web3-native projects.
                      </p>
                      <blockquote className="border-l-4 border-blue-500 pl-4 my-6 italic text-gray-700">
                        "With Web3-native collaborations, things move faster because there's already a shared understanding of tokenomics, NFT integrations, and interoperability."
                      </blockquote>
                      <p className="text-gray-600 mb-6">
                        On the other hand, traditional enterprise adoption requires patience and structured engagement. Large corporations need clear, value-driven blockchain solutions, usually facilitated by trusted Web3 consultants like Doors3. A great example is Traced Systems' collaboration with fashion brand BLK DNM, where they're building a Web3-driven consumer experience that blends exclusivity with digital ownership.
                      </p>
                    </section>

                    <section className="mb-12">
                      <h2 className="text-2xl font-bold text-primary mb-6">How to Measure the Success of a Blockchain Partner Ecosystem</h2>
                      <p className="text-gray-600 mb-6">
                        The success of a blockchain partner ecosystem isn't just about the number of signed agreements; it's about delivering real value to clients through combined competencies.
                      </p>
                      <blockquote className="border-l-4 border-blue-500 pl-4 my-6 italic text-gray-700">
                        "The true value lies in offering clients a bundled deal rather than individual solutions."
                      </blockquote>
                      <p className="text-gray-600">
                        An effective ecosystem thrives on trust and collaboration. Partners must actively engage in shared projects to scale successfully, introduce new business opportunities, and contribute to long-term ecosystem growth.
                      </p>
                    </section>

                    <section className="bg-gray-50 rounded-lg p-8 mb-12">
                      <h2 className="text-2xl font-bold text-primary mb-2">Frequently Asked Questions</h2>
                      <p className="text-gray-600 mb-8">Your right to know</p>
                      <p className="text-gray-600 mb-8">Got a question? Get your answer.</p>

                      <div className="space-y-6">
                        <div>
                          <h3 className="font-semibold text-lg mb-2">What are the key benefits of partnerships in the blockchain industry?</h3>
                          <p className="text-gray-600">
                            Blockchain partnerships drive innovation, adoption, and interoperability by connecting projects with complementary expertise. Strategic collaborations help businesses integrate decentralized solutions, comply with evolving regulations, and enhance security, ultimately accelerating industry-wide adoption and trust.
                          </p>
                        </div>

                        <div>
                          <h3 className="font-semibold text-lg mb-2">How do blockchain companies attract the right partners?</h3>
                          <p className="text-gray-600">
                            Successful blockchain companies attract partners by offering cutting-edge technology, clear value propositions, and strong ecosystem support.
                          </p>
                        </div>

                        <div>
                          <h3 className="font-semibold text-lg mb-2">What challenges do blockchain partnerships face?</h3>
                          <p className="text-gray-600">
                            Blockchain partnerships must navigate regulatory uncertainty, trust issues, and interoperability challenges. Overcoming negative industry perceptions and ensuring compliance with frameworks like ESPR and GDPR are crucial.
                          </p>
                        </div>

                        <div>
                          <h3 className="font-semibold text-lg mb-2">How do Web3-native partnerships differ from enterprise blockchain collaborations?</h3>
                          <p className="text-gray-600">
                            Web3-native partnerships move faster due to shared knowledge of tokenomics, NFTs, and decentralized governance, while enterprise collaborations require structured onboarding, clear ROI demonstration, and regulatory compliance.
                          </p>
                        </div>

                        <div>
                          <h3 className="font-semibold text-lg mb-2">What role does technology play in managing blockchain partnerships?</h3>
                          <p className="text-gray-600">
                            Partner Relationship Management (PRM) platforms streamline blockchain partnerships by automating onboarding, tracking engagement, and managing deal pipelines.
                          </p>
                        </div>
                      </div>
                    </section>
                  </div>
                </>
              ) : (
                <>
                  <div className="mb-8">
                    <h1 className="text-4xl font-bold text-primary mb-4">{post.title}</h1>
                  </div>

                  <img 
                    src={post.image}
                    alt={post.title}
                    className="w-full h-[400px] object-cover rounded-lg mb-8"
                  />

                  <div className="prose max-w-none mb-12">
                    <p className="text-gray-600 mb-4">
                      {post.description}
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>

          <div className="mt-auto w-full">
            <IndustrySheetCTA 
              title="Want to Learn More About Our Solutions?"
              description="Discover how our digital product passport can transform your business operations and help you meet sustainability goals."
            />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default BlogPostSubsheet;
