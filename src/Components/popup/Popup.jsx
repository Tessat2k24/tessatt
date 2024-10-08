import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import "./Popup.css";
import logo from "./logo.svg";
import arduino from "./arduino.svg";
import jobSearch from "./job-search.svg";

function Popup() {
  const [imageHeight, setImageHeight] = useState("40vh"); // Initial image height
  const [isNotificationVisible, setIsNotificationVisible] = useState(false); // To toggle notification popup
  const [isResized, setIsResized] = useState(false); // To track if the logo has resized

  // Shrink image height and show notifications after 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setImageHeight("20vh"); // Shrink image after 1 second
      setIsResized(true); // Set resized flag
    }, 1000);

    const notificationTimer = setTimeout(() => {
      setIsNotificationVisible(true); // Show notification popup after image shrinks
    }, 2000);

    return () => {
      clearTimeout(timer);
      clearTimeout(notificationTimer);
    };
  }, []);

  return (
    <div className="popup" id="home">
      {/* Logo Image */}
      <img
        className="image"
        src={logo}
        alt="Logo"
        style={{
          maxHeight: imageHeight,
          transition: "max-height 1s ease-in-out",
        }}
      />

      {/* Conditionally Reserve Space for Notification Panel only after resizing */}
      <div
        className="notification-reserved-space"
        style={{
          minHeight: isResized ? "200px" : "0px", // Reserve space only after resizing
          transition: "min-height 1s ease-in-out", // Smoothly adjust the space
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* Notification Popup (appears instantly after logo is shrunk) */}
        {isNotificationVisible && (
          <div className="notification-panel">
            <div className="notification">
              <div className="icon">
                <img src={arduino} alt="Arduino Icon" />
              </div>
              <div className="content">
                <div className="category">Workshop</div>
                <div className="message">2 Day Workshop</div>
                <div className="time">11 12 October 2024</div>
              </div>
            </div>

            <div className="notification">
              <div className="icon">
                <img src={jobSearch} alt="Job Search Icon" />
              </div>
              <div className="content">
                <div className="category">Reminder</div>
                <div className="message">Join our Internship Program</div>
                <div className="time">Apply Now</div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Navbar */}
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
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Popup;
