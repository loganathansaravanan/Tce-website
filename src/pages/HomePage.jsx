import React from 'react';
import HeroSection from '../components/sections/HeroSection';
import FloatingImpactStats from '../components/sections/FloatingImpactStats';
import FacilityGrid from '../components/sections/FacilityGrid';
import DepartmentMarquee from '../components/sections/DepartmentMarquee';
import SkillDevelopment from '../components/sections/SkillDevelopment';
import StudentTestimonials from '../components/sections/StudentTestimonials';
import AlumniCarousel from '../components/sections/AlumniCarousel';

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <FloatingImpactStats />
      <FacilityGrid />
      <DepartmentMarquee />
      <SkillDevelopment />
      <StudentTestimonials />
      <AlumniCarousel />
    </>
  );
};

export default HomePage;
