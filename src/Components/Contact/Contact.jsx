import React, { useEffect, useRef } from "react";
import "./Contact.css";
import phone from "/src/assets/phone.svg";
import email from "/src/assets/email.svg";
import location from "/src/assets/location.svg";
import instagram from "/src/assets/instagram.svg";
import linkedin from "/src/assets/linkedin.svg";
import facebook from "/src/assets/facebook.svg";
import twitter from "/src/assets/x.svg";

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

  //for senting email
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "817a0c95-3e69-44fb-8760-30cba1559323");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className="container220" id="contact">
      <div className="form">
        <div className="contact-info">
          <h3 className="title">Let's get in touch</h3>
          <p className="text">
            No project is too big or small. Ask us anything!
          </p>

          <div className="info">
            <div className="information">
              <img src={location} className="icon" alt="Location" />
              <p>
                Cabin No.3 SCIE lab Ramaujan Block Saintgits College of
                Engineering Kottukulam Hills, Pathamuttam P. O Kerala 686532
              </p>
            </div>
            <div className="information">
              <img src={email} className="icon" alt="Email" />
              <p>our_team@tessat.space</p>
            </div>
            <div className="information">
              <img src={phone} className="icon" alt="Phone" />
              <p>+91 9037331907</p>
            </div>
          </div>

          <div className="social-media">
            <p>Connect with us :</p>
            <div className="social-icons">
              {/* <a href="#">
                <img
                  src={facebook}
                  className="social-icon"
                  alt="Facebook"
                  target="blank"
                />
              </a> */}

              <a
                href="https://www.instagram.com/tessat.space?igsh=OGt4cTVrMWFicnd1"
                target="blank"
              >
                <img src={instagram} className="social-icon" alt="Instagram" />
              </a>
              <a href="https://www.linkedin.com/company/tessat/" target="blank">
                <img src={linkedin} className="social-icon" alt="LinkedIn" />
              </a>
              <a
                href="https://x.com/Tessat_Space?t=9ig4oenY8aDOwikBH1aiAw&s=09"
                target="blank"
              >
                <img src={twitter} className="social-icon" alt="Twitter" />
              </a>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <form action="index.html" autoComplete="off" onSubmit={onSubmit}>
            <h3 className="title">Contact us</h3>
            <div className="input-container">
              <input
                type="text"
                name="name"
                className="input"
                placeholder="Name"
                ref={(el) => (inputRefs.current[0] = el)}
                required
              />
            </div>
            <div className="input-container">
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Email"
                ref={(el) => (inputRefs.current[1] = el)}
                required
              />
            </div>
            <div className="input-container">
              <input
                type="tel"
                name="phone"
                className="input"
                placeholder="Phone"
                ref={(el) => (inputRefs.current[2] = el)}
              />
            </div>
            <div className="input-container textarea">
              <textarea
                name="message"
                className="input"
                placeholder="Message"
                ref={(el) => (inputRefs.current[3] = el)}
                required
              ></textarea>
            </div>
            <input type="submit" value="Send" className="btn" />
            <span className="result">{result}</span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
