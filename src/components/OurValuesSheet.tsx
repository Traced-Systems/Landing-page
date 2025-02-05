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
            <p className="text-xl text-gray-600 mb-8">Driving Sustainable Innovation</p>
          </div>

          <div className="px-8 space-y-12">
            <div className="bg-white rounded-lg p-8 shadow-md">
              <p className="text-gray-600">
                Traced Systems, powered by Chromia offers businesses an intuitive, secure solution to track products throughout their entire lifecycle from production to end-of-life ensuring full transparency, compliance, and trust at every stage.
              </p>
              <p className="text-gray-600 mt-4">
                By merging traditional processes with modern technology, we help organizations unlock new efficiencies, engage customers more deeply, and confidently embrace the future of sustainable innovation.
              </p>
            </div>

            <Tabs defaultValue="mission" orientation="vertical" className="flex gap-8">
              <TabsList className="flex flex-col h-auto space-y-2 bg-transparent">
                <TabsTrigger value="mission" className="text-left justify-start">Our Mission</TabsTrigger>
                <TabsTrigger value="focus" className="text-left justify-start">Our Focus</TabsTrigger>
                <TabsTrigger value="solution" className="text-left justify-start">Our Solution</TabsTrigger>
              </TabsList>
              <div className="flex-1">
                <TabsContent value="mission" className="relative">
                  <img src="/lovable-uploads/aa6a2a37-d9f1-44a7-8d11-a32893b35db5.png" alt="Mission" className="w-full h-64 object-cover rounded-lg" />
                  <div className="absolute inset-0 bg-black/50 p-6 text-white rounded-lg">
                    <p>Our mission is to transform supply chain efficiency and engagement by leveraging blockchain technology to enhance transparency, collaboration, and customer loyalty. From raw materials to recycling, we empower businesses to optimize workflows, build stronger brand connections, and deliver sustainable value to every stakeholder in the chain.</p>
                  </div>
                </TabsContent>
                <TabsContent value="focus" className="relative">
                  <img src="/lovable-uploads/aa6a2a37-d9f1-44a7-8d11-a32893b35db5.png" alt="Focus" className="w-full h-64 object-cover rounded-lg" />
                  <div className="absolute inset-0 bg-black/50 p-6 text-white rounded-lg">
                    <p>Our focus is on helping companies stay ahead of evolving regulations while ensuring a tangible return on investment. We guide organizations in targeting and engaging the right audiences (from legislators to end consumers) across both B2B and B2C environments. By employing a progressive, future-proof approach, we enable companies to meet (and exceed) their sustainability goals without compromising budgets or growth.</p>
                  </div>
                </TabsContent>
                <TabsContent value="solution" className="relative">
                  <img src="/lovable-uploads/aa6a2a37-d9f1-44a7-8d11-a32893b35db5.png" alt="Solution" className="w-full h-64 object-cover rounded-lg" />
                  <div className="absolute inset-0 bg-black/50 p-6 text-white rounded-lg">
                    <p>Our platform goes beyond mere compliance. By identifying and collaborating with key partners in the value chain, we help businesses integrate a truly circular approach that aligns with European values and environmental objectives. Whether you're seeking to reduce waste, boost resource efficiency, or enhance brand loyalty, our solution puts you at the forefront of sustainable innovation today and into the future.</p>
                  </div>
                </TabsContent>
              </div>
            </Tabs>

            <div className="grid md:grid-cols-2 gap-8">
              {accordionItems.map((item, index) => (
                <Accordion type="single" collapsible key={index}>
                  <AccordionItem value={`item-${index}`}>
                    <AccordionTrigger className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-left">{item.title}</span>
                    </AccordionTrigger>
                    <AccordionContent>
                      {item.content}
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