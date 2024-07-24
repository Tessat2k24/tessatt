import React from "react";
import "./About.css"; // Assuming you have a CSS file for styling

const About = () => {
  return (
    <div className="about-us-section" id="about">
      <h2 className="about-us-heading">About Us</h2>
      <div className="about-us-description-container">
        <p className="about-us-description">
          Tipu-Electronics Saintgits SATellite (TESSAT) is a society based at
          Saintgits College of Engineering. We specialize in developing
          innovative and indigenous satellite technology, with a focus on CANSAT
          projects. TESSAT also engages in hands-on projects related to
          Aerospace and Astronautics, encouraging space enthusiasts to
          contribute. Our mission is to foster an inquisitive mindset in
          Aerospace technology among Electronics engineers, aiming to create a
          vibrant and cutting-edge space sector within colleges
        </p>
      </div>

      <h2 className="about-us-heading2">Our vision</h2>
      <div className="about-us-description-container">
        <p className="about-us-description">
          TESSAT envisions pioneering advanced space technology. Our mission is
          to create cutting-edge solutions that benefit industry, academia,
          space enthusiasts, and students alike. Through focused research and
          development in space engineering, we contribute to the progress of our
          nation and society.
        </p>
      </div>
      <h2 className="about-us-heading2">Misson</h2>
      <div className="about-us-description-container">
        <p className="about-us-description">
          We are experimenting on CANSATs and Student Satellite with
          experimental space technology. We also provide support on projects
          related to Aerospace and Aeronautics to the Students. We urge to
          engage with school students to inspire them with advanced space tech.
        </p>
      </div>
    </div>
  );
};

export default About;
