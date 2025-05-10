import React, { useEffect, useRef } from 'react';
import './Browncard.css';

const BrownCard = () => {
  const cardRef = useRef();

  useEffect(() => {
    const card = cardRef.current;
    card.classList.add('slide-in-left');
  }, []);

  return (
    <div className="brown-card" ref={cardRef}>
      <img src="./images/pixelcut-export (1).png" alt="Maid service" />
      <div className="brown-card-text">
        <h2>Looking for a Helping Hand?</h2>
        <p>
          Discover personalized maid services tailored just for you. View profiles,
          check ratings, and connect with reliable, verified help for your household needs.
        </p>
        <button>Login</button>
      </div>
    </div>
  );
};

export default BrownCard;
