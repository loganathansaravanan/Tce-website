import React from 'react';
import { motion } from 'framer-motion';
import { Award, Building2, Users, TrendingUp, GraduationCap } from 'lucide-react';

const features = [
  {
    icon: <Award className="w-8 h-8" />,
    title: '39+ Years',
    desc: 'of Excellence in technical education since 1984',
  },
  {
    icon: <Building2 className="w-8 h-8" />,
    title: '100+ Companies',
    desc: 'visiting campus every year for recruitment drives',
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: '99% Placed',
    desc: 'students securing top positions across industries',
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: '12 LPA',
    desc: 'highest package offered to our talented graduates',
  },
  {
    icon: <GraduationCap className="w-8 h-8" />,
    title: 'Top Faculty',
    desc: 'experienced professors guiding the next generation',
  },
];

const FloatingImpactStats = () => {
  return (
    <section id="about" className="relative z-30 -mt-24 pb-20">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {features.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="feature-card rounded-2xl p-8 text-center cursor-pointer"
            >
              <div className="feature-icon w-16 h-16 rounded-full bg-white/15 flex items-center justify-center mx-auto mb-5 text-accent transition-all duration-300">
                {item.icon}
              </div>
              <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FloatingImpactStats;
