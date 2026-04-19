import React from 'react';
import { motion } from 'framer-motion';

/**
 * Reusable section header with accent label, heading, and underline.
 * Used across FacilityGrid, DepartmentMarquee, AlumniCarousel, etc.
 *
 * @param {string}  label     – Small accent text above heading (e.g. "World-Class Infrastructure")
 * @param {string}  heading   – Main section heading
 * @param {string}  [description] – Optional paragraph below heading
 * @param {boolean} [light]   – Use white text variant (for dark backgrounds)
 */
const SectionHeader = ({ label, heading, description, light = false }) => {
  return (
    <div className="text-center mb-16">
      <motion.span
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="block text-accent font-semibold text-sm uppercase tracking-[0.25em] mb-4"
      >
        {label}
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className={`text-3xl sm:text-4xl md:text-5xl font-extrabold section-heading ${
          light ? 'text-white' : 'text-primary'
        }`}
      >
        {heading}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className={`max-w-2xl mx-auto mt-8 text-base leading-relaxed ${
            light ? 'text-white/70' : 'text-gray-500'
          }`}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
};

export default SectionHeader;
