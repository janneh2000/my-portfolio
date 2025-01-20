import React from 'react';
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Certifications from './components/Certifications';
function App() {
  return (
    <div className="pt-16">
      <Navbar />
      <AboutMe />
      <Projects />
      <Contact />
      <Footer />
      <Certifications />
    </div>
  );
}

export default App;
