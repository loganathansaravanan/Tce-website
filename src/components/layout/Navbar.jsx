import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, Menu, X, ChevronDown } from 'lucide-react';
import TCE_LOGO from '../../assets/Navbar_image/TCE_logo_full.png';
import ACADEMIC_IMG from '../../assets/Navbar_image/Academic.jpg';
import TNCE_CODE_IMG from '../../assets/Navbar_image/TNCE_code.jpg';
import NIRF_IMG from '../../assets/Navbar_image/nirf.png';
import A_CARD_IMG from '../../assets/Navbar_image/A_certificate.jpg';
import { NAV_LINKS } from '../../constants';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMobileMenuOpen(null);
  }, [location.pathname]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-white shadow-md`}>
      {/* Top Row: Logos & Brand */}
      <div className={`container mx-auto px-6 lg:px-12 flex justify-between items-center transition-all ${scrolled ? 'py-2' : 'py-3 sm:py-5'}`}>
        <Link to="/" className="flex items-center group flex-shrink-0">
          <img
            src={TCE_LOGO}
            alt="TNCE Logo"
            className={`${scrolled ? 'h-10 sm:h-12 lg:h-14' : 'h-14 sm:h-16 lg:h-20'} w-auto transition-all duration-300 rounded-md`}
          />
        </Link>

        {/* Desktop Logos Row */}
        <div className="hidden lg:flex items-center gap-4 xl:gap-8 h-10 sm:h-12 lg:h-14 xl:h-16 ml-auto mr-10 justify-end flex-1">
          <img src={ACADEMIC_IMG} alt="Academic Excellence" className="h-[90%] w-auto object-contain rounded-md shadow-sm" />
          <img src={TNCE_CODE_IMG} alt="TNCE Code" className="h-[90%] w-auto object-contain rounded-md shadow-sm" />
          <img src={NIRF_IMG} alt="NIRF" className="h-[90%] w-auto object-contain rounded-md bg-white p-1 shadow-sm" />
          <img src={A_CARD_IMG} alt="A Certificate" className="h-[90%] w-auto object-contain rounded-md shadow-sm" />
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-primary p-2 rounded-lg hover:bg-gray-100 transition-colors"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Bottom Row: Navigation Links (Project Theme) */}
      <div className="hidden lg:block bg-primary text-white border-t border-white/5">
        <div className="container mx-auto px-6 lg:px-12 relative">
          <ul className="flex items-center justify-center gap-x-6 xl:gap-x-8">
            {NAV_LINKS.map((link, index) => {
              const isActive = location.pathname === link.href || (link.href !== '/' && location.pathname.startsWith(link.href));

              if (link.dropdown) {
                // Determine if this specific item anchors relatively or strictly to the container
                const isMega = link.dropdown.type === 'mega';

                return (
                  <li key={index} className={`group py-4 ${isMega ? '' : 'relative'}`}>
                    <a
                      href={link.href}
                      className={`flex items-center gap-1 text-[13px] font-semibold tracking-wider uppercase transition-colors duration-300 whitespace-nowrap cursor-pointer ${isActive ? 'text-accent' : 'hover:text-accent'
                        }`}
                    >
                      {link.label} <ChevronDown className="w-3.5 h-3.5" />
                    </a>

                    {/* Megamenu Container */}
                    {isMega ? (
                      <div className="absolute top-full left-0 w-full bg-white shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 text-slate-800 border-t-2 border-accent rounded-b-xl border border-t-0 border-slate-100">
                        <div className="p-8 grid grid-cols-3 gap-8">
                          {link.dropdown.columns.map((col, colIdx) => (
                            <div key={colIdx}>
                              <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-4">{col.title}</h3>
                              {col.links && (
                                <ul className="space-y-3 mb-6">
                                  {col.links.map((sublink, slIdx) => (
                                    <li key={slIdx}>
                                      <a href={sublink.href} className="text-[13px] font-medium text-slate-700 hover:text-accent transition-colors block">{sublink.label}</a>
                                    </li>
                                  ))}
                                </ul>
                              )}

                              {col.widgets && (
                                <div className="space-y-5">
                                  {col.widgets.map((widget, wIdx) => (
                                    <div key={wIdx}>
                                      <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-3">{widget.title}</h3>
                                      <ul className="space-y-2">
                                        {widget.links.map((wLink, wlIdx) => (
                                          <li key={wlIdx}>
                                            <a
                                              href={wLink.href}
                                              className="inline-block bg-accent hover:bg-accent-hover text-white text-xs font-semibold px-4 py-2 rounded-full transition-colors whitespace-nowrap uppercase tracking-wider"
                                            >
                                              {wLink.label}
                                            </a>
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : (
                      // Simple Dropdown (Committee)
                      <div className="absolute top-full left-1/2 -translate-x-1/2 w-[380px] bg-white shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 text-slate-800 border-t-2 border-accent rounded-b-xl border border-t-0 border-slate-100">
                        <ul className="p-6 space-y-4">
                          {link.dropdown.links.map((sublink, slIdx) => (
                            <li key={slIdx}>
                              {sublink.children ? (
                                <div>
                                  <span className="text-[14px] font-medium text-slate-700 block mb-3">{sublink.label}</span>
                                  <div className="flex flex-col gap-3 pl-4 border-l-2 border-slate-100">
                                    {sublink.children.map((child, cIdx) => (
                                      <a
                                        key={cIdx}
                                        href={child.href}
                                        className="inline-block self-start bg-accent hover:bg-accent-hover text-white text-[11px] font-semibold px-4 py-1.5 rounded-full transition-colors whitespace-nowrap"
                                      >
                                        {child.label}
                                      </a>
                                    ))}
                                  </div>
                                </div>
                              ) : (
                                <a href={sublink.href} className="text-[14px] font-medium text-slate-700 hover:text-accent transition-colors block">{sublink.label}</a>
                              )}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </li>
                );
              }

              // Standard Link
              return (
                <li key={index} className="py-4">
                  <a
                    href={link.href}
                    className={`text-[13px] font-semibold tracking-wider uppercase transition-colors duration-300 whitespace-nowrap ${isActive ? 'text-accent' : 'hover:text-accent'
                      }`}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-primary text-white overflow-y-auto transition-all duration-300 ease-in-out border-t border-white/5 ${mobileOpen ? 'max-h-[85vh] opacity-100' : 'max-h-0 opacity-0'
          }`}
      >
        <div className="container mx-auto px-6 py-4 flex flex-col gap-2">
          {NAV_LINKS.map((link, index) => {
            if (link.dropdown) {
              const isOpen = mobileMenuOpen === index;
              return (
                <div key={index} className="border-b border-white/10 last:border-0 pb-2">
                  <button
                    onClick={() => setMobileMenuOpen(isOpen ? null : index)}
                    className="w-full flex items-center justify-between text-left text-white hover:text-accent py-3 text-sm font-semibold uppercase tracking-wide transition-all"
                  >
                    {link.label}
                    <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180 text-accent' : ''}`} />
                  </button>

                  {/* Mobile Dropdown Content */}
                  <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[1500px] pb-4' : 'max-h-0'}`}>
                    {link.dropdown.type === 'mega' ? (
                      <div className="flex flex-col gap-6 pt-2 pl-4 border-l border-accent/40">
                        {link.dropdown.columns.map((col, colIdx) => (
                          <div key={colIdx}>
                            <h3 className="text-xs font-bold text-accent uppercase tracking-widest mb-3">{col.title}</h3>
                            {col.links && (
                              <ul className="space-y-3">
                                {col.links.map((sublink, slIdx) => (
                                  <li key={slIdx}>
                                    <a href={sublink.href} className="text-[13px] text-white/80 hover:text-white block">{sublink.label}</a>
                                  </li>
                                ))}
                              </ul>
                            )}
                            {col.widgets && (
                              <div className="space-y-4 mt-4">
                                {col.widgets.map((widget, wIdx) => (
                                  <div key={wIdx}>
                                    <h3 className="text-xs font-bold text-accent uppercase tracking-widest mb-2">{widget.title}</h3>
                                    <ul className="space-y-2">
                                      {widget.links.map((wLink, wlIdx) => (
                                        <li key={wlIdx}>
                                          <a href={wLink.href} className="inline-block bg-accent text-white text-[11px] font-semibold px-4 py-2 rounded-full w-full text-center">
                                            {wLink.label}
                                          </a>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="flex flex-col gap-4 pt-2 pl-4 border-l border-accent/40">
                        {link.dropdown.links.map((sublink, slIdx) => (
                          <div key={slIdx}>
                            {sublink.children ? (
                              <div>
                                <span className="text-[13px] text-white font-medium block mb-2">{sublink.label}</span>
                                <div className="flex flex-col gap-2 pl-2 border-l border-white/20">
                                  {sublink.children.map((child, cIdx) => (
                                    <a key={cIdx} href={child.href} className="inline-block bg-accent hover:bg-accent-hover text-white text-[10px] font-semibold px-3 py-1.5 rounded-full w-max ml-2 mt-1">
                                      {child.label}
                                    </a>
                                  ))}
                                </div>
                              </div>
                            ) : (
                              <a href={sublink.href} className="text-[13px] text-white/80 hover:text-white block">{sublink.label}</a>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              );
            }

            // Normal Mobile Link
            return (
              <a
                key={index}
                href={link.href}
                className="text-white hover:text-accent py-3 text-sm font-semibold uppercase tracking-wide transition-all border-b border-white/10 last:border-0"
              >
                {link.label}
              </a>
            );
          })}
          {/* Mobile Logos */}
          <div className="mt-6 pt-6 border-t border-white/20 grid grid-cols-2 gap-6 text-center pb-8 justify-items-center items-center">
            <img src={ACADEMIC_IMG} alt="Academic Excellence" className="h-10 w-auto object-contain rounded bg-white p-1 opacity-90 shadow-sm" />
            <img src={TNCE_CODE_IMG} alt="TNCE Code" className="h-10 w-auto object-contain rounded bg-white p-1 opacity-90 shadow-sm" />
            <img src={NIRF_IMG} alt="NIRF" className="h-10 w-auto object-contain rounded bg-white p-1 opacity-90 shadow-sm" />
            <img src={A_CARD_IMG} alt="A Certificate" className="h-10 w-auto object-contain rounded bg-white p-1 opacity-90 shadow-sm" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
