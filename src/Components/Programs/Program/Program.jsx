import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Program.css";
import RegisterSarasVigyan from "../Register/RegisterSarasVigyan.jsx";
import RegisterUdaan from "../Register/RegisterUdaan.jsx";
import RegisterPragati from "../Register/RegisterPragati.jsx";

gsap.registerPlugin(ScrollTrigger);

const Program = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState("");
  const [scrollPosition, setScrollPosition] = useState(0);
  const programsSectionRef = useRef(null);

  const handleRegisterClick = (programName) => {
    setSelectedProgram(programName);
    setScrollPosition(window.pageYOffset);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  useEffect(() => {
    if (showPopup) {
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollPosition}px`;
      document.body.style.width = "100%";
    } else {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      window.scrollTo(0, scrollPosition);
    }

    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
    };
  }, [showPopup, scrollPosition]);

  useEffect(() => {
    const sections = gsap.utils.toArray(".card");

    gsap.fromTo(
      sections,
      { rotationY: 180 }, // Start rotated
      {
        rotationY: 0, // Rotate to normal position
        duration: 0.2,
        stagger: 0.2, // Staggering effect
        scrollTrigger: {
          trigger: programsSectionRef.current,
          start: "top 80%",
          toggleActions: "restart none none none",
          once: false,
        },
      }
    );
  }, []);

  return (
    <section className="programs-section" ref={programsSectionRef}>
      <h1 className="program-heading">Programs</h1>
      <div className="program-cards">
        {/* Saras Vigyan Card */}
        <div className="card">
          <div className="card-image sarasvigyan"></div>
          <div className="card-hover">
            <h1>Saras Vigyan</h1>
            <ul className="guidelines">
              <li>Complete hands-on experience</li>
              <li>Real-world projects</li>
              <li>Expert guidance</li>
              <li>Interactive sessions</li>
              <li>Comprehensive materials</li>
            </ul>
            <button
              className="register-btn"
              onClick={() => handleRegisterClick("Saras Vigyan")}
            >
              Register
            </button>
          </div>
        </div>

        {/* Udaan Card */}
        <div className="card">
          <div className="card-image udaan"></div>
          <div className="card-hover">
            <h1>Udaan</h1>
            <ul className="guidelines">
              <li>Work on live projects</li>
              <li>Mentorship from industry experts</li>
              <li>Flexible working hours</li>
              <li>Remote/On-site opportunities</li>
              <li>Certification upon completion</li>
            </ul>
            <button
              className="register-btn"
              onClick={() => handleRegisterClick("Udaan")}
            >
              Apply Now
            </button>
          </div>
        </div>

        {/* Pragati Card */}
        <div className="card">
          <div className="card-image Pragati"></div>
          <div className="card-hover">
            <h1>Pragati</h1>
            <ul className="guidelines">
              <li>Talk Session for students</li>
              <li>space related topics</li>
              <li>Course structure overview</li>
              <li>Introduction to the program</li>
              <li>Q&A with instructors</li>
            </ul>
            <button
              className="register-btn"
              onClick={() => handleRegisterClick("Pragati")}
            >
              Book Now
            </button>
          </div>
        </div>
      </div>

      {/* Register Popup */}
      {showPopup && (
        <div className="overlay770">
          <div className="popup770">
            <button className="close-btn" onClick={closePopup}>
              &times;
            </button>

            {/* Render the correct Register component based on selectedProgram */}
            {selectedProgram === "Saras Vigyan" && (
              <RegisterSarasVigyan closePopup={closePopup} />
            )}
            {selectedProgram === "Udaan" && (
              <RegisterUdaan closePopup={closePopup} />
            )}
            {selectedProgram === "Pragati" && (
              <RegisterPragati closePopup={closePopup} />
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Program;
