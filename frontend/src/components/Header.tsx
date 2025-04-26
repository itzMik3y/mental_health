import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

// Placeholder Logo Icon (Replace with your actual SVG or Image)
const LogoIcon: React.FC = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block mr-2">
    <circle cx="12" cy="12" r="10" fill="#34D399"/> {/* Adjust color as needed */}
    {/* Add paths for your specific logo mark if needed */}
  </svg>
);

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  // Determine active page based on current URL path
  const getActivePage = () => {
    const path = location.pathname;
    if (path === '/') return 'home';
    return path.split('/')[1]; // Gets the first segment of the path
  };

  const activePage = getActivePage();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navItems = [
    { id: 'home', label: 'Home', path: '/' },
    { id: 'stories', label: 'Stories', path: '/stories' },
    { id: 'education', label: 'Education', path: '/education' },
    { id: 'help-hub', label: 'Help Hub', path: '/help-hub' },
    { id: 'voices', label: 'Voices', path: '/voices' },
    { id: 'interactive', label: 'Interactive', path: '/interactive' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    // Header with full-width background and subtle shadow/border
    <header className="bg-white shadow-sm sticky top-0 z-50 w-full border-b border-gray-200">
      {/* Inner container for constrained content */}
      <nav className="container mx-auto px-4 lg:px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center text-lg font-bold text-gray-800 hover:text-blue-600 transition">
          <LogoIcon />
          No Shame Inna Mi Mind
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-6 lg:space-x-8 items-center">
          {navItems.map(item => (
            <Link
              key={item.id}
              to={item.path}
              className={`text-sm lg:text-base transition duration-150 ease-in-out
                ${activePage === item.id
                  ? 'text-blue-600 font-semibold border-b-2 border-blue-600 pb-1' // Active link style
                  : 'text-gray-600 hover:text-blue-600' // Inactive link style
                }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            type="button"
            className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
            aria-label="Toggle menu"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu (Slide Down) */}
      <div 
        className={`md:hidden bg-white overflow-hidden transition-all duration-300 ease-in-out border-b border-gray-200 ${
          isMenuOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <div className="px-4 pt-2 pb-4 space-y-3">
          {navItems.map(item => (
            <Link
              key={item.id}
              to={item.path}
              className={`block py-2 px-3 rounded-md text-base font-medium transition duration-150 ease-in-out ${
                activePage === item.id
                  ? 'text-blue-600 bg-blue-50' // Active mobile link style
                  : 'text-gray-600 hover:bg-gray-50 hover:text-blue-600' // Inactive mobile link style
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;