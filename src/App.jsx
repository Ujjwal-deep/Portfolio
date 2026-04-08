import React, { useEffect } from 'react';
import portfolioData from './data/portfolio.json';

// Components
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const { user, whoami, skills, projects, experience, certifications } = portfolioData;

  useEffect(() => {
    // ─── SCROLL REVEAL ───
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('.reveal, .stagger-parent');
    elements.forEach(el => observer.observe(el));

    // Cleanup
    return () => {
      elements.forEach(el => observer.unobserve(el));
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <CustomCursor />
      
      {/* NAV */}
      <Navbar status={user.status} />

      <div className="layout">
        <Hero data={user} whoami={whoami} />
        <Skills skills={skills} />
        <Projects projects={projects} />
        <Experience experience={experience} />
        <Certifications certifications={certifications} />
        <About about={user.about} resumeLink={user.contact.resumeLink} />
      </div>

      <div className="layout">
        <Contact contact={user.contact} />
      </div>

      <Footer />
    </>
  );
}

export default App;
