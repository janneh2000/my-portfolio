import React from 'react';

function Certifications() {
  const certifications = [
    {
      title: "AWS Certified Solutions Architect – Associate",
      issuer: "Amazon Web Services",
      date: "Issued May 2022",
    },
    {
      title: "Oracle Cloud Infrastructure Foundations 2021 Certified",
      issuer: "Oracle",
      date: "Issued April 2021",
    },
    {
      title: "Cisco Certified Network Associate (CCNA)",
      issuer: "Cisco",
      date: "Issued March 2020",
    },
  ];

  return (
    <section id="certifications" className="bg-gray-100 py-12 px-6 md:px-12 text-center">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-2xl font-semibold text-gray-700 mb-2">
                {cert.title}
              </h3>
              <p className="text-gray-600 mb-1">
                <strong>Issuer:</strong> {cert.issuer}
              </p>
              <p className="text-gray-600">
                <strong>Date:</strong> {cert.date}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;
