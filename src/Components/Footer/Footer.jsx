import React from "react";
import "./Footer.css"; // Import the CSS file
import { Link } from "react-scroll";
// Import your SVG icons
import Linkedin from "/src/assets/linkedin.svg"; // Corrected path
import Twitter from "/src/assets/x.svg";
import Instagram from "/src/assets/instagram.svg";
import FooterLogo from "./Tessat.svg"; // Corrected path
  const toggleMenu = () => {
    // Implement your toggle menu logic here
    console.log("Toggle menu function");
  };
const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="slogan">
          <img src={FooterLogo} alt="Logo" />
          <span>Exploring the Universe, One Star at a Time</span>
        </div>
        <div className="quick-nav">
          <ul>
            <li>
              <Link
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={toggleMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={1}
                duration={500}
                onClick={toggleMenu}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                offset={-40}
                duration={500}
                onClick={toggleMenu}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="news"
                spy={true}
                smooth={true}
                offset={-40}
                duration={500}
                onClick={toggleMenu}
              >
                News
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="gallery"
                spy={true}
                smooth={true}
                offset={-40}
                duration={500}
                onClick={toggleMenu}
              >
                Gallery
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-40}
                duration={500}
                onClick={toggleMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="contact-info110">
          <div>
            <ul>
              <li >our_team@tessat.space</li>
              <li >+91 9037331907</li>
            </ul>
          </div>
          <div className="social-links">
            <a
              href="https://www.instagram.com/tessat.space?igsh=OGt4cTVrMWFicnd1"
              target="blank"
              rel="noopener noreferrer"
            >
              <img src={Instagram} alt="Instagram" />
            </a>
            <a
              href="https://www.linkedin.com/company/tessat/"
              target="blank"
              rel="noopener noreferrer"
            >
              <img src={Linkedin} alt="Linkedin" />
            </a>
            <a
              href="https://x.com/Tessat_Space?t=9ig4oenY8aDOwikBH1aiAw&s=09"
              target="blank"
              rel="noopener noreferrer"
            >
              <img src={Twitter} alt="Twitter" />
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
