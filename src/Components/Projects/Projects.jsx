import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Projects.css"; // Your CSS file for styling

import cansat from "./cansat.jpg";
import research from "./research.jpg";
import orientation from "./orientation.jpg";

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

        {/* Project Card 2 */}
        <div
          className="project-card"
          ref={(el) => (projectCardsRef.current[1] = el)} // Reference to GSAP animation
        >
          <div className="project-image-container">
            <img
              src={orientation}
              alt="Student Orientation"
              className="project-image"
            />
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

        {/* Project Card 3 */}
        <div
          className="project-card"
          ref={(el) => (projectCardsRef.current[2] = el)} // Reference to GSAP animation
        >
          <div className="project-image-container">
            <img
              src={research}
              alt="Research and Development"
              className="project-image"
            />
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
