import React from 'react';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 via-white to-pink-100 flex items-center justify-center">
      <div className="text-center p-10 bg-white rounded-2xl shadow-lg max-w-lg w-full">
        <h1 className="text-4xl font-bold text-blue-700 mb-4">Welcome to TeamFlow 🚀</h1>
        <p className="text-gray-600 mb-6">
          Your internal productivity dashboard with AI-powered insights. Let's make teamwork smoother and smarter.
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
            Get Started
          </button>
          <button className="bg-gray-200 text-gray-800 px-6 py-2 rounded-full hover:bg-gray-300 transition">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
