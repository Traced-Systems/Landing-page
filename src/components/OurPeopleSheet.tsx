import React from 'react';
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import AboutCTA from './shared/AboutCTA';

interface OurPeopleSheetProps {
  isOpen: boolean;
  onClose: () => void;
}

const OurPeopleSheet = ({ isOpen, onClose }: OurPeopleSheetProps) => {
  const advisoryBoard = [
    {
      name: "Henrik Hjelte",
      role: "Principal Leader",
      image: "/lovable-uploads/461e03e0-f628-4bd7-b948-f9d95f6892c3.png",
      active: true
    },
    {
      name: "Johan Toll",
      role: "CIO & Senior Business Advisor",
      image: "/lovable-uploads/846ce2f5-5e40-48e9-81d1-65f0f6ead97a.png",
      active: true
    },
    {
      name: "Niclas Tordhag",
      role: "Senior Legal Advisor",
      image: "/lovable-uploads/b342341d-8bba-476b-9d72-8aec0933e1e7.png",
      active: true
    }
  ];

  const tracedTeam = [
    {
      name: "Farhad Rasouli",
      role: "Executive Lead & Co-Founder",
      image: "/lovable-uploads/64d340f7-d681-421d-88f3-b9e49bb57bad.png",
      active: true
    },
    {
      name: "David Dolhomut",
      role: "Head of Partnerships & Business Development",
      image: "/lovable-uploads/f4b51d1d-32fd-4210-b0af-12bffb3b287c.png",
      active: true
    },
    {
      name: "Natalie Hlavackova",
      role: "Head of Digital Analytics and SEO",
      image: "/lovable-uploads/d22391a5-5183-4a8d-a5b9-3aaebd583ed4.png",
      active: true
    },
    {
      name: "Francesco Giacomello",
      role: "Head of Partnerships & Business Development",
      image: "/lovable-uploads/c4f4eaa2-20bc-4fcc-b34a-59d58a4dca90.png",
      active: true
    },
    {
      name: "Petra Bosnjak",
      role: "Head of Marketing",
      image: "/lovable-uploads/66786a1b-9f67-48d6-b954-763c3a8897dd.png",
      active: true
    },
    {
      name: "Kostiantyn Nikolaiev",
      role: "Tech Lead",
      image: "/lovable-uploads/3865c1c3-db27-411d-bbd6-bbf13654c622.png",
      active: true
    },
    {
      name: "Milas Heeris",
      role: "UI/UX Design",
      image: "/lovable-uploads/b3608835-46bf-46e7-b94b-253628b0c1eb.png",
      active: true
    },
    {
      name: "Ziwei Chen",
      role: "Creative Designer",
      image: "/lovable-uploads/02469d55-a79b-42b8-937b-672fc85806ad.png",
      active: true
    }
  ];

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent 
        side="right" 
        className="!w-[75vw] 2xl:!w-[66vw] sm:!max-w-[75vw] 2xl:!max-w-[66vw] overflow-y-auto bg-[#F7F7F5]"
      >
        <div className="h-full flex flex-col pt-12">
          <Button 
            variant="ghost" 
            onClick={onClose}
            className="absolute left-4 top-4 hover:bg-gray-100"
          >
            <ArrowLeft className="h-6 w-6" />
          </Button>

          <div className="max-w-4xl mx-auto w-full px-6">
            <h1 className="text-3xl font-bold text-center mb-6">Meet the Team</h1>
            
            <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              At Traced System, our small but passionate team of designers, marketers, sales, and tech experts are driven by a shared goal—to build something bigger together. We combine creativity and innovation to push boundaries and make a lasting impact in the world.
            </p>

            <div className="space-y-16">
              <section>
                <h2 className="text-2xl font-semibold mb-8">Advisory Board</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {advisoryBoard.map((member, index) => (
                    <div 
                      key={index}
                      className="bg-[#1B3B4B] rounded-lg overflow-hidden text-white"
                    >
                      <div className="relative aspect-square">
                        <img 
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold text-lg">{member.name}</h3>
                        <p className="text-gray-300 text-sm">{member.role}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-8">Traced Team</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {tracedTeam.map((member, index) => (
                    <div 
                      key={index}
                      className="bg-[#1B3B4B] rounded-lg overflow-hidden text-white"
                    >
                      <div className="relative aspect-square">
                        <img 
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold text-lg">{member.name}</h3>
                        <p className="text-gray-300 text-sm">{member.role}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            <div className="mt-16">
              <AboutCTA onClose={onClose} />
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default OurPeopleSheet;