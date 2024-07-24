import React from "react";
import "./Popup.css";
import logo from "./logo.svg";

function Popup() {
  return (
    <div className="popup">
      <img className="image" src={logo} alt="Logo" />
      <div className="navbar110">
        <a href="#about">About</a>
        <a href="#home">Projects</a>
        <a href="#about">News</a>
        <a href="#contact">Gallery</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
  );
}

export default Popup;
