import React, { useState } from "react";
import "./Subscription.css"; // Import CSS file for styling

const Subscription = () => {
        const [email, setEmail] = useState("");
        const [status, setStatus] = useState("");

        // Handle form submission
        const handleSubmit = (e) => {
          e.preventDefault();
          setEmail(""); // Clear the input field

          // Prepare data to be sent
          const formData = new FormData();
          formData.append("email", email);
          // Replace the following URL with the URL of your deployed Google Apps Script web app
          const scriptURL =
            "https://script.google.com/macros/s/AKfycbzm-3VPLfJwPbqMJLq2MpFkG6edr3iYyRrfCnJ3b4X3uTXOhn0PMwMexBB1RUEKlVDt/exec";

          // Send the form data to Google Sheets
          fetch(scriptURL, {
            method: "POST",
            body: formData,
          })
            .then((response) => {
              setStatus("Subscription successful!");

              // Hide success message after 5 seconds
              setTimeout(() => {
                setStatus(""); // Reset status after showing the success message
              }, 5000);
            })
            .catch((error) => {
              setStatus("Failed to subscribe, please try again.");
              console.error("Error:", error);
            });
        };

  return (
    <div className="subscription-container">
      <div className="subscription-box">
        <div className="subscription-content">
          <h2>Sign up for our newsletter</h2>
          <p>
            <span className="arrow">←</span> Stay in the loop with us. To know
            more about our projects and upcoming sessions.
          </p>
        </div>
        <div className="subscription-form">
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="sample@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit">Subscribe</button>
          </form>
          {status && <p className="success-message">{status}</p>}{" "}
          {/* Display the status message below the button */}
        </div>
      </div>
    </div>
  );
};

export default Subscription;
