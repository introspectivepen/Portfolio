import { useEffect, useRef } from 'react';
import { Star } from 'lucide-react';
import { Badge } from './ui/badge';

const AchievementsSection = () => {
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

  const achievements = [
    {
      title: "Winner",
      event: "Honeywell Youth India Teckathon",
      description: "Built a Travel Personalization Bot",
      color: "bg-portfolio-teal",
      icon: <Star className="h-5 w-5" />
    },
    {
      title: "3rd Place",
      event: "Arduino Botics by IIT Varanasi",
      description: "IoT-based solutions",
      color: "bg-portfolio-pink",
      icon: <Star className="h-5 w-5" />
    },
    {
      title: "Finalist",
      event: "TNCPL (Guvi) & Vultr Cloud Challenge",
      description: "Cloud-based application development",
      color: "bg-portfolio-purple",
      icon: <Star className="h-5 w-5" />
    },
    {
      title: "Advanced",
      event: "NIRAL Thiruvizha: TN Govt",
      description: "Advanced to top 1000 teams from 28,000+ students with AgriBot",
      color: "bg-portfolio-blue",
      icon: <Star className="h-5 w-5" />
    }
  ];

  return (
    <section
      id="achievements"
      ref={sectionRef}
      className="min-h-screen py-20 relative transition-all duration-700 opacity-0 translate-y-10"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-center mb-16">MY <span className="text-portfolio-teal">ACHIEVEMENTS</span></h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className={`group relative rounded-2xl p-8 border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md shadow-xl hover:shadow-[0_0_15px_rgba(78,204,163,0.3)] transition-all duration-300 overflow-hidden hover:-translate-y-2`}
            >
              <div className={`absolute top-0 left-0 w-1 h-full ${achievement.color}`}></div>
              <div className="flex items-center mb-6 gap-4">
                <Badge className={`${achievement.color} text-grey px-4 py-1.5 rounded-full`}>
                  {achievement.icon}
                  <span className="ml-1">{achievement.title}</span>
                </Badge>
                <h3 className="text-xl font-semibold text-white group-hover:text-portfolio-teal transition-colors">
                  {achievement.event}
                </h3>
              </div>
              <p className="text-white/70 text-base">{achievement.description}</p>

              {/* Glow Animation */}
              <div className={`absolute -bottom-20 -right-20 w-48 h-48 rounded-full ${achievement.color}/10 blur-3xl group-hover:opacity-70 transition-opacity`} />
            </div>
          ))}
        </div>
      </div>

      {/* Decorative particles */}
      <div className="absolute top-1/3 left-10 w-6 h-6 bg-portfolio-teal/40 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-1/4 right-20 w-10 h-10 bg-portfolio-pink/30 rounded-full blur-2xl animate-ping" />
    </section>
  );
};

export default AchievementsSection;