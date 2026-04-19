import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { TESTIMONIALS } from '../../constants';
import SectionHeader from '../common/SectionHeader';

const StudentTestimonials = () => {
  return (
    <section className="py-24 bg-section-dark relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-16">
        <SectionHeader
          label="Voices of TNCE"
          heading="What Students Say About Us"
          light
        />

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="bg-primary hover:bg-dark-lighter border border-white/5 rounded-3xl p-8 relative group transition-all duration-300 hover:shadow-lg hover:shadow-accent/5 hover:-translate-y-2"
            >
              {/* Quote Icon Background */}
              <div className="absolute top-6 right-6 opacity-5 group-hover:opacity-10 group-hover:text-accent transition-all duration-500">
                <Quote className="w-16 h-16" />
              </div>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white/10 group-hover:border-accent transition-colors duration-300">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">{testimonial.name}</h4>
                  <p className="text-accent text-xs font-semibold uppercase tracking-wider">{testimonial.role}</p>
                </div>
              </div>

              <p className="text-white/70 leading-relaxed text-sm relative z-10 group-hover:text-white/90 transition-colors duration-300">
                "{testimonial.content}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudentTestimonials;
