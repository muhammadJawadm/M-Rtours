"use client";
import React from 'react';

// Floating Contact Action Buttons (Email, Phone, WhatsApp)
// Stacked in bottom-right corner, accessible labels, uses Bootstrap Icons.

const WHATSAPP_NUMBER = '447517240405'; // E.164 without leading +
const PHONE_NUMBER = '+447517240405';
const EMAIL_ADDRESS = 'Info@M-rtours.co.uk';
const PREFILL_MESSAGE = "Hi! I'd like to inquire about your travel packages.";
const EMAIL_SUBJECT = 'Travel Inquiry';
const EMAIL_BODY = 'Hi, I would like to get more information about your travel packages.';

const WhatsAppFAB: React.FC = () => {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(PREFILL_MESSAGE)}`;
  const phoneUrl = `tel:${PHONE_NUMBER}`;
  const mailtoUrl = `mailto:${EMAIL_ADDRESS}?subject=${encodeURIComponent(EMAIL_SUBJECT)}&body=${encodeURIComponent(EMAIL_BODY)}`;

  return (
    <div className="fab-stack" aria-label="Quick contact actions">
      {/* Email button */}
      <a
        href={mailtoUrl}
        className="fab-btn fab-btn--email"
        aria-label="Send us an email"
        onClick={(e) => {
          // Keep navigation in same tab to let OS/mail client intercept.
          // If no handler, show an alert with alternative webmail suggestion.
          setTimeout(() => {
            // If focus is still on the page after 1s, likely no handler.
            if (document.hasFocus()) {
              // Provide quick guidance
              alert('It looks like no default email application handled the link.\nSet a default mail app or use: Gmail (https://mail.google.com/mail/?view=cm&to=Info@M-rtours.co.uk&su=Travel%20Inquiry&body=Hi%2C%20I%20would%20like%20to%20get%20more%20information)');
            }
          }, 1000);
        }}
      >
        <i className="bi bi-envelope-fill" aria-hidden="true"></i>
      </a>
      {/* Phone button */}
      <a
        href={phoneUrl}
        className="fab-btn fab-btn--phone"
        aria-label="Call us"
      >
        <i className="bi bi-telephone-fill" aria-hidden="true"></i>
      </a>
      {/* WhatsApp button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="fab-btn fab-btn--whatsapp"
      >
        <i className="bi bi-whatsapp" aria-hidden="true"></i>
      </a>
    </div>
  );
};

export default WhatsAppFAB;
