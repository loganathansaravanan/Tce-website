import React from 'react';
import { motion } from 'framer-motion';
import ChairmanImg from '../assets/images/photo/Dr_P_V_Ravi.jpeg';
import CeoImg from '../assets/images/photo/Dr_Anusha_ravi.jpeg';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-16">
        
        {/* Leadership Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-primary border border-white/5 shadow-2xl rounded-3xl p-10 md:p-16 mb-12 max-w-4xl mx-auto"
        >
          <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-24">
            {/* Chairman */}
            <div className="text-center group">
              <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-accent shadow-[0_0_20px_rgba(29,185,84,0.3)] mx-auto mb-6 transform transition-all duration-500 group-hover:scale-105">
                <img 
                  src={ChairmanImg} 
                  alt="DR. P.V. RAVI" 
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <h3 className="text-yellow-500 font-bold text-xl tracking-wider uppercase mb-1">Dr. P.V. Ravi</h3>
              <p className="text-white/70 font-medium">Chairman</p>
            </div>

            {/* CEO */}
            <div className="text-center group">
              <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-accent shadow-[0_0_20px_rgba(29,185,84,0.3)] mx-auto mb-6 transform transition-all duration-500 group-hover:scale-105">
                <img 
                  src={CeoImg} 
                  alt="DR. ANUSHA RAVI" 
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <h3 className="text-yellow-500 font-bold text-xl tracking-wider uppercase mb-1">Dr. Anusha Ravi</h3>
              <p className="text-white/70 font-medium">CEO</p>
            </div>
          </div>
        </motion.div>

        {/* Info Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-primary border border-white/5 shadow-2xl rounded-3xl p-10 md:p-16 max-w-5xl mx-auto"
        >
          <h2 className="text-yellow-500 text-2xl md:text-3xl font-extrabold uppercase tracking-widest mb-8 border-b border-white/10 pb-4">
            Tamilnadu College of Engineering
          </h2>
          
          <div className="space-y-6 text-white/80 leading-relaxed text-sm md:text-base">
            <p>
              Tamilnadu College of Engineering is a first self-financing college sponsored by Tamilnadu Technical Education Foundation (Regd.) established in the year 1984. The primary focus of the Institution is to expose the young minds to the world of technology, instilling in them confidence and fortitude to face new challenges enabling them to shine in their chosen fields.
            </p>
            <p>
              The College is recognized by the Government of Tamilnadu, approved by All India Council for Technical Education, New Delhi, accredited with grade A by NAAC and affiliated to Anna University. The College offers the courses B.E (Computer Science Engineering), B.E (Mechanical Engineering), B.E (Civil Engineering), B.E (Electronics and Communication Engineering), B.E (Electrical and Electronics Engineering), B.E (Automobile Engineering), B. Tech (Artificial Intelligence and Data Science), B.Tech(Information Technology), M. E (Computer Science Engineering), M.E (Structural Engineering) and Master of Business Administration.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutSection;
