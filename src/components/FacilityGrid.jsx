import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, MonitorPlay, Briefcase, Users, FlaskConical, Coffee, Home, Building } from 'lucide-react';
import FacilityImage from '../assets/images/OurFacilities.jpg';

const facilities = [
  {
    title: 'Central Library',
    desc: 'Knowledge repository built in 2003 with 50,000+ volumes, digital archives, and dedicated reading halls.',
    icon: <BookOpen className="w-7 h-7" />,
    accent: 'bg-blue-500',
  },
  {
    title: 'Digital Learning',
    desc: 'Smart classrooms equipped with projectors, e-learning platforms, and high-speed internet connectivity.',
    icon: <MonitorPlay className="w-7 h-7" />,
    accent: 'bg-purple-500',
  },
  {
    title: 'Entrepreneurship',
    desc: 'EDC cell nurturing student startups with mentorship, seed funding guidance, and incubation support.',
    icon: <Briefcase className="w-7 h-7" />,
    accent: 'bg-amber-500',
  },
  {
    title: 'Club Activities',
    desc: 'Technical and cultural clubs where students explore robotics, coding, music, dance, and more.',
    icon: <Users className="w-7 h-7" />,
    accent: 'bg-green-500',
  },
  {
    title: 'Research Facilities',
    desc: 'Cutting-edge laboratories for AI, IoT, renewable energy, and advanced material science research.',
    icon: <FlaskConical className="w-7 h-7" />,
    accent: 'bg-red-500',
  },
  {
    title: 'Student Corner',
    desc: 'Recreation zones, modern cafeteria, sports grounds, and wellness services for campus life balance.',
    icon: <Coffee className="w-7 h-7" />,
    accent: 'bg-teal-500',
  },
  {
    title: 'Men Hostel',
    desc: 'Secure and comfortable residential blocks with Wi-Fi, study halls, and nutritious mess facilities.',
    icon: <Building className="w-7 h-7" />,
    accent: 'bg-indigo-500',
  },
  {
    title: 'Women Hostel',
    desc: 'Safe, dedicated campus housing providing modern amenities, health care, and 24/7 security monitoring.',
    icon: <Home className="w-7 h-7" />,
    accent: 'bg-pink-500',
  },
];

const FacilityGrid = () => {
  return (
    <section id="facilities" className="py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-16">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="block text-accent font-semibold text-sm uppercase tracking-[0.25em] mb-4"
          >
            World-Class Infrastructure
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-primary text-3xl sm:text-4xl md:text-5xl font-extrabold section-heading"
          >
            Campus Facilities
          </motion.h2>
        </div>

        {/* Content Layout */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          
          {/* Left Side: Facilities List */}
          <div className="w-full lg:w-7/12 order-2 lg:order-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {facilities.map((fac, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="floating-card p-6 md:p-8 group"
                >
                  <div className={`w-14 h-14 ${fac.accent} rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    {fac.icon}
                  </div>
                  <h3 className="text-primary font-bold text-xl mb-3 group-hover:text-accent transition-colors duration-300">
                    {fac.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{fac.desc}</p>
                </motion.div>
              ))}
            </div>
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
