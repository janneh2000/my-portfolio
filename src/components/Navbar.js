import React from 'react';

function Navbar() {
  return (
    <nav style={{ padding: '10px', backgroundColor: '#f8f9fa' }}>
      <ul style={{ listStyle: 'none', display: 'flex', justifyContent: 'space-around' }}>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About Me</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#blog">Blog</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
