import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="icons">
        <Link to="https://www.linkedin.com/in/jessna-pakzad-aa701b206">
          <i class="bi bi-linkedin"></i>
        </Link>

        <i class="bi bi-envelope"></i>
        <i class="bi bi-github"></i>
      </div>
      <div className="info">
        <p style={{ fontWeight: "bolder" }}>@2021 Jessna Pakzad </p>
        <p>All rights reserved.</p>
      </div>
    </div>
  );
}
export default Footer;
