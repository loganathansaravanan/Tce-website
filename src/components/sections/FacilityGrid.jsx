import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, MonitorPlay, Briefcase, Users, FlaskConical, Coffee, Home, Building, ArrowRight } from 'lucide-react';
import FacilityImage from '../../assets/images/OurFacilities.jpg';
import { FACILITIES } from '../../constants';
import SectionHeader from '../common/SectionHeader';
import ExploreMoreButton from '../common/ExploreMoreButton';

/** Icon lookup to map string names from FACILITIES to components */
const iconMap = { BookOpen, MonitorPlay, Briefcase, Users, FlaskConical, Coffee, Home, Building };

const FacilityGrid = () => {
  return (
    <section id="facilities" className="py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-16">
        <SectionHeader
          label="World-Class Infrastructure"
          heading="Campus Facilities"
        />

        {/* Content Layout */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          
          {/* Left Side: Facilities List */}
          <div className="w-full lg:w-7/12 order-2 lg:order-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              {FACILITIES.map((fac, i) => {
                const IconComponent = iconMap[fac.icon];
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    className="floating-card p-6 md:p-8 group"
                  >
                    <div className={`w-14 h-14 ${fac.accent} rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      {IconComponent && <IconComponent className="w-7 h-7" />}
                    </div>
                    <h3 className="text-primary font-bold text-xl mb-3 group-hover:text-accent transition-colors duration-300">
                      {fac.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{fac.desc}</p>
                  </motion.div>
                );
              })}
            </div>
            
            <ExploreMoreButton href="#facilities" className="sm:justify-start" />
          </div>

          {/* Right Side: Featured Image */}
          <div className="w-full lg:w-5/12 order-1 lg:order-2 lg:sticky lg:top-32">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="rounded-3xl overflow-hidden shadow-2xl relative group"
            >
              <img 
                src={FacilityImage} 
                alt="Campus Facilities and Campus Life" 
                className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8 transform translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                <h4 className="text-white font-bold text-xl mb-2 drop-shadow-md">Vibrant Campus Life</h4>
                <p className="text-white/80 text-sm drop-shadow-md">Experience holistic development in our sprawling campus.</p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FacilityGrid;
