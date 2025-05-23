import { useEffect, useRef, useState } from 'react';
import { Briefcase } from 'lucide-react';

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

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

  const workExperience = [
    {
      position: "Intern",
      company: "Tamil Nadu Cyber Crime Wing, Chennai",
      period: "Jan-Feb 2024",
      description: [
        "Conducted cybersecurity investigations and supported real-time digital threat analysis",
        "Built a review analysis system using Python achieving 95% accuracy",
        "Tech Stack: Python, Flask, HTML, CSS, JavaScript"
      ],
      isActive: true
    },
    {
      position: "Intern",
      company: "Learn and Build, Remote",
      period: "Aug-Oct 2023",
      description: [
        "Created responsive UIs reducing load times by 40% and boosting user engagement",
        "Implemented interactive features and ensured optimal performance",
        "Tech Stack: HTML, CSS, JavaScript, Node.js, MongoDB"
      ],
      isActive: false
    }
  ];

  return (
    <>
      <section id="about" ref={sectionRef} className={`min-h-screen py-20 relative transition-all duration-700 opacity-0 translate-y-10 ${isResumeOpen ? 'blur-sm' : ''}`}>
        <div className="container mx-auto px-6">
          <h2 className="text-center mb-16">I AM A <span className="text-portfolio-teal">SOFTWARE ENGINEER</span></h2>
          
          {/* About Me Section */}
          <div className="mb-20">
            <h3 className="mb-6">About Me</h3>
            <div className="text-white/70 space-y-4">
              <p>
                A results-driven Software Engineer passionate about building scalable, user-centric solutions.
              </p>
              <p>
                Graduated in Electronics and Communication Engineering from AGNI College of Technology (2021–2025).
              </p>
              <p>
                Known for delivering innovative, real-world solutions with creativity, precision, and a deep passion for excellence.
              </p>
            </div>
          </div>
          
          {/* Work Experience Section - Timeline */}
          <div className="mb-20">
            <h3 className="mb-10">Work Experience</h3>
            <div className="relative">
              {/* Timeline container */}
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-white/20"></div>
                
                {/* Timeline items */}
                {workExperience.map((job, index) => (
                  <div key={index} className={`flex items-center mb-16 ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                    {/* Timeline dot */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-portfolio-teal"></div>
                    
                    {/* Content */}
                    <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12'}`}>
                      <div className={`flex flex-col ${index % 2 === 0 ? 'items-end' : 'items-start'}`}>
                        <div className="mb-2 flex items-center gap-2">
                          {job.isActive && index % 2 === 1 && <span className="text-portfolio-teal font-bold"></span>}
                          <h4 className="text-xl font-bold">{job.company}</h4>
                          {job.isActive && index % 2 === 0 && <span className="text-portfolio-teal font-bold"></span>}
                        </div>
                        <p className="text-portfolio-teal mb-1">{job.period}</p>
                        <p className="mb-2 text-white/90">{job.position}</p>
                        <ul className={`text-white/70 text-sm ${index % 2 === 0 ? 'text-right' : 'text-left'} list-none`}>
                          {job.description.map((item, i) => (
                            <li key={i} className="mb-1">{item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    {/* Empty space for the other side */}
                    <div className="w-1/2"></div>
                  </div>
                ))}
              </div>
              
              {/* View resume button */}
              <div className="flex justify-center mt-10">
                <button 
                  onClick={() => setIsResumeOpen(true)}
                  className="px-6 py-2 bg-portfolio-black border border-portfolio-teal text-portfolio-teal rounded-full hover:bg-portfolio-teal hover:text-portfolio-black transition-colors duration-300"
                >
                  See Resume
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Section number positioned at bottom left */}
     
        
        {/* Decorative elements */}
        <div className="absolute top-1/3 right-10 w-6 h-6 rounded-full bg-portfolio-pink/30 blur-md"></div>
        <div className="absolute bottom-1/4 left-20 w-8 h-8 rounded-full bg-portfolio-blue/20 blur-md"></div>
      </section>

      {/* Resume Modal */}
      {isResumeOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/80 backdrop-blur-sm">
          <div className="relative bg-white rounded-lg shadow-lg max-w-3xl w-full h-[80vh] overflow-y-auto p-6">
            {/* Close Button */}
            <button
              onClick={() => setIsResumeOpen(false)}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>

            {/* Resume Content */}
            <div className="text-black">
              <h2 className="text-2xl font-bold mb-4 text-center">Saminathan's Resume</h2>
              {/* Display the PDF without toolbar */}
              <iframe
                src="/saminathan.pdf#toolbar=0"
                className="w-full h-[60vh]"
                title="Saminathan's Resume"
              />
              {/* Download Button */}
              <div className="flex justify-center mt-4">
                <a
                  href="/saminathan.pdf"
                  download="Saminathan_Resume.pdf"
                  className="px-6 py-2 bg-portfolio-teal text-portfolio-black rounded-full hover:bg-portfolio-teal/80 transition-colors duration-300"
                >
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AboutSection;