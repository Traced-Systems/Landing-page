import React from 'react';
import { Button } from "@/components/ui/button";
import { Twitter, Linkedin, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer 
      className="relative text-white py-20"
      style={{
        backgroundImage: "url('/lovable-uploads/f7986a43-8f10-409f-a344-214e743189a1.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center space-y-8 max-w-2xl mx-auto">
          <Button
            variant="secondary"
            size="lg"
            className="rounded-full"
          >
            Get in Touch
          </Button>
          
          <div className="flex justify-center space-x-6">
            <a href="#" className="hover:text-secondary transition-colors">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-secondary transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-secondary transition-colors">
              <Facebook className="w-6 h-6" />
            </a>
          </div>
          
          <div className="text-sm text-gray-400">
            <p>© 2024 Traced Systems. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;