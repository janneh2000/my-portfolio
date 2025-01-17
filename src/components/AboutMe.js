import React from 'react';

function AboutMe() {
  return (
    <section
      id="about"
      className="bg-gray-100 py-12 px-6 md:px-12"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">About Me</h2>
        <p className="text-lg text-gray-600 leading-relaxed mb-8">
          I am a <span className="font-semibold">DevOps Engineer</span> and
          <span className="font-semibold"> Cloud Architect</span> with over
          four years of experience in multi-cloud environments, specializing in
          <span className="font-semibold"> Google Cloud Platform (GCP)</span>,
          <span className="font-semibold"> AWS</span>, and
          <span className="font-semibold"> Oracle Cloud Infrastructure (OCI)</span>.
          My expertise includes infrastructure automation using tools like
          <span className="font-semibold"> Terraform</span> and
          <span className="font-semibold"> Git</span>, Kubernetes orchestration,
          and Python programming.
        </p>
        <h3 className="text-2xl font-semibold text-gray-700 mb-4">Core Competencies</h3>
        <ul className="list-disc list-inside text-left text-gray-600 mx-auto max-w-lg">
          <li>Cloud Platforms: GCP, AWS, OCI</li>
          <li>DevOps Tools: Terraform, Kubernetes, Docker, Jenkins, CI/CD</li>
          <li>Programming: Python, Bash, YAML</li>
          <li>Infrastructure & Networking: Multi-cloud Architectures, VPC, Load Balancers, Firewalls</li>
          <li>Blockchain: Web3 Fundamentals, Ethereum, Solidity basics</li>
          <li>Soft Skills: Collaboration, Problem-Solving, Adaptability, Communication</li>
        </ul>
      </div>
    </section>
  );
}

export default AboutMe;
