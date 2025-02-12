import React, { useState } from 'react';
import { Sheet, SheetContent } from "@/components/ui/sheet";
import SheetBackButton from './shared/SheetBackButton';
import AboutCTA from './shared/AboutCTA';
import SheetBackgroundSection from './shared/SheetBackgroundSection';
import UseCaseSubsheet from './UseCaseSubsheet';

interface UseCasesSheetProps {
  isOpen: boolean;
  onClose: () => void;
}

const UseCasesSheet = ({ isOpen, onClose }: UseCasesSheetProps) => {
  const [activeCase, setActiveCase] = useState<typeof cases[0] | null>(null);

  const cases = [
    {
      title: "BLK DNM: Connected Fashion",
      description: "BLK DNM has launched their 'Connected Fashion' campaign, delivering the first collection of apparel embedded with...",
      image: "/lovable-uploads/2320cd7d-0e5e-4635-b26a-2d2eaeb0aa50.png"
    },
    {
      title: "Battery Lifecycle Innovation",
      description: "What if a battery's lifecycle routing left a verifiable trail? This pilot project, powered by a blockchain-based Digital Product Passport...",
      image: "/lovable-uploads/efedcb76-b69e-4a52-8689-41020d02ede5.png",
      fullContent: {
        title: "Completed DPP pilot project between Cling Systems, Traced Systems, Instagrid & Batteriretur",
        authorIcon: "/lovable-uploads/8a070271-5402-4465-91d1-3ad9ddf99fb4.png",
        introduction: "What if a battery's history could stay with it until the end of its life? When batteries reach this stage, understanding their journey - where they've been, what they've been through, and their final destination - can be surprisingly challenging...",
        content: [
          {
            heading: "Introduction",
            text: "Yet this information is critical for deciding whether a battery should be recalled, reused, remanufactured, or recycled. Without reliable systems to trace and access this data, ensuring transparency and improving battery recycling efficiency becomes an uphill battle.\n\nHowever, with the European Union's upcoming ESPR regulations on the horizon, Cling Systems and Traced Systems saw this opportunity to innovate. Together, they launched a pilot project introducing a pragmatic Digital Product Passport (DPP) for batteries powered by blockchain."
          },
          {
            heading: "The pilot project",
            text: "This pilot focused on the downstream side of the battery lifecycle - what happens after production when batteries are collected, recycled, or repurposed. By working closely with Instagrid (OEM) and Batteriretur (collector), the team aimed to reimagine how batteries are tracked and managed.\n\nOver six months, a blockchain-powered DPP application was developed, combining Cling Systems' tools with the Chromia blockchain from Traced Systems. This collaborative approach, driven by insights and expertise from Instagrid and Batteriretur, ensured the DPP was designed to meet the functionality, requirements, and integration needs of all stakeholders."
          },
          {
            heading: "The outcome? A functional DPP.",
            text: "The role-based passport enables control over access to specific data points for each user or actor in the value chain, ensuring easy data accessibility while maintaining privacy. OEMs and producers can add product information, while downstream actors can access this data and add events related to the end-of-life (EoL) management of batteries.\n\nEnabling:\n\n• Downstream information: OEMs, like Instagrid, can track where their batteries end up and gain insights into their usage.\n• Upstream information: Downstream players, such as Batteriretur, can access product and chemistry information about the batteries they receive, improving operational efficiency."
          },
          {
            heading: "Looking ahead",
            text: "The pilot highlighted the importance of involving additional industry stakeholders to further refine and enhance the system. Scaling the DPP will require greater automation and seamless integration into existing workflows to ensure it can operate efficiently at a larger scale."
          },
          {
            heading: "Next steps",
            text: "• Traced Systems plans to expand the DPP to include more battery types and users, enhance compliance features with advanced reporting tools, and improve usability with API integrations.\n• Cling Systems will continue its mission to accelerate circular value chains by providing businesses with tools to maximize the value of their batteries.\n\nWant to learn more? Don't miss our upcoming webinar together with Doors3, where we'll dive deeper into the pilot project results and explore how your organization can benefit from blockchain-powered Digital Product Passports."
          }
        ]
      }
    },
    {
      title: "Be Our Next Use Case",
      description: "Ready to innovate and comply with evolving legislation? Let's explore how the DPP framework can enhance customer experiences and drive circularity...",
      image: "/lovable-uploads/36f60108-99d8-465a-81a4-e52c86799730.png"
    }
  ];

  const handleCaseClick = (useCase: typeof cases[0]) => {
    setActiveCase(useCase);
  };

  const handleSubsheetClose = () => {
    setActiveCase(null);
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
                <h1 className="text-3xl font-bold text-center mb-8">Use Cases</h1>

                <div className="text-center mb-12">
                  <p className="text-gray-600">
                    Discover how Traced Systems transforms challenges into opportunities for businesses.
                  </p>
                </div>
              </div>
            </SheetBackgroundSection>

            <div className="px-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                {cases.map((item, index) => (
                  <div 
                    key={index}
                    onClick={() => handleCaseClick(item)}
                    className="bg-white rounded-xl p-6 shadow-[4px_4px_10px_0px_rgba(0,0,0,0.1),-4px_-4px_10px_0px_rgba(255,255,255,0.9)] hover:shadow-[6px_6px_12px_0px_rgba(0,0,0,0.15),-6px_-6px_12px_0px_rgba(255,255,255,0.95)] transition-all duration-300 cursor-pointer"
                  >
                    <img 
                      src={item.image}
                      alt={item.title}
                      className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-600 mb-4">{item.description}</p>
                    <button className="text-blue-500 hover:text-blue-600 transition-colors">
                      Know More →
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

      {activeCase && (
        <UseCaseSubsheet 
          isOpen={!!activeCase}
          onClose={handleSubsheetClose}
          useCase={activeCase}
        />
      )}
    </>
  );
};

export default UseCasesSheet;
