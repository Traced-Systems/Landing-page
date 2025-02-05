import React from 'react';
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check } from "lucide-react";

interface OurValuesSheetProps {
  isOpen: boolean;
  onClose: () => void;
}

const accordionItems = [
  {
    title: "Supply Chain Transparency & ESG Tracking",
    content: "Provides visibility of raw materials, production processes, and distribution channels while capturing ESG metrics for sustainability reporting, risk assessments, and credit applications."
  },
  {
    title: "Dynamic Stakeholder Access Control",
    content: "Role-based permission settings enable secure data sharing, allowing suppliers, manufacturers, regulators, and consumers to access relevant information without compromising data privacy."
  },
  {
    title: "Regulatory Compliance & EBSI Integration",
    content: "Integrated with the European Blockchain Services Infrastructure (EBSI), leveraging Verifiable Credentials for seamless compliance with EU regulations, ensuring product authenticity and data integrity."
  },
  {
    title: "Tokenization for Enhanced Engagement",
    content: "Enables digital tokenization of products, creating new revenue streams through loyalty programs, ownership verification, and secondary market opportunities, while enhancing brand authenticity."
  },
  {
    title: "Incentives & Gamification for B2B & B2C Engagement",
    content: "Drives stakeholder and consumer engagement through gamified experiences and reward systems, incentivizing sustainable behavior, product loyalty, and supply chain participation."
  },
  {
    title: "Business Data Privacy & Competitive Intelligence",
    content: "Robust encryption protocols safeguard sensitive business data, providing a competitive edge while supporting secure data sharing for audits, certifications, and regulatory submissions."
  },
  {
    title: "Marketing & Brand Storytelling Tools",
    content: "Converts product data into powerful marketing narratives, enabling brands to showcase product origins, ethical sourcing practices, and sustainability achievements to build consumer trust."
  },
  {
    title: "Web3 Gateway with Gas-Free Transactions",
    content: "Combines Web 3.0 innovation with gas-free blockchain transactions, reducing operational costs while ensuring data transparency, scalability, and secure decentralized interactions."
  },
  {
    title: "Sustainability Dashboard for ESG Reporting",
    content: "A comprehensive dashboard aggregates ESG data, streamlining sustainability reporting, enhancing CSR initiatives, and supporting green financing opportunities."
  },
  {
    title: "Risk Mitigation & Impact Analytics",
    content: "Identifies supply chain risks, enabling proactive measures to address sourcing challenges, environmental impact, and regulatory non-compliance before they affect operations."
  }
];

const OurValuesSheet = ({ isOpen, onClose }: OurValuesSheetProps) => {
  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent 
        side="right" 
        className="!w-[75vw] 2xl:!w-[66vw] sm:!max-w-[75vw] 2xl:!max-w-[66vw] overflow-y-auto bg-[#F7F7F5] border-l shadow-xl"
      >
        <div className="h-full flex flex-col pt-20">
          <Button 
            variant="ghost" 
            onClick={onClose}
            className="absolute left-4 top-4 hover:bg-gray-100"
          >
            <ArrowLeft className="h-6 w-6" />
          </Button>

          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-primary mb-4">Our Values</h1>
            <h2 className="text-2xl font-semibold text-primary mb-2">Traced Systems</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Traced Systems, powered by Chromia offers businesses an intuitive, secure solution to track products throughout their entire lifecycle from production to end-of-life ensuring full transparency, compliance, and trust at every stage.
            </p>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              By merging traditional processes with modern technology, we help organizations unlock new efficiencies, engage customers more deeply, and confidently embrace the future of sustainable innovation.
            </p>
          </div>

          <div className="px-8 space-y-12">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <Tabs defaultValue="mission" className="flex h-[500px]">
                <TabsList className="flex flex-col h-full w-[40%] space-y-0 bg-[#F5F5F5] rounded-none p-0">
                  {["mission", "focus", "solution"].map((tab) => (
                    <TabsTrigger
                      key={tab}
                      value={tab}
                      className="w-full h-full flex items-center px-6 py-8 text-left justify-start rounded-none border-l-4 border-transparent data-[state=active]:bg-[#204850] data-[state=active]:text-white data-[state=active]:border-[#204850] transition-all"
                    >
                      {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </TabsTrigger>
                  ))}
                </TabsList>
                <div className="relative w-[60%]">
                  <TabsContent value="mission" className="m-0 h-full">
                    <div className="relative h-full">
                      <img 
                        src="/lovable-uploads/aa6a2a37-d9f1-44a7-8d11-a32893b35db5.png" 
                        alt="Mission" 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center p-8">
                        <p className="text-white font-bold text-lg text-center">
                          Our mission is to transform supply chain efficiency and engagement by leveraging blockchain technology to enhance transparency, collaboration, and customer loyalty. From raw materials to recycling, we empower businesses to optimize workflows, build stronger brand connections, and deliver sustainable value to every stakeholder in the chain.
                        </p>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="focus" className="m-0 h-full">
                    <div className="relative h-full">
                      <img 
                        src="/lovable-uploads/aa6a2a37-d9f1-44a7-8d11-a32893b35db5.png" 
                        alt="Focus" 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center p-8">
                        <p className="text-white font-bold text-lg text-center">
                          Our focus is on helping companies stay ahead of evolving regulations while ensuring a tangible return on investment. We guide organizations in targeting and engaging the right audiences (from legislators to end consumers) across both B2B and B2C environments. By employing a progressive, future-proof approach, we enable companies to meet (and exceed) their sustainability goals without compromising budgets or growth.
                        </p>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="solution" className="m-0 h-full">
                    <div className="relative h-full">
                      <img 
                        src="/lovable-uploads/aa6a2a37-d9f1-44a7-8d11-a32893b35db5.png" 
                        alt="Solution" 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center p-8">
                        <p className="text-white font-bold text-lg text-center">
                          Our platform goes beyond mere compliance. By identifying and collaborating with key partners in the value chain, we help businesses integrate a truly circular approach that aligns with European values and environmental objectives. Whether you're seeking to reduce waste, boost resource efficiency, or enhance brand loyalty, our solution puts you at the forefront of sustainable innovation today and into the future.
                        </p>
                      </div>
                    </div>
                  </TabsContent>
                </div>
              </Tabs>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {accordionItems.map((item, index) => (
                <Accordion type="single" collapsible key={index} className="bg-white rounded-lg shadow-sm">
                  <AccordionItem value={`item-${index}`} className="border-none">
                    <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50">
                      <div className="flex items-center gap-3">
                        <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-left font-medium">{item.title}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 pt-0">
                      <div className="pl-8">
                        {item.content}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              ))}
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default OurValuesSheet;