
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#173A44] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-gray-300">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-gray-300">Contact</Link></li>
              <li><Link to="/blog" className="hover:text-gray-300">Blog</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Solutions</h3>
            <ul className="space-y-2">
              <li><Link to="/industries" className="hover:text-gray-300">Industries</Link></li>
              <li><Link to="/use-cases" className="hover:text-gray-300">Use Cases</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/privacy" className="hover:text-gray-300">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-gray-300">Terms of Service</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                LinkedIn
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                Twitter
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
