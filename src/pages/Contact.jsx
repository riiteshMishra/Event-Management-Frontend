import React from 'react'
import Footer from '../components/core/Footer/Index'
import { Helmet } from "react-helmet-async"
import HeroSection from '../components/core/Contact/HeroSection'
import ContactDetails from '../components/core/Contact/ContactDetails'
import Form from '../components/core/Contact/Form'

const Contact = () => {
  return (
    <>
      {/* SEO */}
      <Helmet>
        <title>Contact Us | Village Event Management System</title>

        <meta
          name="description"
          content="Contact us for help with managing village events in Belwa, Balua, and Bhitiyahawa. Get support and connect with the developer."
        />

        <meta
          name="keywords"
          content="contact event management, village event help, Belwa Balua Bhitiyahawa contact"
        />

        {/* Open Graph */}
        <meta property="og:title" content="Contact | Village Event System" />
        <meta
          property="og:description"
          content="Reach out for support and queries related to village event management."
        />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Main Layout */}
      <main
        className="min-h-screen w-full 
        bg-light dark:bg-dark 
        text-gray-900 dark:text-gray-100 
        "
      >
        <HeroSection />
        <ContactDetails />
        <Form />
        {/* Footer */}
        <Footer />
      </main>
    </>
  )
}

export default Contact