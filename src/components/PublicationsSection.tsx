import { useEffect, useRef } from 'react';
import { Award, BookOpen, ExternalLink } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const PublicationsSection = () => {
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

  const certifications = [
    "Frontend Development – IBM",
    "Java Programming – Hackerrank",
    "Python Programming – Hackerrank",
    "SQL – Hackerrank",
    "React Basics – IBM",
    "Learning Analytics Tools – NPTEL",
    "Robotic Process Automation (RPA) – UiPath"
  ];

  return (
    <section id="publications" ref={sectionRef} className="min-h-screen py-20 relative transition-all duration-700 opacity-0 translate-y-10">
      <div className="container mx-auto px-6">
        {/* Certifications Section */}
        <div className="mb-20">
          <h2 className="text-center mb-16">MY <span className="text-portfolio-teal">CERTIFICATIONS</span></h2>
          <div className="bg-portfolio-black/50 border border-white/10 rounded-lg p-6 backdrop-blur-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center gap-2 p-2 rounded-md border border-white/10 bg-gradient-to-br from-transparent to-white/5 hover:border-portfolio-teal/30 transition-all">
                  <BookOpen className="text-portfolio-teal h-5 w-5" />
                  <span className="text-white/80">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Publications Section */}
        <h2 className="text-center mb-16">MY <span className="text-portfolio-teal">PUBLICATIONS</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* IJSREM Review Paper */}
          <Card className="bg-gradient-to-br from-portfolio-black via-portfolio-black/90 to-portfolio-black/70 border border-white/10 overflow-hidden hover:shadow-[0_0_15px_rgba(78,204,163,0.3)] transition-all duration-300 group hover:-translate-y-2">
            <div className="absolute top-0 right-0 w-16 h-16 bg-portfolio-teal/10 rounded-full -mr-8 -mt-8 backdrop-blur-md"></div>
            <CardContent className="p-8 relative">
              <div className="absolute top-0 right-0 bg-portfolio-teal/20 p-2 rounded-bl-lg backdrop-blur-sm">
                <Award className="text-portfolio-teal h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white group-hover:text-portfolio-teal transition-colors">IJSREM Review Paper</h3>
              <p className="text-white/70 mb-4">
                Advancements and Applications of Brain-Computer Interface Technology in Healthcare – A Review
              </p>
              <div className="flex items-center mt-4">
                <div className="h-8 w-1 bg-portfolio-teal mr-3"></div>
                <p className="text-sm text-white/50">
                  M. Saminathan, S. Sreejith, K. Vishnu, M. Vikash – International Journal of Scientific Research in Engineering and Management
                </p>
              </div>
              <div className="mt-4">
                <a
                  href="https://ijsrem.com/download/advancements-and-applications-of-brain-computer-interface-technology-in-healthcare-a-review/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-portfolio-teal hover:text-portfolio-teal/80 transition-colors"
                >
                  <ExternalLink className="h-4 w-4" />
                  <span className="text-sm">View Paper</span>
                </a>
              </div>
              <div className="absolute bottom-4 right-4">
                <span className="text-xs text-white/30">2025</span>
              </div>
            </CardContent>
          </Card>

          {/* JCHR Journal Publication */}
          <Card className="bg-gradient-to-br from-portfolio-black via-portfolio-black/90 to-portfolio-black/70 border border-white/10 overflow-hidden hover:shadow-[0_0_15px_rgba(78,204,163,0.3)] transition-all duration-300 group hover:-translate-y-2">
            <div className="absolute top-0 right-0 w-16 h-16 bg-portfolio-teal/10 rounded-full -mr-8 -mt-8 backdrop-blur-md"></div>
            <CardContent className="p-8 relative">
              <div className="absolute top-0 right-0 bg-portfolio-teal/20 p-2 rounded-bl-lg backdrop-blur-sm">
                <Award className="text-portfolio-teal h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white group-hover:text-portfolio-teal transition-colors">SCOPUS Journal Publication</h3>
              <p className="text-white/70 mb-4">
                An Intelligent Traffic Signal System for Ambulance Priority Using Internet of Things
              </p>
              <div className="flex items-center mt-4">
                <div className="h-8 w-1 bg-portfolio-teal mr-3"></div>
                <p className="text-sm text-white/50">
                 M. Saminathan, K. Vishnu, N. Vishva, R. Ratheesh, P. Chitra, J. Rajeswari
                </p>
              </div>
              <div className="mt-4">
                <a
                  href="https://www.jchr.org/index.php/JCHR/article/view/3822"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-portfolio-teal hover:text-portfolio-teal/80 transition-colors"
                >
                  <ExternalLink className="h-4 w-4" />
                  <span className="text-sm">View Paper</span>
                </a>
              </div>
              <div className="absolute bottom-4 right-4">
                <span className="text-xs text-white/30">2024</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/3 right-10 w-8 h-8 rounded-full bg-portfolio-purple/30 blur-md"></div>
      <div className="absolute bottom-1/4 left-20 w-6 h-6 rounded-full bg-portfolio-pink/20 blur-md"></div>
    </section>
  );
};

export default PublicationsSection;