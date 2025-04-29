import React, { useState } from "react";
import "./Accessibility.css";

const Accessibility = () => {
  const [fontSize, setFontSize] = useState(16);

  return (
    <div className="accessibility-container">
      <h2>Accessibility Options</h2>
      <button onClick={() => setFontSize(fontSize + 2)}>Increase Font Size</button>
      <button onClick={() => setFontSize(fontSize - 2)}>Decrease Font Size</button>
      <p style={{ fontSize: `${fontSize}px` }}>Adjust the font size dynamically!</p>
    </div>
  );
};

export default Accessibility;
