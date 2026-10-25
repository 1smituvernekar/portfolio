
import React from "react";
import "./WhatsAppButton.css";

const WhatsAppButton = () => {
  const phoneNumber = "918970520956"; 

  const message = encodeURIComponent(
    "Hi! I visited your portfolio and I'm interested in getting a website developed."
  );

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      className="whatsapp-button"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with me on WhatsApp"
    >
      <svg
        viewBox="0 0 32 32"
        className="whatsapp-icon"
        aria-hidden="true"
      >
        <path
          fill="currentColor"
          d="M16.04 3C8.88 3 3.05 8.82 3.05 15.98c0 2.29.6 4.53 1.74 6.5L3 29l6.7-1.75a13 13 0 0 0 6.34 1.62h.01C23.2 28.87 29 23.05 29 15.9 29 8.76 23.18 3 16.04 3Zm.01 23.68h-.01a10.8 10.8 0 0 1-5.5-1.51l-.4-.24-3.98 1.04 1.06-3.87-.26-.42a10.77 10.77 0 1 1 9.09 5Zm5.91-8.08c-.32-.16-1.88-.93-2.17-1.03-.29-.11-.5-.16-.71.16-.21.32-.82 1.03-1 1.24-.18.21-.37.24-.69.08-.32-.16-1.34-.49-2.55-1.57-.94-.83-1.58-1.86-1.77-2.18-.18-.32-.02-.49.14-.65.14-.14.32-.37.48-.55.16-.18.21-.32.32-.53.1-.21.05-.4-.03-.56-.08-.16-.71-1.72-.98-2.36-.26-.62-.52-.53-.71-.54h-.61c-.21 0-.55.08-.84.4-.29.32-1.1 1.08-1.1 2.63 0 1.56 1.13 3.06 1.29 3.27.16.21 2.22 3.4 5.39 4.77.75.32 1.34.52 1.8.66.76.24 1.45.21 2 .13.61-.09 1.88-.77 2.14-1.51.27-.74.27-1.37.19-1.5-.08-.13-.29-.21-.61-.37Z"
        />
      </svg>

      <span className="whatsapp-label">Let's Talk</span>
    </a>
  );
};

export default WhatsAppButton;
