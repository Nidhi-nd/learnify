import React from "react";
import "./BadgesCertifications.css";

const certificates = [
  {
    title: "React Developer Certificate",
    imageUrl: "https://via.placeholder.com/150?text=React+Certificate"
  },
  {
    title: "AI Specialist Badge",
    imageUrl: "https://via.placeholder.com/150?text=AI+Badge"
  },
  {
    title: "Full Stack Developer Certification",
    imageUrl: "https://via.placeholder.com/150?text=Full+Stack+Certificate"
  }
];

const BadgesCertifications = () => {
  return (
    <section className="badges-certifications">
      <h2>Badges / Achievements / Certifications</h2>
      <div className="certificates-list">
        {certificates.map((cert, index) => (
          <div key={index} className="certificate-card">
            <img src={cert.imageUrl} alt={cert.title} />
            <h3>{cert.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BadgesCertifications;
