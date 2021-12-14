import React from "react";
import "./Header.css";
import { Link } from "react-scroll";
function Header() {
  return (
    <div className="navbar">
      <Link className="links" to="about-me" smooth={true} duration={700}>
        About Me
      </Link>

      <Link className="links" to="skills" smooth={true} duration={800}>
        Skills
      </Link>

      <p>Portfolio</p>
      <button>Contact me</button>
    </div>
  );
}

export default Header;
