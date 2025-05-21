import React from 'react';
import '../component/login.css';

const Login = () => {
  return (
    <div className="login-container">
      <form className="login-form">
        <h2>Login</h2>

        <label>Email</label>
        <input type="email" placeholder="Enter your email" />

        <label>Password</label>
        <input type="password" placeholder="Enter your password" />

        <button type="submit">Login</button>

        <p className="signup-link">
          Don't have an account? <a href="/signup">Signup</a>
        </p>
      </form>
    </div>
  );
};

export default Login;
