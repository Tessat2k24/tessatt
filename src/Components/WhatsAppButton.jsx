import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const phoneNumber = "8078157810"; // Your phone number without country code
  const countryCode = "+91"; // Your country code

  const isMobile = () => {
    return /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(
      navigator.userAgent
    );
  };

  const handleWhatsAppRedirect = () => {
    const fullPhoneNumber = isMobile()
      ? `${countryCode}${phoneNumber}`
      : phoneNumber;
    const message = "Hello, I would like to know more about Tessat!";
    const whatsappUrl = `https://wa.me/${fullPhoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <button
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        backgroundColor: "#25D366",
        color: "white",
        borderRadius: "50%",
        width: "60px",
        height: "60px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "none",
        cursor: "pointer",
      }}
      onClick={handleWhatsAppRedirect}
    >
      <FaWhatsapp size={30} />
    </button>
  );
};

export default WhatsAppButton;
