import React from 'react';

// Placeholder Logo Icon (Replace with your actual SVG or Image)
const LogoIcon: React.FC = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block mr-2">
    <circle cx="12" cy="12" r="10" fill="#34D399"/> {/* Adjust color as needed */}
    {/* Add paths for your specific logo mark if needed */}
  </svg>
);


const Header: React.FC = () => {
  // Assume 'home' is the active page for styling example
  const activePage = 'home';

  const navItems = [
    { id: 'home', label: 'Home', href: '#' },
    { id: 'stories', label: 'Stories', href: '#stories' },
    { id: 'education', label: 'Education', href: '#health' }, // Assuming maps to #health section
    { id: 'help', label: 'Help Hub', href: '#help' },
    { id: 'voices', label: 'Voices', href: '#' }, // Add section ID if available
    { id: 'interactive', label: 'Interactive', href: '#' }, // Add section ID if available
  ];

  return (
    // Header with full-width background and subtle shadow/border
    <header className="bg-white shadow-sm sticky top-0 z-50 w-full border-b border-gray-200">
      {/* Inner container for constrained content */}
      <nav className="container mx-auto px-4 lg:px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center text-lg font-bold text-gray-800 hover:text-brand-green">
           <LogoIcon />
           No Shame Inna Mi Mind
        </a>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6 lg:space-x-8 items-center">
          {navItems.map(item => (
            <a
              key={item.id}
              href={item.href}
              className={`text-sm lg:text-base transition duration-150 ease-in-out
                 ${activePage === item.id
                   ? 'text-brand-green font-semibold' // Active link style
                   : 'text-gray-600 hover:text-brand-green' // Inactive link style
                 }`}
            >
              {item.label}
            </a>
          ))}
        </div>
         {/* Add Mobile Menu Button Here if needed */}
         <div className="md:hidden">
            {/* Hamburger Icon Button */}
         </div>
      </nav>
    </header>
  );
};

export default Header;