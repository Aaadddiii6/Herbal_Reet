// src/components/DashboardButton.js
import React from 'react';
import './DashboardButton.css';

const DashboardButton = () => {
  return (
    <a href="https://herbal-reet-dashbor-ad.vercel.app/" className="dashboard-button-link" aria-label="Dashboard" target="_blank" rel="noopener noreferrer">
      <button className="dashboard-button">Dashboard</button>
    </a>
  );
};

export default DashboardButton;
