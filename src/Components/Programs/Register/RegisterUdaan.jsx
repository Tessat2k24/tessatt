import React, { useState } from "react";
import "./RegisterUdaan.css"; // Ensure the path is correct
import phone110 from "/src/assets/phone.svg";
import email110 from "/src/assets/email.svg";
import location from "/src/assets/location.svg";
import certificate from "/src/assets/certificate.svg";
import duration from "/src/assets/duration.svg";
import fees from "/src/assets/fees.svg";

const RegisterUdaan = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [linkedinprofile, setLinkedinprofile] = useState("");
  const [organization, setOrganization] = useState("");
  const [grade, setGrade] = useState("");
  const [currentStatus, setCurrentStatus] = useState(""); // Updated variable name
  const [status, setStatus] = useState("");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Reset form fields
    setName("");
    setEmail("");
    setPhone("");
    setLinkedinprofile("");
    setCurrentStatus("");
    setOrganization("");
    setGrade("");
    setStatus("Submitting the form pls wait!");


    // Prepare data to be sent
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("linkedinprofile", linkedinprofile);
    formData.append("currentStatus", currentStatus); // Updated to currentStatus
    formData.append("organization", organization);
    formData.append("grade", grade);

    const scriptURL =
      "https://script.google.com/macros/s/AKfycbydvS2FyUauFymOYzUUgHxEQXVVFQg2Mxho91ii7mPFXZZfm_N1isHzIu48Z6DqIRxA9A/exec";
    fetch(scriptURL, {
      method: "POST",
      body: formData,
    })
      .then((response) => response.text()) // Changed to text() to ensure response handling
      .then(() => {
        setStatus("Form Submitted successfully!");
        setTimeout(() => {
          setStatus("");
        }, 5000);
      })
      .catch((error) => {
        setStatus("Failed to Submit, please try again.");
        console.error("Error:", error);
      });
  };

  return (
    <div className="Register-container">
      <div className="main-container">
        <div className="event-details">
          <h1>Internship Details</h1>

          <div className="additional-info">
            <p>
              Through Tessat's Udaan program we aim at providing a vibrant
              internship program by giving hands on training dealing with real
              life problems and also on site experience after the probation
              period. We provide training on satellite design, PCB fabrication
              as well as SSIC.
            </p>
          </div>
          <div className="info">
            <div className="information">
              <img src={certificate} className="icon" alt="certificate" />
              <p>Linkedin Ready Certificates</p>
            </div>
            <div className="information">
              <img src={duration} className="icon" alt="duration" />
              <p>Flexiable Duration</p>
            </div>
            <div className="information">
              <img src={fees} className="icon" alt="fees" />
              <p>Internship Fees: From Rs 2500/- (depending upon duration)</p>
            </div>
            <div className="information">
              <img src={location} className="icon" alt="Location" />
              <p>
                Cabin 3, Basement Floor of Ramanujan Block, Innovation Lab,
                Saintgits College of Engineering Kottukulam Hills, Pathamuttom
                P.O, Kottayam, Kerala-686 532
              </p>
            </div>
            <p>For More Information Contact Us</p>

            <div className="information">
              <img src={email110} className="icon" alt="Email" />
              <p>ceo@tessat.space</p>
            </div>
            <div className="information">
              <img src={phone110} className="icon" alt="Phone" />
              <p>+91 8078157810</p>
            </div>
          </div>
        </div>

        <div className="form-container">
          <form className="form110" onSubmit={handleSubmit}>
            <div className="input-box">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter full name"
                required
              />
            </div>
            <div className="input-box">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email address"
                required
              />
            </div>
            <div className="form-column">
              <div className="input-box">
                <label htmlFor="phone">Phone No</label>
                <input
                  type="text"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Enter phone number"
                  required
                />
              </div>
              <div className="input-box">
                <label htmlFor="linkedinprofile">Linkedin Profile</label>
                <input
                  type="text"
                  id="linkedinprofile"
                  value={linkedinprofile}
                  onChange={(e) => setLinkedinprofile(e.target.value)}
                  placeholder="Enter linkedin profile"
                  required
                />
              </div>
            </div>
            {/* Dropdown for School/College or Fresher/Working */}
            <div className="form-column">
              <div className="input-box">
                <label htmlFor="currentStatus">Current Status</label>
                <select
                  id="currentStatus"
                  value={currentStatus}
                  onChange={(e) => setCurrentStatus(e.target.value)}
                  required
                >
                  <option value="" disabled>
                    Select current status
                  </option>
                  <option value="school-college">School/College</option>
                  <option value="fresher-working">Fresher/Working</option>
                </select>
              </div>

              {/* Dynamic Label based on Dropdown selection */}
              <div className="input-box">
                <label htmlFor="grade">
                  {currentStatus === "school-college"
                    ? "Year/Grade"
                    : "Years of Experience"}
                </label>
                <input
                  type="text"
                  id="grade"
                  value={grade}
                  onChange={(e) => setGrade(e.target.value)}
                  placeholder={
                    currentStatus === "school-college"
                      ? "Enter your year/grade"
                      : "Enter years of experience"
                  }
                  required
                />
              </div>
            </div>
            <div className="input-box">
              <label htmlFor="organization">Organization Name</label>
              <input
                type="text"
                id="organization"
                value={organization}
                onChange={(e) => setOrganization(e.target.value)}
                placeholder="Enter organization/college name"
                required
              />
            </div>

            <button type="submit" className="workshop-submitudaan">
              Apply Now
            </button>
            {status && <p className="success-message">{status}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterUdaan;
