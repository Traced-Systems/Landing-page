import React from "react";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const accordionItems = [
  {
    title: "Supply Chain Transparency & ESG Tracking",
    content:
      "Provides visibility of raw materials, production processes, and distribution channels while capturing ESG metrics for sustainability reporting, risk assessments, and credit applications.",
  },
  {
    title: "Dynamic Stakeholder Access Control",
    content:
      "Role-based permission settings enable secure data sharing, allowing suppliers, manufacturers, regulators, and consumers to access relevant information without compromising data privacy.",
  },
  {
    title: "Regulatory Compliance & EBSI Integration",
    content:
      "Integrated with the European Blockchain Services Infrastructure (EBSI), leveraging Verifiable Credentials for seamless compliance with EU regulations, ensuring product authenticity and data integrity.",
  },
  {
    title: "Tokenization for Enhanced Engagement",
    content:
      "Enables digital tokenization of products, creating new revenue streams through loyalty programs, ownership verification, and secondary market opportunities, while enhancing brand authenticity.",
  },
  {
    title: "Incentives & Gamification for B2B & B2C Engagement",
    content:
      "Drives stakeholder and consumer engagement through gamified experiences and reward systems, incentivizing sustainable behavior, product loyalty, and supply chain participation.",
  },
  {
    title: "Business Data Privacy & Competitive Intelligence",
    content:
      "Robust encryption protocols safeguard sensitive business data, providing a competitive edge while supporting secure data sharing for audits, certifications, and regulatory submissions.",
  },
  {
    title: "Marketing & Brand Storytelling Tools",
    content:
      "Converts product data into powerful marketing narratives, enabling brands to showcase product origins, ethical sourcing practices, and sustainability achievements to build consumer trust.",
  },
  {
    title: "Web3 Gateway with Gas-Free Transactions",
    content:
      "Combines Web 3.0 innovation with gas-free blockchain transactions, reducing operational costs while ensuring data transparency, scalability, and secure decentralized interactions.",
  },
  {
    title: "Sustainability Dashboard for ESG Reporting",
    content:
      "A comprehensive dashboard aggregates ESG data, streamlining sustainability reporting, enhancing CSR initiatives, and supporting green financing opportunities.",
  },
  {
    title: "Risk Mitigation & Impact Analytics",
    content:
      "Identifies supply chain risks, enabling proactive measures to address sourcing challenges, environmental impact, and regulatory non-compliance before they affect operations.",
  },
];

const AccordionSection = () => {
  const [openItem, setOpenItem] = useState<string | null>(null);

  return (
    <div className="grid md:grid-cols-2 gap-8 items-start">
      {accordionItems.map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-lg shadow-sm md:min-h-20 flex flex-col justify-center"
        >
          <Accordion
            type="single"
            collapsible
            value={openItem}
            onValueChange={
              (value) => setOpenItem(value === openItem ? null : value) // Toggle open/close
            }
          >
            <AccordionItem value={`item-${index}`} className="border-none">
              <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50 md:min-h-20">
                <div className="flex items-center gap-3">
                  <img
                    src="/lovable-uploads/574a5f59-dcd7-416e-b43f-7b13cad071fb.svg"
                    alt="checkmark"
                    className="w-5 h-5"
                  />
                  <span className="text-left font-medium">{item.title}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 pt-0">
                <div className="pl-1 text-gray-700">{item.content}</div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      ))}
    </div>
  );
};

export default AccordionSection;
