import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionTemplate, useSpring } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { SITE_CONFIG } from '../../constants';

import ACADEMIC_IMG from '../../assets/Navbar_image/Academic.jpg';
import TNCE_CODE_IMG from '../../assets/Navbar_image/TNCE_code.jpg';
import NIRF_IMG from '../../assets/Navbar_image/nirf.png';
import A_CARD_IMG from '../../assets/Navbar_image/A_certificate.jpg';

import img1 from '../../assets/tce-hero-page/Tce-hero-page-1.jpg';
import img2 from '../../assets/tce-hero-page/Tce-hero-page-2.jpg';
import img3 from '../../assets/tce-hero-page/Tce-hero-page-3.jpg';
import img4 from '../../assets/tce-hero-page/Tce-hero-page-4.jpg';

const images = [img1, img2, img3, img4];

const ImageLayer = ({ img, index, progress, total }) => {
  // Always display the first image fully globally without any mask
  if (index === 0) {
    return (
      <div className="absolute inset-0 w-full h-full z-1">
        <img src={img} alt={`College display ${index + 1}`} className="w-full h-full object-cover object-center" />
      </div>
    );
  }

  // Calculate transitions for the subsequent images (1, 2, 3...)
  const step = 1 / Math.max(1, total - 1);
  const start = (index - 1) * step;
  const end = start + step;

  const radius = useTransform(progress, [start, end], [0, 150]);
  const clipPath = useMotionTemplate`circle(${radius}% at 50% 50%)`;

  return (
    <motion.div
      style={{ clipPath, zIndex: index + 1 }}
      className="absolute inset-0 w-full h-full will-change-[clip-path]"
    >
      <img src={img} alt={`College display ${index + 1}`} className="w-full h-full object-cover object-center" />
    </motion.div>
  );
};

const heroContents = [
  {
    tagline: SITE_CONFIG.tagline,
    heading: SITE_CONFIG.name,
    desc: <>{SITE_CONFIG.description}<br className="hidden sm:block" />{SITE_CONFIG.affiliation}</>
  },
  {
    tagline: "Global Standards",
    heading: "Gain International Acceptance",
    desc: "TCE gears students apt with industry experience and exposure by practicing profession with confidence, courage and competence."
  },
  {
    tagline: "Future Ready",
    heading: "Excel with mastery!",
    desc: "At TCE, we embrace technology and equip you to accentuate your career."
  },
  {
    tagline: "New Era",
    heading: "We lay the steps for your dreams",
    desc: "Introducing B-Tech Artificial Intelligence and Data Science Course"
  }
];

const ContentLayer = ({ content, index, progress, total }) => {
  const step = 1 / Math.max(1, total - 1);
  const center = index * step;
  const halfStep = step / 2;

  let inputScale, opacityScale, yScale;
  
  if (index === 0) {
    inputScale = [0, center + halfStep];
    opacityScale = [1, 0];
    yScale = [0, -40];
  } else if (index === total - 1) {
    inputScale = [center - halfStep, center];
    opacityScale = [0, 1];
    yScale = [40, 0];
  } else {
    inputScale = [center - halfStep, center, center + halfStep];
    opacityScale = [0, 1, 0];
    yScale = [40, 0, -40];
  }

  const opacity = useTransform(progress, inputScale, opacityScale);
  const y = useTransform(progress, inputScale, yScale);
  const pointerEvents = useTransform(progress, (v) => 
    (index === 0 && v < center + halfStep - 0.05) ||
    (index === total - 1 && v > center - halfStep + 0.05) ||
    (v > center - halfStep + 0.05 && v < center + halfStep - 0.05)
    ? "auto" : "none"
  );

  return (
    <motion.div 
      style={{ opacity, y, pointerEvents }}
      className="absolute inset-0 flex flex-col items-center justify-center text-center w-full px-4"
    >
      {content.tagline && (
        <span className="block text-accent font-semibold text-sm sm:text-base uppercase tracking-[0.3em] mb-4 sm:mb-6">
          {content.tagline}
        </span>
      )}
      <h1 className="text-white text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.2] sm:leading-[1.1] mb-6 max-w-4xl mx-auto drop-shadow-lg">
        {content.heading}
      </h1>
      <p className="text-slate-600 text-base sm:text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
        {content.desc}
      </p>
    </motion.div>
  );
};

const HeroSection = () => {
  const containerRef = useRef(null);

  // Track scroll position across the 400vh container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Apply spring physics for premium, smooth scroll-driven feel
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 25,
    mass: 1,
    restDelta: 0.001
  });

  return (
    <section id="home" ref={containerRef} className="relative h-[400vh] w-full bg-black">
      {/* ── Sticky Container ─────────────────── */}
      <div className="sticky top-0 min-h-screen w-full flex items-center justify-center overflow-hidden px-4 sm:px-0 py-20 sm:py-32 pt-40 sm:pt-100 pb-40 sm:pb-100">

        {/* ── Background Reveal Array ──────────── */}
        <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
          {images.map((img, i) => (
            <ImageLayer
              key={i}
              img={img}
              index={i}
              progress={smoothProgress}
              total={images.length}
            />
          ))}
        </div>

        {/* ── Dark Overlay ─────────────────────── */}
        <div className="hero-overlay absolute inset-0 z-10 pointer-events-none"></div>

        {/* ── Content ──────────────────────────── */}
        <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-16 flex flex-col items-center justify-center text-center w-full">
          
          {/* Dynamic Scroll Text Blocks */}
          <div className="relative w-full h-[320px] sm:h-[350px] flex items-center justify-center mb-8">
            {heroContents.map((content, i) => (
              <ContentLayer 
                key={i} 
                content={content} 
                index={i} 
                progress={smoothProgress} 
                total={heroContents.length} 
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <a
              href="#contact"
              className="bg-accent hover:bg-accent-hover text-white font-medium text-sm uppercase px-10 py-4 rounded-full tracking-wider transition-all duration-300 hover:shadow-xl hover:shadow-accent/25 hover:-translate-y-1 flex items-center gap-2"
            >
              Explore Admissions <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#about"
              className="bg-white border border-slate-200 hover:border-accent text-slate-700 hover:text-accent font-medium text-sm uppercase px-10 py-4 rounded-full tracking-wider shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              Learn More
            </a>
          </motion.div>

          {/* Achievement Logos */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="mt-14 sm:mt-20 flex flex-wrap justify-center items-center gap-6 sm:gap-10 opacity-90 bg-white/5 backdrop-blur-sm px-6 py-4 rounded-3xl border border-white/10 shadow-xl"
          >
            <img src={ACADEMIC_IMG} alt="Academic Excellence" className="h-10 sm:h-14 w-auto object-contain rounded bg-white p-1 shadow-sm" />
            <img src={TNCE_CODE_IMG} alt="TNCE Code" className="h-10 sm:h-14 w-auto object-contain rounded bg-white p-1 shadow-sm" />
            <img src={NIRF_IMG} alt="NIRF" className="h-10 sm:h-14 w-auto object-contain rounded bg-white p-1 shadow-sm" />
            <img src={A_CARD_IMG} alt="A Certificate" className="h-10 sm:h-14 w-auto object-contain rounded bg-white p-1 shadow-sm" />
          </motion.div>
        </div>

        {/* ── Bottom Gradient Fade ─────────────── */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-20 pointer-events-none"></div>
      </div>
    </section>
  );
};

export default HeroSection;
