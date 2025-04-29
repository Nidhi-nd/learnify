import React, { useState } from "react";
import "./Testimonials.css";

const testimonialsData = [
  { name: "Alice", review: "Learnify changed my learning experience!" },
  { name: "Bob", review: "Fantastic platform for interactive learning!" },
];

const Testimonials = () => {
  return (
    <div className="testimonials-container">
      <h2>What Our Users Say</h2>
      {testimonialsData.map((testimonial, index) => (
        <div key={index} className="testimonial">
          <strong>{testimonial.name}</strong>
          <p>{testimonial.review}</p>
        </div>
      ))}
    </div>
  );
};

export default Testimonials;
