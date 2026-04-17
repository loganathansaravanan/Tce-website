import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import Alum1 from '../assets/images/alumini2-270x248.jpg';
import Alum2 from '../assets/images/alumini3-scaled-270x248.jpg';
import Alum3 from '../assets/images/alumini4-270x248.jpg';
import Alum4 from '../assets/images/alumini5-270x248.jpg';
import Alum5 from '../assets/images/alumini6-270x248.jpg';

const alumni = [
  {
    name: 'Shilpa Rajith',
    company: 'SAP',
    role: 'Senior Software Engineer',
    image: Alum1,
    quote: 'TCE gave me the foundation to dream big and the skills to make it real. The faculty mentorship was exceptional.',
  },
  {
    name: 'Sathya Priya',
    company: 'Infoview Technologies',
    role: 'Software Developer',
    image: Alum2,
    quote: 'The practical exposure and industry connections at TCE shaped my career trajectory from day one.',
  },
  {
    name: 'LT Esan',
    company: 'Indian Armed Forces',
    role: 'Ex-Military Officer',
    image: Alum3,
    quote: 'Discipline, leadership, and technical excellence — TCE instilled values that served me throughout my military career.',
  },
  {
    name: 'S. Dhivya',
    company: 'TCS',
    role: 'System Analyst',
    image: Alum4,
    quote: 'From campus placement to leading enterprise projects — my journey started at TCE with incredible support.',
  },
  {
    name: 'R. Kumar',
    company: 'Wipro',
    role: 'Project Lead',
    image: Alum5,
    quote: 'The entrepreneurial spirit cultivated at TCE gave me the confidence to innovate and lead in the tech industry.',
  },
];

const AlumniCarousel = () => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? alumni.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === alumni.length - 1 ? 0 : c + 1));

  // Show 3 cards on desktop, 1 on mobile
  const getVisibleAlumni = () => {
    const items = [];
    for (let i = 0; i < 3; i++) {
      items.push(alumni[(current + i) % alumni.length]);
    }
    return items;
  };

  return (
    <section id="alumni" className="py-24 bg-white relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px]"></div>

      <div className="container mx-auto px-6 lg:px-16 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="block text-accent font-semibold text-sm uppercase tracking-[0.25em] mb-4"
          >
            Success Stories
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-primary text-3xl sm:text-4xl md:text-5xl font-extrabold section-heading"
          >
            Star Alumni
          </motion.h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {getVisibleAlumni().map((alum, i) => (
            <motion.div
              key={`${current}-${i}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="alumni-card"
            >
              {/* Image */}
              <div className="relative h-60 overflow-hidden bg-gray-100">
                <img
                  src={alum.image}
                  alt={alum.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(alum.name)}&background=002D62&color=FFB81C&size=300`;
                  }}
                />
                <div className="absolute top-4 right-4 w-10 h-10 bg-accent rounded-full flex items-center justify-center shadow-lg">
                  <Quote className="w-5 h-5 text-primary" />
                </div>
              </div>

              {/* Content */}
              <div className="p-7">
                <p className="text-gray-500 text-sm leading-relaxed mb-5 italic min-h-[60px]">
                  &ldquo;{alum.quote}&rdquo;
                </p>
                <div className="border-t border-gray-100 pt-5 flex items-center gap-4">
                  <div>
                    <h4 className="text-primary font-bold text-base">{alum.name}</h4>
                    <p className="text-accent font-semibold text-sm">{alum.company}</p>
                    <p className="text-gray-400 text-xs mt-0.5">{alum.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex justify-center gap-4">
          <button
            onClick={prev}
            className="w-12 h-12 rounded-full border-2 border-primary/20 hover:border-accent hover:bg-accent text-primary hover:text-primary flex items-center justify-center transition-all duration-300 group"
          >
            <ChevronLeft className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </button>

          {/* Dots */}
          <div className="flex items-center gap-2">
            {alumni.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  i === current ? 'w-8 bg-accent' : 'w-2.5 bg-gray-300 hover:bg-primary/30'
                }`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="w-12 h-12 rounded-full border-2 border-primary/20 hover:border-accent hover:bg-accent text-primary hover:text-primary flex items-center justify-center transition-all duration-300 group"
          >
            <ChevronRight className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default AlumniCarousel;
