
import React from 'react';

const Navbar: React.FC = () => {
  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex justify-center">
      <div className="max-w-4xl w-full glass rounded-full px-6 py-3 flex items-center justify-between shadow-2xl">
        {/* <div className="text-xl font-bold text-blue-400">NI.</div> */}
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.name}>
              <a 
                href={item.href} 
                className="text-sm font-medium text-slate-300 hover:text-blue-400 transition-colors"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
        <a 
          href="#contact" 
          className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold px-5 py-2 rounded-full transition-all active:scale-95"
        >
          Let's Talk
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
