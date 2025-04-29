import React, { useState } from "react";
import "./ProgressTracker.css";

const ProgressTracker = () => {
  const [goal, setGoal] = useState("");
  const [progress, setProgress] = useState(0);

  return (
    <div className="progress-container">
      <h2>Weekly Learning Goals</h2>
      <input 
        type="text" 
        placeholder="Set your goal..." 
        value={goal} 
        onChange={(e) => setGoal(e.target.value)} 
      />
      <progress value={progress} max="100"></progress>
      <button onClick={() => setProgress(progress + 10)}>Update Progress</button>
    </div>
  );
};

export default ProgressTracker;
