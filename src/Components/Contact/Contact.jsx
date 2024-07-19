import React, { useEffect, useRef } from "react";
import "./Contact.css";
import phone from "/src/assets/phone.svg"
import email from "/src/assets/email.svg";
import location from "/src/assets/location.svg";
import instagram from "/src/assets/instagram.svg";
import linkedin from "/src/assets/linkedin.svg";
import facebook from "/src/assets/facebook.svg";
import twitter from "/src/assets/twitter.svg";

const Contact = () => {
  const inputRefs = useRef([]);

  useEffect(() => {
    const focusFunc = (event) => {
      let parent = event.target.parentNode;
      parent.classList.add("focus");
    };

    const blurFunc = (event) => {
      let parent = event.target.parentNode;
      if (event.target.value === "") {
        parent.classList.remove("focus");
      }
    };

    const inputs = inputRefs.current;
    inputs.forEach((input) => {
      input.addEventListener("focus", focusFunc);
      input.addEventListener("blur", blurFunc);
    });

    return () => {
      inputs.forEach((input) => {
        input.removeEventListener("focus", focusFunc);
        input.removeEventListener("blur", blurFunc);
      });
    };
  }, []);
  return (
    <div className="container220">
      <div className="form">
        <div className="contact-info">
          <h3 className="title">Let's get in touch</h3>
          <p className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            dolorum adipisci recusandae praesentium dicta!
          </p>

          <div className="info">
            <div className="information">
              <img
                src={location}
                className="icon"
                alt="Location"
              />
              <p>92 Cherry Drive Uniondale, NY 11553</p>
            </div>
            <div className="information">
              <img src={email} className="icon" alt="Email" />
              <p>lorem@ipsum.com</p>
            </div>
            <div className="information">
              <img src={phone} className="icon" alt="Phone" />
              <p>123-456-789</p>
            </div>
          </div>

          <div className="social-media">
            <p>Connect with us :</p>
            <div className="social-icons">
              <a href="#">
                <img
                  src={facebook}
                  className="social-icon"
                  alt="Facebook"
                />
              </a>
              <a href="#">
                <img
                  src={twitter}
                  className="social-icon"
                  alt="Twitter"
                />
              </a>
              <a href="#">
                <img
                  src={instagram}
                  className="social-icon"
                  alt="Instagram"
                />
              </a>
              <a href="#">
                <img
                  src={linkedin}
                  className="social-icon"
                  alt="LinkedIn"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <span className="circle one"></span>
          <span className="circle two"></span>

          <form action="index.html" autoComplete="off">
            <h3 className="title">Contact us</h3>
            <div className="input-container">
              <input
                type="text"
                name="name"
                className="input"
                ref={(el) => (inputRefs.current[0] = el)}
              />
              <label htmlFor="">Username</label>
              <span>Username</span>
            </div>
            <div className="input-container">
              <input
                type="email"
                name="email"
                className="input"
                ref={(el) => (inputRefs.current[1] = el)}
              />
              <label htmlFor="">Email</label>
              <span>Email</span>
            </div>
            <div className="input-container">
              <input
                type="tel"
                name="phone"
                className="input"
                ref={(el) => (inputRefs.current[2] = el)}
              />
              <label htmlFor="">Phone</label>
              <span>Phone</span>
            </div>
            <div className="input-container textarea">
              <textarea
                name="message"
                className="input"
                ref={(el) => (inputRefs.current[3] = el)}
              ></textarea>
              <label htmlFor="">Message</label>
              <span>Message</span>
            </div>
            <input type="submit" value="Send" className="btn" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
