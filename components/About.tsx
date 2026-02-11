
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-bold text-white">About Me</h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="glass p-8 rounded-3xl space-y-4">
            <h3 className="text-2xl font-semibold text-blue-400">Professional Summary</h3>
            <p className="text-slate-400 leading-relaxed">
              I am currently a student of Computer Science and Technology at Rangpur Polytechnic Institute. 
              My journey into programming started with curiosity and has turned into a deep-seated passion 
              for backend architectures. I specialize in Python and Django, creating efficient and 
              scalable web applications.
            </p>
            <p className="text-slate-400 leading-relaxed">
              My core strengths lie in understanding data structures and algorithms, which helps me 
              write optimized code. I am constantly exploring new technologies to stay ahead in 
              the rapidly evolving tech landscape.
            </p>
          </div>

          <div className="glass p-8 rounded-3xl space-y-6">
            <h3 className="text-2xl font-semibold text-blue-400">My Career Goal</h3>
            <div className="p-6 bg-blue-600/10 border border-blue-500/20 rounded-2xl">
              <p className="text-xl text-white font-medium italic">
                "To become a professional Backend Developer, building systems that power the next 
                generation of digital solutions with precision and efficiency."
              </p>
            </div>
            <ul className="space-y-3 text-slate-400">
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                Focused on Backend Architecture
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                Eager to learn Full-Stack capabilities
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                Interested in Scalable Cloud Systems
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
