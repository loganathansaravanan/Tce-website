import React from 'react';
import { motion } from 'framer-motion';

// Row 1 images
import Img0 from '../assets/images/Events_0.jpeg';
import Img2 from '../assets/images/Events_2.jpeg';
import Img3 from '../assets/images/Events_3.jpeg';
import Img4 from '../assets/images/Events_4.jpeg';
import Img5 from '../assets/images/Events_5.jpeg';
import Img6 from '../assets/images/Events_6.jpeg';
import Img7 from '../assets/images/Events_7.jpeg';
import Img8 from '../assets/images/Events_8.jpeg';

// Row 2 images
import Img9 from '../assets/images/Events_9.jpeg';
import Img10 from '../assets/images/Events_10.jpeg';
import Img11 from '../assets/images/Events_11.jpeg';
import Img12 from '../assets/images/Events_12.jpeg';
import Img14 from '../assets/images/Events_14.jpeg';
import Img15 from '../assets/images/Events_15.jpeg';
import ImgBanner1 from '../assets/images/TCEWebsiteBanner01.jpg';
import ImgBanner2 from '../assets/images/TCEWebsiteBanner02.jpg';

const row1Images = [Img0, Img2, Img3, Img4, Img5, Img6, Img7, Img8];
const row2Images = [Img9, Img10, Img11, Img12, Img14, Img15, ImgBanner1, ImgBanner2];

const GallerySection = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-16 mb-14 text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="block text-accent font-semibold text-sm uppercase tracking-[0.25em] mb-4"
        >
          Life at TCE
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-primary text-3xl sm:text-4xl md:text-5xl font-extrabold section-heading"
        >
          Campus Events & Memories
        </motion.h2>
      </div>

      {/* Row 1 — scrolls left */}
      <div className="relative overflow-hidden py-3">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10"></div>
        <div className="gallery-row-left">
          {[...row1Images, ...row1Images].map((imgSrc, i) => (
            <div
              key={`r1-${i}`}
              className="flex-shrink-0 mx-3 h-56 w-80 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-shadow duration-500 group"
            >
              <img
                src={imgSrc}
                alt={`Campus Event ${i + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Row 2 — scrolls right */}
      <div className="relative overflow-hidden py-3 mt-4">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10"></div>
        <div className="gallery-row-right">
          {[...row2Images, ...row2Images].map((imgSrc, i) => (
            <div
              key={`r2-${i}`}
              className="flex-shrink-0 mx-3 h-56 w-80 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-shadow duration-500 group"
            >
              <img
                src={imgSrc}
                alt={`Campus Memory ${i + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
