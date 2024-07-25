import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import "./Navbar.css";
import logo from "./Logo-new.svg";
import menu_icon from "/src/assets/menu.svg";

function Navbar() {
  const [Sticky, setSticky] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 600 ? setSticky(true) : setSticky(false);
    });
  }, []);

  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <nav className={`nav ${Sticky ? "dark-nav" : ""}`}>
      <img className="logo-img" src={logo} alt="Logo" />
      <ul className={mobileMenu ? "" : "hide-mobile-menu"}>
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
            offset={-40}
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
      <img
        src={menu_icon}
        alt="menu icon"
        className="menu-icon"
        onClick={toggleMenu}
      />
    </nav>
  );
}

export default Navbar;
