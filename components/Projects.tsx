
import React from 'react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Event Management System",
      description: "Event Management System is a web-based application that helps organize and manage events efficiently. It allows administrators to create events, manage registrations, track participants, and monitor event details through a structured dashboard.",
      tag: "Python + Django + HTML + Tailwind CSS",
      image: "images/events.jpg"
    },
    {
      title: "Task Management System",
      description: "Django-based application to organize projects, track deadlines, and manage team tasks efficiently.",
      tag: "Python + Django + HTML + Tailwind CSS",
      image: "images/task.jpeg"
    },
    {
      title: "Library Management System",
      description: "Library Management System is a web-based application designed to manage library operations efficiently. It allows administrators to manage books, issue and return records, track members, and maintain an organized digital library system.",
      tag: "Python + Django + Django Rest Framework",
      image: "images/library.jpg"
    },
    {
      title: "Blood Bank",
      description: "Blood Bank System is a web-based application that manages blood donors, blood inventory, and donation records efficiently, helping hospitals and organizations track and distribute blood safely.",
      tag: "Python + Django + Django Rest Framework",
      image: "images/blood-bank.jpg"
    }
  ];

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-bold text-white">Featured Projects</h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div key={idx} className="group relative glass rounded-3xl overflow-hidden shadow-2xl transition-all hover:scale-[1.02]">
              <div className="h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
                />
              </div>
              <div className="p-8 space-y-4">
                <span className="inline-block px-3 py-1 bg-blue-600/20 text-blue-400 text-xs font-bold rounded-full uppercase tracking-wider">
                  {project.tag}
                </span>
                <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="pt-4 flex items-center gap-4">
                  <button className="text-white text-sm font-semibold flex items-center gap-2 group/btn">
                    View Details 
                    <svg className="w-4 h-4 transform transition-transform group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
