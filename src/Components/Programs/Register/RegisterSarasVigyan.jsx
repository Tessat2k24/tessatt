import React, { useState } from "react";
import "./RegisterSarasVigyan.css"; // or './styles.module.css' if using CSS modules
import phone110 from "/src/assets/phone.svg";
import email110 from "/src/assets/email.svg";
import location from "/src/assets/location.svg";
import calendar from "/src/assets/calendar.svg";
import seat from "/src/assets/seat.svg";
import fees from "/src/assets/fees.svg";
import online from "/src/assets/online.svg";
import skills from "/src/assets/skills.svg";

const RegisterSarasVigyan = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone1, setPhone1] = useState("");
  const [phone2, setPhone2] = useState("");
  const [institution, setInstitution] = useState("");
  const [grade, setGrade] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setName("");
    setEmail("");
    setPhone1("");
    setPhone2("");
    setInstitution("");
    setGrade("");
        setStatus("Submitting the form, please wait!");


    // Prepare data to be sent
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone1", phone1);
    formData.append("phone2", phone2);
    formData.append("institution", institution);
    formData.append("grade", grade);

    // Replace the following URL with the URL of your deployed Google Apps Script web app
    const scriptURL =
      "https://script.google.com/macros/s/AKfycbx_CiySg-360Z14q_KLoKzQXmn6a4MN1jJnR5nM6LHXBs9qpxsuiiR-EnoyUWRzaEtb/exec";    // Send the form data to Google Sheets
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
              SARASVIGYAN: 2 day online workshop series. Through this workshop
              we aim to provide adequate knowledge in PCB Designing, Circuit
              Schematics, Computer Aided Designing and basics to 3D Printing.
              This online workshop is beginner friendly and requires no pre -
              requisite knowledge. So sign up and meet you there.
            </p>
          </div>
          <div className="info">
            {/* <div className="information">
              <img src={location} className="icon" alt="Location" />
              <p>
                Cabin 3, Basement Floor of Ramanujan Block, Innovation Lab,
                Saintgits College of Engineering Kottukulam Hills, Pathamuttom
                P.O, Kottayam, Kerala-686 532
              </p>
            </div> */}
            <div className="information">
              <img src={skills} className="icon" alt="skills" />
              <p>
                workshop on Circuit design,PCB designing, CAD(Basics), 3D
                Printing(Basics){" "}
              </p>
            </div>
            <div className="information">
              <img src={online} className="icon" alt="mode" />
              <p>Mode: Online</p>
            </div>
            <div className="information">
              <img src={calendar} className="icon" alt="Date" />
              <p>
                October 13, 2024 6pm to 8pm
                <br />
                October 14, 2024 7:30pm to 9:30pm
              </p>
            </div>
            {/* <div className="information">
              <img src={seat} className="icon" alt="seat" />
              <p>100 Seats Only</p>
            </div> */}

            <div className="information">
              <img src={fees} className="icon" alt="fees" />
              <p>
                Early bird Offer:&#x20b9; 119 (Only for First 10 Registrations)
                <br />
                Regular Fees:&#x20b9; 159
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
          <a href="https://forms.gle/yfDAkb17SxNamPsz6" target="_blank">
            {" "}
            <button className="workshop-submit">Register Now </button>
          </a>
        </div>

        {/* <div className="form-container">
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
                  // required
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
              Register And pay Rs 159{" "}
            </button>
            {status && <p className="success-message">{status}</p>}
          </form>
        </div> */}
      </div>
    </div>
  );
};

export default RegisterSarasVigyan;
