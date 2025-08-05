import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Admission', path: '/admission' },
    { name: 'School Life', path: '/school-life' },
    { name: 'Contact', path: '/contact' },
  ];

  const socialLinks = [
    { name: 'Facebook', icon: 'fa-facebook-f', url: 'https://facebook.com' },
    { name: 'Twitter', icon: 'fa-twitter', url: 'https://twitter.com' },
    { name: 'Instagram', icon: 'fa-instagram', url: 'https://instagram.com' },
    { name: 'LinkedIn', icon: 'fa-linkedin-in', url: 'https://linkedin.com' },
  ];

  return (
    <footer className="bg-blue-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* School Info */}
          <div>
            <h4 className="text-xl font-bold mb-4">Kings Modern Academy</h4>
            <address className="not-italic">
              <p className="mb-2">123 School Lane</p>
              <p className="mb-2">Goba, Dar es Salaam</p>
              <p className="mb-2">Tanzania</p>
            </address>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-4">Contact Us</h4>
            <div className="space-y-2">
              <p>
                <i className="fas fa-phone mr-2"></i>
                <a href="tel:+255123456789" className="hover:text-blue-300 transition-colors">
                  +255 123 456 789
                </a>
              </p>
              <p>
                <i className="fas fa-envelope mr-2"></i>
                <a href="mailto:info@kingsmodernacademy.ac.tz" className="hover:text-blue-300 transition-colors">
                  info@kingsmodernacademy.ac.tz
                </a>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path}
                    className="hover:text-blue-300 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-xl font-bold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-blue-800 flex items-center justify-center hover:bg-blue-700 transition-colors"
                  aria-label={social.name}
                >
                  <i className={`fab ${social.icon}`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-blue-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; {currentYear} Kings Modern Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
