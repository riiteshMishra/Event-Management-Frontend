import React from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { grampradhanInfo } from "../../../data/home";
import { langMap } from "../../../utils/helper";

import { FaUserTie, FaPhone, FaEnvelope, FaCalendarAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdWork, MdEmojiEvents } from "react-icons/md";
import { GiTargeting } from "react-icons/gi";
import { BsClockHistory } from "react-icons/bs";
import AchievementImages from "./AchievementImages";

const containerVariant = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariant = {
  hidden: { y: 40, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const iconHover = {
  scale: 1.2,
  rotate: 5,
};

const Grampradhan = () => {
  const { language } = useSelector((state) => state.language);
  const selectedLang = langMap[language] || "english";
  const data = grampradhanInfo[selectedLang];

  return (
    <div className="bg-light dark:bg-dark/90 mt-10 pt-10 transition-colors duration-300">
      <motion.section
        className="container"
        variants={containerVariant}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        title="Gram-Pradhan-Infromation"
      >
        {/* Card */}
        <motion.div
          variants={itemVariant}
          className="flex flex-col md:flex-row items-center gap-8 
          bg-white dark:bg-gray-800 
          p-6 rounded-2xl shadow-xl 
          justify-center 
          hover:shadow-amber-300/30 
          transition-all duration-300"
        >
          {/* Image */}
          <motion.img
            src={data.photo}
            alt={data.name}
            loading="lazy"
            className="w-60 h-60 object-cover rounded-full border-4 border-amber-400"
            whileHover={{ scale: 1.05 }}
          />

          {/* Info */}
          <div className="flex flex-col items-center gap-6 text-gray-800 dark:text-gray-100">
            <motion.div
              variants={itemVariant}
              className="text-center space-y-2"
            >
              <h2 className="text-3xl font-bold flex items-center gap-2 justify-center">
                <FaUserTie className="text-amber-500" />
                {data.name}
              </h2>

              <p className="text-lg font-semibold text-gray-600 dark:text-gray-300">
                {data.role}
              </p>

              <p className="flex items-center gap-2 justify-center">
                <motion.span whileHover={iconHover} className="text-amber-500">
                  <FaCalendarAlt />
                </motion.span>
                {data.startDate} - {data.endDate}
              </p>

              <p className="flex items-center gap-2 justify-center">
                <motion.span whileHover={iconHover} className="text-amber-500">
                  <FaPhone />
                </motion.span>
                {data.number}
              </p>

              <p className="flex items-center gap-2 justify-center">
                <motion.span whileHover={iconHover} className="text-amber-500">
                  <FaEnvelope />
                </motion.span>
                {data.email}
              </p>

              <p className="italic mt-2 text-gray-700 dark:text-gray-300">
                “{data.message}”
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Box 2 */}
        <motion.div
          variants={itemVariant}
          className="mt-8 text-center space-y-3 
          bg-white/70 dark:bg-gray-800/70 
          backdrop-blur-md p-6 rounded-xl shadow-lg 
          text-gray-800 dark:text-gray-100"
        >
          <p className="flex items-center justify-center gap-2">
            <FaLocationDot className="text-amber-500" />
            {data.address}
          </p>

          <p className="flex items-center justify-center gap-2">
            <BsClockHistory className="text-amber-500" />
            {data.experience}
          </p>

          <p className="flex items-center justify-center gap-2">
            <GiTargeting className="text-amber-500" />
            {data.vision}
          </p>

          <p className="flex items-center justify-center gap-2">
            <MdWork className="text-amber-500" />
            {data.work}
          </p>
        </motion.div>

        {/* Projects */}
        <motion.div
          variants={itemVariant}
          className="mt-8 text-gray-800 dark:text-gray-100"
        >
          <h3 className="text-xl font-bold mb-3">🚧 Projects</h3>

          <ul className="list-disc ml-6 space-y-2">
            {data.projects.map((item, index) => (
              <motion.li
                key={index}
                whileHover={{ x: 5 }}
                className="hover:text-amber-500 transition"
              >
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Achievements */}
        <motion.div variants={itemVariant} className="mt-6">
          <h3 className="text-xl font-bold mb-2 flex items-center gap-2 text-gray-800 dark:text-gray-100">
            <MdEmojiEvents className="text-amber-500" />
            Achievements
          </h3>

          <p
            className="bg-amber-100 dark:bg-amber-900/30 
          text-gray-800 dark:text-gray-100 
          p-4 rounded-lg"
          >
            {data.achievements}
          </p>
          <AchievementImages data={data.achievementImages} />
        </motion.div>
      </motion.section>
    </div>
  );
};

export default Grampradhan;
