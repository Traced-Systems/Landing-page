import React, { useEffect, useRef } from "react";
import { Check } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const Benefits = () => {
  const separatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-extend-line");
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
      title: "Flexibility",
      description: "Adaptable solutions for various industries",
    },
    {
      title: "Transparency",
      description: "Clear visibility across supply chains",
    },
    {
      title: "Sustainability",
      description: "Eco-friendly practices and tracking",
    },
    {
      title: "Compliance",
      description: "Meet regulatory requirements",
    },
  ];

  return (
    <section
      id="section-elevating-product-lifestyle"
      className="pt-36 pb-8 bg-[#f7f7f7]"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-start justify-between gap-0 md:gap-20 pb-32">
          <div className="w-full md:w-5/12">
            <img
              src="/lovable-uploads/629ceb73-5cc3-4030-a3e2-c9a81e634fc3.png"
              alt="Product Lifecycle Management"
              className="w-full h-auto rounded-lg"
            />
          </div>

          <div className="w-full md:w-7/12 text-left">
            <div className="mb-16">
              <div className="inline-block space-y-3">
                <h3 className="text-xl text-[#1E293B]">
                  Elevating Product Lifecycle Management with
                </h3>
                <h2 className="text-3xl font-medium text-[#1E293B]">
                  Digital Product Passports
                </h2>
              </div>

              <Separator className="my-9 h-1 w-[100px] bg-[#D4904E]" />
              <p className="text-base text-gray-600 leading-relaxed">
                The Trace Systems Digital Product Passport (DPP) is a
                game-changer for managing products from start to finish. Built
                on Chromia for enterprise, it offers a complete digital record
                that tracks a product's journey through its entire lifecycle.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-0">
                    <div className="inline-flex items-center justify-center w-4 h-4 bg-[#E4AC70] rounded-full">
                      <Check className="w-3 h-3 font-medium text-[#ffffff]" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base font-medium text-[#002A38] mb-">
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
