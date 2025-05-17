import React from "react";

const ChatBot = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white text-black p-4">
      <div className="w-full max-w-lg text-center mx-auto">
        <h1 className="text-center my-10 text-4xl font-bold">Advance Search Bot</h1>
        <p className="text-lg mb-8">
          Welcome to the Virtual Herbal Garden! Explore the world of medicinal plants.
        </p>
        <a
          href="https://sih-ai.web.app/" 
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 bg-green-500 hover:bg-green-700 text-white font-bold rounded-full transition duration-300"
        >
          Upload a Plant Photo
        </a>
        <p className="text-sm mt-4">
          Upload any photo of a plant, and we'll recognize it and tell you its benefits.
        </p>
      </div>
    </div>
  );
};

export default ChatBot;
