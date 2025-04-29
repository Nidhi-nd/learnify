import React from "react";
import "./TrustedBy.css";

const trustedLogos = [
  {
    name: "Company A",
    logoUrl: "https://via.placeholder.com/120x60?text=Company+A"
  },
  {
    name: "School B",
    logoUrl: "https://via.placeholder.com/120x60?text=School+B"
  },
  {
    name: "Company C",
    logoUrl: "https://via.placeholder.com/120x60?text=Company+C"
  },
  {
    name: "School D",
    logoUrl: "https://via.placeholder.com/120x60?text=School+D"
  }
];

const TrustedBy = () => {
  return (
    <section className="trusted-by">
      <h2>Trusted by</h2>
      <div className="trusted-logos">
        {trustedLogos.map((item, index) => (
          <div key={index} className="logo-card">
            <img src={item.logoUrl} alt={item.name} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrustedBy;
