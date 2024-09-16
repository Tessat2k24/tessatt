import React from "react";
import "./Projects.css"; // Your CSS file for styling

import cansat from "./cansat.jpg";
import research from "./research.jpg";
import orientation from "./orientation.jpg";
const Projects = () => {
  return (
    <div className="project-page" id="projects">
      <h1 className="text-2xl font-semibold text-center  capitalize lg:text-3xl  mb-4">
        Projects{" "}
      </h1>{" "}
      <div className="project-container">
        <div className="project-item">
          <div className="project-content">
            <div className="project-image">
              <img src={cansat} alt="Project 1" />
            </div>
            <div className="project-details">
              <h2>1. CANSAT Projects</h2>
              <p>
                CANSAT projects are miniature satellites built by students to
                conduct experiments during a simulated space mission. These
                projects provide a unique platform for students to bridge the
                gap between theoretical knowledge and practical application,
                fostering innovation and problem-solving skills.
              </p>
            </div>
          </div>
        </div>
        <div className="project-item">
          <div className="project-content">
            <div className="project-image">
              <img src={orientation} alt="Project 2" />
            </div>
            <div className="project-details">
              <h2>2. Student Orientation</h2>
              <p>
                TESSAT ignites a passion for science, technology, engineering,
                and math (STEM) in students through engaging workshops and
                project-based learning experiences. These programs equip
                students with the technical skills and innovative mindset to
                thrive in the competitive world.
              </p>
            </div>
          </div>
        </div>
        <div className="project-item">
          <div className="project-content">
            <div className="project-image">
              <img src={research} alt="Project 3" />
            </div>
            <div className="project-details">
              <h2>3. Research and Development</h2>
              <p>
                At TESSAT, our R&D team pushes the boundaries of aerospace
                engineering by exploring innovative technologies and their
                applications. Our research focuses on hardware and software
                design, with a commitment to developing novel solutions for the
                aerospace industry.
              </p>
            </div>
          </div>
        </div>
        {/* Add more project items as needed */}
      </div>
    </div>
  );
};

export default Projects;
