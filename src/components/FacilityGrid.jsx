import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, MonitorPlay, Briefcase, Users, FlaskConical, Coffee } from 'lucide-react';

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

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((fac, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="floating-card p-8 group"
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
    </section>
  );
};

export default FacilityGrid;
