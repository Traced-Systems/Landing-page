
import React, { useEffect, useRef } from 'react';
import { Check } from 'lucide-react';
import { Separator } from "@/components/ui/separator";

const Benefits = () => {
  const separatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-extend-line');
        }
      },
      {
        threshold: 0.5,
      }
    );

    if (separatorRef.current) {
      observer.observe(separatorRef.current);
    }

    return () => {
      if (separatorRef.current) {
        observer.unobserve(separatorRef.current);
      }
    };
  }, []);

  const benefits = [
    {
      title: 'Flexibility',
      description: 'Adaptable solutions for various industries',
    },
    {
      title: 'Transparency',
      description: 'Clear visibility across supply chains',
    },
    {
      title: 'Sustainability',
      description: 'Eco-friendly practices and tracking',
    },
    {
      title: 'Compliance',
      description: 'Meet regulatory requirements',
    },
  ];

  return (
    <section id="section-elevating-product-lifestyle" className="py-20 bg-[#f7f7f7]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-start justify-between gap-16">
          <div className="w-full md:w-5/12">
            <img 
              src="/lovable-uploads/c2aed4bf-1d30-4b1c-9a19-3f43ca653eb5.png" 
              alt="Product Lifecycle Management" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          <div className="w-full md:w-7/12 text-left">
            <div className="mb-16">
              <div className="inline-block">
                <h3 className="text-3xl md:text-4xl font-bold text-[#002A38]">
                  Elevating Product Lifecycle Management
                </h3>
                <div ref={separatorRef} className="w-full">
                  <Separator className="my-4 h-1 bg-[#D4904E] transform scale-x-0" />
                </div>
              </div>
              <h2 className="text-2xl md:text-3xl text-[#002A38] mb-8">
                with Digital Product Passports
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                The Trace Systems Digital Product Passport (DPP) is a game-changer for managing products from start to finish. 
                Built on Chromia for enterprise, it offers a complete digital record that tracks a product's journey through its entire lifecycle.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="inline-flex items-center justify-center w-8 h-8 bg-[#D67F2F]/10 rounded-full">
                      <Check className="w-5 h-5 text-[#D67F2F]" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-[#002A38] mb-1">
                      {benefit.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
