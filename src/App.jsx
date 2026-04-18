import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Preloader from './components/Preloader';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import FloatingImpactStats from './components/FloatingImpactStats';
import FacilityGrid from './components/FacilityGrid';
import DepartmentMarquee from './components/DepartmentMarquee';
import SkillDevelopment from './components/SkillDevelopment';
import GallerySection from './components/GallerySection';
import AlumniCarousel from './components/AlumniCarousel';
import StudentTestimonials from './components/StudentTestimonials';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import './index.css';

function App() {
  return (
    <div className="font-sans antialiased">
      <Preloader />
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <HeroSection />
            <FloatingImpactStats />
            <FacilityGrid />
            <DepartmentMarquee />
            <SkillDevelopment />
            <StudentTestimonials />
            <AlumniCarousel />
          </>
        } />
        <Route path="/about" element={<AboutSection />} />
        <Route path="/gallery" element={<GallerySection />} />
      </Routes>
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
