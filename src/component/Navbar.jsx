import React, { useState } from 'react';
import './Navbar.css';
import {useNavigate} from 'react-router-dom';


const Navbar = () => {
  const navigate = useNavigate();

  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="navbar-container">
      <div className="navbar">
        <div className="logo">
          <p>
            <span className="first-word">SHE</span>
            <span className="second-word">Works</span>
          </p>
        </div>

        <div className="right-section">
          <div className="btn-group">
            <button className="nav-btn" onClick={() => navigate('/login')}>Login</button>
            <button className="nav-btn" onClick={() => navigate('/signup')}>Signup</button>
          </div>

          <div className="profile-section">
            <img
              src="/images/menu.png"
              alt="menu"
              className="menu-icon"
              onClick={toggleDropdown}
            />
            {showDropdown && (
              <div className="dropdown-menu">
                <p>View Profile</p>
                <p>Edit Profile</p>
                <p>Logout</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
