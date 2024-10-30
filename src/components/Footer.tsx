import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center">
              <GraduationCap className="h-8 w-8 text-orange-500" />
              <span className="ml-2 text-xl font-bold">EduRecom.</span>
            </Link>
            <p className="mt-4 text-gray-400">
              Empowering parents and students with the right educational choices for a brighter future.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/search" className="text-gray-400 hover:text-orange-500">Find Institutes</Link></li>
              <li><Link to="/assessment" className="text-gray-400 hover:text-orange-500">Get Assessment</Link></li>
              <li><Link to="/career-guidance" className="text-gray-400 hover:text-orange-500">Career Guidance</Link></li>
              <li><Link to="/resources" className="text-gray-400 hover:text-orange-500">Resources</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><Link to="/help" className="text-gray-400 hover:text-orange-500">Help Center</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-orange-500">Contact Us</Link></li>
              <li><Link to="/privacy" className="text-gray-400 hover:text-orange-500">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-400 hover:text-orange-500">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-orange-500">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
            <div className="mt-4">
              <h4 className="text-sm font-semibold mb-2">Subscribe to our newsletter</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-gray-800 text-white px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <button className="bg-orange-500 text-white px-4 py-2 rounded-r-lg hover:bg-orange-600">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} EduRecom. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;