
import { ExternalLink, Github } from "lucide-react";
import { useEffect, useState } from "react";

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
      title: "[Project Name 1]",
      subtitle: "[Project Type - e.g., Web Application]",
      description: "[Brief description of your project. What problem does it solve? What technologies did you use? What was the impact or what did you learn?]",
      timeline: "[Month Year] - [Month Year]",
      links: [
        { type: "website", url: "#", icon: ExternalLink },
        { type: "github", url: "#", icon: Github }
      ],
      color: "text-blue-400",
      glowColor: "hover:shadow-blue-500/20"
    },
    {
      title: "[Project Name 2]",
      subtitle: "[Project Type - e.g., Mobile App]",
      description: "[Brief description of your second project. Focus on technical challenges overcome and skills developed.]",
      timeline: "[Month Year] - [Month Year]",
      links: [
        { type: "github", url: "#", icon: Github }
      ],
      color: "text-green-400",
      glowColor: "hover:shadow-green-500/20"
    },
    {
      title: "[Project Name 3]",
      subtitle: "[Project Type - e.g., Data Analysis]",
      description: "[Description of another project. Highlight any unique features or learning outcomes.]",
      timeline: "[Month Year]",
      links: [
        { type: "website", url: "#", icon: ExternalLink },
        { type: "github", url: "#", icon: Github }
      ],
      color: "text-purple-400",
      glowColor: "hover:shadow-purple-500/20"
    },
    {
      title: "[Project Name 4]",
      subtitle: "[Project Type - e.g., Hardware Project]",
      description: "[Description of your fourth project. This could be a class project, hackathon project, or personal exploration.]",
      timeline: "[Month Year]",
      links: [
        { type: "github", url: "#", icon: Github }
      ],
      color: "text-yellow-400",
      glowColor: "hover:shadow-yellow-500/20"
    }
  ];

  return (
    <section id="projects" className="min-h-screen px-8 py-16">
      <div className="max-w-6xl mx-auto">
        <h2 className={`text-4xl font-bold text-white mb-12 transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          Projects & Work
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`group bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-gray-600 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl ${project.glowColor} ${
                isVisible ? `translate-y-0 opacity-100` : 'translate-y-8 opacity-0'
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="mb-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-6 h-6 bg-gradient-to-br from-gray-600 to-gray-500 rounded group-hover:animate-pulse transition-all duration-300"></div>
                  <h3 className="text-xl font-bold text-white group-hover:text-gray-100 transition-colors duration-300">
                    {project.title}
                  </h3>
                </div>
                <div className={`font-semibold mb-4 ${project.color} transition-all duration-300 group-hover:scale-105`}>
                  {project.subtitle}
                </div>
              </div>
              
              <p className="text-gray-300 group-hover:text-gray-200 mb-6 leading-relaxed transition-colors duration-300">
                {project.description}
              </p>

              <div className="text-gray-400 group-hover:text-gray-300 text-sm mb-6 italic transition-colors duration-300">
                {project.timeline}
              </div>

              <div className="flex gap-3">
                {project.links.map((link, linkIndex) => (
                  <a
                    key={linkIndex}
                    href={link.url}
                    className="group/link flex items-center gap-2 text-gray-300 hover:text-white transition-all duration-300 transform hover:scale-110"
                  >
                    <link.icon size={16} className="group-hover/link:rotate-12 transition-transform duration-300" />
                    <span className="text-sm capitalize">{link.type}</span>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
