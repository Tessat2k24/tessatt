import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Projects.css"; // Your CSS file for styling

import cansat from "./cansat.jpg";
import outpot from "./outpot.jpg";
import humanoid from "./humanoid.jpg";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  // Use refs to target each project card
  const projectCardsRef = useRef([]);

  // GSAP animation effect triggered on scroll
  useEffect(() => {
    projectCardsRef.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 }, // Initial state (hidden, slightly shifted down)
        {
          opacity: 1,
          y: 0, // Final state (fully visible, back in position)
          duration: 0.6, // Animation duration
          delay: index * 0.2, // Slight delay between cards
          scrollTrigger: {
            trigger: card,
            start: "top 85%", // Animation starts when card is near viewport
            end: "bottom 20%",
            toggleActions: "play none none reverse", // Controls animation trigger behavior
            markers: false, // Set to true to visualize the trigger points
          },
        }
      );
    });
  }, []);

  return (
    <div className="project-page" id="projects">
      {/* Section Header */}
      <div className="project-header">
        <h1 className="vertical-heading">Projects </h1>
      </div>

      {/* Content with Project Cards */}
      <div className="project-content">
        {/* Project Card 1 */}
        <div
          className="project-card"
          ref={(el) => (projectCardsRef.current[0] = el)} // Reference to GSAP animation
        >
          <div className="project-image-container">
            <img src={cansat} alt="CANSAT Project" className="project-image" />
          </div>
          <div className="project-info">
            <h2 className="project-title">Small Scale Space Tech Initiative</h2>
            <p className="project-description">
              Space debris poses a significant threat to humanity. We are
              embarking on a new venture in small satellite technology, focusing
              on deploying small satellites in Low Earth Orbit (LEO) and
              repurposing space debris as satellite payloads.
            </p>
          </div>
        </div>

        {/* Project Card 2 */}
        <div
          className="project-card"
          ref={(el) => (projectCardsRef.current[1] = el)} // Reference to GSAP animation
        >
          <div className="project-image-container">
            <img src={humanoid} alt="humanoid" className="project-image" />
          </div>
          <div className="project-info">
            <h2 className="project-title">Companion Robot Development</h2>
            <p className="project-description">
              We are in the process of designing a highly functional and mobile
              companion robot, surpassing the capabilities of ISRO's Vyomithra.
              Currently, we are at Technology Readiness Level 1 (TRL 1) in this
              project.
            </p>
          </div>
        </div>

        {/* Project Card 3 */}
        <div
          className="project-card"
          ref={(el) => (projectCardsRef.current[2] = el)} // Reference to GSAP animation
        >
          <div className="project-image-container">
            <img
              src={outpot}
              alt="Outposts Integrated Rover Development"
              className="project-image"
            />
          </div>
          <div className="project-info">
            <h2 className="project-title">
              Outposts Integrated Rover Development
            </h2>
            <p className="project-description">
              We are developing an advanced rover capable of mining outposts at
              fixed intervals across an equal area of land on any exoplanet or
              moon. This innovation allows for parallel data collection over
              larger areas at consistent intervals, providing precise and
              unexplored data.
            </p>
          </div>
        </div>

        {/* Add more project cards as needed */}
      </div>
    </div>
  );
};

export default Projects;
