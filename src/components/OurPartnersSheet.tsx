import React from "react";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import AboutCTA from "./shared/AboutCTA";
import TitleBanner from "@/components/shared/TitleBanner";
import SheetBackButton from "./shared/SheetBackButton";
import { ExternalLink } from "lucide-react";

interface OurPartnersSheetProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Partner {
  name: string;
  logo: string;
  website?: string;
  description: string;
}

const OurPartnersSheet = ({ isOpen, onClose }: OurPartnersSheetProps) => {
  const batteryPartners: Partner[] = [
    {
      name: "Instagrid",
      logo: "/lovable-uploads/LOGO-instagrid-red-black-RGB.png",
      website: "https://www.instagrid.com",
      description: "OEM battery manufacturer"
    },
    {
      name: "Batteriretur",
      logo: "/lovable-uploads/BatterireturAvdHoyenergi_staaende_RGB1.png",
      website: "https://www.batteriretur.no",
      description: "Collection & recycling logistics"
    },
    {
      name: "Cling Systems",
      logo: "/lovable-uploads/332c313b-7829-44de-8f52-4e9d8f4be70a.png",
      website: "https://www.clingsystems.com/",
      description: "Secondary battery marketplace"
    },
    {
      name: "Evolium",
      logo: "/lovable-uploads/evolium.png",
      website: "https://www.evolium.ch/en/",
      description: "Sustainable Batteries"
    }
  ];

  const fashionPartners: Partner[] = [
    {
      name: "Blk Dnm",
      logo: "/lovable-uploads/881ea4c3-7aff-4713-bd29-b03558bda2e3.png",
      website: "https://www.blkdnm.com",
      description: "Connected garments / blockchain authentication"
    },

        {
      name: "trace4value",
      logo: "/lovable-uploads/Trace4Logo.png",
      website: "https://trace4value.se",
      description: "Traceability & sustainability platform"
    }
  ];

  const programPartners: Partner[] = [
    {
      name: "Mastercard Lighthouse MASSIV",
      logo: "/lovable-uploads/0e6c68d8-82ba-4692-8608-c3d42da9ad9a.png",
      website: "https://www.mastercardlighthouse.com",
      description: "Impact & partnership program – Fall 2025 cohort"
    },

        {
      name: "European Blockchain Sandbox",
      logo: "/lovable-uploads/European Blockchain Sandbox.png",
      website: "https://blockchain-observatory.ec.europa.eu/european-blockchain-sandbox_en",
      description: "European blockchain regulatory sandbox"
    }
  ];

  const PartnerGrid = ({ partners, title }: { partners: Partner[]; title: string }) => (
    <section className="mb-12">
      <h3 className="text-xl font-medium text-[#173A44] mb-6">{title}</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {partners.map((partner, index) => (
          <div
            key={index}
            className="group relative bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
          >
            <div className="aspect-square flex items-center justify-center mb-4">
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-w-full max-h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
              />
            </div>
            
            {/* Tooltip on hover */}
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-[#173A44] text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-10">
              <div className="font-medium">{partner.name}</div>
              <div className="text-xs text-gray-200">{partner.description}</div>
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-[#173A44]"></div>
            </div>

            {/* Link overlay if website exists */}
            {partner.website && (
              <a
                href={partner.website}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 flex items-end justify-end p-2"
              >
                <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-[#E1B382] transition-colors duration-300" />
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent
        side="right"
        className="!w-full sm:!w-[75vw] 2xl:!w-[66vw] sm:!max-w-[75vw] 2xl:!max-w-[66vw] overflow-y-auto bg-[#F7F7F5] p-0"
      >
        <SheetBackButton onBack={onClose} />

        <div>
          <TitleBanner title="Our Partners" />
        </div>

        <div className="h-full flex flex-col pt-24">
          <div className="max-w-6xl mx-auto w-full px-6 mb-16">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-medium text-[#173A44] mb-4">
                Trusted by Industry Leaders
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We collaborate with pioneers in batteries, fashion, and circularity to shape the future of Digital Product Passports.
              </p>
            </div>

            <div className="space-y-16">
              <PartnerGrid 
                partners={batteryPartners} 
                title="🔋 Battery & Circularity" 
              />
              
              <PartnerGrid 
                partners={fashionPartners} 
                title="👗 Fashion & Retail" 
              />
              
              <PartnerGrid 
                partners={programPartners} 
                title="🌍 Programs & Alliances" 
              />
            </div>
          </div>

          <AboutCTA onClose={onClose} />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default OurPartnersSheet;