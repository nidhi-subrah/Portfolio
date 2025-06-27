import React from "react";

const techStack = [
  "JavaScript", "React", "Node.js", "Tailwind CSS", "Git", "Vite"
];

const About = () => (
  <section className="max-w-3xl mx-auto py-12 px-4 flex flex-col md:flex-row items-center gap-8">
    <div className="flex-shrink-0">
      <div className="w-32 h-32 rounded-full bg-gray-200 flex items-center justify-center text-4xl font-bold text-gray-400">
        {/* Avatar Placeholder */}
        <span>👤</span>
      </div>
    </div>
    <div>
      <h2 className="text-3xl font-bold mb-2">About Me</h2>
      <p className="mb-4 text-gray-700">I'm a passionate software developer with experience in building modern web applications. I love learning new technologies and creating projects that make a difference.</p>
      <h3 className="font-semibold mb-1">Tech Stack:</h3>
      <ul className="flex flex-wrap gap-2">
        {techStack.map((tech) => (
          <li key={tech} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
            {tech}
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default About; 