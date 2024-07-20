import React from "react";
import "./Projects.css"; // Your CSS file for styling

import project1 from "/src/assets/images/1.jpg";
import project2 from "/src/assets/images/2.jpg";
import project3 from "/src/assets/images/3.jpg";

const Projects = () => {
  return (
    <div className="project-page">
      <div className="project-header">
        <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
          Our Works
        </h1>
      </div>
      <div className="project-container">
        <div className="project-item">
          <div className="project-content">
            <div className="project-image">
              <img src={project1} alt="Project 1" />
            </div>
            <div className="project-details">
              <h2>CANSAT Projects</h2>
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
              <img src={project2} alt="Project 2" />
            </div>
            <div className="project-details">
              <h2>Student Orientation</h2>
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
              <img src={project3} alt="Project 3" />
            </div>
            <div className="project-details">
              <h2>Research and Development</h2>
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
      <button className="project-btn">
        <a href="#">See More</a>
      </button>
    </div>
  );
};

export default Projects;
