import React from 'react';

// Floating WhatsApp Action Button (appears on every page via layout)
// Opens a WhatsApp chat with predefined number & optional greeting.
// Uses Bootstrap Icons (already globally imported) for the WhatsApp glyph.

const WHATSAPP_NUMBER = '447517240405'; // E.164 without leading +
const PREFILL_MESSAGE = "Hi! I'd like to inquire about your travel packages.";

const WhatsAppFAB: React.FC = () => {
  const chatUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(PREFILL_MESSAGE)}`;

  return (
    <a
      href={chatUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="whatsapp-fab"
    >
      <i className="bi bi-whatsapp" aria-hidden="true"></i>
      <span className="sr-only" style={{position:'absolute',width:1,height:1,overflow:'hidden',clip:'rect(0 0 0 0)'}}>
        Open WhatsApp chat
      </span>
    </a>
  );
};

export default WhatsAppFAB;
