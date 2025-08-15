
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
    { name: "JS", color: "bg-yellow-500", hoverColor: "hover:bg-yellow-400" },
    { name: "TS", color: "bg-blue-600", hoverColor: "hover:bg-blue-500" },
    { name: "Py", color: "bg-blue-500", hoverColor: "hover:bg-blue-400" },
    { name: "C++", color: "bg-purple-600", hoverColor: "hover:bg-purple-500" },
    { name: "Git", color: "bg-orange-500", hoverColor: "hover:bg-orange-400" },
    { name: "CSS", color: "bg-blue-600", hoverColor: "hover:bg-blue-500" },
    { name: "SQL", color: "bg-cyan-400", hoverColor: "hover:bg-cyan-300" },
    { name: "HTML", color: "bg-red-500", hoverColor: "hover:bg-red-400" },
    { name: "Java", color: "bg-red-600", hoverColor: "hover:bg-red-500" },
    { name: "React", color: "bg-cyan-500", hoverColor: "hover:bg-cyan-400" },
    { name: "Vite", color: "bg-purple-500", hoverColor: "hover:bg-purple-400" },
    { name: "Node", color: "bg-green-600", hoverColor: "hover:bg-green-500" }
  ];

  return (
    <section id="summary" className="min-h-screen px-8 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Seeking Internships Card */}
          <div className={`bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-blue-500/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10 ${
            isVisible ? `translate-y-0 opacity-100 delay-100` : 'translate-y-8 opacity-0'
          }`}>
            <h3 className="text-gray-300 text-lg font-medium mb-4">Seeking Internships</h3>
            <div className="text-4xl font-bold text-blue-400 mb-2 hover:text-blue-300 transition-colors duration-300">Summer 2025</div>
            <div className="w-full h-1 bg-gradient-to-r from-blue-500 to-transparent rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
          </div>

          {/* Current Term Card */}
          <div className={`bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-yellow-500/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/10 ${
            isVisible ? `translate-y-0 opacity-100 delay-200` : 'translate-y-8 opacity-0'
          }`}>
            <h3 className="text-gray-300 text-lg font-medium mb-4">Current Term</h3>
            <div className="text-4xl font-bold text-yellow-400 mb-2 hover:text-yellow-300 transition-colors duration-300">1st Year</div>
            <div className="w-full h-1 bg-gradient-to-r from-yellow-500 to-transparent rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
          </div>

          {/* Education Card */}
          <div className={`bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-purple-500/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10 md:col-span-2 lg:col-span-1 ${
            isVisible ? `translate-y-0 opacity-100 delay-300` : 'translate-y-8 opacity-0'
          }`}>
            <h3 className="text-white text-xl font-semibold mb-2">Computer Engineering</h3>
            <div className="text-purple-400 text-lg font-medium mb-3">Bachelor's Degree</div>
            <div className="flex items-center gap-2 text-gray-300 mb-4">
              <div className="w-5 h-5 bg-gradient-to-br from-purple-500 to-blue-500 rounded animate-pulse"></div>
              <span>University of Waterloo</span>
            </div>
            <div className="text-gray-400 text-sm mb-6">September 2024 - April 2029</div>
            
            <div className="mb-4">
              <h4 className="text-white font-medium mb-3">Courses</h4>
              <div className="flex flex-wrap gap-2">
                {["Programming Fundamentals", "Digital Logic", "Calculus IV", "Physics", "Data Structures", "Circuit Analysis"].map((course, index) => (
                  <span key={course} className={`bg-gray-700 hover:bg-purple-600/20 text-gray-300 hover:text-white px-3 py-1 rounded-full text-sm transition-all duration-300 transform hover:scale-105 cursor-default ${
                    isVisible ? `animate-fade-in` : 'opacity-0'
                  }`} style={{ animationDelay: `${400 + index * 100}ms` }}>
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Tech Stack Card */}
          <div className={`bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-green-500/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-green-500/10 md:col-span-2 ${
            isVisible ? `translate-y-0 opacity-100 delay-400` : 'translate-y-8 opacity-0'
          }`}>
            <h3 className="text-white text-xl font-semibold mb-6">Tech Stack</h3>
            <div className="grid grid-cols-4 md:grid-cols-6 gap-4">
              {techStack.map((tech, index) => (
                <div
                  key={index}
                  onMouseEnter={() => setHoveredTech(tech.name)}
                  onMouseLeave={() => setHoveredTech(null)}
                  className={`w-12 h-12 ${tech.color} ${tech.hoverColor} rounded-lg flex items-center justify-center text-white font-bold text-sm transition-all duration-300 transform hover:scale-110 hover:rotate-12 cursor-pointer hover:shadow-lg ${
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
