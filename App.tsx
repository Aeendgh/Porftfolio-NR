
import React, { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Hobbies from './components/Hobbies';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('home');
  const sectionRefs = {
    home: useRef<HTMLDivElement>(null),
    about: useRef<HTMLDivElement>(null),
    education: useRef<HTMLDivElement>(null),
    experience: useRef<HTMLDivElement>(null),
    skills: useRef<HTMLDivElement>(null),
    projects: useRef<HTMLDivElement>(null),
    contact: useRef<HTMLDivElement>(null),
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-30% 0px -70% 0px' }
    );

    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      Object.values(sectionRefs).forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header activeSection={activeSection} />
      <main className="flex-grow">
        <div ref={sectionRefs.home} id="home">
          <Hero />
        </div>
        <div ref={sectionRefs.about} id="about" className="pt-20">
          <About />
        </div>
        <div ref={sectionRefs.education} id="education" className="pt-20">
          <Education />
        </div>
        <div ref={sectionRefs.experience} id="experience" className="pt-20">
          <Experience />
        </div>
        <div ref={sectionRefs.skills} id="skills" className="pt-20">
          <Skills />
        </div>
        <div ref={sectionRefs.projects} id="projects" className="pt-20">
          <Projects />
        </div>
        <Hobbies />
        <div ref={sectionRefs.contact} id="contact" className="pt-20">
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
