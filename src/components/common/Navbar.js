import React, { useState, useEffect, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = useMemo(() => [
    ['Home', '/'],
    ['About', '/about'],
    ['Categories', '/categories'],
    ['Admission', '/admission'],
    ['School Life', '/school-life'],
    ['Contact', '/contact']
  ], []);

  return (
    <header className="bg-white shadow-lg">
      <nav className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link 
            to="/" 
            className="text-2xl font-bold text-blue-600 transition-colors duration-300 hover:text-blue-700"
          >
            Kings Modern Academy
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden focus:outline-none"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-around">
              <span className={`block h-0.5 w-6 bg-gray-800 rounded-sm transform transition-all duration-300 ${
                isOpen ? 'rotate-45 translate-y-2.5' : ''
              }`}></span>
              <span className={`block h-0.5 w-6 bg-gray-800 rounded-sm transition-all duration-300 ${
                isOpen ? 'opacity-0' : ''
              }`}></span>
              <span className={`block h-0.5 w-6 bg-gray-800 rounded-sm transform transition-all duration-300 ${
                isOpen ? '-rotate-45 -translate-y-2.5' : ''
              }`}></span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            {navLinks.map(([title, url]) => (
              <Link
                key={title}
                to={url}
                className={`font-medium transition-colors duration-300 hover:text-blue-500 text-gray-800 ${
                  location.pathname === url ? 'text-blue-600 border-b-2 border-blue-600' : ''
                }`}
              >
                {title}
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 py-4">
            {navLinks.map(([title, url]) => (
              <Link
                key={`mobile-${title}`}
                to={url}
                className={`block px-4 py-3 text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200 ${
                  location.pathname === url ? 'bg-blue-50 text-blue-600 border-r-4 border-blue-600' : ''
                }`}
                onClick={() => setIsOpen(false)}
              >
                {title}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
