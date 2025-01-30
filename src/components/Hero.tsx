import React from 'react';

const Hero = () => {
  return (
    <section className="pt-32 pb-16 bg-white relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col">
            <h1 className="text-4xl font-bold text-primary">Welcome to Our Website</h1>
            <p className="mt-4 text-lg text-gray-600">We provide the best solutions for your business needs.</p>
            <a href="#" className="mt-6 inline-block bg-blue-500 text-white rounded-lg px-6 py-3">Get Started</a>
          </div>
          <div className="flex justify-center">
            <img src="/path/to/hero-image.png" alt="Hero" className="w-full h-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
