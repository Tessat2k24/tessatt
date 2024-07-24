import React from "react";
import "./Footer.css"; // Import the CSS file

// Import your SVG icons
import Facebook from "/src/assets/facebook.svg"; // Corrected path
import Twitter from "/src/assets/twitter.svg";
import Instagram from "/src/assets/instagram.svg";
import FooterLogo from "./Tessat.svg"; // Corrected path

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="slogan">
          <img src={FooterLogo} alt="Logo" />
          <span>Exploring the Universe, One Star at a Time</span>
        </div>
        <div className="quick-nav">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Projects</a>
          <a href="#">News</a>
          <a href="#">Gallery</a>
          <a href="#">Contact</a>
        </div>
        <div className="contact-info110">
          <div>
            <ul>
              <li href="#">binojp2005@gmail.com</li>
              <li href="">+91 9037331907</li>
              <li href="" target="_blank" rel="noopener noreferrer">
                Cabin No.3 SCIE lab Ramaujan Block Saintgits College of
                Engineering Kottukulam Hills, Pathamuttam P. O Kerala 686532
              </li>
            </ul>
          </div>
          <div className="social-links">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Facebook} alt="Facebook" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Twitter} alt="Twitter" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Instagram} alt="Instagram" />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; 2024 Tessat. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
