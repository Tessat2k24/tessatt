import React, { useState } from "react";
import "./Footer.css";
import { Link } from "react-scroll";
import Linkedin from "/src/assets/linkedin.svg";
import Twitter from "/src/assets/x.svg";
import Instagram from "/src/assets/instagram.svg";
import FooterLogo from "./Tessat.svg";

const toggleMenu = () => {
  console.log("Toggle menu function");
};

const Footer = () => {
        const [email, setEmail] = useState("");
        const [status, setStatus] = useState("");

        // Handle form submission
        const handleSubmit = (e) => {
          e.preventDefault();
          setEmail(""); // Clear the input field

          // Prepare data to be sent
          const formData = new FormData();
          formData.append("email", email);
          // Replace the following URL with the URL of your deployed Google Apps Script web app
          const scriptURL =
            "https://script.google.com/macros/s/AKfycbzm-3VPLfJwPbqMJLq2MpFkG6edr3iYyRrfCnJ3b4X3uTXOhn0PMwMexBB1RUEKlVDt/exec";

          // Send the form data to Google Sheets
          fetch(scriptURL, {
            method: "POST",
            body: formData,
          })
            .then((response) => {
              setStatus("Subscription successful!");

              // Hide success message after 5 seconds
              setTimeout(() => {
                setStatus(""); // Reset status after showing the success message
              }, 5000);
            })
            .catch((error) => {
              setStatus("Failed to subscribe, please try again.");
              console.error("Error:", error);
            });
        };

  

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
          <div className="subscription">
            <h2>Sign up for our newsletter</h2>
            <p>
              <span className="arrow">←</span> Stay in the loop with us. To know
              more about our projects and upcoming sessions.
            </p>
            <div className="subscription-form">
              <form onSubmit={handleSubmit} className="form220">
                <input
                  type="email"
                  placeholder="sample@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit" className="subscription-button">
                  Subscribe
                </button>
              </form>
            </div>
            {status && <p className="success-message">{status}</p>}{" "}
            {/* Display the status message below the button */}
          </div>
        </div>
        <div className="contact-info110">
          <div>
            <ul>
              <li>ceo@tessat.space</li>
              <li>+91 8078157810</li>
            </ul>
          </div>
          <div className="social-links">
            <a
              href="https://www.instagram.com/tessat.space?igsh=OGt4cTVrMWFicnd1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Instagram} alt="Instagram" />
            </a>
            <a
              href="https://www.linkedin.com/company/tessat/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Linkedin} alt="Linkedin" />
            </a>
            <a
              href="https://x.com/Tessat_Space?t=9ig4oenY8aDOwikBH1aiAw&s=09"
              target="_blank"
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
