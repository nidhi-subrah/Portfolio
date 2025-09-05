import { useEffect, useState } from "react";

const AboutMe = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    const element = document.getElementById("about");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="min-h-screen px-8 py-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div
          className={`order-2 md:order-1 transition-all duration-700 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">About Me</h2>
          <p className="text-gray-300 leading-relaxed text-lg">
            I’m a passionate software engineering student who enjoys building delightful
            user experiences and learning new technologies. I love solving problems,
            experimenting with modern tools, and collaborating on impactful projects.
          </p>
        </div>

        <div
          className={`order-1 md:order-2 justify-self-center transition-all duration-700 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <div className="relative">
            <div className="absolute -inset-2 bg-gradient-to-tr from-purple-600/30 via-blue-500/20 to-transparent blur-2xl rounded-3xl" />
            <img
              src="/images/Personal Pic.jpg"
              alt="Nidhi Subrahmanya"
              className="relative rounded-2xl border border-gray-700 shadow-2xl object-cover w-[300px] h-[380px] md:w-[380px] md:h-[500px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;


