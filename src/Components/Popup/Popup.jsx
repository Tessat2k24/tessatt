import React, { useEffect } from "react";
import { gsap } from "gsap";
import "./Popup.css";

const Popup = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 10) {
        gsap.to(".popup-overlay", {
          y: "-100%",
          duration: 0.5,
          ease: "power4.out",
        });
        document.body.classList.add("swiped");
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="popup-overlay">
      <div className="popup-screen"></div>
    </div>
  );
};

export default Popup;
