
import React from 'react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Programming",
      skills: ["C", "C++", "Python"]
    },
    {
      title: "Web Technologies",
      skills: ["HTML5", "CSS3", "Bootstrap", "Tailwind CSS"]
    },
    {
      title: "Backend",
      skills: ["Django", "Python Web Framework", "Django Rest Framework"]
    },
    {
      title: "Tools & Others",
      skills: ["Git", "GitHub", "DSA"]
    }
  ];

  return (
    <section id="skills" className="py-24 px-6 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-bold text-white">My Expertise</h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="glass p-8 rounded-3xl hover:border-blue-500/40 transition-all duration-300 hover:-translate-y-2 group">
              <h3 className="text-xl font-bold text-white mb-6 group-hover:text-blue-400 transition-colors">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, sIdx) => (
                  <span 
                    key={sIdx} 
                    className="px-4 py-2 bg-slate-800/50 rounded-lg text-sm text-slate-300 border border-slate-700 hover:border-blue-500/50 hover:bg-blue-600/10 transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
