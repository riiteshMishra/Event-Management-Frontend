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

const HeroSection = () => {
    return (
        <motion.section
            variants={container}
            initial="hidden"
            animate="show"
            className="w-full py-20 px-6 
  bg-[radial-gradient(circle_at_top,_#f8fafc,_#e2e8f0,_#cbd5f5)] 
  dark:bg-[radial-gradient(circle_at_top,_#020617,_#020617,_#0f172a)] 
  text-gray-900 dark:text-gray-100 mx-auto"
        >

            <div className="max-w-5xl mx-auto text-center flex flex-col items-center">
                {/* Heading */}
                <motion.h1
                    variants={item}
                    className="text-4xl md:text-6xl font-bold mb-6"
                >
                    Contact{" "}
                    <span className="bg-linear-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
                        Us
                    </span>
                </motion.h1>

                {/* Description */}
                <motion.p
                    variants={item}
                    className="max-w-2xl text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8"
                >
                    Have questions or need help managing events in villages like{" "}
                    <strong>Belwa, Balua, and Bhitiyahawa</strong>?
                    We are here to support you. Feel free to reach out anytime.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    variants={item}
                    className="flex flex-col md:flex-row gap-4"
                >
                    <motion.a
                        whileHover={{ scale: 1.08 }}
                        whileTap={{ scale: 0.95 }}
                        href="mailto:riteshmishra9565@gmail.com"
                        className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-lg transition-all duration-300"
                    >
                        Email Us
                    </motion.a>

                    <motion.a
                        whileHover={{ scale: 1.08 }}
                        whileTap={{ scale: 0.95 }}
                        href="https://www.riteshmishra.online"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 rounded-lg border border-gray-400 dark:border-gray-600 hover:border-black dark:hover:border-white font-semibold transition-all duration-300"
                    >
                        Visit Website
                    </motion.a>
                </motion.div>

            </div>

        </motion.section>
    )
}

export default HeroSection