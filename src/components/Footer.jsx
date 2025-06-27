import React from "react";

const Footer = () => (
  <footer className="border-t bg-white py-6 mt-8 text-center text-gray-500 text-sm">
    <div className="flex flex-col md:flex-row items-center justify-center gap-2">
      <span>Contact: <a href="mailto:your.email@example.com" className="text-blue-600 hover:underline">your.email@example.com</a></span>
      <span className="hidden md:inline">|</span>
      <span>
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">GitHub</a>
        {" | "}
        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">LinkedIn</a>
      </span>
    </div>
    <div className="mt-2">Built with <span className="text-red-500">❤️</span> using React & Tailwind CSS</div>
  </footer>
);

export default Footer; 