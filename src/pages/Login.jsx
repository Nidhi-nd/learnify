import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const Login = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`login-page ${theme}`}>
      <h1>Login</h1>
      <input type="text" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button>Login</button>
    </div>
  );
};

export default Login;
