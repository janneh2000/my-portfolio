import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4 text-center">
      <p className="text-sm">
        © {new Date().getFullYear()} My Portfolio. Built with <span className="font-semibold">React</span> and <span className="font-semibold">Tailwind CSS</span>.
      </p>
      <p className="text-sm">
        Made with ❤️ by <span className="font-semibold">Alie Janneh</span>.
      </p>
    </footer>
  );
}

export default Footer;
