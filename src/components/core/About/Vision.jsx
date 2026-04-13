import React from 'react'
import { Helmet } from "react-helmet-async"

const Vision = () => {
  return (
    <>
      {/* Section level SEO */}
      <Helmet>
        <title>Our Vision | Event Management System</title>
        <meta 
          name="description" 
          content="Discover the vision behind our Event Management System – innovation, simplicity, and growth." 
        />
      </Helmet>

      <section
        className="w-full py-20 px-6 
        bg-gray-100 dark:bg-gray-900 
        text-gray-900 dark:text-gray-100 
        transition-colors duration-500"
      >
        <div className="max-w-5xl mx-auto text-center">
          
          {/* Heading */}
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Our{" "}
            <span className="bg-linear-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
              Vision
            </span>
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-12">
            We aim to revolutionize event management by providing a seamless, efficient, and user-friendly platform.
            Our vision is to empower individuals and organizations to create unforgettable events with minimal effort.
          </p>

          {/* Vision Points */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg 
              hover:scale-105 hover:shadow-2xl transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Continuously improving our platform with modern technologies.
              </p>
            </div>

            <div
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg 
              hover:scale-105 hover:shadow-2xl transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-2">Simplicity</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Making event management easy and accessible for everyone.
              </p>
            </div>

            <div
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg 
              hover:scale-105 hover:shadow-2xl transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-2">Growth</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Helping users scale and manage events more effectively.
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default Vision