import React from "react";
import "./Intro.css";

function Intro() {
  return (
    <div className="intro-section">
      <div className="intro-text">
        <h1>Hi, I am </h1>
        <h2>Jessna Pakzad</h2>
        <h3>Front-end Developer & UI/UX Designer</h3>
      </div>
      <div className="triangle-up"></div>
      <div className="contact">
        <i class="bi bi-linkedin"></i>
        <i class="bi bi-github"></i>
      </div>
    </div>
  );
}

export default Intro;
