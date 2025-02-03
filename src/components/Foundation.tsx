import React from 'react';
import { Card } from '@/components/ui/card';

const Foundation = () => {
  return (
    <section className="w-full bg-[#f7f7f7] py-16">
      <div className="container mx-auto px-4">
        <Card className="p-8">
          <div className="flex items-center justify-between">
            <div className="text-center">
              <p className="mb-4 text-sm font-medium text-gray-600">Built by:</p>
              <img 
                src="/lovable-uploads/989e7920-294f-4d57-a9af-e085d1a26fd2.png" 
                alt="Chromaway" 
                className="h-12 object-contain"
              />
            </div>
            
            <div className="flex gap-12">
              <div className="text-center">
                <p className="mb-4 text-sm font-medium text-gray-600">Funded by:</p>
                <img 
                  src="/lovable-uploads/973d7c66-1d01-4e1e-89ce-2dee7a7c3dae.png" 
                  alt="EU" 
                  className="h-12 object-contain"
                />
              </div>
              <div className="text-center">
                <p className="mb-4 text-sm font-medium text-gray-600">Funded by:</p>
                <img 
                  src="/lovable-uploads/973d9db4-a05a-4a45-af13-2f7b06166f5b.png" 
                  alt="EBSI" 
                  className="h-12 object-contain"
                />
              </div>
            </div>

            <div className="text-center">
              <p className="mb-4 text-sm font-medium text-gray-600">Powered by:</p>
              <img 
                src="/lovable-uploads/989e7920-294f-4d57-a9af-e085d1a26fd2.png" 
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