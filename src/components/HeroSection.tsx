import { useEffect, useRef } from 'react';

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="hero" ref={sectionRef} className="min-h-screen flex items-center relative pt-20 transition-all duration-700 opacity-0 translate-y-10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-8 md:gap-12">
        {/* Image Section with your profile picture */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-portfolio-teal">
              <img 
                src="https://i.postimg.cc/PrymKRGC/picofme-6.png" 
                alt="Saminathan"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Text Section */}
        <div className="md:w-1/2 mt-6 md:mt-0">
          <h1 className="text-4xl md:text-5xl font-bold tracking-wider">
            <span className="text-portfolio-teal">SOFTWARE</span><br />
            <span>ENGINEER</span>
          </h1>
          <div className="h-0.5 w-20 bg-portfolio-teal my-4"></div>
          <p className="text-white/70 max-w-lg">
            Innovative Software Engineer specializing in scalable full-stack development, automation, and cutting-edge AI applications. 
            <p className="mt-2">I'm dedicated to building human-centered products, tackling complex problems, and fostering collaborative ecosystems to drive meaningful change.
            </p>
          </p>
          <div className="mt-6 flex gap-4">
            <a href="#portfolio" className="px-6 py-3 bg-portfolio-teal text-portfolio-black font-semibold rounded hover:bg-portfolio-teal/80 transition-all">My Work</a>
            <a href="#contact" className="px-6 py-3 border border-white/20 text-white font-semibold rounded hover:bg-white/10 transition-all">Contact Me</a>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-8 h-8 rounded-full bg-portfolio-teal/30 blur-md"></div>
      <div className="absolute bottom-1/4 right-10 w-4 h-12 rounded-full bg-portfolio-pink/30 blur-md"></div>
      <div className="absolute bottom-1/3 left-1/4 w-10 h-10 rounded-full bg-portfolio-purple/20 blur-md"></div>
    </section>
  );
};

export default HeroSection;