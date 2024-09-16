import React, { useState, useEffect } from "react";
import "./Program.css";
import Register from "../Register/Register.jsx"; // Import the Register component

const Program = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState("");
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleRegisterClick = (programName) => {
    setSelectedProgram(programName);
    // Save the current scroll position
    setScrollPosition(window.pageYOffset);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  // Add/remove class to body when popup is open/closed and manage scroll position
  useEffect(() => {
    if (showPopup) {
      // Disable scrolling by setting the body to fixed and preserving the scroll position
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollPosition}px`;
      document.body.style.width = "100%";
    } else {
      // Restore scrolling and scroll to the saved position
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      window.scrollTo(0, scrollPosition); // Restore the scroll position
    }

    // Cleanup on unmount
    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
    };
  }, [showPopup, scrollPosition]);

  return (
    <section className="programs-section">
      <h1 className="program-heading">Programs</h1>
      <div className="program-cards">
        {/* Workshop Card */}
        <div className="card">
          <div
            className="card-image"
                      style={{ backgroundImage: "url(/src/assets/Programs/sarasvigyan.jpg)"}}
          ></div>
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
              onClick={() => handleRegisterClick("Workshop")}
            >
              Register
            </button>
          </div>
        </div>

        {/* Internship Card */}
        <div className="card">
          <div
            className="card-image"
            style={{ backgroundImage: "url('/src/assets/Artboard 3.jpg')" }}
          ></div>
          <div className="card-hover">
            <h1>Internship</h1>
            <ul className="guidelines">
              <li>Work on live projects</li>
              <li>Mentorship from industry experts</li>
              <li>Flexible working hours</li>
              <li>Remote/On-site opportunities</li>
              <li>Certification upon completion</li>
            </ul>
            <button
              className="register-btn"
            //   onClick={() => handleRegisterClick("Internship")}
            >
              Register
            </button>
          </div>
        </div>

        {/* Orientation Class Card */}
        <div className="card">
          <div
            className="card-image"
            style={{ backgroundImage: "url('.jpg')" }}
          ></div>
          <div className="card-hover">
            <h1>Orientation Class</h1>
            <ul className="guidelines">
              <li>Introduction to the program</li>
              <li>Q&A with instructors</li>
              <li>Course structure overview</li>
              <li>Pre-course preparation tips</li>
              <li>Networking opportunities</li>
            </ul>
            <button
              className="register-btn"
            //   onClick={() => handleRegisterClick("Orientation Class")}
            >
              Register
            </button>
          </div>
        </div>
      </div>

      {/* Register Component as Popup */}
      {showPopup && (
        <div className="overlay770">
          <div className="popup770">
            <button className="close-btn" onClick={closePopup}>
              &times;
            </button>{" "}
              <Register program={selectedProgram} closePopup={closePopup} />
          </div>
        </div>
      )}
    </section>
  );
};

export default Program;
