
import { useEffect, useState } from 'react';

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 200;

      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionBottom = sectionTop + (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute('id') || '';

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="fixed right-10 top-1/2 transform -translate-y-1/2 z-50 hidden md:block">
      <ul className="flex flex-col space-y-6">
        <li>
          <button 
            className={`nav-dot ${activeSection === 'hero' ? 'active' : ''}`}
            onClick={() => scrollToSection('hero')}
            aria-label="Home section"
          ></button>
        </li>
        <li>
          <button 
            className={`nav-dot ${activeSection === 'about' ? 'active' : ''}`}
            onClick={() => scrollToSection('about')}
            aria-label="About section"
          ></button>
        </li>
        <li>
          <button 
            className={`nav-dot ${activeSection === 'skills' ? 'active' : ''}`}
            onClick={() => scrollToSection('skills')}
            aria-label="Skills section"
          ></button>
        </li>
        <li>
          <button 
            className={`nav-dot ${activeSection === 'publications' ? 'active' : ''}`}
            onClick={() => scrollToSection('publications')}
            aria-label="Publications section"
          ></button>
        </li>
        <li>
          <button 
            className={`nav-dot ${activeSection === 'achievements' ? 'active' : ''}`}
            onClick={() => scrollToSection('achievements')}
            aria-label="Achievements section"
          ></button>
        </li>
        <li>
          <button 
            className={`nav-dot ${activeSection === 'portfolio' ? 'active' : ''}`}
            onClick={() => scrollToSection('portfolio')}
            aria-label="Portfolio section"
          ></button>
        </li>
        <li>
          <button 
            className={`nav-dot ${activeSection === 'contact' ? 'active' : ''}`}
            onClick={() => scrollToSection('contact')}
            aria-label="Contact section"
          ></button>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
