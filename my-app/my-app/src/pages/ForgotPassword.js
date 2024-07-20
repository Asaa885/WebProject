import React, { useState } from 'react';
import './ForgotPassword.css';

const ForgotPassword = () => {
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;

    
    setMessage(`Password reset email sent to ${email}`);
    event.target.reset();
  };

  return (
    <div className="forgot-container">
      <h1>Forgot Password?</h1>
      <form id="forgot-password-form" onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
        <button type="submit">Reset Password</button>
      </form>
      <p id="message">{message}</p>
    </div>
  );
};

export default ForgotPassword;
