import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

const Introduction = () => {
  return (
    <>
      {/* SEO */}
      <Helmet>
        <title>Village Event Management System | Belwa Balua Bhitiyahawa</title>

        <meta
          name="description"
          content="Manage village events like weddings, festivals, and meetings easily in Belwa, Balua, and Bhitiyahawa."
        />

        <meta property="og:title" content="Village Event Management System" />
        <meta
          property="og:description"
          content="A digital solution for managing village events easily."
        />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Semantic Section */}
      <motion.section
        variants={container}
        initial="hidden"
        animate="show"
        className="w-full py-10 px-6 
        bg-gradient-to-br 
        from-white via-gray-100 to-gray-200 
        dark:from-black dark:via-gray-900 dark:to-gray-800 
        text-black dark:text-white 
        flex justify-center transition-colors duration-500"
      >
        <div className="max-w-5xl text-center">

          {/* Header */}
          <header>
            {/* Heading */}
            <motion.h1
              variants={item}
              className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
            >
              Manage Village Events <br />
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
                Easily
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={item}
              className="text-gray-700 dark:text-gray-300 text-lg md:text-xl mb-8"
            >
              This system is specially designed for villages like{" "}
              <strong>Belwa, Balua, and Bhitiyahawa</strong>.
              It helps people organize weddings, festivals, and meetings easily without confusion.
            </motion.p>
          </header>

          {/* Navigation Actions */}
          <motion.nav
            variants={item}
            className="flex flex-col md:flex-row gap-4 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 hover:bg-blue-700 
              px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg cursor-pointer"
            >
              Get Started
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="border border-gray-400 dark:border-gray-500 
              hover:border-black dark:hover:border-white cursor-pointer
              px-6 py-3 rounded-lg font-semibold transition-all duration-300"
            >
              Learn More
            </motion.button>
          </motion.nav>

          {/* Features Section */}
          <motion.div
            variants={container}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16"
          >
            {[
              {
                title: "Create Events",
                desc: "Easily create and manage local events like weddings and festivals.",
              },
              {
                title: "Manage People",
                desc: "Keep track of participants and attendees in village events.",
              },
              {
                title: "Announcements",
                desc: "Share important updates about meetings and events with everyone.",
              },
            ].map((feature, i) => (
              <motion.article
                key={i}
                variants={item}
                whileHover={{ scale: 1.05, y: -5 }}
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
              </motion.article>
            ))}
          </motion.div>

        </div>
      </motion.section>
    </>
  );
};

export default Introduction;