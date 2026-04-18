import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Lightbulb, ArrowRight, Clock } from 'lucide-react';
import ElectricianImg from '../assets/images/Electrician_Domestic.Webp';
import LEDImg from '../assets/images/LED_Light_Repair.jpg';

const courses = [
  {
    title: 'Electrician Domestic Solutions',
    hours: '350',
    image: ElectricianImg,
    icon: <Zap className="w-6 h-6" />,
    desc: 'Comprehensive training in domestic electrical wiring, safety protocols, appliance repair, and modern smart home solutions.',
  },
  {
    title: 'LED Light Repair Technician',
    hours: '360',
    image: LEDImg,
    icon: <Lightbulb className="w-6 h-6" />,
    desc: 'Hands-on experience in LED manufacturing, diagnostics, soldering, circuit repair, and troubleshooting systems.',
  },
];

const SkillDevelopment = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-16">
        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="cta-banner rounded-3xl px-8 sm:px-16 py-16 text-center mb-20 relative z-10"
        >
          <span className="block text-accent font-semibold text-sm uppercase tracking-[0.25em] mb-4">
            Pradhan Mantri Kaushal Vikas Yojana
          </span>
          <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 max-w-3xl mx-auto leading-tight">
            Skill Development Programs
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto mb-8 text-base leading-relaxed">
            Empowering students with practical, industry-relevant skills through government-backed PMKVY certification courses that bridge the gap between academia and employment.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white font-medium text-sm uppercase px-10 py-4 rounded-full tracking-wider transition-all duration-300 hover:shadow-lg hover:shadow-accent/25 hover:-translate-y-1"
          >
            Enroll Now <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>

        {/* Course Cards */}
        <div className="grid md:grid-cols-2 gap-10">
          {courses.map((course, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="floating-card overflow-hidden group"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=600&auto=format&fit=crop';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/60 to-transparent"></div>
                {/* Hours Badge */}
                <div className="absolute bottom-4 left-4 bg-accent text-white font-medium text-xs uppercase px-4 py-2 rounded-full flex items-center gap-1.5 shadow-lg">
                  <Clock className="w-3.5 h-3.5" />
                  {course.hours} Hours
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-slate-50 border border-slate-100 shadow-sm rounded-lg flex items-center justify-center text-accent">
                    {course.icon}
                  </div>
                  <h3 className="text-primary font-bold text-lg">{course.title}</h3>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed">{course.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillDevelopment;
