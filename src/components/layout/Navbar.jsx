import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Menu, X } from 'lucide-react';
import TNCE_LOGO from '../../assets/images/TNCE-logo.png';
import { NAV_LINKS } from '../../constants';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-white ${scrolled ? 'shadow-md border-b border-slate-100' : ''}`}>
      {/* Top Row: Logos & Brand */}
      <div className={`container mx-auto px-6 lg:px-12 flex justify-between items-center transition-all ${scrolled ? 'py-3' : 'py-5'}`}>
        <Link to="/" className="flex items-center group flex-shrink-0">
          <img
            src={TNCE_LOGO}
            alt="TNCE Logo"
            className="h-12 sm:h-14 lg:h-16 w-auto"
          />
        </Link>

        {/* Desktop Logos Placeholder Row */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
          <div className="flex flex-col items-center">
            <span className="text-[10px] xl:text-xs font-bold text-slate-500 uppercase tracking-wider">Academic Excellence</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-[10px] xl:text-xs font-bold text-slate-500 uppercase tracking-wider">TNCE Code</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-[10px] xl:text-xs font-bold text-slate-500 uppercase tracking-wider">NIRF</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-[10px] xl:text-xs font-bold text-slate-500 uppercase tracking-wider">A Certificate</span>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-primary p-2 rounded-lg hover:bg-gray-100 transition-colors"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Bottom Row: Navigation Links (Desktop) */}
      <div className="hidden lg:block border-t border-slate-100 bg-slate-50/50">
        <div className="container mx-auto px-6 lg:px-12 flex justify-center items-center py-2.5">
          <div className="flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-primary hover:text-accent py-1 text-[13px] font-semibold tracking-wider uppercase transition-colors duration-300 whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="ml-4 bg-accent hover:bg-accent-hover text-white font-medium text-[13px] uppercase px-6 py-2 rounded-full tracking-wide transition-all duration-300 shadow-sm flex items-center gap-2 whitespace-nowrap"
            >
              Apply Now <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-100 shadow-xl transition-all duration-500 overflow-hidden ${
          mobileOpen ? 'max-h-[800px] opacity-100 border-t' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="container mx-auto px-6 py-4 flex flex-col gap-1">
          {NAV_LINKS.map((link) => (
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
          
          {/* Mobile Placeholder Logos */}
          <div className="mt-6 pt-6 border-t border-slate-100 grid grid-cols-2 gap-4 text-center">
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wide">Academic Excellence</span>
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wide">TNCE Code</span>
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wide">NIRF</span>
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wide">A Certificate</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
