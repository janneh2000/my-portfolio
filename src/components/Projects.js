import React from 'react';

function Projects() {
  const projects = [
    {
      title: "Banco BV Automation",
      description:
        "Developed Python scripts to automate processes and utilized Google Cloud to implement scalable solutions, reducing operational inefficiencies by 40%.",
    },
    {
      title: "Foxconn Kubernetes Deployment",
      description:
        "Deployed Kubernetes clusters to streamline application management and developed Python scripts to optimize workflows, enhancing system reliability.",
    },
    {
      title: "2MI Frontend Development",
      description:
        "Worked as a Frontend Developer to create responsive and user-friendly interfaces using React, HTML, and CSS, contributing to enhanced user experiences.",
    },
    {
      title: "Afrixcel Mobile Solutions",
      description:
        "Owned and operated a mobile repair business for 7 years, specializing in hardware and software solutions for Android and iOS devices, building a loyal customer base.",
    },
  ];

  return (
    <section id="projects" className="bg-white py-12 px-6 md:px-12">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-2xl font-semibold text-gray-700 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
