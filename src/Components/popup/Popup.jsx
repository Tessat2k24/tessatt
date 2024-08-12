import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import "./Popup.css";
import logo from "./logo.svg";
import recruitmentImage from "./recruitment-poster.jpeg"; // Replace with your image path

function Popup() {
  const [isOverlayOpen, setIsOverlayOpen] = useState(true);

  const toggleMenu = () => {
    console.log("Toggle menu function");
  };

  const closeOverlay = () => {
    setIsOverlayOpen(false);
  };

  useEffect(() => {
    if (isOverlayOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [isOverlayOpen]);

  return (
    <div className="popup" id="home">
      <img className="image" src={logo} alt="Logo" />
      <div className="navbar110">
        <ul>
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
      {isOverlayOpen && (
        <div className="overlay">
          <button className="close-button" onClick={closeOverlay}>
            X
          </button>
          <div className="overlay-content">
            <img
              className="recruitment-image"
              src={recruitmentImage}
              alt="Recruitment"
            />
            <div className="text-content">
              <h1>Recruitment is Now Open</h1>
              <ul>
                <li>
                  # This Recruitment is only OPEN for the students of Saintgits
                  Group of Colleges
                </li>
                <li>
                  # There will be an interview process before the final selection.
                </li>
                <li>
                 # We're seeking dedicated individuals who are passionate about
                  hands-on work and are committed to making a meaningful
                  contribution.
                </li>
                <li>
                  # There will be some project-related expenses that members will
                  be expected to contribute towards.
                </li>
              </ul>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfB2IQ_foy8Vg9aymwXCQjpHAY2rBbLRMrN0vx9FqjeTEVfpg/viewform"
                target="blank"
              >
                <button className="apply-button">Apply Now</button>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Popup;
