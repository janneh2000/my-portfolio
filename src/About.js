import React from 'react';

function App() {
  return (
    <div>
      <header style={{ textAlign: 'center', padding: '20px', backgroundColor: '#f8f9fa' }}>
        <h1>Welcome to My Portfolio</h1>
        <p>Showcasing my journey as a DevOps Engineer and Cloud Architect.</p>
      </header>

      <section id="about" style={{ padding: '20px', backgroundColor: '#ffffff' }}>
        <h2>About Me</h2>
        <p>
          I am a <strong>DevOps Engineer</strong> and <strong>Cloud Architect</strong> with over four years of experience
          in multi-cloud environments, specializing in <strong>Google Cloud Platform (GCP)</strong>, <strong>AWS</strong>,
          and <strong>Oracle Cloud Infrastructure (OCI)</strong>. I have a strong background in infrastructure automation
          using tools like <strong>Terraform</strong> and <strong>Git</strong>, with expertise in Kubernetes orchestration
          and Python programming.
        </p>
        <h3>Core Competencies</h3>
        <ul>
          <li>Cloud Platforms: GCP, AWS, OCI</li>
          <li>DevOps Tools: Terraform, Kubernetes, Docker, Jenkins, CI/CD</li>
          <li>Programming: Python, Bash, YAML</li>
          <li>Infrastructure & Networking: Multi-cloud Architectures, VPC, Load Balancers, Firewalls</li>
          <li>Blockchain: Web3 Fundamentals, Ethereum, Solidity basics</li>
          <li>Soft Skills: Collaboration, Problem-Solving, Adaptability, Communication</li>
        </ul>
        <h3>Certifications</h3>
        <ul>
          <li>Cisco Networking Academy: Linux Administration and Cyber Security</li>
          <li>The Cloud Bootcamp: AWS, Microsoft Azure, Oracle OCI</li>
          <li>Diploma in Data Processing and Information Technology</li>
        </ul>
      </section>
    </div>
  );
}

export default App;
