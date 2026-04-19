import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { DEPARTMENTS } from '../../constants';
import SectionHeader from '../common/SectionHeader';
import ExploreMoreButton from '../common/ExploreMoreButton';

const DepartmentMarquee = () => {
  return (
    <section id="programs" className="py-24 bg-section-dark relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-300 rounded-full blur-[200px] opacity-20"></div>

      <div className="container mx-auto px-6 lg:px-16 mb-14 text-center relative z-10">
        <SectionHeader
          label="Academic Programs"
          heading="Explore Our Departments"
          description="Discover your calling among our top-tier engineering and management departments, each designed to prepare you for the challenges of tomorrow."
          light
        />
      </div>

      {/* Marquee Row */}
      <div className="relative overflow-hidden py-6 mb-10">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-section-dark to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-section-dark to-transparent z-10"></div>

        <div className="marquee-track">
          {[...DEPARTMENTS, ...DEPARTMENTS].map((dept, i) => (
            <div
              key={i}
              className="flex-shrink-0 mx-3 bg-white shadow-sm hover:shadow-md border border-slate-200 hover:border-accent px-10 py-5 rounded-2xl cursor-pointer transition-all duration-300 group"
            >
              <span className="text-slate-700 group-hover:text-accent font-semibold text-lg whitespace-nowrap tracking-wide transition-colors">
                {dept}
              </span>
            </div>
          ))}
        </div>
      </div>

      <ExploreMoreButton href="#programs" className="relative z-10 mb-6" />
    </section>
  );
};

export default DepartmentMarquee;
