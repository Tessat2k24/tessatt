import React from "react";
import "./Projects.css"; // Your CSS file for styling

const Projects = () => {
  return (
    <div className="project-page">
      <h1 className="project-heading">Our Works</h1>
      <div className="project-container">
        <div className="project-item">
          <div className="project-content">
            <div className="project-image">
              <img src="/src/assets/images/1.jpg" alt="Project 1" />
            </div>
            <div className="project-details">
              <h2>Small Lift Launch Vehicle</h2>
              <p>
                Aeroin -Xs (S is a series of the rocket) Solid propellant
                rockets are now an essential part of space-related
                investigations and are widely employed for a variety of
                experimental and commercial tasks, including delivering payloads
                to the low Earth atmosphere, and beyond. This SLLV can lift a
                payload or multiple payloads, up to a gross weight 150-250 kg,
                and can place them at altitudes ranging from 150-500 km, based
                on the requirements. ​ Manufacturing the entire outer structure
                of the launch vehicle with modern manufacturing techniques such
                as 3D printing has been proved to be cost effective as well as
                time saving. Our rocket is only to launch Cubesat & small
                satellites.
              </p>
            </div>
          </div>
        </div>
        <div className="project-item">
          <div className="project-content">
            <div className="project-image">
              <img src="/src/assets/images/2.jpg" alt="Project 2" />
            </div>
            <div className="project-details">
              <h2>Research and Development</h2>
              <p>
                We are driven by a relentless pursuit of innovation. Our
                dedicated Research and Development (R&D) team pushes the
                boundaries of aerospace technology, developing solutions that
                shape the future of space exploration and applications
              </p>
            </div>
          </div>
        </div>
        <div className="project-item">
          <div className="project-content">
            <div className="project-image">
              <img src="/src/assets/images/3.jpg" alt="Project 3" />
            </div>
            <div className="project-details">
              <h2>Mars Rover</h2>
              <p>
                Aeroin designed and developed Mars rover and took part in
                International Rover Design Challenge - 2021 & 2022 conducted by
                Mars Society South Asia. Aeroin participated and completed the
                research on mars surface and sucessfully designed Mars rover
                which could able to go under lava tubes. And also we have files
                4 patents and One Patent Granted , which will be build by Aeroin
                SpaceTech in future.
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
