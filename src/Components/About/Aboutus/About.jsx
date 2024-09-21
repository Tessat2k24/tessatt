import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./About.css";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useEffect(() => {
    const headings = gsap.utils.toArray(
      ".about-us-heading, .about-us-heading2"
    );
    const descriptions = gsap.utils.toArray(".about-us-description-container");

    const animateElement = (element) => {
      gsap.fromTo(
        element,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
            toggleActions: "restart none none none",
            markers: false, // Hide markers for cleaner UI
            onEnter: () => gsap.to(element, { opacity: 1, y: 0 }),
            onLeave: () => gsap.to(element, { opacity: 0, y: 50 }),
            onEnterBack: () => gsap.to(element, { opacity: 1, y: 0 }),
            onLeaveBack: () => gsap.to(element, { opacity: 0, y: 50 }),
          },
        }
      );
    };

    headings.forEach(animateElement);
    descriptions.forEach(animateElement);
  }, []);

  return (
    <div className="about-us-section" id="about">
      <h2 className="about-us-heading">About Us</h2>
      <div className="about-us-description-container">
        <p className="about-us-description">
          Tipu-Electronics Students SATellite (TESSAT) is a Private Limited Company. We specialize in developing
          innovative and indigenous satellite technology, with a focus on CANSAT
          projects. TESSAT also engages in hands-on projects related to
          Aerospace and Astronautics, encouraging space enthusiasts to
          contribute. Our mission is to foster an inquisitive mindset in
          Aerospace technology among Electronics engineers, aiming to create a
          vibrant and cutting-edge space sector within colleges.
        </p>
      </div>

      <h2 className="about-us-heading2">Our Vision</h2>
      <div className="about-us-description-container">
        <p className="about-us-description">
          TESSAT envisions pioneering advanced space technology. Our mission is
          to create cutting-edge solutions that benefit industry, academia,
          space enthusiasts, and students alike. Through focused research and
          development in space engineering, we contribute to the progress of our
          nation and society.
        </p>
      </div>

      <h2 className="about-us-heading2">Mission</h2>
      <div className="about-us-description-container">
        <p className="about-us-description">
          We are experimenting on CANSATs and Student Satellite with
          experimental space technology. We also provide support on projects
          related to Aerospace and Aeronautics to the students. We aim to engage
          with school students to inspire them with advanced space tech.
        </p>
      </div>
    </div>
  );
};

export default About;
