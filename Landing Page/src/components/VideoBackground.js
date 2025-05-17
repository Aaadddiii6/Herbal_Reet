import React, { useEffect } from 'react';
import './VideoBackground.css';
import Buttons from './Buttons';
import Logo from './Logo';
import DashboardButton from './DashboardButton'; // Import the new DashboardButton component

const VideoBackground = () => {
  useEffect(() => {
    const videoElement = document.getElementById('background-video');
    videoElement.play().catch(error => {
      console.log('Video autoplay failed:', error);
    });
  }, []);

  return (
    <div className="video-container">
      <video autoPlay loop id="background-video" muted>
        <source src="/assets/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="black-overlay"></div>
      <Logo />
      <div className="overlay-text">
        <div className="main-text">Welcome to Herbal-Reet</div>
        <div className="sub-text">Revive The Traditional Cultural Practices</div>
      </div>
      <Buttons />
      <DashboardButton /> {/* Add DashboardButton component */}
    </div>
  );
};

export default VideoBackground;
