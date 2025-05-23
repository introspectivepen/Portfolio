
import { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-portfolio-black/90 backdrop-blur-md py-4' : 'py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-white flex items-center justify-center text-portfolio-black font-bold">SM</div>
          <span className="font-display font-bold">SAMINATHAN</span>
        </div>
        
        <nav className="hidden md:flex gap-8">
          <button onClick={() => scrollToSection('hero')} className="text-white/80 hover:text-white transition-colors">Home</button>
          <button onClick={() => scrollToSection('about')} className="text-white/80 hover:text-white transition-colors">About</button>
          <button onClick={() => scrollToSection('portfolio')} className="text-white/80 hover:text-white transition-colors">Portfolio</button>
          <button onClick={() => scrollToSection('contact')} className="text-white/80 hover:text-white transition-colors">Contact</button>
        </nav>

        <button 
          className="md:hidden flex flex-col gap-1.5"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-white transition-transform ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-opacity ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>
      
      {/* Mobile menu */}
      <div className={`md:hidden bg-portfolio-black/95 backdrop-blur-sm absolute w-full left-0 transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-60 py-4' : 'max-h-0'}`}>
        <div className="container mx-auto px-6 flex flex-col gap-4">
          <button onClick={() => scrollToSection('hero')} className="text-left py-2 text-white/80 hover:text-white transition-colors">Home</button>
          <button onClick={() => scrollToSection('about')} className="text-left py-2 text-white/80 hover:text-white transition-colors">About</button>
          <button onClick={() => scrollToSection('portfolio')} className="text-left py-2 text-white/80 hover:text-white transition-colors">Portfolio</button>
          <button onClick={() => scrollToSection('contact')} className="text-left py-2 text-white/80 hover:text-white transition-colors">Contact</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
