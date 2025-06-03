import { useEffect, useRef, useState } from 'react';

import { useRoles } from './ui/useRoles';

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { currentRole, setCurrentRole,roles } = useRoles();
  const portfolioTeal = '#4ECCA3';

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole(prev => (prev + 1) % roles.length);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="min-h-screen flex items-center relative pt-20 transition-all duration-700 opacity-0 translate-y-10"
    >
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-8 md:gap-12">
        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <div className="relative">
            <div
              className={`w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4`}
              style={{ borderColor: portfolioTeal }}
            >
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
            <div className="inline-block h-24 overflow-hidden align-middle">
              <div key={currentRole} className="animate-roleChange">
                <div style={{ color: portfolioTeal }}>{roles[currentRole].first}</div>
                <div style={{ color: '#ffffff' }}>{roles[currentRole].second}</div>
              </div>
            </div>
          </h1>
          <div className="h-0.5 w-20 my-4" style={{ backgroundColor: portfolioTeal }}></div>
          <p className="text-white/70 max-w-lg">
             Innovative Tech enthusiast specializing in scalable full-stack development, automation, and cutting-edge AI applications.
            <span className="block mt-2">
              I'm dedicated to building human-centered products, tackling complex problems, and fostering collaborative ecosystems to drive meaningful change.
            </span>
          </p>
          <div className="mt-6 flex gap-4">
            <a
              href="#portfolio"
              className="px-6 py-3 font-semibold rounded hover:opacity-80 transition-all"
              style={{ backgroundColor: portfolioTeal, color: '#000' }}
            >
              My Work
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-white/20 text-white font-semibold rounded hover:bg-white/10 transition-all"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div
        className="absolute top-1/4 left-10 w-8 h-8 rounded-full blur-md"
        style={{ backgroundColor: `${portfolioTeal}30` }}
      ></div>
      <div
        className="absolute bottom-1/4 right-10 w-4 h-12 rounded-full blur-md"
        style={{ backgroundColor: '#FF6B6B30' }}
      ></div>
      <div
        className="absolute bottom-1/3 left-1/4 w-10 h-10 rounded-full blur-md"
        style={{ backgroundColor: '#9C51B620' }}
      ></div>

      <style >{`
        @keyframes roleChange {
          0%, 100% {
            opacity: 0;
            transform: translateY(10px);
          }
          15%, 85% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-roleChange {
          animation: roleChange 3s ease-in-out;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
