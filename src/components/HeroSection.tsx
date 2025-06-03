import { useEffect, useRef } from 'react';
import { useRoles } from './ui/useRoles';

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { currentRole, roles } = useRoles();
  const portfolioTeal = '#4ECCA3';

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
      className="min-h-screen flex items-center relative pt-20 transition-all duration-700 opacity-0 translate-y-10 overflow-hidden"
    >
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-8 md:gap-12">
        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <div className="relative group">
            <div
              className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 transition-colors duration-300 group-hover:border-white/80"
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
              <div key={currentRole}>
                <div
                  className="animate-slideLeft"
                  style={{ color: portfolioTeal }}
                >
                  {roles[currentRole].first}
                </div>
                <div
                  className="animate-slideRight"
                  style={{ color: '#ffffff' }}
                >
                  {roles[currentRole].second}
                </div>
              </div>
            </div>
          </h1>
          <div className="h-0.5 w-20 my-4 transition-all duration-500" style={{ backgroundColor: portfolioTeal }}></div>
          <p className="text-white/70 max-w-lg transition-opacity duration-500">
            Innovative Tech enthusiast specializing in scalable full-stack development, automation, and cutting-edge AI applications.
            <span className="block mt-2">
              I'm dedicated to building human-centered products, tackling complex problems, and fostering collaborative ecosystems to drive meaningful change.
            </span>
          </p>
          <div className="mt-6 flex gap-4">
            <a
              href="#portfolio"
              className="px-6 py-3 font-semibold rounded transition-colors duration-300 hover:bg-[#3BB88A]"
              style={{ backgroundColor: portfolioTeal, color: '#000' }}
            >
              My Work
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-white/20 text-white font-semibold rounded transition-colors duration-300 hover:border-white/50 hover:bg-white/10"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>

      {/* Decorative Hexagons with Pulse Effect */}
      <div
        className="absolute top-1/4 left-10 w-8 h-8 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTUuMDE4IDMuNzEzNTdNOS45OTk5OSAxLjI1TDQuOTgxOTIgMy43MTM1N0wxLjI1IDguNzM1NTdMNC45ODE5MiAxMy43NTc2TDkuOTk5OTkgMTguMzc5NkwxNS4wMTggMTMuNzU3NkwxOC43NSAxOC43NTc2TDguNzU2NDEgOC43MzU1N0wxNS4wMTggMy43MTM1N1oiIGZpbGw9IiM0RUNDQTMiIGZpbGwtb3BhY2l0eT0iMC4zIi8+PC9zdmc+')] bg-center bg-no-repeat bg-contain animate-pulse"
      ></div>
      <div
        className="absolute bottom-1/4 right-10 w-6 h-6 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTUuMDE4IDMuNzEzNTdNOS45OTk5OSAxLjI1TDQuOTgxOTIgMy43MTM1N0wxLjI1IDguNzM1NTdMNC45ODE5MiAxMy43NTc2TDkuOTk5OTkgMTguMzc5NkwxNS4wMTggMTMuNzU3NkwxOC43NSAxOC43NTc2TDguNzU2NDEgOC43MzU1N0wxNS4wMTggMy43MTM1N1oiIGZpbGw9IiNGRjZCNkIiIGZpbGwtb3BhY2l0eT0iMC4zIi8+PC9zdmc+')] bg-center bg-no-repeat bg-contain animate-pulse delay-150"
      ></div>
      <div
        className="absolute bottom-1/3 left-1/4 w-10 h-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTUuMDE4IDMuNzEzNTdNOS45OTk5OSAxLjI1TDQuOTgxOTIgMy43MTM1N0wxLjI1IDguNzM1NTdMNC45ODE5MiAxMy43NTc2TDkuOTk5OTkgMTguMzc5NkwxNS4wMTggMTMuNzU3NkwxOC43NSAxOC43NTc2TDguNzU2NDEgOC43MzU1N0wxNS4wMTggMy43MTM1N1oiIGZpbGw9IiM5QzUxQjYiIGZpbGwtb3BhY2l0eT0iMC4zIi8+PC9zdmc+')] bg-center bg-no-repeat bg-contain animate-pulse delay-300"
      ></div>

      <style>{`
        @keyframes slideLeft {
          0% {
            opacity: 0;
            transform: translateX(-20px);
          }
          20%, 80% {
            opacity: 1;
            transform: translateX(0);
          }
          100% {
            opacity: 0;
            transform: translateX(-20px);
          }
        }
        @keyframes slideRight {
          0% {
            opacity: 0;
            transform: translateX(20px);
          }
          20%, 80% {
            opacity: 1;
            transform: translateX(0);
          }
          100% {
            opacity: 0;
            transform: translateX(20px);
          }
        }
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 0.5;
          }
          50% {
            transform: scale(1.2);
            opacity: 0.8;
          }
        }
        .animate-slideLeft {
          animation: slideLeft 3.2s cubic-bezier(0.68, -0.55, 0.27, 1.55) infinite;
        }
        .animate-slideRight {
          animation: slideRight 3.2s cubic-bezier(0.68, -0.55, 0.27, 1.55) infinite;
        }
        .animate-pulse {
          animation: pulse 4s ease-in-out infinite;
        }
        .delay-150 {
          animation-delay: 0.15s;
        }
        .delay-300 {
          animation-delay: 0.3s;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;