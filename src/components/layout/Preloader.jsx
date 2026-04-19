import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TCE_LOGO from '../../assets/Navbar_image/TCE_logo.jpg';

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // When window is fully loaded along with all images/videos, set loading to false.
    const handleLoad = () => {
      setTimeout(() => setLoading(false), 500); // 500ms extra delay for smooth viewing
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }
    return () => window.removeEventListener('load', handleLoad);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="fixed inset-0 z-[99999] bg-primary flex flex-col items-center justify-center p-6"
        >
          {/* Logo animation */}
          <div className="relative mb-10 w-32 h-32 flex items-center justify-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
              className="absolute inset-0 rounded-full border-[3px] border-accent border-t-transparent border-r-transparent opacity-70"
            ></motion.div>
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
              className="absolute inset-2 rounded-full border-[3px] border-white/20 border-b-transparent border-l-transparent"
            ></motion.div>
            <motion.img
              animate={{ scale: [0.95, 1.05, 0.95], opacity: [0.8, 1, 0.8] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              src={TCE_LOGO}
              alt="TNCE Logo"
              className="w-16 h-16 object-cover rounded-full shadow-[0_0_15px_rgba(29,185,84,0.4)]"
            />
          </div>

          <motion.div
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="flex items-center gap-3"
          >
            <div className="w-2 h-2 bg-accent rounded-full"></div>
            <p className="text-white font-bold tracking-[0.2em] uppercase text-sm">
              Loading Campus
            </p>
            <div className="w-2 h-2 bg-accent rounded-full"></div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
