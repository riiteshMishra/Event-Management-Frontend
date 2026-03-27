import React from "react";
import { langMap } from "../../../utils/helper";
import { useSelector } from "react-redux";
import { announcements } from "../../../data/home";
import { motion } from "framer-motion";

import { MdCampaign } from "react-icons/md";

const heading = {
  hindi: "घोषणाएं",
  english: "Announcements",
};

const containerVariant = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariant = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const Announcement = () => {
  const { language } = useSelector((state) => state.language);
  const selectedLang = langMap[language] || "english";

  return (
    <div className="bg-gray-50 dark:bg-dark text-gray-800 dark:text-gray-100 py-10 transition">
      <div className="container">
        {/* Heading */}
        <motion.h2
          className="text-2xl font-bold mb-6 flex items-center gap-2"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <MdCampaign className="text-amber-500 text-3xl" />
          {heading[selectedLang]}
        </motion.h2>

        {/* Announcements */}
        <motion.div
          variants={containerVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col gap-4"
        >
          {announcements.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariant}
              className="flex items-center gap-4 
              bg-white dark:bg-gray-800 
              p-4 rounded-xl shadow-md 
              hover:shadow-amber-400/20 
              transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              title="announcement"
            >
              {/* Icon */}
              <motion.div
                whileHover={{ scale: 1.2, rotate: 10 }}
                className="text-amber-500 text-2xl"
              >
                <MdCampaign />
              </motion.div>

              {/* Text */}
              <p className="font-medium">{item[selectedLang]}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Announcement;
