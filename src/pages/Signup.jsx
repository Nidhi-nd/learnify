import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const Signup = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`signup-page ${theme}`}>
      <h1>Signup</h1>
      <input type="text" placeholder="Name" />
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button>Signup</button>
    </div>
  );
};

export default Signup;
