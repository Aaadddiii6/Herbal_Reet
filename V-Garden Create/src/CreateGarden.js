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
      <h1 className="text-4xl font-bold">Your Virtual Garden</h1>
      
      <div className="iframe-container">
        <iframe
          src="https://www.spatial.io/embed/Your-Virtual-Garden-66261899fd6047a3755bca20?share=8428967541727258215"
          allow="camera; fullscreen; autoplay; display-capture; microphone; clipboard-write"
          title="Virtual Garden"
        ></iframe>
      </div>
    </div>
  );
};

export default CreateGarden;
