
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

const UseCases = () => {
  const cases = [
    {
      tag: 'Use Case',
      title: 'BLK DNM: Connected Fashion',
      description: 'BLK DNM has launched their \'Connected Fashion\' campaign, delivering the first collection of apparel embedded with...',
      image: '/lovable-uploads/535e05ed-983b-46cd-b1a1-0a1a3f9099cf.png'
    },
    {
      tag: 'Use Case',
      title: 'Battery Lifecycle Innovation',
      description: 'What if a battery\'s lifecycle routing left a verifiable trail? This pilot project, powered by a blockchain-based Digital Product Passport...',
      image: '/lovable-uploads/ef84fb07-c652-498c-b93e-8e8317cd1247.png'
    },
    {
      tag: 'Use Case',
      title: 'Be Our Next Use Case',
      description: 'Ready to innovate and comply with evolving legislation? Let\'s explore how the DPP framework can enhance customer experiences and drive circularity...',
      image: '/lovable-uploads/e3d6c737-2148-455b-8ed7-f68d77e8b695.png'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#002A38] mb-2">
            Use Cases/Blogs
          </h2>
          <h3 className="text-lg text-gray-600">
            See Our Impact
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {cases.map((item, index) => (
            <div
              key={index}
              className="group bg-[#F1F0FB] rounded-2xl p-6 transition-all duration-300
                        hover:translate-y-[-4px]
                        shadow-[6px_6px_12px_0px_rgba(0,0,0,0.1),-6px_-6px_12px_0px_rgba(255,255,255,0.8)]
                        hover:shadow-[8px_8px_16px_0px_rgba(0,0,0,0.12),-8px_-8px_16px_0px_rgba(255,255,255,0.9)]"
            >
              <div className="aspect-video bg-gray-200 rounded-lg mb-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              
              <span className="text-xs uppercase tracking-wider text-gray-600 mb-2 inline-block">
                {item.tag}
              </span>
              
              <h4 className="text-xl font-semibold text-[#002A38] mb-3">
                {item.title}
              </h4>
              
              <p className="text-gray-600 mb-6 line-clamp-3">
                {item.description}
              </p>
              
              <button className="flex items-center text-[#0EA5E9] hover:text-[#0EA5E9]/80 transition-colors">
                Know More <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <Button
            variant="outline"
            className="bg-[#F1F0FB] px-8 py-6 rounded-xl text-lg font-medium
                     shadow-[4px_4px_8px_0px_rgba(0,0,0,0.1),-4px_-4px_8px_0px_rgba(255,255,255,0.8)]
                     hover:shadow-[6px_6px_12px_0px_rgba(0,0,0,0.12),-6px_-6px_12px_0px_rgba(255,255,255,0.9)]
                     hover:translate-y-[-2px] transition-all duration-300"
          >
            Know More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default UseCases;
