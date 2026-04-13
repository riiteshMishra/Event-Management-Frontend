import React from 'react'
import Footer from '../components/core/Footer/Index'
import Introduction from '../components/core/About/Introduction'

// FIX: SEO ke liye Helmet add kiya
import { Helmet } from "react-helmet-async"
import Vision from '../components/core/About/Vision'

const About = () => {
  return (
    <>
      {/* Page level SEO */}
      <Helmet>
        <title>About | Event Management System</title>
        <meta 
          name="description" 
          content="Learn more about our Event Management System, features, and developer." 
        />
      </Helmet>

      <div className="AboutPage min-h-screen w-full 
        bg-white dark:bg-black 
        text-gray-900 dark:text-gray-100 
        flex flex-col"
      >
        {/* main content grow kare */}
        <main className="grow">
          <Introduction />
          <Vision/>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </>
  )
}

export default About