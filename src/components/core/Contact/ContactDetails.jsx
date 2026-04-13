import React from 'react'
import { motion } from "framer-motion"

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

const ContactDetails = () => {
  return (
    <motion.section
  variants={container}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true }}
  className="w-full py-20 px-6 
  bg-[radial-gradient(circle_at_top,_#f8fafc,_#e2e8f0,_#cbd5f5)] 
  dark:bg-[radial-gradient(circle_at_top,_#020617,_#020617,_#0f172a)] 
  text-gray-900 dark:text-gray-100"
>
      <div className="max-w-5xl mx-auto text-center">

        {/* Heading */}
        <motion.h2
          variants={item}
          className="text-3xl md:text-5xl font-bold mb-6"
        >
          Contact{" "}
          <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
            Details
          </span>
        </motion.h2>

        {/* Description */}
        <motion.p
          variants={item}
          className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-12"
        >
          You can reach out to us through the following details. We are always ready to help you.
        </motion.p>

        {/* Cards */}
        <motion.div
          variants={container}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >

          {/* Email */}
          <motion.article
            variants={item}
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-white/70 dark:bg-gray-900/80 backdrop-blur-md 
            p-6 rounded-xl shadow-lg transition-all duration-300"
          >
            <h3 className="text-xl font-semibold mb-2">Email</h3>
            <p className="text-gray-700 dark:text-gray-300">
              riteshmishra9565@gmail.com
            </p>
          </motion.article>

          {/* Website */}
          <motion.article
            variants={item}
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-white/70 dark:bg-gray-900/80 backdrop-blur-md 
            p-6 rounded-xl shadow-lg transition-all duration-300"
          >
            <h3 className="text-xl font-semibold mb-2">Website</h3>
            <a
              href="https://www.riteshmishra.online"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              www.riteshmishra.online
            </a>
          </motion.article>

          {/* Location */}
          <motion.article
            variants={item}
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-white/70 dark:bg-gray-900/80 backdrop-blur-md 
            p-6 rounded-xl shadow-lg transition-all duration-300"
          >
            <h3 className="text-xl font-semibold mb-2">Location</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Belwa Balua Gram Panchayat Bhawan
            </p>
          </motion.article>

        </motion.div>

      </div>
    </motion.section>
  )
}

export default ContactDetails