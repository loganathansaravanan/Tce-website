import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import bgVideo from '../assets/video/tce-video.mp4';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden py-32 pt-50 pb-80">
      {/* ── Background Video ─────────────────── */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={bgVideo} type="video/mp4" />
      </video>

      {/* ── Dark Overlay ─────────────────────── */}
      <div className="hero-overlay absolute inset-0 z-10"></div>

      {/* ── Content ──────────────────────────── */}
      <div className="relative z-20 container mx-auto px-6 lg:px-16 text-center">
        <motion.span
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="block text-accent font-semibold text-sm sm:text-base uppercase tracking-[0.3em] mb-6"
        >
          Empowering Dreams
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] mb-6 max-w-4xl mx-auto drop-shadow-lg"
        >
          Tamilnadu College of Engineering
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-slate-600 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed"
        >
          Change the world through Engineering and your successful breakthroughs.
          <br className="hidden sm:block" />
          Affiliated to Anna University | Estd. 1984
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a
            href="#contact"
            className="bg-accent hover:bg-accent-hover text-white font-medium text-sm uppercase px-10 py-4 rounded-full tracking-wider transition-all duration-300 hover:shadow-xl hover:shadow-accent/25 hover:-translate-y-1 flex items-center gap-2"
          >
            Explore Admissions <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href="#about"
            className="bg-white border border-slate-200 hover:border-accent text-slate-700 hover:text-accent font-medium text-sm uppercase px-10 py-4 rounded-full tracking-wider shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
          >
            Learn More
          </a>
        </motion.div>
      </div>

      {/* ── Bottom Gradient Fade ─────────────── */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-20"></div>
    </section>
  );
};

export default HeroSection;
