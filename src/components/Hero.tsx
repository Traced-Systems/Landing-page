import React from 'react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="pt-32 pb-16 relative overflow-hidden">
      {/* Gradient background with wave */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at 50% 0%, #F0E6D2 0%, #F7F7F5 40%, #E1ECEB 100%)',
          }}
        />
        
        {/* Wave SVG */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg
            viewBox="0 0 1440 320"
            className="w-full h-auto transform translate-y-1"
            preserveAspectRatio="none"
            style={{ 
              filter: 'drop-shadow(0 -2px 4px rgba(0,0,0,0.05))',
              minHeight: '160px'
            }}
          >
            <path
              fill="#F7F7F5"
              fillOpacity="0.9"
              d="M0,192L48,181.3C96,171,192,149,288,154.7C384,160,480,192,576,197.3C672,203,768,181,864,165.3C960,149,1056,139,1152,144C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            >
              <animate
                attributeName="d"
                dur="10s"
                repeatCount="indefinite"
                values="
                  M0,192L48,181.3C96,171,192,149,288,154.7C384,160,480,192,576,197.3C672,203,768,181,864,165.3C960,149,1056,139,1152,144C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
                  M0,160L48,181.3C96,203,192,245,288,234.7C384,224,480,160,576,133.3C672,107,768,117,864,138.7C960,160,1056,192,1152,197.3C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
                  M0,192L48,181.3C96,171,192,149,288,154.7C384,160,480,192,576,197.3C672,203,768,181,864,165.3C960,149,1056,139,1152,144C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              />
            </path>
          </svg>
        </div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary">
                Traced Systems
              </h1>
              <h2 className="text-2xl md:text-3xl text-gray-700">
                Digital Product Passport
              </h2>
              <p className="text-xl text-gray-600">
                One Scan. Countless Impacts.
              </p>
            </div>
            
            <div className="flex gap-4">
              <Button className="bg-white border-2 border-gray-200 text-gray-800 hover:bg-gray-50 rounded-full px-8">
                Get in Touch
              </Button>
              <Button className="bg-[#F4A261] hover:bg-[#E76F51] text-white rounded-full px-8 border-none">
                Book Demo
              </Button>
            </div>
          </div>
          
          <div className="relative h-[500px]">
            <div className="absolute inset-0 flex items-center justify-center">
              <img 
                src="/lovable-uploads/f13aac64-15e3-4a2a-9838-a7f474b842e5.png" 
                alt="Product Mockup" 
                className="w-full h-auto max-w-[500px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;