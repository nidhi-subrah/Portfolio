
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
    { name: "⚡", tooltip: "Blitz.js" },
    { name: "sf", tooltip: "Symfony" },
    { name: "🐍", tooltip: "Python" },
    { name: "☕", tooltip: "Java" },
    { name: "C++", tooltip: "C++" },
    { name: "HTML5", tooltip: "HTML5" },
    { name: "CSS3", tooltip: "CSS3" },
    { name: "JS", tooltip: "JavaScript" },
    { name: "VS", tooltip: "VS Code" },
    { name: "✏️", tooltip: "Figma" },
    { name: "AWS", tooltip: "Amazon Web Services" },
    { name: "Git", tooltip: "Git" },
    { name: "🐙", tooltip: "GitHub" },
    { name: "⚙️", tooltip: "Kubernetes" },
    { name: "🐳", tooltip: "Docker" },
    { name: "🐳", tooltip: "Docker" }
  ];

  return (
    <section id="summary" className="min-h-screen px-8 py-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-heading">Summary</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Seeking Internships Card - Left */}
          <div className={`card card-hover p-10 transition-all duration-500 transform hover:scale-105 ${
            isVisible ? `translate-y-0 opacity-100 delay-100` : 'translate-y-8 opacity-0'
          }`}>
            <h3 className="text-white text-2xl font-semibold mb-6">Seeking Internships</h3>
            <div className="text-5xl font-bold bg-gradient-to-r from-[#60A5FA] via-[#3B82F6] to-[#1D4ED8] bg-clip-text text-transparent mb-4 drop-shadow-lg whitespace-nowrap">Winter 2026</div>
            <div className="w-full h-1.5 bg-gradient-to-r from-[#60A5FA] via-[#3B82F6] to-[#1D4ED8] rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
          </div>

          {/* Current Term Card - Middle */}
          <div className={`card card-hover p-10 transition-all duration-500 transform hover:scale-105 ${
            isVisible ? `translate-y-0 opacity-100 delay-200` : 'translate-y-8 opacity-0'
          }`}>
            <h3 className="text-white text-2xl font-semibold mb-6">Current Term</h3>
            <div className="text-6xl font-bold bg-gradient-to-r from-[#FBBF24] via-[#F59E0B] via-[#D97706] via-[#B45309] to-[#92400E] bg-clip-text text-transparent mb-4 drop-shadow-lg">
              2A
            </div>
            <div className="w-full h-1.5 bg-gradient-to-r from-[#FBBF24] via-[#F59E0B] to-[#D97706] rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
          </div>

          {/* Computer Engineering Card - Right (Taller) */}
          <div className={`card card-hover p-10 transition-all duration-500 transform hover:scale-105 row-span-2 ${
            isVisible ? `translate-y-0 opacity-100 delay-300` : 'translate-y-8 opacity-0'
          }`}>
            <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-[#00C0C0] to-[#007bff] bg-clip-text text-transparent">Computer Engineering</h3>
            <div className="flex items-center gap-3 text-[#E0E0E0] mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-[#FFD700] to-[#FFA500] rounded-xl flex items-center justify-center shadow-xl border-2 border-[#000000]">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 4h20v16H2V4z" fill="#FFD700" stroke="#000000" strokeWidth="1"/>
                  <path d="M2 12h20" stroke="#000000" strokeWidth="2"/>
                  <path d="M6 4v16" stroke="#000000" strokeWidth="1"/>
                  <path d="M18 4v16" stroke="#000000" strokeWidth="1"/>
                  <circle cx="8" cy="8" r="1" fill="#DC143C"/>
                  <circle cx="16" cy="8" r="1" fill="#DC143C"/>
                  <circle cx="12" cy="16" r="1" fill="#DC143C"/>
                </svg>
              </div>
              <span className="font-bold text-xl">University of Waterloo</span>
            </div>
            <div className="text-[#A0A0A0] text-base mb-8">September 2024 - April 2029</div>
            
            <div className="mb-6">
              <h4 className="text-white font-bold text-lg mb-4">Courses</h4>
              <div className="flex flex-wrap gap-3">
                {["Data Structures & Algorithms", "Digital Computation", "Digital Logic", "AI & Society", "Calculus II", "Circuits"].map((course, index) => (
                  <span key={course} className={`bg-[#333333] hover:bg-[#404040] text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 cursor-default border border-[#404040] shadow-md ${
                    isVisible ? `animate-fade-in` : 'opacity-0'
                  }`} style={{ animationDelay: `${400 + index * 100}ms` }}>
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Stacks Card - Bottom (Spans width of first two) */}
          <div className={`card card-hover p-10 transition-all duration-500 transform hover:scale-105 md:col-span-2 ${
            isVisible ? `translate-y-0 opacity-100 delay-400` : 'translate-y-8 opacity-0'
          }`}>
            <h3 className="text-white text-xl font-semibold mb-8">Tech Stack</h3>
            <div className="grid grid-cols-8 gap-6">
              {techStack.map((tech, index) => (
                <div
                  key={index}
                  onMouseEnter={() => setHoveredTech(tech.name)}
                  onMouseLeave={() => setHoveredTech(null)}
                  className={`w-16 h-16 bg-[#333333] hover:bg-[#404040] rounded-2xl flex items-center justify-center text-white font-bold text-base transition-all duration-300 transform hover:scale-110 hover:rotate-12 cursor-pointer hover:shadow-xl border border-[#404040] shadow-lg ${
                    isVisible ? 'animate-fade-in' : 'opacity-0'
                  } ${
                    hoveredTech === tech.name ? 'animate-none bg-[#00C0C0] border-[#00C0C0] shadow-2xl' : 'animate-bounce'
                  }`}
                  style={{ 
                    animationDelay: `${500 + index * 50}ms`,
                    animationDuration: hoveredTech === tech.name ? '0s' : '1s'
                  }}
                  title={tech.tooltip}
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
