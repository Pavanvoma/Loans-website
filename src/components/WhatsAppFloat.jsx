import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppFloat = () => {
  return (
    <a
      href="https://wa.me/917989561133?text=Hello%20I%20am%20interested%20in%20your%20loan%20services"
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed 
        bottom-6 
        right-6 
        z-50
        bg-green-500 
        hover:bg-green-600 
        text-white 
        rounded-full 
        p-4 
        shadow-2xl 
        transition 
        animate-bounce
      "
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp size={28} />
    </a>
  );
};

export default WhatsAppFloat;
