import React from 'react';
import './Buttons.css';

const Buttons = () => {
  return (
    <div className="buttons-container">
      <a href="https://spatial-showcase.vercel.app/" className="button-link" aria-label="Join a meeting">
        <button className="button">Join</button>
      </a>
      <a href="https://spatial-showcase-create.vercel.app/" className="button-link" aria-label="Create a meeting">
        <button className="button">Create</button>
      </a>
    </div>
  );
};

export default Buttons;
