import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const DigitalPassport = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="w-full h-[600px] bg-gray-100 rounded-lg">
            {/* Placeholder for 500x600 image */}
          </div>
          
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold mb-2">Traced Systems Developed</h2>
              <h3 className="text-xl text-gray-600">Digital Product Passport</h3>
            </div>
            
            <Card>
              <CardContent className="p-6">
                <p className="text-gray-700 mb-4">
                  Our solution enables businesses to create and manage digital product passports, 
                  providing transparency and traceability throughout the product lifecycle.
                </p>
                
                <p className="text-gray-700 mb-4">
                  We offer a comprehensive service that helps companies comply with regulations 
                  while building trust with consumers through transparent product information.
                </p>
                
                <p className="text-gray-700">
                  The digital passport contains detailed product information, sustainability metrics, 
                  and supply chain data, all accessible through a simple scan.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalPassport;