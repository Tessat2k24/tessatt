import React, { useState } from "react";
import "./Register.css"; // or './styles.module.css' if using CSS modules
import phone from "/src/assets/phone.svg";
import email1 from "/src/assets/email.svg";
import location from "/src/assets/location.svg";
import calendar from "/src/assets/calendar.svg";
import seat from "/src/assets/seat.svg";
import fees from "/src/assets/fees.svg";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone1, setPhone1] = useState("");
  const [phone2, setPhone2] = useState("");
  const [institution, setInstitution] = useState("");
  const [grade, setGrade] = useState("");
  const [status, setStatus] = useState("");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

            setName("");
            setEmail("");
            setPhone1("");
            setPhone2("");
            setInstitution("");
            setGrade("");
    
    // Prepare data to be sent
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone1", phone1);
    formData.append("phone2", phone2);
    formData.append("institution", institution);
    formData.append("grade", grade);

    // Replace the following URL with the URL of your deployed Google Apps Script web app
    const scriptURL = "https://script.google.com/macros/s/AKfycbwnp5Mw9T7Q2-V53UTv4mBhd3etQ3d0W7W8Mx-OlkB1FLYd1Ct5m9U-TNzWYrY3kQRt/exec";
    // Send the form data to Google Sheets
    fetch(scriptURL, {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        setStatus("Form Submitted successfully!");
        // Clear the input fields after successful submission


        // Hide success message after 5 seconds
        setTimeout(() => {
          setStatus(""); // Reset status after showing the success message
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
          <h1>Event Details</h1>

          <div className="additional-info">
            <p>
              Through Saras Vigyan we aim at engaging in hands-on projects
              related to Aerospace and Astronautics, encouraging space
              enthusiasts to contribute. We provide in-depth knowledge and
              history about space through our presentations. We also give
              hands-on training on Arduino and Tinkercad. We will also be
              teaching on how to create and deliver a full-fledged presentation.
            </p>
          </div>
          <div className="info">
            <div className="information">
              <img src={location} className="icon" alt="Location" />
              <p>
                Cabin 3, Basement Floor of Ramanujan Block, Innovation Lab,
                Saintgits College of Engineering Kottukulam Hills, Pathamuttom
                P.O, Kottayam, Kerala-686 532
              </p>
            </div>
            <div className="information">
              <img src={calendar} className="icon" alt="Date" />
              <p>17 September 2024</p>
            </div>
            <div className="information">
              <img src={seat} className="icon" alt="seat" />
              <p>100 Seats Only</p>
            </div>
            <div className="information">
              <img src={fees} className="icon" alt="fees" />
              <p>Rs 349/- Only</p>
            </div>
            <div className="information">
              <img src={email1} className="icon" alt="Email" />
              <p>ceo@tessat.space</p>
            </div>
            <div className="information">
              <img src={phone} className="icon" alt="Phone" />
              <p>+91 9037331907</p>
            </div>
          </div>
        </div>

        <div className="form-container">
          <form className="form110" onSubmit={handleSubmit}>
            <div className="input-box">
              <label>Full Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter full name"
                required
              />
            </div>
            <div className="input-box">
              <label>Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email address"
                required
              />
            </div>
            <div className="form-column">
              <div className="input-box">
                <label>Phone No 1</label>
                <input
                  type="number"
                  value={phone1}
                  onChange={(e) => setPhone1(e.target.value)}
                  placeholder="Enter phone number"
                  required
                />
              </div>
              <div className="input-box">
                <label>Phone No 2</label>
                <input
                  type="number"
                  value={phone2}
                  onChange={(e) => setPhone2(e.target.value)}
                  placeholder="Enter phone number"
                  required
                />
              </div>
            </div>
            <div className="input-box">
              <label>Institution</label>
              <input
                type="text"
                value={institution}
                onChange={(e) => setInstitution(e.target.value)}
                placeholder="Enter institution name"
                required
              />
            </div>
            <div className="input-box">
              <label>Grade</label>
              <input
                type="text"
                value={grade}
                onChange={(e) => setGrade(e.target.value)}
                placeholder="Enter grade"
                required
              />
            </div>
            <button type="submit" className="workshop-submit">
              Pay Registration Fee RS 349/-
            </button>
            {status && <p className="success-message">{status}</p>}{" "}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
