import { useEffect, useRef, useState } from 'react';
import { Network, Shield, Globe } from 'lucide-react';

const portfolioTeal = '#4ECCA3'; // Updated to match HeroSection
const portfolioPink = '#FF6B6B'; // Matches HeroSection
const portfolioBlue = '#9C51B6'; // Matches HeroSection

interface WorkExperience {
  position: string;
  company: string;
  period: string;
  description: string[];
  icon: JSX.Element;
}

const AboutSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isResumeOpen, setIsResumeOpen] = useState<boolean>(false);

  // Intersection Observer for section visibility and timeline animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
            const items = entry.target.querySelectorAll('.timeline-item');
            items.forEach((item, index) => {
              setTimeout(() => {
                item.classNameList.add('opacity-100', 'translate-y-0');
                item.classList.remove('opacity-0', 'translate-y-10');
              }, index * 200);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const workExperience: WorkExperience[] = [
    {
      position: 'Network Engineer',
      company: 'Izeon Innovative Pvt Ltd, Chennai',
      period: 'Mar 2025 – May 2025',
      description: [
        'Simulated network routing for VLANs and subnets using Cisco Packet Tracer',
        'Configured and troubleshot routers/switches with RIP, OSPF, NAT, and DHCP',
        'Tested network topologies using CLI tools and applied OSI/TCP-IP models',
      ],
      icon: <Network className="w-6 h-6" style={{ color: portfolioTeal }} />,
    },
    {
      position: 'Intern',
      company: 'Tamil Nadu Cyber Crime Wing, Chennai',
      period: 'Jan 2024 – Feb 2024',
      description: [
        'Built a Python-based NLP review analyzer with 95% accuracy',
        'Developed a real-time digital fraud detection system',
        'Used Python, Flask, HTML, CSS, and JavaScript for secure workflows',
      ],
      icon: <Shield className="w-6 h-6" style={{ color: portfolioTeal }} />,
    },
    {
      position: 'Intern',
      company: 'Learn and Build, Remote',
      period: 'Aug 2023 – Oct 2023',
      description: [
        'Reduced website load time by 40% through frontend optimization',
        'Designed responsive UI for enhanced cross-platform accessibility',
        'Built full-stack features using HTML, CSS, JavaScript, Node.js, and MongoDB',
      ],
      icon: <Globe className="w-6 h-6" style={{ color: portfolioTeal }} />,
    },
  ];

  return (
    <>
      <section
        id="about"
        ref={sectionRef}
        className={`min-h-screen py-20 relative transition-all duration-700 opacity-0 translate-y-10 ${
          isResumeOpen ? 'blur-sm' : ''
        }`}
      >
        <div className="container mx-auto px-6">
          {/* About Me Section */}
          <div className="mb-20">
            <h3 className="mb-6 text-2xl font-semibold text-white">About Me</h3>
            <div className="text-white/70 space-y-4 text-lg leading-relaxed">
              <p>A results-driven Software Engineer passionate about building scalable, user-centric solutions.</p>
              <p>Graduated in Electronics and Communication Engineering from AGNI College of Technology (2021–2025).</p>
              <p>Known for delivering innovative, real-world solutions with creativity and precision.</p>
            </div>
          </div>

          {/* Work Experience Timeline */}
          <div className="mb-20">
            <h3 className="mb-10 text-2xl font-semibold text-white">Work Experience</h3>
            <div className="relative">
              {/* Timeline Bar */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#4ECCA3] to-transparent" />
              {workExperience.map((job, index) => (
                <div
                  key={index}
                  className={`timeline-item relative flex items-center mb-12 opacity-0 translate-y-10 transition-all duration-500 ease-out ${
                    index % 2 === 0 ? 'flex-row-reverse' : ''
                  } hover:bg-white/5 hover:rounded-lg hover:scale-105 transition-transform duration-300`}
                >
                  {/* Timeline Dot with Ripple Effect */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2">
                    <div className="relative w-5 h-5 rounded-full" style={{ backgroundColor: portfolioTeal }}>
                      <div className="absolute inset-0 rounded-full bg-[#4ECCA3]/30 animate-ripple" />
                      <div className="absolute inset-0 rounded-full bg-[#4ECCA3]/20 animate-ripple delay-200" />
                    </div>
                  </div>
                  {/* Timeline Content */}
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 md:pr-12 text-right' : 'pl-8 md:pl-12'}`}>
                    <div className={`flex flex-col ${index % 2 === 0 ? 'items-end' : 'items-start'}`}>
                      <div className="mb-2 flex items-center gap-2">
                        {job.icon}
                        <h4 className="text-xl md:text-2xl font-bold text-white">{job.company}</h4>
                      </div>
                      <p className="mb-1 text-sm md:text-base" style={{ color: portfolioTeal }}>
                        {job.period}
                      </p>
                      <p className="mb-2 text-white/90 font-medium">{job.position}</p>
                      <ul
                        className={`text-white/70 text-sm md:text-base ${
                          index % 2 === 0 ? 'text-right' : 'text-left'
                        } list-disc list-inside`}
                      >
                        {job.description.map((item, i) => (
                          <li key={i} className="mb-2">{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="w-1/2" />
                </div>
              ))}
            </div>

            {/* Resume Button */}
            <div className="flex justify-center mt-10">
              <button
                onClick={() => setIsResumeOpen(true)}
                className="px-8 py-3 bg-transparent border-2 rounded-full text-lg font-medium transition-colors duration-300"
                style={{ borderColor: portfolioTeal, color: portfolioTeal }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = portfolioTeal;
                  e.currentTarget.style.color = '#000';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = portfolioTeal;
                }}
              >
                See Resume
              </button>
            </div>
          </div>
        </div>

        {/* Decorative Elements (Matching HeroSection) */}
        <div
          className="absolute top-1/3 right-10 w-6 h-6 rounded-full blur-md"
          style={{ backgroundColor: `${portfolioPink}30` }}
        />
        <div
          className="absolute bottom-1/4 left-20 w-8 h-8 rounded-full blur-md"
          style={{ backgroundColor: `${portfolioBlue}20` }}
        />
      </section>

      {/* Resume Modal */}
      {isResumeOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/80 backdrop-blur-sm">
          <div className="relative bg-white rounded-lg max-w-3xl w-full h-[80vh] overflow-y-auto p-8">
            <button
              onClick={() => setIsResumeOpen(false)}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
              aria-label="Close Resume"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className="text-black">
              <h2 className="text-3xl font-bold mb-6 text-center">Saminathan's Resume</h2>
              <iframe
                src="/Saminathan_M.pdf#toolbar=0"
                className="w-full h-[60vh]"
                title="Saminathan's Resume"
              />
              <div className="flex justify-center mt-6">
                <a
                  href="/Saminathan_M.pdf"
                  download="Saminathan_Resume.pdf"
                  className="px-8 py-3 rounded-full text-lg font-medium transition-colors duration-300"
                  style={{ backgroundColor: portfolioTeal, color: '#000' }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = `${portfolioTeal}cc`)}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = portfolioTeal)}
                >
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes ripple {
          0% {
            transform: scale(1);
            opacity: 0.5;
          }
          100% {
            transform: scale(2.5);
            opacity: 0;
          }
        }
        .animate-ripple {
          animation: ripple 1.5s ease-out infinite;
        }
        .delay-200 {
          animation-delay: 0.2s;
        }
      `}</style>
    </>
  );
};

export default AboutSection;