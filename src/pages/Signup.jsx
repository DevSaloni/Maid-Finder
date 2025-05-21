// src/components/Signup.jsx
import React from 'react';
import '../component/signup.css';

const Signup = () => {
  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2>Create an Account</h2>
        <form className="signup-form">
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email Address" required />
          <input type="password" placeholder="Password" required />
          <input type="password" placeholder="Confirm Password" required />
          <button type="submit">Sign Up</button>
        </form>
        <p className="login-link">
          Already have an account? <a href="/login">Login</a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
