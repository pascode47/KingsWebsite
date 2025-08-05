import React, { useState, useEffect, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  // Always use dark text for better visibility
  const shouldUseDarkText = true;
  
  // Use white background when scrolled or on non-home pages
  const shouldUseBackground = isScrolled || location.pathname !== '/';

  return (
    <header 
      className={`${isScrolled ? 'fixed' : 'relative'} top-0 w-full z-50 transition-all duration-300 ${
        shouldUseBackground ? 'bg-white/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link 
            to="/" 
            className={`text-2xl font-bold transition-colors duration-300 ${
              shouldUseDarkText ? 'text-blue-600' : 'text-white'
            }`}
          >
            Kings Modern Academy
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden focus:outline-none"
            aria-label="Toggle menu"
          >
            <div className={`w-6 h-6 flex flex-col justify-around transition-all ${
              shouldUseDarkText ? 'text-blue-600' : 'text-white'
            }`}>
              <span className={`block h-0.5 w-6 rounded-sm transform transition-all duration-300 ${
                isOpen ? 'rotate-45 translate-y-2.5 bg-current' : 'bg-current'
              }`}></span>
              <span className={`block h-0.5 w-6 rounded-sm transition-all duration-300 ${
                isOpen ? 'opacity-0 bg-current' : 'bg-current'
              }`}></span>
              <span className={`block h-0.5 w-6 rounded-sm transform transition-all duration-300 ${
                isOpen ? '-rotate-45 -translate-y-2.5 bg-current' : 'bg-current'
              }`}></span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            {navLinks.map(([title, url]) => (
              <Link
                key={title}
                to={url}
                className={`font-medium transition-colors duration-300 hover:text-blue-500 ${
                  shouldUseDarkText ? 'text-gray-800' : 'text-white'
                } ${location.pathname === url ? 'border-b-2 border-current' : ''}`}
              >
                {title}
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md rounded-lg shadow-lg mx-2 mt-2 p-4 space-y-3">
            {navLinks.map(([title, url]) => (
              <Link
                key={`mobile-${title}`}
                to={url}
                className={`block px-3 py-2 rounded-md transition-colors duration-200 ${
                  location.pathname === url 
                    ? 'bg-blue-50 text-blue-600' 
                    : 'text-gray-800 hover:bg-blue-50'
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
