// src/components/LandingPage.js

import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  const handlePlayGameClick = () => {
    window.location.href = 'https://66d8db1f473d9a5829ddf273--unrivaled-marigold-45a302.netlify.app/';
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 md:px-6 lg:px-8 bg-gray-100">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-2xl mx-auto"
      >
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Welcome to the Ultimate Game!</h1>
        <p className="text-base md:text-lg text-gray-600 mb-6">
          Dive into an exciting adventure and test your skills. Complete the game and earn a prestigious certificate to showcase your achievement!
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handlePlayGameClick}
          className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition-colors duration-300"
        >
          Play the Game
        </motion.button>
      </motion.div>

      <div className="mt-12 text-center max-w-2xl mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-semibold mb-2 text-gray-700">Earn Your Certificate!</h2>
        <p className="text-sm md:text-base text-gray-500">
          Successfully completing the game will grant you a certificate that you can proudly display. Show the world your skills and dedication!
        </p>
      </div>
    </div>
  );
};

export default LandingPage;
