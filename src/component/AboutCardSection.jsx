import React from 'react';
import './AboutCardSection.css';

const AboutCardSection = () => {
  return (
    <div className="about-section-container">
      {/* Left Side - Image */}
      <div className="about-image-container">
        <img src="/images/thumbs-up.jpg" alt="Thumbs Up" />
      </div>

      {/* Right Side - Text Content */}
      <div className="about-content-container">
        <h2>About Our Company</h2>
        <h3>Just a Maid, But a Support System For Your House!</h3>
        <p>
          We aim to provide a complete range of house help manpower to ensure your home runs smoothly.
          Our maids are experienced, verified, and trustworthy.
        </p>

        <p className="highlight-text">Part-Time Maid Services</p>
        <p>
          Flexible options for hiring maids on shifts of 6hrs, 8hrs, 10hrs, or 12hrs to fit your convenience.
        </p>

        <p className="highlight-text">Full-Time Maid Services</p>
        <p>
          Full-time maids (24hrs) stay at your premises, helping during and after working hours,
          and are available for emergencies.
        </p>

        <div className="consultancy">
          <span>Free Consultancy</span>
          <button>+91-82394 80939</button>
        </div>
      </div>
    </div>
  );
};

export default AboutCardSection;
