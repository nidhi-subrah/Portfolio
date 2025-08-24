
import { useEffect, useState } from "react";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('projects');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      name: "Portfolio Website",
      type: "Personal Project",
      typeColor: "text-[#007bff]",
      description: "Modern portfolio built with React, TypeScript, and Tailwind CSS. Features smooth animations and responsive design.",
      dates: "August 2024",
      icon: "🎨",
      website: "https://your-portfolio.com",
      github: "https://github.com/yourusername/portfolio"
    },
    {
      name: "Course Tracker",
      type: "School Project",
      typeColor: "text-[#FFA500]",
      description: "Web application for tracking university courses and schedules. Built with modern web technologies.",
      dates: "September 2024 - December 2024",
      icon: "📚",
      website: null,
      github: "https://github.com/yourusername/course-tracker"
    },
    {
      name: "Calculator App",
      type: "Personal Project",
      typeColor: "text-[#007bff]",
      description: "Interactive calculator with advanced mathematical functions. Clean UI and smooth animations.",
      dates: "July 2024",
      icon: "🧮",
      website: "https://your-calculator.com",
      github: "https://github.com/yourusername/calculator"
    },
    {
      name: "Weather Dashboard",
      type: "Learning Project",
      typeColor: "text-[#10b981]",
      description: "Real-time weather application using external APIs. Displays current conditions and forecasts.",
      dates: "June 2024",
      icon: "🌤️",
      website: null,
      github: "https://github.com/yourusername/weather-app"
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Personal Project": return "text-[#007bff]";
      case "School Project": return "text-[#FFA500]";
      case "Learning Project": return "text-[#10b981]";
      default: return "text-[#8B5CF6]";
    }
  };

  return (
    <section id="projects" className="min-h-screen px-8 py-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-heading">Projects & Teams</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.name}
              className={`card card-hover p-8 transition-all duration-500 transform hover:scale-105 ${
                isVisible ? `translate-y-0 opacity-100` : 'translate-y-8 opacity-0'
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{project.icon}</span>
                  <h3 className="text-xl font-bold text-white">{project.name}</h3>
                </div>
                <span className={`text-sm font-medium px-3 py-1 rounded-full bg-[#333333] ${getTypeColor(project.type)}`}>
                  {project.type}
                </span>
              </div>
              
              <p className="text-[#E0E0E0] leading-relaxed mb-6">
                {project.description}
              </p>
              
              <div className="text-[#A0A0A0] text-sm mb-6">
                {project.dates}
              </div>
              
              <div className="flex gap-3">
                {project.website && (
                  <a
                    href={project.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-[#333333] hover:bg-[#404040] text-white px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-105"
                  >
                    <ExternalLink size={16} />
                    Website
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-[#333333] hover:bg-[#404040] text-white px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-105"
                  >
                    <Github size={16} />
                    GitHub
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
