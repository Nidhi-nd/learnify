import React, { useState } from "react";
import "./NewsletterSignup.css";

const NewsletterSignup = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubscribe = () => {
    if (email.trim() === "") {
      setMessage("Please enter a valid email address.");
      return;
    }
    // Here you can add actual subscription logic (e.g., API call)
    setMessage("Thank you for subscribing!");
    setEmail("");
  };

  return (
    <div className="newsletter-signup">
      <h2>Newsletter Signup</h2>
      <p>Get exclusive discounts and new course alerts.</p>
      <div className="signup-form">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          aria-label="Email address"
        />
        <button onClick={handleSubscribe}>Subscribe</button>
      </div>
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default NewsletterSignup;
