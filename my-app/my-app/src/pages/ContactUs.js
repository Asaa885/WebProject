import React from 'react';
import './ContactUs.css';

const Contact = () => {
  const handleCallClick = () => {
    const phoneNumber = '067-123-456 or 065-712-34';
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleEmailClick = () => {
    const emailAddress = 'kidu@gmail.com';
    window.location.href = `mailto:${emailAddress}`;
  };

  return (
    <main>
      <section className="contact-section">
        <h1>Contact Us</h1>
        <div className="contact-info">
          <div className="phone">
            <h3>Phone</h3>
            <p id="phone-number">067-123-456 or 065-712-34</p>
            <button id="call-button" onClick={handleCallClick}>Call Now</button>
          </div>
          <div className="email">
            <h3>Email</h3>
            <p id="email-address">kidu@gmail.com</p>
            <button id="email-button" onClick={handleEmailClick}>Send Email</button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
