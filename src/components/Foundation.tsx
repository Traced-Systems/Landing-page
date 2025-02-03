import React from 'react';
import { Card } from '@/components/ui/card';

const Foundation = () => {
  return (
    <section className="w-full bg-[#f7f7f7] py-16">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <h2 className="text-3xl font-bold text-primary mb-8">The Foundation of Our Innovation</h2>
        <Card className="inline-block p-8">
          <div className="flex items-center justify-evenly gap-16">
            <div className="text-center">
              <p className="mb-4 text-sm font-medium text-gray-600">Built by:</p>
              <img 
                src="/lovable-uploads/d05fb389-8a90-42a6-9fb2-580384106614.png" 
                alt="Chromaway" 
                className="h-12 object-contain"
              />
            </div>
            
            <div className="flex flex-col items-center">
              <p className="mb-4 text-sm font-medium text-gray-600">Funded by:</p>
              <div className="flex gap-8">
                <img 
                  src="/lovable-uploads/ff086cb2-38b6-4ca2-a158-69f69cf213ee.png" 
                  alt="EU" 
                  className="h-12 object-contain"
                />
                <img 
                  src="/lovable-uploads/e1307a99-b10d-4799-b274-47c5f4487c18.png" 
                  alt="EBSI" 
                  className="h-12 object-contain"
                />
              </div>
            </div>

            <div className="text-center">
              <p className="mb-4 text-sm font-medium text-gray-600">Powered by:</p>
              <img 
                src="/lovable-uploads/6f62693e-d89e-4061-b259-b6e900dcc386.png" 
                alt="Chromia" 
                className="h-12 object-contain"
              />
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Foundation;