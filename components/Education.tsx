
import React from 'react';

const Education: React.FC = () => {
  const education = [
    {
      institution: "Rangpur Polytechnic Institute",
      degree: "Computer Science and Technology (CST)",
      period: "Present",
      description: "Engaged in core computing studies, networking, and software engineering principles."
    },
    {
      institution: "Shalmara Bilateral High School",
      degree: "Secondary School Certificate (SSC)",
      period: "Science Group",
      description: "Foundational science education with a strong focus on mathematics and physics."
    },
    {
      institution: "Phitron",
      degree: "CSE Fundamentals (5th Batch)",
      period: "SDT",
      description: "Engaged in core coding, DSA and SDT Knowledge."
    }
  ];

  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-bold text-white">Education</h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="relative space-y-12 before:absolute before:inset-0 before:ml-5 md:before:mx-auto before:-translate-x-px md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-blue-500/50 before:to-transparent">
          {education.map((item, index) => (
            <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              {/* Dot */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-700 bg-slate-900 text-blue-400 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 16 16">
                  <path d="M8 0a8 8 0 1 0 8 8 8.009 8.009 0 0 0-8-8Zm0 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8Z" />
                </svg>
              </div>
              {/* Content Card */}
              <div className="w-[calc(100%-4rem)] md:w-[45%] glass p-6 rounded-3xl shadow-xl transition-all hover:shadow-blue-500/10 hover:border-blue-500/30">
                <div className="flex items-center justify-between space-x-2 mb-1">
                  <div className="font-bold text-white text-lg">{item.institution}</div>
                  <time className="text-xs font-semibold text-blue-500 uppercase tracking-wider">{item.period}</time>
                </div>
                <div className="text-blue-400 font-medium mb-2">{item.degree}</div>
                <div className="text-slate-400 text-sm">{item.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
