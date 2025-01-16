import React from 'react';

function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4 fixed w-full top-0 shadow-md z-10">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#about" className="text-2xl font-bold hover:text-blue-400">
          My Portfolio
        </a>
        <div className="space-x-4">
          <a href="#about" className="hover:text-blue-400">
            About
          </a>
          <a href="#projects" className="hover:text-blue-400">
            Projects
          </a>
          <a href="#contact" className="hover:text-blue-400">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
