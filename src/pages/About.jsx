import React from 'react'
import Footer from '../components/core/Footer/Index'
import Introduction from '../components/core/About/Introduction'
import { Helmet } from "react-helmet-async"
import Vision from '../components/core/About/Vision'
import Features from '../components/core/About/Features'
import AboutDev from '../components/core/About/Dev'
import TechStack from '../components/core/About/TechStack'

const About = () => {
  return (
    <>
      {/* Page SEO */}
      <Helmet>
        <title>About | Village Event Management System</title>

        <meta 
          name="description" 
          content="A simple event management system designed for villages like Belwa, Balua, and Bhitiyahawa to manage local events and gatherings easily." 
        />

        {/* Open Graph */}
        <meta property="og:title" content="Village Event Management System" />
        <meta 
          property="og:description" 
          content="Manage village events like weddings, festivals, and meetings easily." 
        />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Main Layout */}
      <main
        className="w-full min-h-screen
        bg-light dark:bg-dark 
        text-gray-900 dark:text-gray-100 
        overflow-x-hidden"
      >
        {/* Sections */}
        <Introduction />
        <Vision />
        <Features />
        <AboutDev />
        <TechStack />

        {/* Footer */}
        <Footer />
      </main>
    </>
  )
}

export default About