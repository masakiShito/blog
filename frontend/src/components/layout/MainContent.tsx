import React, { useEffect } from 'react';
import { Section } from '../../types';
import HeroSection from '../sections/HeroSection';
import AboutSection from '../sections/AboutSection';
import ResumeSection from '../sections/ResumeSection';
import PortfolioSection from '../sections/PortfolioSection';
import ServicesSection from '../sections/ServicesSection';
import ContactSection from '../sections/ContactSection';

interface MainContentProps {
  setActiveSection: (section: Section) => void;
}

const MainContent: React.FC<MainContentProps> = ({ setActiveSection }) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id as Section);
          }
        });
      },
      {
        rootMargin: '-50% 0px',
        threshold: 0
      }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, [setActiveSection]);

  return (
    <div className="ml-64 bg-white">
      <HeroSection />
      <AboutSection />
      <ResumeSection />
      <PortfolioSection />
      <ServicesSection />
      <ContactSection />
    </div>
  );
};

export default MainContent;