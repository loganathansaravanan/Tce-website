import React from 'react';
import { motion } from 'framer-motion';
import { Award, Building2, Users, TrendingUp, GraduationCap } from 'lucide-react';
import { STATS } from '../../constants';

/** Icon lookup to map string names from STATS to components */
const iconMap = { Award, Building2, Users, TrendingUp, GraduationCap };

const FloatingImpactStats = () => {
  return (
    <section id="stats" className="relative z-30 -mt-24 pb-20">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {STATS.map((item, i) => {
            const IconComponent = iconMap[item.icon];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="feature-card rounded-2xl p-8 text-center cursor-pointer"
              >
                <div className="feature-icon w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-5 text-accent transition-all duration-300">
                  {IconComponent && <IconComponent className="w-8 h-8" />}
                </div>
                <h3 className="text-white font-bold text-lg mb-2 transition-colors duration-300">{item.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed transition-colors duration-300">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FloatingImpactStats;
