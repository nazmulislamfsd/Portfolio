
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side: Content */}
        <div className="order-2 lg:order-1 space-y-8">
          <div className="space-y-4">
            <h4 className="text-blue-400 font-medium tracking-widest uppercase text-sm">Welcome to my world</h4>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-tight">
              I'm <span className="text-gradient">Md. Nazmul Islam</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium text-slate-400">
              Backend Developer | Django Enthusiast | Problem Solver
            </h2>
            <p className="text-lg text-slate-400 max-w-xl leading-relaxed">
              I am a passionate 20-year-old Computer Science and Technology student from Bangladesh, 
              dedicated to building robust backend systems and solving complex problems with code.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <a 
              href="#projects" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-xl transition-all hover:shadow-[0_0_30px_rgba(37,99,235,0.3)] active:scale-95"
            >
              View Projects
            </a>
            <button 
              className="glass hover:bg-white/10 text-white font-semibold px-8 py-4 rounded-xl transition-all active:scale-95"
            >
              Download CV
            </button>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="order-1 lg:order-2 flex justify-center items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-blue-600 blur-[80px] opacity-20 rounded-full"></div>
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full p-2 glass animate-float">
              <img 
                src="images/n_image.jpg"
                alt="Md. Nazmul Islam" 
                className="w-full h-full rounded-full object-cover border-4 border-slate-900 shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
