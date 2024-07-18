import React, { useState, useEffect } from "react";
import "./Navbar.css";
import logo from "./Logo1.svg";
import menu_icon from "/src/assets/menu.svg";

function Navbar() {
  const [Sticky, setSticky] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);

  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  };

  useEffect(() => {
    const sectionId = window.location.hash.substring(1); // Get the section ID from the URL
    if (sectionId) {
      scroll.scrollTo(sectionId, {
      });
    }
  }, []);

  return (
    <nav className={`nav ${Sticky ? "dark-nav" : ""}`}>
      <img className="logo-img" src={logo}/>
      <ul className={mobileMenu ? "" : "hide-mobile-menu"}>
      <li>Home</li>
      <li>About</li>
      <li>Projects</li>
      <li>Gallery</li>
      <li>News</li>
      <li>Contact</li>

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