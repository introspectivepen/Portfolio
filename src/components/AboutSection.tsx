import { useEffect, useRef, useState } from 'react';
import { Network, Shield, Globe } from 'lucide-react';

const portfolioTeal = '#14b8a6'; // Your teal color

interface WorkExperience {
  position: string;
  company: string;
  period: string;
  description: string[];
  icon: JSX.Element;
  isActive: boolean;
}

const AboutSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isResumeOpen, setIsResumeOpen] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
            const items = entry.target.querySelectorAll('.timeline-item');
            items.forEach((item, index) => {
              setTimeout(() => {
                item.classList.add('opacity-100', 'translate-y-0');
                item.classList.remove('opacity-0', 'translate-y-10');
              }, index * 200);
            });
          }
        });
      },
      { threshold: 0.1 }
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
      icon: <Network className="w-6 h-6 text-portfolio-teal" />,
      isActive: false,
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
      icon: <Shield className="w-6 h-6 text-portfolio-teal" />,
      isActive: false,
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
      icon: <Globe className="w-6 h-6 text-portfolio-teal" />,
      isActive: false,
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
          {/* Removed the "I AM A ..." animated roles headline */}

          <div className="mb-20">
            <h3 className="mb-6 text-2xl font-semibold">About Me</h3>
            <div className="text-white/70 space-y-4 text-lg leading-relaxed">
              <p>
                A results-driven Software Engineer passionate about building scalable, user-centric
                solutions.
              </p>
              <p>
                Graduated in Electronics and Communication Engineering from AGNI College of
                Technology (2021–2025).
              </p>
              <p>Known for delivering innovative, real-world solutions with creativity and precision.</p>
            </div>
          </div>

          <div className="mb-20">
            <h3 className="mb-10 text-2xl font-semibold">Work Experience</h3>
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-portfolio-teal to-transparent"></div>
              {workExperience.map((job, index) => (
                <div
                  key={index}
                  className={`timeline-item flex items-center mb-12 opacity-0 translate-y-10 transition-all duration-500 ease-out ${
                    index % 2 === 0 ? 'flex-row-reverse' : ''
                  } hover:bg-portfolio-black/20 hover:rounded-lg hover:shadow-lg hover:scale-105 transition-transform duration-300`}
                >
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-portfolio-teal animate-pulse shadow-[0_0_10px_rgba(0,255,255,0.5)]"></div>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 md:pr-12 text-right' : 'pl-8 md:pl-12'}`}>
                    <div className={`flex flex-col ${index % 2 === 0 ? 'items-end' : 'items-start'}`}>
                      <div className="mb-2 flex items-center gap-2">
                        {job.icon}
                        <h4 className="text-xl md:text-2xl font-bold">{job.company}</h4>
                      </div>
                      <p className="text-portfolio-teal mb-1 text-sm md:text-base">{job.period}</p>
                      <p className="mb-2 text-white/90 font-medium">{job.position}</p>
                      <ul
                        className={`text-white/70 text-sm md:text-base ${
                          index % 2 === 0 ? 'text-right' : 'text-left'
                        } list-disc list-inside`}
                      >
                        {job.description.map((item, i) => (
                          <li key={i} className="mb-2">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-10">
              <button
                onClick={() => setIsResumeOpen(true)}
                className="px-8 py-3 bg-portfolio-black border-2 border-portfolio-teal text-portfolio-teal rounded-full hover:bg-portfolio-teal hover:text-portfolio-black transition-colors duration-300 text-lg font-medium"
              >
                See Resume
              </button>
            </div>
          </div>
        </div>

        <div className="absolute top-1/3 right-10 w-6 h-6 rounded-full bg-portfolio-pink/30 blur-md"></div>
        <div className="absolute bottom-1/4 left-20 w-8 h-8 rounded-full bg-portfolio-blue/20 blur-md"></div>
      </section>

      {isResumeOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/80 backdrop-blur-sm">
          <div className="relative bg-white rounded-lg shadow-lg max-w-3xl w-full h-[80vh] overflow-y-auto p-8">
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>

            <div className="text-black">
              <h2 className="text-3xl font-bold mb-6">Resume</h2>
              {/* Insert your resume content here or embed PDF */}
              <p>Your resume content goes here...</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AboutSection;
