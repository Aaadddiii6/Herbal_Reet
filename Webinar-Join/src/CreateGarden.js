import React from "react";
import './CreateGarden.css';

const CreateGarden = () => {
  const handleClick = (event) => {
    event.preventDefault();
    window.open(
      "https://www.spatial.io/s/Paath-Shala-655c8e28c41d46b41c94c3e3?share=0",
      "_blank"
    );
  };

  return (
    <div className="fullscreen-container">
      <h1 className="text-4xl font-bold">Webinar Session</h1>
      
      <div className="iframe-container">
        <iframe
          src="https://www.spatial.io/embed/Webinar-12334-65f47cd9f5db0e5f29fdf7a9?share=414676703334494834"
          allow="camera; fullscreen; autoplay; display-capture; microphone; clipboard-write"
          title="Virtual Garden"
        ></iframe>
      </div>
    </div>
  );
};

export default CreateGarden;
