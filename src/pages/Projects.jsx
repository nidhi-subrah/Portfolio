import React from "react";

const projects = [
  {
    title: "Portfolio Website",
    description: "A modern, responsive portfolio built with React and Tailwind CSS.",
    tech: ["React", "Tailwind CSS", "Vite"],
    github: "https://github.com/yourusername/portfolio",
    demo: "#"
  },
  {
    title: "Task Manager App",
    description: "A productivity app to manage daily tasks.",
    tech: ["React", "Node.js"],
    github: "https://github.com/yourusername/task-manager",
    demo: "#"
  }
];

const Projects = () => (
  <section className="max-w-5xl mx-auto py-12 px-4">
    <h2 className="text-3xl font-bold mb-8">Projects</h2>
    <div className="grid gap-8 md:grid-cols-2">
      {projects.map((proj, idx) => (
        <div key={idx} className="bg-white rounded-xl shadow p-6 flex flex-col">
          <h3 className="text-xl font-semibold mb-2">{proj.title}</h3>
          <p className="text-gray-700 mb-2">{proj.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {proj.tech.map((t) => (
              <span key={t} className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs font-medium">{t}</span>
            ))}
          </div>
          <div className="mt-auto flex gap-4">
            <a href={proj.github} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">GitHub</a>
            <a href={proj.demo} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Demo</a>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Projects; 