import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FloatingImpactStats from './components/FloatingImpactStats';
import FacilityGrid from './components/FacilityGrid';
import DepartmentMarquee from './components/DepartmentMarquee';
import SkillDevelopment from './components/SkillDevelopment';
import GallerySection from './components/GallerySection';
import AlumniCarousel from './components/AlumniCarousel';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import './index.css';

function App() {
  return (
    <div className="font-sans antialiased">
      <Navbar />
      <HeroSection />
      <FloatingImpactStats />
      <FacilityGrid />
      <DepartmentMarquee />
      <SkillDevelopment />
      <GallerySection />
      <AlumniCarousel />
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
