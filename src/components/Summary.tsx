
import { useEffect, useState } from "react";

const Summary = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('summary');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const techStack = [
    { name: "JS", color: "bg-[#F7DF1E]", hoverColor: "hover:bg-[#F7DF1E]/90" },
    { name: "TS", color: "bg-[#3178C6]", hoverColor: "hover:bg-[#3178C6]/90" },
    { name: "Py", color: "bg-[#3776AB]", hoverColor: "hover:bg-[#3776AB]/90" },
    { name: "C++", color: "bg-[#00599C]", hoverColor: "hover:bg-[#00599C]/90" },
    { name: "Git", color: "bg-[#F05032]", hoverColor: "hover:bg-[#F05032]/90" },
    { name: "CSS", color: "bg-[#1572B6]", hoverColor: "hover:bg-[#1572B6]/90" },
    { name: "SQL", color: "bg-[#E48E00]", hoverColor: "hover:bg-[#E48E00]/90" },
    { name: "HTML", color: "bg-[#E34F26]", hoverColor: "hover:bg-[#E34F26]/90" },
    { name: "Java", color: "bg-[#ED8B00]", hoverColor: "hover:bg-[#ED8B00]/90" },
    { name: "React", color: "bg-[#61DAFB]", hoverColor: "hover:bg-[#61DAFB]/90" },
    { name: "Vite", color: "bg-[#646CFF]", hoverColor: "hover:bg-[#646CFF]/90" },
    { name: "Node", color: "bg-[#339933]", hoverColor: "hover:bg-[#339933]/90" }
  ];

  return (
    <section id="summary" className="min-h-screen px-8 py-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-heading">Summary</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Seeking Internships Card */}
          <div className={`card card-hover p-8 transition-all duration-500 transform hover:scale-105 ${
            isVisible ? `translate-y-0 opacity-100 delay-100` : 'translate-y-8 opacity-0'
          }`}>
            <h3 className="text-[#E0E0E0] text-lg font-medium mb-4">Seeking Internships</h3>
            <div className="text-4xl font-bold text-[#007bff] mb-2 hover:text-[#007bff]/90 transition-colors duration-300">Summer 2025</div>
            <div className="w-full h-1 bg-gradient-to-r from-[#007bff] to-transparent rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
          </div>

          {/* Current Term Card */}
          <div className={`card card-hover p-8 transition-all duration-500 transform hover:scale-105 ${
            isVisible ? `translate-y-0 opacity-100 delay-200` : 'translate-y-8 opacity-0'
          }`}>
            <h3 className="text-[#E0E0E0] text-lg font-medium mb-4">Current Term</h3>
            <div className="text-4xl font-bold text-[#FFA500] mb-2 hover:text-[#FFA500]/90 transition-colors duration-300">1st Year</div>
            <div className="w-full h-1 bg-gradient-to-r from-[#FFA500] to-transparent rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
          </div>

          {/* Education Card */}
          <div className={`card card-hover p-8 transition-all duration-500 transform hover:scale-105 md:col-span-2 lg:col-span-1 ${
            isVisible ? `translate-y-0 opacity-100 delay-300` : 'translate-y-8 opacity-0'
          }`}>
            <h3 className="text-white text-xl font-semibold mb-2">Computer Engineering</h3>
            <div className="text-[#8B5CF6] text-lg font-medium mb-3">Bachelor's Degree</div>
            <div className="flex items-center gap-2 text-[#E0E0E0] mb-4">
              <div className="w-5 h-5 bg-gradient-to-br from-[#8B5CF6] to-[#007bff] rounded animate-pulse"></div>
              <span>University of Waterloo</span>
            </div>
            <div className="text-[#A0A0A0] text-sm mb-6">September 2024 - April 2029</div>
            
            <div className="mb-4">
              <h4 className="text-white font-medium mb-3">Courses</h4>
              <div className="flex flex-wrap gap-2">
                {["Programming Fundamentals", "Digital Logic", "Calculus IV", "Physics", "Data Structures", "Circuit Analysis"].map((course, index) => (
                  <span key={course} className={`pill pill-secondary ${
                    isVisible ? `animate-fade-in` : 'opacity-0'
                  }`} style={{ animationDelay: `${400 + index * 100}ms` }}>
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Tech Stack Card */}
          <div className={`card card-hover p-8 transition-all duration-500 transform hover:scale-105 md:col-span-2 ${
            isVisible ? `translate-y-0 opacity-100 delay-400` : 'translate-y-8 opacity-0'
          }`}>
            <h3 className="text-white text-xl font-semibold mb-6">Tech Stack</h3>
            <div className="grid grid-cols-4 md:grid-cols-6 gap-4">
              {techStack.map((tech, index) => (
                <div
                  key={index}
                  onMouseEnter={() => setHoveredTech(tech.name)}
                  onMouseLeave={() => setHoveredTech(null)}
                  className={`w-12 h-12 ${tech.color} ${tech.hoverColor} rounded-xl flex items-center justify-center text-white font-bold text-sm transition-all duration-300 transform hover:scale-110 hover:rotate-12 cursor-pointer hover:shadow-lg ${
                    isVisible ? 'animate-fade-in' : 'opacity-0'
                  } ${
                    hoveredTech === tech.name ? 'animate-none' : 'animate-bounce'
                  }`}
                  style={{ 
                    animationDelay: `${500 + index * 50}ms`,
                    animationDuration: hoveredTech === tech.name ? '0s' : '1s'
                  }}
                >
                  {tech.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Summary;
