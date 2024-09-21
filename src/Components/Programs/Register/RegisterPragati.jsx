import React, { useState } from "react";
import "./RegisterPragati.css"; // or './styles.module.css' if using CSS modules
import phone110 from "/src/assets/phone.svg";
import email110 from "/src/assets/email.svg";
import location from "/src/assets/location.svg";
import calendar from "/src/assets/calendar.svg";
import seat from "/src/assets/seat.svg";
import fees from "/src/assets/fees.svg";

const RegisterPragati = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [students, setStudents] = useState(""); // Updated variable name
  const [institution, setInstitution] = useState("");
  const [grade, setGrade] = useState("");
  const [status, setStatus] = useState("");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    setName("");
    setEmail("");
    setPhone("");
    setStudents(""); // Reset students state
    setInstitution("");
    setStatus("Submitting the form, please wait!");

    // Prepare data to be sent
    const formData = new FormData();
    formData.append("name", name);
        formData.append("institution", institution);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("students", students); // Use updated variable name

    // Replace the following URL with the URL of your deployed Google Apps Script web app
    const scriptURL =
      "https://script.google.com/macros/s/AKfycbzOSajI9uRUMhYTHupAhCRWUu8QpLaIRYmBRX2zvGjIOgrv5CuTnSXHmeY1EkhFrQ4E/exec";

    // Send the form data to Google Sheets
    fetch(scriptURL, {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        setStatus("Form submitted successfully!");
        // Clear the input fields after successful submission

        // Hide success message after 5 seconds
        setTimeout(() => {
          setStatus(""); // Reset status after showing the success message
        }, 5000);
      })
      .catch((error) => {
        setStatus("Failed to submit, please try again.");
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
              Pragathi exclusive initiative offers one-on-one interactions with
              Tessat's executive team. Designed to foster knowledge sharing and
              inspire curiosity, Pragathi covers cutting-edge technology and
              space-related topics. Interested individuals can book personalized
              sessions by reaching out via phone. During these sessions,
              Tessat's executives share their expertise and passion, aiming to
              inspire the next generation of space enthusiasts
            </p>
          </div>
          <div className="info">
            {/* <div className="information">
              <img src={location} className="icon" alt="Location" />
              <p>
                Cabin 3, Basement Floor of Ramanujan Block, Innovation Lab,
                Saintgits College of Engineering, Kottukulam Hills, Pathamuttom
                P.O, Kottayam, Kerala-686 532
              </p>
            </div>
            <div className="information">
              <img src={calendar} className="icon" alt="Date" />
              <p>17 September 2024</p>
            </div>
            <div className="information">
              <img src={seat} className="icon" alt="Seat" />
              <p>100 Seats Only</p>
            </div> */}
            <div className="information">
              <img src={fees} className="icon" alt="Fees" />
              <p>Depending upon Number of Students</p>
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
                <label>Phone No</label>
                <input
                  type="tel" // Change to "tel" for phone numbers
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Enter phone number"
                  required
                />
              </div>
              <div className="input-box">
                <label>Approximate No of Students</label>
                <input
                  type="number"
                  value={students}
                  onChange={(e) => setStudents(e.target.value)}
                  placeholder="Number of students"
                  required
                />
              </div>
            </div>
            {/* <div className="input-box">
              <label>Grade</label>
              <input
                type="text"
                value={grade}
                onChange={(e) => setGrade(e.target.value)}
                placeholder="Enter grade"
                required
              />
            </div> */}
            <button type="submit" className="workshop-submitpragati">
              Book Now
            </button>
            {status && <p className="success-message">{status}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPragati;
