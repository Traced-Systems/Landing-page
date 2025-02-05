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
      name: "John Smith",
      role: "Blockchain Advisor",
      image: "/lovable-uploads/about-us-people.png",
      active: true
    },
    {
      name: "Sarah Johnson",
      role: "Sustainability Expert",
      image: "/lovable-uploads/about-us-people.png",
      active: false
    },
    {
      name: "Michael Chen",
      role: "Technology Strategist",
      image: "/lovable-uploads/about-us-people.png",
      active: true
    }
  ];

  const tracedTeam = [
    {
      name: "Emma Wilson",
      role: "CEO",
      image: "/lovable-uploads/about-us-people.png",
      active: true
    },
    {
      name: "David Brown",
      role: "CTO",
      image: "/lovable-uploads/about-us-people.png",
      active: true
    },
    {
      name: "Lisa Anderson",
      role: "Head of Operations",
      image: "/lovable-uploads/about-us-people.png",
      active: false
    }
  ];

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
            <h1 className="text-3xl font-bold text-primary mb-4">Our People</h1>
            <h2 className="text-2xl font-semibold text-primary">Meet the Team</h2>
          </div>

          <div className="px-8 space-y-12">
            <div>
              <h3 className="text-xl font-semibold mb-6">Advisory Board</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {advisoryBoard.map((member, index) => (
                  <div 
                    key={index}
                    className={`bg-white rounded-lg p-6 text-center ${!member.active ? 'opacity-50' : ''}`}
                  >
                    <div className="relative w-48 h-48 mx-auto mb-4">
                      <img 
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                    <h4 className="font-semibold mb-2">{member.name}</h4>
                    <p className="text-gray-600">{member.role}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-6">Traced Team</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {tracedTeam.map((member, index) => (
                  <div 
                    key={index}
                    className={`bg-white rounded-lg p-6 text-center ${!member.active ? 'opacity-50' : ''}`}
                  >
                    <div className="relative w-48 h-48 mx-auto mb-4">
                      <img 
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                    <h4 className="font-semibold mb-2">{member.name}</h4>
                    <p className="text-gray-600">{member.role}</p>
                  </div>
                ))}
              </div>
            </div>

            <AboutCTA onClose={onClose} />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default OurPeopleSheet;