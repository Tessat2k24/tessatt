import React, { useState, useEffect } from "react";
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
      <li>News</li>
      <li>Gallery</li>
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




// import React, { useState, useEffect } from "react";
// import "./Navbar.css";
// import logo from "./Tessat-Logo.svg";
// import menu_icon from "/src/assets/menu.svg";

// function Navbar() {
//   const [sticky, setSticky] = useState(false);
//   useEffect(() => {
//     const handleScroll = () => {
//       window.scrollY > 50 ? setSticky(true) : setSticky(false);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   const [mobileMenu, setMobileMenu] = useState(false);
//   const toggleMenu = () => {
//     setMobileMenu(prevMenuState => !prevMenuState);
//   };

//   const scrollToSection = id => {
//     const element = document.getElementById(id);
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth" });
//     }
//     // Close the mobile menu after clicking on a menu item
//     setMobileMenu(false);
//   };

//   return (
//     <nav className={`nav ${sticky ? "dark-nav" : ""}`}>
//       <img className="logo-img" src={logo} alt="Logo" />
//       <ul className={mobileMenu ? "" : "hide-mobile-menu"}>
//         <li onClick={() => scrollToSection("home")}>Home</li>
//         <li onClick={() => scrollToSection("about")}>About</li>
//         <li onClick={() => scrollToSection("projects")}>Projects</li>
//         <li onClick={() => scrollToSection("news")}>News</li>
//         <li onClick={() => scrollToSection("gallery")}>Gallery</li>
//         <li onClick={() => scrollToSection("contact")}>Contact</li>
//       </ul>
//       <img
//         src={menu_icon}
//         alt="menu icon"
//         className="menu-icon"
//         onClick={toggleMenu}
//       />
//     </nav>
//   );
// }

// export default Navbar;
