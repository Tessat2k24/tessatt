import React from "react";
import { Link } from "react-scroll"; // Import Link from react-scroll for smooth scrolling
import "./Popup.css";
import logo from "./logo.svg";
import { useEffect,useRef } from "react";
function Popup() {
  const popupRef = useRef(null);
  const magicRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (popupRef.current && magicRef.current) {
        const rect = popupRef.current.getBoundingClientRect();
        const magicWHalf = magicRef.current.offsetWidth / 2;
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        magicRef.current.style.left = `${x - magicWHalf}px`;
        magicRef.current.style.top = `${y - magicWHalf}px`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const toggleMenu = () => {
    console.log("Toggle menu function");
  };

  return (
    <div className="popup" id="home" ref={popupRef}>
      <div className="magic" ref={magicRef}></div>

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
        </ul>{" "}
        {/* Corrected: Closing tag for <ul> */}
      </div>
    </div>
  );
}

export default Popup;
