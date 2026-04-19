import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Preloader from './Preloader';
import BackToTop from './BackToTop';

/**
 * Root layout wrapper.
 * Provides Preloader, Navbar, Footer, and BackToTop on every route.
 */
const Layout = ({ children }) => {
  return (
    <div className="font-sans antialiased">
      <Preloader />
      <Navbar />
      <main>{children}</main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Layout;
