import React from 'react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <>
      <section className="pt-32 pb-16 bg-gradient-to-b from-accent to-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-up">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary">
                Traced Systems – Digital Product Passport
              </h1>
              <p className="text-xl text-gray-600">
                One Scan. Countless Impacts.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-secondary hover:bg-secondary/90 text-white rounded-full">
                  Get in Touch
                </Button>
                <Button variant="outline" className="rounded-full">
                  Book Demo
                </Button>
              </div>
            </div>
            
            <div className="relative h-[400px] animate-fade-up">
              <div className="absolute inset-0 bg-gradient-to-tr from-secondary/20 to-primary/20 rounded-3xl">
                {/* Placeholder for 3D smartphone mockup */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-64 h-[500px] bg-white/50 rounded-3xl shadow-2xl transform -rotate-12" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-16">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left column - Image */}
          <div className="w-full lg:w-1/2">
            <div className="bg-gray-100 w-[500px] h-[600px] rounded-lg">
              {/* Placeholder for the image */}
              <img
                src="/placeholder.svg"
                alt="Digital Product Passport"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Right column - Content */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div className="space-y-4">
              <h3 className="text-lg text-gray-600">traced systems developed</h3>
              <h2 className="text-4xl font-bold text-primary">Digital Product Passport</h2>
            </div>

            <div className="space-y-6">
              <div className="space-y-2">
                <h4 className="font-bold text-lg">Our Solution</h4>
                <p className="text-gray-600 leading-relaxed">
                  Our solution shines a light on the often opaque world of supply chains. By leveraging supply chain transparency, we support businesses in their journey of transition towards a circular economy.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-bold text-lg">Our Service</h4>
                <p className="text-gray-600 leading-relaxed">
                  Our service plays an instrumental role in enabling businesses to align their operations with sustainable business models.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-bold text-lg">Content Placeholder</h4>
                <p className="text-gray-600 leading-relaxed">
                  A complete digital record that tracks a product's entire lifecycle, enhancing transparency, sustainability, and compliance across key sectors like batteries and textile.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;