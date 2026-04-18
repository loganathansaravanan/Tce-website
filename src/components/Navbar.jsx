import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Menu, X } from 'lucide-react';
import TNCE_LOGO from '../assets/images/TNCE-logo.png';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Facilities', href: '/#facilities' },
  { label: 'Programs', href: '/#programs' },
  { label: 'Alumni', href: '/#alumni' },
  { label: 'Contact', href: '/#contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-white ${scrolled ? 'py-3 shadow-md border-b border-slate-100' : 'py-5'}`}>
      <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 group flex-shrink-0">
          <img
            src={TNCE_LOGO}
            alt="TNCE Logo"
            className="h-14 w-auto"
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-0.5">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-primary hover:text-accent px-3 py-2 text-[13px] font-medium tracking-wide uppercase transition-colors duration-300 whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-3 bg-accent hover:bg-accent-hover text-white font-medium text-[13px] uppercase px-6 py-2.5 rounded-full tracking-wide transition-all duration-300 shadow-sm hover:shadow-md flex items-center gap-2 whitespace-nowrap"
          >
            Apply Now <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-primary p-2 rounded-lg hover:bg-gray-100 transition-colors"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-100 shadow-xl transition-all duration-500 overflow-hidden ${
          mobileOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="container mx-auto px-6 py-6 flex flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-slate-700 hover:text-accent hover:bg-slate-50 px-4 py-3 rounded-lg text-sm font-medium uppercase tracking-wide transition-all"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="mt-3 bg-accent text-white font-medium text-sm uppercase px-7 py-3 rounded-full tracking-wide text-center shadow-sm"
          >
            Apply Now
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
