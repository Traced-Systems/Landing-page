import React from "react";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import AboutCTA from "./shared/AboutCTA";
import TitleBanner from "@/components/shared/TitleBanner";
import SheetBackButton from "./shared/SheetBackButton";

interface OurPeopleSheetProps {
  isOpen: boolean;
  onClose: () => void;
}

const OurPeopleSheet = ({ isOpen, onClose }: OurPeopleSheetProps) => {
  const advisoryBoard = [
    {
      name: "Henrik Hjelte",
      role: "Principal Leader",
      image: "/lovable-uploads/10652973-4236-4a56-a999-ea3738639f1e.png",
      active: true,
      linkedin: "https://www.linkedin.com/in/henrikhjelte/",
    },
    {
      name: "Johan Toll",
      role: "CIO & Senior Business Advisor",
      image: "/lovable-uploads/d52e78c5-39a3-467e-a9f3-7a3405fb7fba.png",
      active: true,
      linkedin: "https://www.linkedin.com/in/johantoll/",
    },
    {
      name: "Niclas Tordhag",
      role: "Senior Legal Advisor",
      image: "/lovable-uploads/be2a14f4-e216-46ff-b41a-8659d04c188b.png",
      active: true,
      linkedin: "https://www.linkedin.com/in/niclas-tordhag-b0082b1/",
    },
  ];

  const tracedTeam = [
    {
      name: "Farhad Rasouli",
      role: "Executive Lead & Co-Founder",
      image: "/lovable-uploads/f554ce90-b2c8-4975-ba67-386d73243903.png",
      active: true,
      linkedin: "https://www.linkedin.com/in/farhadrasouli/",
    },
    {
      name: "David Dolhomut",
      role: "Head of Partnerships & Business Development",
      image: "/lovable-uploads/68b8df3f-b66c-4d46-92d0-c7d84b99bcf6.png",
      active: true,
      linkedin: "https://www.linkedin.com/in/daviddolhomut/",
    },
    {
      name: "Natalie Hlavackova",
      role: "Head of Digital Analytics and SEO",
      image: "/lovable-uploads/aa83c039-fa77-44d1-a4e4-682bc3091340.png",
      active: true,
      linkedin: "https://www.linkedin.com/in/natalie-hlavackova/",
    },
    {
      name: "Francesco Giacomello",
      role: "Head of Partnerships & Business Development",
      image: "/lovable-uploads/952b95c7-bab8-42ab-96dd-652929e8093e.png",
      active: true,
      linkedin: "https://www.linkedin.com/in/francesco-giacomello",
    },
    {
      name: "Petra Bosnjak",
      role: "Head of Marketing",
      image: "/lovable-uploads/1aeb695e-eb6e-4312-92a8-af399dd5768b.png",
      active: true,
      linkedin:
        "https://www.linkedin.com/in/petra-josephine-bosnjak-56b33a220/",
    },
    {
      name: "Kostiantyn Nikolaiev",
      role: "Tech Lead",
      image: "/lovable-uploads/b580da07-90b5-432e-a1b9-5edaeed20f2b.png",
      active: true,
      linkedin: "https://www.linkedin.com/in/kostiantyn-s-nikolaiev/",
    },
    {
      name: "Cristina Stoica",
      role: "Head of Design",
      image: "/lovable-uploads/1597880531.png",
      active: true,
      linkedin: "#",
    },
    {
      name: "Milas Heeris",
      role: "UI/UX Design",
      image: "/lovable-uploads/5e890080-10d5-4bf4-bed6-513a0fc10da5.png",
      active: true,
      linkedin: "https://www.linkedin.com/in/milasheeris/",
    },
    {
      name: "Ziwei Chen",
      role: "Creative Designer",
      image: "/lovable-uploads/fc0992f1-05d7-48a0-add2-309803a7f7b0.png",
      active: true,
      linkedin: "https://www.linkedin.com/in/ziwei-chen-b64971208/",
    },
  ];

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent
        side="right"
        className="!w-full sm:!w-[75vw] 2xl:!w-[66vw] sm:!max-w-[75vw] 2xl:!max-w-[66vw] overflow-y-auto bg-[#F7F7F5] p-0"
      >
        <SheetBackButton onBack={onClose} />

        <div>
          <TitleBanner title="Our People" />
        </div>

        <div className="h-full flex flex-col pt-24">
          <div className="max-w-4xl mx-auto w-full px-6 mb-16">
            <div className="space-y-16">
              <section>
                <h2 className="text-2xl font-medium text-[#173A44] mb-8">
                  Advisory Board
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  {advisoryBoard.map((member, index) => (
                    <div key={index} className="relative aspect-square">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover rounded-lg"
                      />
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-opacity duration-300 rounded-lg"
                      />
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-medium text-[#173A44] mb-4">
                  Traced Team
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {tracedTeam.map((member, index) => (
                    <div key={index} className="relative aspect-square">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover rounded-lg"
                      />
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-opacity duration-300 rounded-lg"
                      />
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>

          <AboutCTA onClose={onClose} />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default OurPeopleSheet;
