import React from 'react';
import { ArrowRight } from 'lucide-react';

/**
 * Reusable "Explore More" CTA button.
 *
 * @param {string}  href      – Link target
 * @param {string}  [label]   – Button text (default: "Explore More")
 * @param {string}  [className] – Additional wrapper classes
 */
const ExploreMoreButton = ({ href, label = 'Explore More', className = '' }) => {
  return (
    <div className={`flex justify-center ${className}`}>
      <a
        href={href}
        className="bg-accent hover:bg-accent-hover text-white font-medium text-sm uppercase px-10 py-4 rounded-full tracking-wider transition-all duration-300 shadow-lg hover:shadow-accent/25 hover:-translate-y-1 flex items-center gap-2"
      >
        {label} <ArrowRight className="w-5 h-5" />
      </a>
    </div>
  );
};

export default ExploreMoreButton;
