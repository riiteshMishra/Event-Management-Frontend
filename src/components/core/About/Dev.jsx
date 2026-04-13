import React from 'react'
import { Helmet } from "react-helmet-async"
import { motion } from "framer-motion"
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

// Optimized Cloudinary Image
const DevImage = "https://res.cloudinary.com/dwpplwqzs/image/upload/w_200,h_200,c_fill,g_face,q_auto,f_auto/v1766634156/ritesh_mishra_w0kaxb.jpg"

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

const AboutDev = () => {
  return (
    <>
      {/* ✅ SEO */}
      <Helmet>
        <title>Developer | Village Event Management System</title>

        <meta
          name="description"
          content="Meet Ritesh Mishra, developer of a village event management system for Belwa, Balua, and Bhitiyahawa."
        />

        {/* Open Graph */}
        <meta property="og:title" content="Ritesh Mishra | Developer" />
        <meta property="og:description" content="MERN Developer building solutions for village communities." />
        <meta property="og:image" content={DevImage} />
        <meta property="og:type" content="profile" />
      </Helmet>

      {/* ✅ Semantic Section */}
      <motion.section
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="w-full py-20 px-6 
        bg-gradient-to-br 
        from-gray-50 via-gray-100 to-gray-200 
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
              About{" "}
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
                Developer
              </span>
            </motion.h2>

            <motion.p
              variants={item}
              className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-12"
            >
              This project is developed by <strong>Ritesh Mishra</strong>, a MERN Stack Developer
              passionate about building real-world applications.
            </motion.p>
          </header>

          {/* Article (Card) */}
          <motion.article
            variants={item}
            whileHover={{ scale: 1.04, y: -6 }}
            whileTap={{ scale: 0.97 }}
            className="relative bg-white/70 dark:bg-gray-900/80 backdrop-blur-md 
            p-8 rounded-2xl shadow-xl transition-all duration-300 overflow-hidden"
          >

            {/* Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 hover:opacity-100 transition duration-300"></div>

            <div className="relative z-10 flex flex-col items-center text-center">

              {/* Figure (Image) */}
              <figure className="h-24 w-24 rounded-full overflow-hidden mb-4 border-2 border-white dark:border-gray-700 shadow-md">
                <LazyLoadImage
                  src={DevImage}
                  alt="Ritesh Mishra Developer"
                  effect="blur"
                  className="w-full h-full object-cover"
                />
              </figure>

              {/* Name */}
              <h3 className="text-2xl font-semibold mb-2">
                Ritesh Mishra
              </h3>

              {/* Role */}
              <p className="text-blue-600 dark:text-blue-400 text-sm mb-4">
                Full Stack Developer (MERN)
              </p>

              {/* Website */}
              <a
                href="https://www.riteshmishra.online"
                target="_blank"
                rel="noopener noreferrer"
                className="mb-4 inline-block px-5 py-2 rounded-lg 
                bg-blue-600 hover:bg-blue-700 
                text-white text-sm font-medium 
                transition-all duration-300 shadow-md hover:scale-105"
              >
                Visit Website
              </a>

              {/* Description */}
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                I build practical and impactful applications. This project is designed to help villages like
                <strong> Belwa, Balua, and Bhitiyahawa </strong> manage their events digitally and stay connected.
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap justify-center gap-3 mt-2">
                {["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"].map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-sm font-medium rounded-full 
                    bg-gray-200 dark:bg-gray-800 
                    text-gray-800 dark:text-gray-200 
                    hover:bg-blue-500 hover:text-white 
                    transition-all duration-300 cursor-pointer"
                  >
                    {tech}
                  </span>
                ))}
              </div>

            </div>
          </motion.article>

        </div>
      </motion.section>
    </>
  )
}

export default AboutDev