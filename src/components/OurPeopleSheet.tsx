
import React from 'react';
import { Sheet, SheetContent } from "@/components/ui/sheet";
import AboutCTA from './shared/AboutCTA';
import SheetBackButton from './shared/SheetBackButton';

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
      linkedin: "https://www.linkedin.com/in/henrikhjelte/"
    },
    {
      name: "Johan Toll",
      role: "CIO & Senior Business Advisor",
      image: "/lovable-uploads/3017b0ec-2ad2-4a83-8039-290df45e4d89.png",
      active: true,
      linkedin: "https://www.linkedin.com/in/johantoll/"
    },
    {
      name: "Niclas Tordhag",
      role: "Senior Legal Advisor",
      image: "/lovable-uploads/be2a14f4-e216-46ff-b41a-8659d04c188b.png",
      active: true,
      linkedin: "https://www.linkedin.com/in/niclas-tordhag-b0082b1/"
    }
  ];

  const tracedTeam = [
    {
      name: "Farhad Rasouli",
      role: "Executive Lead & Co-Founder",
      image: "/lovable-uploads/4ecab3d1-d8f9-4195-a7a8-a7e2bdf18c19.png",
      active: true,
      linkedin: "https://www.linkedin.com/in/farhadrasouli/"
    },
    {
      name: "David Dolhomut",
      role: "Head of Partnerships & Business Development",
      image: "/lovable-uploads/22beced2-9024-466e-9f34-96e6200d556d.png",
      active: true,
      linkedin: "https://www.linkedin.com/in/daviddolhomut/"
    },
    {
      name: "Natalie Hlavackova",
      role: "Head of Digital Analytics and SEO",
      image: "/lovable-uploads/989c3c42-696b-4e58-b001-e873799b2472.png",
      active: true,
      linkedin: "https://www.linkedin.com/in/natalie-hlavackova/"
    },
    {
      name: "Francesco Giacomello",
      role: "Head of Partnerships & Business Development",
      image: "/lovable-uploads/f6c99cbb-a1fe-45c2-ab7f-ab7261dcb192.png",
      active: true,
      linkedin: "https://www.linkedin.com/in/francesco-giacomello"
    },
    {
      name: "Petra Bosnjak",
      role: "Head of Marketing",
      image: "/lovable-uploads/d8c1b3e1-300a-4c80-896d-5f0f2bb086af.png",
      active: true,
      linkedin: "https://www.linkedin.com/in/petra-josephine-bosnjak-56b33a220/"
    },
    {
      name: "Kostiantyn Nikolaiev",
      role: "Tech Lead",
      image: "/lovable-uploads/a4e0cba8-7ae3-454f-857a-c8079be59a77.png",
      active: true,
      linkedin: "https://www.linkedin.com/in/kostiantyn-s-nikolaiev/"
    },
    {
      name: "Milas Heeris",
      role: "UI/UX Design",
      image: "/lovable-uploads/fbe2bb40-0dca-4848-85c8-52d14d2f71d0.png",
      active: true,
      linkedin: "https://www.linkedin.com/in/milasheeris/"
    },
    {
      name: "Ziwei Chen",
      role: "Creative Designer",
      image: "/lovable-uploads/9d35a8e6-a309-43c9-b82e-d5c3ac5e8460.png",
      active: true,
      linkedin: "https://www.linkedin.com/in/ziwei-chen-b64971208/"
    }
  ];

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent 
        side="right" 
        className="!w-full sm:!w-[75vw] 2xl:!w-[66vw] sm:!max-w-[75vw] 2xl:!max-w-[66vw] overflow-y-auto bg-[#F7F7F5] p-0"
      >
        <SheetBackButton onBack={onClose} />

        <div className="h-full flex flex-col pt-24">
          <div className="max-w-4xl mx-auto w-full px-6 mb-16">
            <div className="space-y-16">
              <section>
                <h2 className="text-2xl font-semibold mb-8">Advisory Board</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {advisoryBoard.map((member, index) => (
                    <a 
                      key={index}
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative aspect-square overflow-hidden rounded-lg group hover:scale-105 transition-transform duration-300"
                    >
                      <img 
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300" />
                    </a>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-8">Traced Team</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {tracedTeam.map((member, index) => (
                    <a 
                      key={index}
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative aspect-square overflow-hidden rounded-lg group hover:scale-105 transition-transform duration-300"
                    >
                      <img 
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300" />
                    </a>
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
