import React from 'react'
import { Helmet } from "react-helmet-async"
import { motion } from "framer-motion"

// Animation Variants
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
}

const Features = () => {
  return (
    <>
      {/* SEO */}
      <Helmet>
        <title>Features | Village Event Management System</title>

        <meta
          name="description"
          content="Features of a village event management system for Belwa, Balua, and Bhitiyahawa."
        />

        {/* Open Graph */}
        <meta property="og:title" content="Features | Village Event System" />
        <meta property="og:description" content="Explore features like event creation, announcements, and dashboards." />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Section */}
      <motion.section
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="w-full py-20 px-6 
        bg-gradient-to-br 
        from-white via-gray-100 to-gray-200 
        dark:from-[#0a0a0a] dark:via-[#111827] dark:to-black 
        text-gray-900 dark:text-gray-100 
        transition-all duration-500"
      >
        <div className="max-w-6xl mx-auto text-center">

          {/* Heading */}
          <motion.h2
            variants={item}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            Village{" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
              Features
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={item}
            className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-12"
          >
            This system provides simple and useful features for villages like <b>Belwa, Balua, and Bhitiyahawa</b>
            to manage events easily and keep everyone informed.
          </motion.p>

          {/* Features Grid */}
          <motion.div
            variants={container}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
          >
            {[
              {
                title: "Create Events",
                desc: "Create local events like weddings, festivals, and meetings easily.",
              },
              {
                title: "Manage People",
                desc: "Keep track of attendees and participants in village events.",
              },
              {
                title: "Announcements",
                desc: "Share important updates about events with all villagers.",
              },
              {
                title: "Event Updates",
                desc: "Get real-time updates about changes in events or schedules.",
              },
              {
                title: "Simple Dashboard",
                desc: "Easy-to-use dashboard for managing all village activities.",
              },
              {
                title: "Secure System",
                desc: "Your data is safe and managed properly.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ scale: 1.05, y: -6 }}
                whileTap={{ scale: 0.97 }}
                className="bg-white/70 dark:bg-gray-900/80 backdrop-blur-md 
                p-6 rounded-xl shadow-lg transition-all duration-300"
              >
                <h3 className="text-xl font-semibold mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </motion.section>
    </>
  )
}

export default Features