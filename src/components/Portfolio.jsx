import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Education from './Education';
import Contact from './Contact';
import Footer from './Footer';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'skills', 'projects', 'education', 'contact'];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen text-white bg-gradient-to-tr from-[#0f0c29] via-[#302b63] to-[#24243e] scroll-smooth font-sans">
      {/* Fixed Navigation */}
      <Navbar activeSection={activeSection} />

      {/* Page Content */}
      <main className="pt-20 space-y-20 md:space-y-24 lg:space-y-28 px-4 sm:px-6 lg:px-8">
        
        {/* ABOUT SECTION */}
        <section
          id="about"
          className="max-w-6xl mx-auto transition-all duration-500 hover:scale-[1.01]"
        >
          <About />
        </section>

        {/* SKILLS SECTION */}
        <section
          id="skills"
          className="max-w-6xl mx-auto transition-all duration-500 hover:scale-[1.01]"
        >
          <Skills />
        </section>

        {/* PROJECTS SECTION */}
        <section
          id="projects"
          className="max-w-6xl mx-auto transition-all duration-500 hover:scale-[1.01]"
        >
          <Projects />
        </section>

        {/* EDUCATION SECTION */}
        <section
          id="education"
          className="max-w-6xl mx-auto transition-all duration-500 hover:scale-[1.01]"
        >
          <Education />
        </section>

        {/* CONTACT SECTION */}
        <section
          id="contact"
          className="max-w-6xl mx-auto transition-all duration-500 hover:scale-[1.01]"
        >
          <Contact />
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Portfolio;
  