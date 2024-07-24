import React from "react";
import { Link } from "react-scroll"; // Import Link from react-scroll for smooth scrolling
import "./Popup.css";
import logo from "./logo.svg";

function Popup() {
  // Function to toggle the menu (assuming you have defined this elsewhere)
  const toggleMenu = () => {
    // Implement your toggle menu logic here
    console.log("Toggle menu function");
  };

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
              offset={-70}
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
              offset={-70}
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
              offset={-70}
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
              offset={-70}
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
              offset={-70}
              duration={500}
              onClick={toggleMenu}
            >
              Contact
            </Link>
          </li>
        </ul>{" "}
        {/* Corrected: Closing tag for <ul> */}
      </div>
    </div>
  );
}

export default Popup;
