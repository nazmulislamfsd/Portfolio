
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-6 border-t border-slate-900">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
        <div>
          <h3 className="text-xl font-bold text-white mb-2">Md. Nazmul Islam</h3>
          <p className="text-slate-500 text-sm">Building digital experiences that matter.</p>
        </div>
        
        <div className="flex items-center gap-6">
          <a href="#" className="text-slate-500 hover:text-blue-400 transition-colors text-sm font-medium">Twitter</a>
          <a href="#" className="text-slate-500 hover:text-blue-400 transition-colors text-sm font-medium">LinkedIn</a>
          <a href="#" className="text-slate-500 hover:text-blue-400 transition-colors text-sm font-medium">GitHub</a>
          <a href="#" className="text-slate-500 hover:text-blue-400 transition-colors text-sm font-medium">Facebook</a>
        </div>

        <div className="text-slate-500 text-sm">
          &copy; {new Date().getFullYear()} Md. Nazmul Islam. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
