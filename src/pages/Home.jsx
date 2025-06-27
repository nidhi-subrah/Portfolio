import React from "react";
import { Link } from "react-router-dom";

const Home = () => (
  <section className="flex flex-col items-center justify-center min-h-[80vh] text-center px-4 bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 animate-fadeIn">
    <div className="bg-white/80 rounded-3xl shadow-lg p-8 md:p-16 flex flex-col items-center gap-4 border border-pink-200">
      <h1 className="text-5xl md:text-7xl font-extrabold text-pink-500 mb-2 drop-shadow-sm font-cursive">Your Name</h1>
      <p className="text-2xl md:text-3xl text-purple-500 mb-6 font-medium">Building cute things with code 💖</p>
      <Link to="/projects">
        <button className="px-8 py-3 bg-pink-400 hover:bg-pink-500 text-white rounded-full shadow-lg text-lg font-bold transition-all flex items-center gap-2">
          <span>See My Projects</span>
          <span className="animate-bounce">💗</span>
        </button>
      </Link>
    </div>
  </section>
);

export default Home; 