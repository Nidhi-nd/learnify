import React from "react";
import useFadeInOnScroll from "../utils/useFadeInOnScroll";
import "./Motto.css";

const Motto = () => {
  const [domRef, isVisible] = useFadeInOnScroll();

  return (
    <div
      className={`motto fade-in-section ${isVisible ? "is-visible" : ""}`}
      ref={domRef}
    >
      <h1>Level Up Your Skills From Anywhere.</h1>
    </div>
  );
};

export default Motto;
