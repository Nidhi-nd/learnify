import React from "react";
import "./LatestAnnouncements.css";

const announcements = [
  {
    title: "Top 5 Courses to Learn AI in 2025",
    description: "Explore the best courses to master AI and stay ahead in the tech world."
  },
  {
    title: "How to stay consistent with online learning",
    description: "Tips and strategies to maintain your motivation and keep learning effectively."
  }
];

const LatestAnnouncements = () => {
  return (
    <section className="latest-announcements">
      <h2>Latest Announcements</h2>
      <div className="announcements-list">
        {announcements.map((item, index) => (
          <div key={index} className="announcement-card">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LatestAnnouncements;
