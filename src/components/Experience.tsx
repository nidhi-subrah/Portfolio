import { useEffect, useState } from "react";
import { Clock, MapPin } from "lucide-react";

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedJob, setSelectedJob] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('experience');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const jobs = [
    {
      company: "Your Company",
      title: "Software Engineering Intern",
      duration: "May 2025 - August 2025",
      location: "Toronto, Ontario",
      description: "Incoming Summer 2025. Building software solutions and learning modern development practices.",
      skills: ["React", "TypeScript", "Node.js"]
    }
  ];

  return (
    <section id="experience" className="min-h-screen px-8 py-16">
      <div className="max-w-6xl mx-auto">
        <h2 className={`text-4xl md:text-5xl font-bold text-white mb-12 transition-all duration-700 transform ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
        }`}>
          Work Experience
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Sidebar - Company Selection */}
          <div className="lg:col-span-1">
            <div className="flex flex-col space-y-4">
              {jobs.map((job, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedJob(index)}
                  className={`p-6 rounded-2xl text-left transition-all duration-300 transform hover:scale-105 ${
                    selectedJob === index
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-2xl shadow-cyan-500/25'
                      : 'bg-gray-800/50 backdrop-blur-sm border border-gray-700 text-gray-300 hover:border-cyan-500/50 hover:bg-gray-700/50'
                  }`}
                >
                  <div className="text-xl font-semibold mb-2">{job.company}</div>
                  <div className="text-sm opacity-80">{job.title}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Right Panel - Job Details */}
          <div className="lg:col-span-2">
            {jobs[selectedJob] && (
              <div className={`bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 transition-all duration-700 transform ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              }`}>
                <div className="mb-6">
                  <h3 className="text-3xl font-bold text-white mb-2">
                    {jobs[selectedJob].company} {jobs[selectedJob].company}
                  </h3>
                  <div className="text-xl font-semibold text-cyan-400 mb-4">
                    {jobs[selectedJob].title}
                  </div>
                  
                  <div className="flex items-center gap-6 text-gray-400 mb-6">
                    <div className="flex items-center gap-2">
                      <Clock size={20} />
                      <span>{jobs[selectedJob].duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={20} />
                      <span>{jobs[selectedJob].location}</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  {jobs[selectedJob].description}
                </p>

                <div>
                  <h4 className="text-white font-semibold text-lg mb-4">Skills</h4>
                  <div className="flex flex-wrap gap-3">
                    {jobs[selectedJob].skills.map((skill, index) => (
                      <span
                        key={skill}
                        className="bg-gray-700 hover:bg-cyan-600/20 text-gray-300 hover:text-white px-4 py-2 rounded-full text-sm transition-all duration-300 transform hover:scale-105 cursor-default"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
