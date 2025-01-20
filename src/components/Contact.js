import React from 'react';

function Contact() {
  return (
    <section id="contact" className="bg-gray-100 py-12 px-6 md:px-12 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">Contact Me</h2>
        <p className="text-lg text-gray-600 mb-8">
          I’m open to opportunities and collaborations! Feel free to reach out to me via email, LinkedIn, phone, or explore my GitHub to view my projects.
        </p>
        <div className="space-y-4 md:space-y-0 md:flex md:space-x-8 justify-center">
          <a
            href="mailto:cjanneh@gmail.com"
            className="bg-blue-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors duration-300"
          >
            Email Me
          </a>
          <a
            href="https://www.linkedin.com/in/alie-janneh/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-300"
          >
            LinkedIn
          </a>
          <a
            href="tel:+5511987071493"
            className="bg-green-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-600 transition-colors duration-300"
          >
            Call Me
          </a>
          <a
            href="https://github.com/janneh2000"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-900 transition-colors duration-300"
          >
            View GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
