import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, GraduationCap, Search, BookOpen, Users } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <GraduationCap className="h-8 w-8 text-orange-500" />
              <span className="ml-2 text-xl font-bold text-gray-800">EduRecom.</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/search" className="text-gray-600 hover:text-orange-500 flex items-center">
              <Search className="h-4 w-4 mr-1" />
              Find Institutes
            </Link>
            <Link to="/assessment" className="text-gray-600 hover:text-orange-500 flex items-center">
              <BookOpen className="h-4 w-4 mr-1" />
              Assessments
            </Link>
            <Link to="/career-guidance" className="text-gray-600 hover:text-orange-500">Career Guidance</Link>
            <Link to="/resources" className="text-gray-600 hover:text-orange-500">Resources</Link>
            <Link 
              to="/auth" 
              className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition-colors"
            >
              Sign In
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-orange-500"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/search"
              className="block px-3 py-2 text-gray-600 hover:text-orange-500"
            >
              Find Institutes
            </Link>
            <Link
              to="/assessment"
              className="block px-3 py-2 text-gray-600 hover:text-orange-500"
            >
              Assessments
            </Link>
            <Link
              to="/career-guidance"
              className="block px-3 py-2 text-gray-600 hover:text-orange-500"
            >
              Career Guidance
            </Link>
            <Link
              to="/resources"
              className="block px-3 py-2 text-gray-600 hover:text-orange-500"
            >
              Resources
            </Link>
            <Link
              to="/auth"
              className="block px-3 py-2 text-orange-500 hover:text-orange-600"
            >
              Sign In
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;