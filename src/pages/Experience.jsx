import React from "react";

const experiences = [
  {
    title: "Software Engineer Intern",
    company: "Tech Company",
    dates: "June 2023 - Aug 2023",
    bullets: [
      "Worked on frontend features using React and Tailwind CSS.",
      "Collaborated with backend team to integrate APIs.",
      "Improved app performance by 20%."
    ]
  },
  {
    title: "Volunteer Developer",
    company: "Nonprofit Org",
    dates: "Jan 2022 - May 2022",
    bullets: [
      "Built a donation platform for local charities.",
      "Led a team of 3 developers."
    ]
  }
];

const Experience = () => (
  <section className="max-w-3xl mx-auto py-12 px-4">
    <h2 className="text-3xl font-bold mb-8">Experience</h2>
    <ol className="relative border-l border-blue-200">
      {experiences.map((exp, idx) => (
        <li key={idx} className="mb-10 ml-6">
          <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white" />
          <h3 className="flex items-center mb-1 text-xl font-semibold text-gray-900">{exp.title}</h3>
          <span className="block mb-2 text-sm font-normal leading-none text-gray-400">{exp.company} | {exp.dates}</span>
          <ul className="mb-4 text-base font-normal text-gray-700 list-disc list-inside">
            {exp.bullets.map((b, i) => <li key={i}>{b}</li>)}
          </ul>
        </li>
      ))}
    </ol>
  </section>
);

export default Experience; 