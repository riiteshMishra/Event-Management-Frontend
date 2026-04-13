import React from "react";
// FIX: react-helmet ko replace kiya react-helmet-async se
import { Helmet } from "react-helmet-async";

const Introduction = () => {
  return (
    <>
      {/*  SEO Meta Tags */}
      <Helmet>
        <title>Event Management System | Manage Events Easily</title>

        {/* description clean kiya */}
        <meta
          name="description"
          content="Create, organize, and manage events easily with our modern event management system."
        />

        <meta name="keywords" content="event management, event booking, event dashboard, MERN project" />

        {/* Open Graph (SEO + sharing) */}
        <meta property="og:title" content="Event Management System" />
        <meta property="og:description" content="Manage events effortlessly with our platform." />
        <meta property="og:type" content="website" />
      </Helmet>

      <div
        className="w-full min-h-screen 
        bg-linear-to-br 
        from-white via-gray-100 to-gray-200 
        dark:from-black dark:via-gray-900 dark:to-gray-800 
        text-black dark:text-white 
        flex items-center justify-center px-6 transition-colors duration-500 py-6"
      >
        <div className="max-w-5xl text-center">
          
          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Manage Your Events <br />
            <span className="bg-linear-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
              Effortlessly
            </span>
          </h1>

          {/* Description */}
          <p className="text-gray-600 dark:text-gray-300 text-lg md:text-xl mb-8">
            Our Event Management System helps you create, organize, and manage events seamlessly.
            From registrations to tracking participants, everything is handled in one place.
          </p>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            
            {/* FIX: accessibility added */}
            <button
              aria-label="Get Started"
              className="bg-blue-600 hover:bg-blue-700 hover:scale-105 
              px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg"
            >
              Get Started
            </button>

            <button
              aria-label="Learn More"
              className="border border-gray-400 dark:border-gray-500 
              hover:border-black dark:hover:border-white 
              hover:scale-105 px-6 py-3 rounded-lg font-semibold transition-all duration-300"
            >
              Learn More
            </button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            
            <div className="bg-white/70 dark:bg-gray-900/80 backdrop-blur-md 
              p-6 rounded-xl shadow-lg hover:scale-105 hover:shadow-2xl 
              transition-all duration-300">
              <h3 className="text-xl font-semibold mb-2">Create Events</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Easily create and manage events with a user-friendly interface.
              </p>
            </div>

            <div className="bg-white/70 dark:bg-gray-900/80 backdrop-blur-md 
              p-6 rounded-xl shadow-lg hover:scale-105 hover:shadow-2xl 
              transition-all duration-300">
              <h3 className="text-xl font-semibold mb-2">Manage Users</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Handle registrations, participants, and attendees efficiently.
              </p>
            </div>

            <div className="bg-white/70 dark:bg-gray-900/80 backdrop-blur-md 
              p-6 rounded-xl shadow-lg hover:scale-105 hover:shadow-2xl 
              transition-all duration-300">
              <h3 className="text-xl font-semibold mb-2">Track Analytics</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Get insights and monitor event performance in real-time.
              </p>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Introduction;