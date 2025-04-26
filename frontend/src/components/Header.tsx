import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button from './Button';

// SVG Brain Logo component
const Logo: React.FC = () => (
  <Link to="/" className="flex items-center space-x-2">
    <svg
      width="40"
      height="40"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Left hemisphere */}
      <path
        d="M32 2 C18 2, 6 14, 6 28 C6 40, 18 62, 32 60"
        fill="#00C09A"
      />
      {/* Right hemisphere */}
      <path
        d="M32 2 C46 2, 58 14, 58 28 C58 40, 46 62, 32 60"
        fill="#00C09A"
      />
      {/* Brain fissure */}
      <path
        d="M32 2 L32 60"
        stroke="#FFFFFF"
        strokeWidth="2"
      />
    </svg>
    <span className="font-bold text-lg text-gray-900 text-#00C09A">No Shame Inna Mi Mind</span>
  </Link>
);

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/stories', label: 'Stories' },
    { path: '/confessions', label: 'Confessions' },
    { path: '/education', label: 'Education' },
    { path: '/help-hub', label: 'Help Hub' },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-30">
      <div className="container mx-auto px-4 flex justify-between items-center h-16">
        {/* Logo */}
        <Logo />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="relative font-medium text-blue-600 hover:text-gray-900 py-2 px-1"
            >
              {item.label}
              {location.pathname === item.path && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600" />
              )}
            </Link>
          ))}
        </nav>

        {/* Desktop Action Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Link to="/help-hub">
            <Button variant="primary">Get Help Now</Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-600 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white">
          <div className="container mx-auto px-4 py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`py-2 font-medium relative ${
                    location.pathname === item.path
                      ? 'text-blue-600'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {item.label}
                  {location.pathname === item.path && (
                    <span className="absolute -left-4 top-1/2 transform -translate-y-1/2 w-2 h-2 rounded-full bg-blue-600" />
                  )}
                </Link>
              ))}
              <Link to="/help-hub" onClick={() => setIsMenuOpen(false)}>
                <Button variant="primary" className="w-full">
                  Get Help Now
                </Button>
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
