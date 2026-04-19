import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Globe, ArrowRight } from 'lucide-react';
import TNCE_LOGO from '../../assets/images/TNCE-logo.png';
import { NAV_LINKS } from '../../constants';
import { CONTACT_INFO } from '../../constants';

// Social media SVG icons (lucide-react removed brand icons in newer versions)
const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
);
const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
);
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" /></svg>
);
const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
);

/** Icon lookup to map string names from CONTACT_INFO to components */
const iconMap = { Phone, Mail, MapPin, Globe };

const Footer = () => {
  return (
    <footer id="contact" className="bg-dark text-white relative overflow-hidden">
      {/* Contact Section */}
      <div className="py-24">
        <div className="container mx-auto px-6 lg:px-16">
          {/* Header */}
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="block text-accent font-semibold text-sm uppercase tracking-[0.25em] mb-4"
            >
              Reach Out
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-white text-3xl sm:text-4xl md:text-5xl font-extrabold section-heading"
            >
              Get In Touch
            </motion.h2>
          </div>

          {/* Contact Cards + Form Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left: Info Cards & Quick Links */}
            <div className="flex flex-col gap-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {CONTACT_INFO.map((item, i) => {
                  const IconComponent = iconMap[item.icon];
                  return (
                    <motion.a
                      key={i}
                      href={item.href}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="bg-dark-lighter rounded-2xl p-6 hover:bg-primary transition-all duration-300 group block"
                    >
                      <div className="contact-icon-box mb-4">
                        {IconComponent && <IconComponent className="w-6 h-6" />}
                      </div>
                      <p className="text-white/50 text-xs uppercase tracking-wider font-semibold mb-1">
                        {item.label}
                      </p>
                      <p className="text-white font-semibold text-sm group-hover:text-accent transition-colors">
                        {item.value}
                      </p>
                    </motion.a>
                  );
                })}
              </div>

              {/* Quick Links */}
              <div className="bg-dark-lighter rounded-2xl p-6 md:p-8 mt-2">
                <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-4 gap-x-2">
                  {NAV_LINKS.map((link, i) => (
                    <a
                      key={i}
                      href={link.href}
                      className="text-white/60 hover:text-accent font-medium text-sm flex items-center gap-2 group transition-colors"
                    >
                      <ArrowRight className="w-3.5 h-3.5 text-accent/50 group-hover:text-accent transition-colors" /> {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-dark-lighter rounded-2xl p-8 sm:p-10"
            >
              <h3 className="text-white font-bold text-xl mb-6">Send us a message</h3>
              <form className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-accent transition-colors"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-accent transition-colors"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-accent transition-colors"
                />
                <textarea
                  rows={4}
                  placeholder="Your Message..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-accent transition-colors resize-none"
                ></textarea>
                <button
                  type="submit"
                  className="bg-accent hover:bg-accent-hover text-primary font-bold text-sm uppercase px-10 py-4 rounded-full tracking-wider transition-all duration-300 hover:shadow-lg hover:shadow-accent/25 flex items-center gap-2"
                >
                  Send Message <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-6 lg:px-16 py-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="bg-white/95 p-3 rounded-2xl">
              <img src={TNCE_LOGO} alt="TNCE" className="h-10" />
            </div>
            <p className="text-white/40 text-sm ml-4">
              &copy; {new Date().getFullYear()} Tamilnadu College of Engineering.<br />All rights reserved.
            </p>
          </div>
          <div className="flex items-center gap-4">
            {[FacebookIcon, TwitterIcon, InstagramIcon, LinkedinIcon].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-accent flex items-center justify-center text-white/50 hover:text-primary transition-all duration-300"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
