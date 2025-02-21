import React, { useState, useEffect } from "react";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import SheetBackButton from "./shared/SheetBackButton";
import AboutCTA from "./shared/AboutCTA";
import SheetBackgroundSection from "./shared/SheetBackgroundSection";
import UseCaseSubsheet from "./UseCaseSubsheet";
import { ChevronRight } from "lucide-react";
import { UseCase } from "@/types/useCase";

interface UseCasesSheetProps {
  isOpen: boolean;
  onClose: () => void;
  initialCase: UseCase | null;
}

const UseCasesSheet = ({
  isOpen,
  onClose,
  initialCase,
}: UseCasesSheetProps) => {
  const [activeCase, setActiveCase] = useState<UseCase | null>(null);

  useEffect(() => {
    if (initialCase) {
      setActiveCase(initialCase);
    }
  }, [initialCase]);

  const cases: UseCase[] = [
    {
      title: "BLK DNM: Connected Fashion on Chromia Appnet",
      description:
        "BLK DNM has launched their 'Connected Fashion' campaign, delivering their first collection of apparel embedded with blockchain-enabled hardware! This exclusive collection features 72 signature leather jackets...",
      image: "/lovable-uploads/1896ee6a-5182-48cf-bab2-dcd33adf89cf.png",
      fullContent: {
        title: "BLK DNM: Connected Fashion on Chromia Appnet",
        authorIcon: "/lovable-uploads/5ce2f433-ac13-4162-97af-4ed813cff152.png",
        introduction: (
          <>
            <a
              href="https://digital.blkdnm.com/?ref=blog.chromia.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#E4AC70] hover:text-[#C66600]"
            >
              BLK DNM
            </a>{" "}
            has launched their 'Connected Fashion' campaign, delivering their
            first collection of apparel embedded with blockchain-enabled
            hardware! This exclusive collection features 72 signature leather
            jackets in 7 styles, merging fashion and technology to deliver
            handcrafted and timeless designs that exist in both the physical and
            virtual world.
          </>
        ),
        content: [
          {
            heading: "Introduction",
            text: "The ambitious campaign includes product drops over multiple dates in October and November, with events scheduled in New York City, Stockholm, and Los Angeles. Through collaboration with handpicked influencers and retail partner Bloomingdale's, BLK DNM will turn some heads.\n\nLet's take a closer look at the technical aspects, and explore the role Chromia will play in bringing 'Connected Fashion' to the world.",
          },
          {
            heading: "Embedded NFC Chips and Digital Twins",
            text: "Every physical garment in the collection is embedded with an NFC chip, and has a 'digital twin' that exists on Chromia Appnet. This allows for several innovations:\n\n• Proof of authenticity: Tap the garment and get immediate proof of authenticity from the blockchain. This feature eliminates counterfeits and fake claims.\n• Product history: Every connected garment's blockchain record can store information about its history, from inception to the present. This can provide insight about the age, material composition, and production of the item.\n• Digital Identity: The product itself has an 'identity' that can change owners and evolve over time. By scanning the item, the owner will be able to see all their active and future capabilities - for example, a record can be added when the garment is present at a special event.\n• 'Forever Refund' program: Since the authenticity and history of these garments can be quickly accessed, BLK DNM will offer a program by which the owner can exchange connected items for a percentage of their original retail value. These items can then be reused, recycled, resold, upcycled, downcycled, etc., depending on their age and condition. This program aligns with the company's commitment to environmental sustainability and responsibility.",
          },
          {
            heading: "Why Chromia x BLK DNM is a Fit",
            text: "The above features' utility and ease of use are greatly enhanced when anyone can participate, regardless of their technical knowledge about Web3 or blockchain. BLK DNM can offer these features as a 'value-added service', that people interact with through simple interfaces like a web browser or smartphone app.\n\nFrom Chromia's perspective, the project aligns with our vision of impacting 'real world' industries with Web3 technology. We see great potential for blockchain to improve efficiency and sustainability while offering consumers added value through exciting and innovative features.\n\nWe welcome BLK DNM, and encourage our community to check out the collection on their website and follow them on Instagram. And as always, keep an eye on our official channels for more on this project as well as others coming to the Chromia Shared Appnet!",
          },
          {
            heading: "About Chromia",
            text: "Modern society runs on data and every online service you're using is built upon underlying databases - ranging from your online bank to music streaming and gaming. Chromia is a relational blockchain - a combination of a relational database and a blockchain - making it easy to develop user-friendly decentralized apps for almost any industry, including DeFi, NFTs, gaming, and more.",
          },
        ],
      },
    },
    {
      title: "Battery Lifecycle Innovation",
      description:
        "What if a battery's history could stay with it until the end of its life? When batteries reach this stage, understanding their journey can be surprisingly challenging...",
      image: "/lovable-uploads/0d128533-7eb5-4de9-9aa6-43943eb3a716.png",
      fullContent: {
        title:
          "Completed DPP pilot project between Cling Systems, Traced Systems, Instagrid & Batteriretur",
        authorIcon: "/lovable-uploads/5ce2f433-ac13-4162-97af-4ed813cff152.png",
        introduction:
          "What if a battery's history could stay with it until the end of its life? When batteries reach this stage, understanding their journey - where they've been, what they've been through, and their final destination - can be surprisingly challenging...",
        content: [
          {
            heading: "Introduction",
            text: "Yet this information is critical for deciding whether a battery should be recalled, reused, remanufactured, or recycled. Without reliable systems to trace and access this data, ensuring transparency and improving battery recycling efficiency becomes an uphill battle.\n\nHowever, with the European Union's upcoming ESPR regulations on the horizon, Cling Systems and Traced Systems saw this opportunity to innovate. Together, they launched a pilot project introducing a pragmatic Digital Product Passport (DPP) for batteries powered by blockchain.",
          },
          {
            heading: "The pilot project",
            text: "This pilot focused on the downstream side of the battery lifecycle - what happens after production when batteries are collected, recycled, or repurposed. By working closely with Instagrid (OEM) and Batteriretur (collector), the team aimed to reimagine how batteries are tracked and managed.\n\nOver six months, a blockchain-powered DPP application was developed, combining Cling Systems' tools with the Chromia blockchain from Traced Systems. This collaborative approach, driven by insights and expertise from Instagrid and Batteriretur, ensured the DPP was designed to meet the functionality, requirements, and integration needs of all stakeholders.",
          },
          {
            heading: "The outcome? A functional DPP.",
            text: "The role-based passport enables control over access to specific data points for each user or actor in the value chain, ensuring easy data accessibility while maintaining privacy. OEMs and producers can add product information, while downstream actors can access this data and add events related to the end-of-life (EoL) management of batteries.\n\nEnabling:\n\n• Downstream information: OEMs, like Instagrid, can track where their batteries end up and gain insights into their usage.\n• Upstream information: Downstream players, such as Batteriretur, can access product and chemistry information about the batteries they receive, improving operational efficiency.",
          },
          {
            heading: "Looking ahead",
            text: "The pilot highlighted the importance of involving additional industry stakeholders to further refine and enhance the system. Scaling the DPP will require greater automation and seamless integration into existing workflows to ensure it can operate efficiently at a larger scale.",
          },
          {
            heading: "Next steps",
            text: "• Traced Systems plans to expand the DPP to include more battery types and users, enhance compliance features with advanced reporting tools, and improve usability with API integrations.\n• Cling Systems will continue its mission to accelerate circular value chains by providing businesses with tools to maximize the value of their batteries.\n\nWant to learn more? Don't miss our upcoming webinar together with Doors3, where we'll dive deeper into the pilot project results and explore how your organization can benefit from blockchain-powered Digital Product Passports.",
          },
        ],
      },
    },
    {
      title: "Be Our Next Use Case",
      description:
        "Ready to innovate and comply with evolving legislation? Let's explore how the DPP framework can enhance customer experiences and drive circularity...",
      image: "/lovable-uploads/0443aaa4-526c-49de-bc7b-2c6726ceccfc.png",
    },
  ];

  const handleCaseClick = (useCase: UseCase) => {
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
          className="!w-full sm:!w-[75vw] 2xl:!w-[66vw] sm:!max-w-[75vw] 2xl:!max-w-[66vw] overflow-y-auto bg-[#F7F7F5] border-l shadow-sm p-0"
        >
          <SheetBackButton onBack={onClose} />

          <div className="h-full flex flex-col">
            <SheetBackgroundSection>
              <div className="pt-24 px-8">
                <h1 className="text-3xl font-medium tetx-[#173A44] text-center mb-8">
                  Use Cases
                </h1>

                <div className="text-center mb-12">
                  <p className="text-gray-700">
                    Discover how Traced Systems transforms challenges into
                    opportunities for businesses.
                  </p>
                </div>
              </div>
            </SheetBackgroundSection>

            <div className="px-8">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {cases.map((item, index) => (
                  <div
                    key={index}
                    onClick={() => handleCaseClick(item)}
                    className="bg-white rounded-xl shadow-[4px_4px_10px_0px_rgba(0,0,0,0.05),-4px_-4px_10px_0px_rgba(255,255,255,0.9)] hover:shadow-[6px_6px_12px_0px_rgba(0,0,0,0.1),-6px_-6px_12px_0px_rgba(255,255,255,0.95)] transition-all duration-300 cursor-pointer"
                  >
                    <div className="aspect-[430/243] w-full">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full object-cover rounded-t-lg mb-4"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-medium text-[#173A44] mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 mb-4">{item.description}</p>
                      <button className="transition-colors text-[#E4AC70] hover:text-[#C66600] flex items-center gap-0.5">
                        Know More <ChevronRight className="w-4 h-4 mt-0.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <AboutCTA onClose={onClose} />
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
