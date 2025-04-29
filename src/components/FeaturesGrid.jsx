import React from "react";
import { motion } from "framer-motion";
import "./FeaturesGrid.css";

const features = [
  {
    title: "Interactive Quizzes",
    description: "Engage in dynamic quizzes to test your knowledge instantly.",
    link: "#",
  },
  {
    title: "Live Doubt Support",
    description: "Get help with tough concepts directly from experts.",
    link: "#",
  },
  {
    title: "Track Progress",
    description: "Monitor your learning path and performance over time.",
    link: "#",
  },
];

const FeaturesGrid = () => {
  return (
    <div className="features-grid">
      <h2>Why Choose Learnify?</h2>
      <div className="features-cards">
        {features.map((feature, index) => (
          <motion.div
            className="feature-card"
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
            <a className="feature-link" href={feature.link}>
              Learn More →
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesGrid;
