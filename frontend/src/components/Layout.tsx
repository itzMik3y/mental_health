import React from 'react';
import { Outlet } from 'react-router-dom'; // Import Outlet
import Header from './Header';
import Footer from './Footer';

const Layout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Outlet renders the matched child route component */}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;