import React from 'react'
import { Helmet } from "react-helmet-async"
import { motion } from "framer-motion"

// Animation Variants
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
}

const TechStack = () => {
  return (
    <>
      {/* SEO */}
      <Helmet>
        <title>Tech Stack | Village Event Management System</title>

        <meta
          name="description"
          content="Technologies used to build the village event management system for Belwa, Balua, and Bhitiyahawa."
        />

        {/* Open Graph */}
        <meta property="og:title" content="Tech Stack | Village Event System" />
        <meta property="og:description" content="Built with React, Node.js, MongoDB, and modern tools." />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Semantic Section */}
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
        <div className="max-w-5xl mx-auto text-center">

          {/* Header */}
          <header>
            <motion.h2
              variants={item}
              className="text-3xl md:text-5xl font-bold mb-6"
            >
              Tech{" "}
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
                Stack
              </span>
            </motion.h2>

            <motion.p
              variants={item}
              className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-12"
            >
              This system is built using modern web technologies to make event management simple 
              and accessible for villages like <strong>Belwa, Balua, and Bhitiyahawa</strong>.
            </motion.p>
          </header>

          {/* Cards */}
          <motion.div
            variants={container}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                title: "Frontend",
                color: "text-blue-500",
                techs: ["React", "Tailwind CSS", "Framer Motion"],
              },
              {
                title: "Backend",
                color: "text-green-500",
                techs: ["Node.js", "Express.js"],
              },
              {
                title: "Database",
                color: "text-purple-500",
                techs: ["MongoDB", "Cloudinary"],
              },
            ].map((section, index) => (
              <motion.article
                key={index}
                variants={item}
                whileHover={{ scale: 1.06, y: -6 }}
                whileTap={{ scale: 0.97 }}
                className="bg-white/70 dark:bg-gray-900/80 backdrop-blur-md 
                p-6 rounded-xl shadow-lg transition-all duration-300"
              >
                <h3 className={`text-xl font-semibold mb-4 ${section.color}`}>
                  {section.title}
                </h3>

                <div className="flex flex-wrap justify-center gap-3">
                  {section.techs.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full 
                      bg-gray-200 dark:bg-gray-800 
                      text-sm hover:bg-blue-500 hover:text-white 
                      transition-all duration-300 cursor-pointer"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </motion.div>

        </div>
      </motion.section>
    </>
  )
}

export default TechStack