import { useEffect, useRef } from 'react';
import { Code, Database, FileJson, Github, FileCode, Terminal, Server, FolderGit, PanelRight } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

const SkillsSection = () => {
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

  const skills = [
     { name: "Java", icon: Code, category: "Languages", percentage: 90 },
    { name: "Python", icon: Code, category: "Languages", percentage: 70 },
    { name: "C", icon: Code, category: "Languages", percentage: 70 },
    { name: "HTML", icon: FileCode, category: "Web Development", percentage: 95 },
    { name: "CSS", icon: FileCode, category: "Web Development", percentage: 85 },
    { name: "JavaScript", icon: FileJson, category: "Web Development", percentage: 80 },
    { name: "SpringBoot", icon: Server, category: "Web Development", percentage: 75 },
    { name: "Flask", icon: Server, category: "Web Development", percentage: 60 },
    { name: "MongoDB", icon: Database, category: "Databases", percentage: 80 },
    { name: "SQL", icon: Database, category: "Databases", percentage: 80 },
    { name: "GitHub", icon: Github, category: "Tools", percentage: 80 },
  ];

  // Group skills by category
  const groupedSkills = skills.reduce((acc: any, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {});

  return (
    <section id="skills" ref={sectionRef} className="min-h-screen py-20 relative transition-all duration-700 opacity-0 translate-y-10">
      <div className="container mx-auto px-6">
        <h2 className="text-center mb-16">MY <span className="text-portfolio-teal">SKILLS</span></h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Skills Bars */}
          <div className="bg-portfolio-black/30 backdrop-blur-sm border border-white/10 p-6 rounded-lg">
            <h3 className="mb-8 text-2xl">Technical Proficiency</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <skill.icon className="text-portfolio-teal h-5 w-5" />
                      <span>{skill.name}</span>
                    </div>
                    <span>{skill.percentage}%</span>
                  </div>
                  <Progress 
                    value={skill.percentage} 
                    className="h-2 bg-white/10"
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* Skills Categories */}
          <div>
            {Object.entries(groupedSkills).map(([category, categorySkills]: [string, any]) => (
              <div key={category} className="mb-8">
                <h4 className="text-xl mb-4 text-portfolio-teal">{category}</h4>
                <div className="flex flex-wrap gap-3">
                  {categorySkills.map((skill: any, index: number) => (
                    <div 
                      key={index} 
                      className="flex items-center gap-2 px-4 py-2 bg-portfolio-black/40 border border-white/10 rounded-full hover:bg-portfolio-black/60 hover:border-portfolio-teal/50 transition-all group"
                    >
                      <skill.icon className="text-portfolio-teal h-4 w-4 group-hover:text-white transition-colors" />
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
            
            <div className="mt-6 p-6 border border-white/10 rounded-lg bg-gradient-to-br from-transparent to-portfolio-teal/5">
              <h4 className="text-xl mb-4">Additional Skills</h4>
              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1 bg-portfolio-black/40 border border-white/20 rounded-full text-sm">Scalable architecture</span>
                <span className="px-3 py-1 bg-portfolio-black/40 border border-white/20 rounded-full text-sm">Automation</span>
                <span className="px-3 py-1 bg-portfolio-black/40 border border-white/20 rounded-full text-sm">Testing</span>
                <span className="px-3 py-1 bg-portfolio-black/40 border border-white/20 rounded-full text-sm">Cloud-first development</span>
                <span className="px-3 py-1 bg-portfolio-black/40 border border-white/20 rounded-full text-sm">AI/ML</span>
                <span className="px-3 py-1 bg-portfolio-black/40 border border-white/20 rounded-full text-sm">OpenCV</span>
                <span className="px-3 py-1 bg-portfolio-black/40 border border-white/20 rounded-full text-sm">PyTesseract</span>
                <span className="px-3 py-1 bg-portfolio-black/40 border border-white/20 rounded-full text-sm">YOLO</span>
                <span className="px-3 py-1 bg-portfolio-black/40 border border-white/20 rounded-full text-sm">Scikit-learn</span>
                <span className="px-3 py-1 bg-portfolio-black/40 border border-white/20 rounded-full text-sm">Arduino</span>
                <span className="px-3 py-1 bg-portfolio-black/40 border border-white/20 rounded-full text-sm">PyAutoGUI</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
   
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-10 w-8 h-8 rounded-full bg-portfolio-teal/20 blur-md"></div>
      <div className="absolute bottom-1/3 left-20 w-10 h-10 rounded-full bg-portfolio-purple/20 blur-md"></div>
    </section>
  );
};

export default SkillsSection;
