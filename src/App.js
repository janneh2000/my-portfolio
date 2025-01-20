import React from 'react';
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="pt-16">
      <Navbar />
      <AboutMe />
      <Projects />
      <Certifications />
      <Contact />
      <Footer />

      
    </div>
  );
}

export default App;
