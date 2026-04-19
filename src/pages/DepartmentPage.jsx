import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

// Using existing hero images as placeholders for the slider
import img1 from '../assets/tce-hero-page/Tce-hero-page-1.jpg';
import img2 from '../assets/tce-hero-page/Tce-hero-page-2.jpg';
import img3 from '../assets/tce-hero-page/Tce-hero-page-3.jpg';
import img4 from '../assets/tce-hero-page/Tce-hero-page-4.jpg';

const placeholderImages = [img1, img2, img3, img4];

// Simple mapping for demonstration. In the future, this can be moved to a robust contents file.
const DEPARTMENT_TITLES = {
  'ai-ds': 'Artificial Intelligence and Data Science',
  'automobile': 'Automobile Engineering',
  'civil': 'Civil Engineering',
  'cse': 'Computer Science & Engineering',
  'ece': 'Electronics & Communications Engineering',
  'eee': 'Electrical & Electronics Engineering',
  'it': 'Information Technology',
  'ice': 'Instrumentation & Control Engineering',
  'mech': 'Mechanical Engineering',
  'sh': 'Science & Humanities',
  'me-cse': 'ME - Computer Science & Engineering',
  'me-struct': 'ME - Structural Engineering',
  'mba': 'Master of Business Administration',
  'phd-cse': 'Ph.D in Computer Science & Engineering',
};

const DepartmentPage = () => {
  const { id } = useParams();
  const [currentIdx, setCurrentIdx] = useState(0);

  // Auto-slide effect for the right-side carousel
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % placeholderImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [id]);

  const departmentName = DEPARTMENT_TITLES[id] || 'Academic Department';

  return (
    <div className="min-h-screen bg-slate-50 pt-32 sm:pt-40 pb-24">
      <div className="container mx-auto px-6 lg:px-12">
        
        {/* Page Title */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-14 sm:mb-20"
        >
          <span className="text-accent font-bold tracking-[0.2em] uppercase text-xs sm:text-sm block mb-3">
            Academics / Department
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary border-l-4 border-accent pl-4 sm:pl-6 py-2 leading-tight">
            Department of <br className="lg:hidden" />
            <span className="text-accent">{departmentName}</span>
          </h1>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">
          
          {/* Left Side: Department Detailed Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="prose prose-slate prose-lg max-w-none w-full"
          >
            <h2 className="text-2xl font-bold text-primary mb-6">About the Department</h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              Welcome to the Department of <strong>{departmentName}</strong> at Tamilnadu College of Engineering. 
              Our vision is to build a strong foundation for our students, blending core engineering principles with 
              modern, cutting-edge technical applications. 
            </p>
            <p className="text-slate-600 leading-relaxed mb-6">
              The department boasts state-of-the-art laboratories and a modernized curriculum designed 
              exactly to match the rapidly evolving demands of the global industry. We actively equip our students with deep 
              practical exposure, encouraging them to participate in projects, symposiums, and hands-on workshops right from 
              their early semesters.
            </p>
            
            <h3 className="text-xl font-bold text-primary mb-4 mt-10">Vision & Mission</h3>
            <ul className="space-y-4 text-slate-600 list-none pl-0">
              <li className="flex items-start gap-3">
                <span className="block w-2 h-2 mt-2 rounded-full bg-accent flex-shrink-0"></span>
                <p>To produce highly competent engineers equipped to meet the technical challenges of the industry globally.</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="block w-2 h-2 mt-2 rounded-full bg-accent flex-shrink-0"></span>
                <p>To foster an inclusive environment that encourages research, creativity, and innovative entrepreneurship.</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="block w-2 h-2 mt-2 rounded-full bg-accent flex-shrink-0"></span>
                <p>To instill ethical values, teamwork, and lifelong self-learning capabilities.</p>
              </li>
            </ul>
            
            <div className="mt-10 p-6 bg-white rounded-2xl shadow-sm border border-slate-100">
              <h4 className="text-primary font-bold mb-3">Message for our Future Students</h4>
              <p className="text-sm text-slate-500 italic">
                “This is placeholder dynamic content! You can easily update this section in the future with the specific 
                faculty details, exact syllabus structures, and achievements tailored specifically to the {departmentName}.”
              </p>
            </div>
          </motion.div>

          {/* Right Side: Image Slider Carousel */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="sticky top-40 h-[400px] lg:h-[600px] w-full rounded-3xl overflow-hidden shadow-2xl group border-[6px] border-white"
          >
            <AnimatePresence mode="popLayout">
              <motion.img
                key={currentIdx}
                src={placeholderImages[currentIdx]}
                alt={`${departmentName} Facility`}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>
            
            {/* Slider Interface elements */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-10 p-3 bg-black/40 backdrop-blur-md rounded-full">
              {placeholderImages.map((_, i) => (
                <button 
                  key={i}
                  onClick={() => setCurrentIdx(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    i === currentIdx ? 'bg-accent w-6' : 'bg-white/60 hover:bg-white'
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default DepartmentPage;
