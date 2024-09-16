import React from "react";
import "./Projects.css"; // Your CSS file for styling

import cansat from "./cansat.jpg";
import research from "./research.jpg";
import orientation from "./orientation.jpg";

const Projects = () => {
  return (
    <div className="project-page" id="projects">
      <div className="project-header">
        <h1 className="vertical-heading">Projects</h1>
      </div>
      <div className="project-content">
        <div className="project-card">
          <div className="project-image-container">
            <img src={cansat} alt="Project 1" className="project-image" />
          </div>
          <div className="project-info">
            <h2 className="project-title">CANSAT Projects</h2>
            <p className="project-description">
              CANSAT projects are miniature satellites built by students to
              conduct experiments during a simulated space mission. These
              projects provide a unique platform for students to bridge the gap
              between theoretical knowledge and practical application, fostering
              innovation and problem-solving skills.
            </p>
          </div>
        </div>
        <div className="project-card">
          <div className="project-image-container">
            <img src={orientation} alt="Project 2" className="project-image" />
          </div>
          <div className="project-info">
            <h2 className="project-title">Student Orientation</h2>
            <p className="project-description">
              TESSAT ignites a passion for science, technology, engineering, and
              math (STEM) in students through engaging workshops and
              project-based learning experiences. These programs equip students
              with the technical skills and innovative mindset to thrive in the
              competitive world.
            </p>
          </div>
        </div>
        <div className="project-card">
          <div className="project-image-container">
            <img src={research} alt="Project 3" className="project-image" />
          </div>
          <div className="project-info">
            <h2 className="project-title">Research and Development</h2>
            <p className="project-description">
              At TESSAT, our R&D team pushes the boundaries of aerospace
              engineering by exploring innovative technologies and their
              applications. Our research focuses on hardware and software
              design, with a commitment to developing novel solutions for the
              aerospace industry.
            </p>
          </div>
        </div>
        {/* Add more project cards as needed */}
      </div>
    </div>
  );
};

export default Projects;
