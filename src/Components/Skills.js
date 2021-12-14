import React from "react";
import "./Skills.css";

function Skills() {
  return (
    <div className="skills-body" id="skills">
      <h1 id="skills">Skills</h1>
      <div id="container">
        <img
          className="logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/120px-CSS3_logo_and_wordmark.svg.png"
          alt="CSS"
        />

        <img
          className="logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/120px-HTML5_logo_and_wordmark.svg.png"
          alt="HTML"
        />

        <img
          className="logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/600px-JavaScript-logo.png"
          alt="JavaScript"
        />

        <img
          className="logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png"
          alt="React"
        />
      </div>
    </div>
  );
}

export default Skills;
