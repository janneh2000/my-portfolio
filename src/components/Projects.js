import React from 'react';

function Projects() {
  return (
    <section id="projects" style={{ padding: '20px', backgroundColor: '#f1f1f1' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Projects</h2>
      <div style={{ marginBottom: '20px' }}>
        <h3>Banco BV Automation</h3>
        <p>
          Developed Python scripts to automate processes and utilized Google Cloud to implement scalable solutions,
          reducing operational inefficiencies by 40%.
        </p>
      </div>
      <div style={{ marginBottom: '20px' }}>
        <h3>Foxconn Kubernetes Deployment</h3>
        <p>
          Deployed Kubernetes clusters to streamline application management and developed Python scripts to optimize workflows,
          enhancing system reliability.
        </p>
      </div>
    </section>
  );
}

export default Projects;
