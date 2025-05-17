// src/components/Evaluation.js

import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale } from 'chart.js';

// Register necessary Chart.js components
ChartJS.register(Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale);

// Dummy data for progress tracking
const progressData = {
  labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
  datasets: [
    {
      label: 'Progress',
      data: [50, 60, 70, 80, 90], // Example data
      fill: false,
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 3, // Increased line thickness
      tension: 0.1,
    },
  ],
};

// Dummy data for accuracy chart
const accuracyData = {
  labels: ['Task 1', 'Task 2', 'Task 3', 'Task 4'],
  datasets: [
    {
      label: 'Accuracy (75%)',
      data: [85, 90, 95, 80], // Example data
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 3, // Increased line thickness
      borderRadius: 5,
    },
  ],
};

const Evaluation = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-100">
      {/* Button and Heading */}
      <div className="text-center mb-10">
        <a href="https://mediapipe-demo.vercel.app/hello3.html" target="_blank" rel="noopener noreferrer">
          <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none">
            Track Your Posture
          </button>
        </a>
      </div>

      {/* Graphs Container */}
      <div className="w-full max-w-3xl mx-auto flex flex-col space-y-6">
        {/* Progress Tracking Graph */}
        <div className="bg-white p-6 shadow-md rounded-md">
          <h2 className="text-xl font-semibold mb-4">Progress Tracking</h2>
          <div className="w-full h-64 md:h-80 lg:h-96">
            <Line 
              data={progressData} 
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: {
                    display: true,
                  },
                  tooltip: {
                    callbacks: {
                      label: (context) => `${context.dataset.label}: ${context.parsed.y} %`
                    }
                  }
                }
              }} 
            />
          </div>
        </div>

        {/* Accuracy Chart */}
        <div className="bg-white p-6 shadow-md rounded-md">
          <h2 className="text-xl font-semibold mb-4">Accuracy Chart</h2>
          <div className="w-full h-64 md:h-80 lg:h-96">
            <Line 
              data={accuracyData} 
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: {
                    display: true,
                  },
                  tooltip: {
                    callbacks: {
                      label: (context) => `${context.dataset.label}: ${context.parsed.y} %`
                    }
                  }
                }
              }} 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Evaluation;
