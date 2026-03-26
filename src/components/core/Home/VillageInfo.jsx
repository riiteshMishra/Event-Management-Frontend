import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { villageInfo } from "../../../data/home";
import useCounter from "../../../hooks/useCounter";

const containerVariant = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariant = {
  hidden: { y: 30, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

const VillageInfo = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const Population = useCounter({
    end: isInView ? villageInfo.population : 0,
    duration: 2000,
  });

  const Households = useCounter({
    end: isInView ? villageInfo.households : 0,
    duration: 2000,
  });

  return (
    <div ref={ref} className="dark:bg-teal-900 bg-dark/10 py-5 overflow-hidden">
      <div className="container">
        <motion.div
          className="flex justify-between gap-x-10 gap-y-5 flex-wrap flex-col sm:flex-row"
          variants={containerVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.p
            variants={itemVariant}
            className="flex items-center gap-2 py-5 px-5 bg-mist-500 rounded-xl shadow-md hover:scale-105 transition font-bold text-dark dark:text-light"
          >
            Population:
            <span className="text-amber-300 font-sans text-2xl">
              {Population.toLocaleString()}+
            </span>
          </motion.p>

          <motion.p
            variants={itemVariant}
            className="py-5 px-5 bg-mist-500 rounded-xl shadow-md hover:scale-105 transition font-bold text-dark dark:text-light"
          >
            Households:
            <span className="text-amber-300 font-sans text-2xl ml-2">
              {Households.toLocaleString()}+
            </span>
          </motion.p>

          <motion.p
            variants={itemVariant}
            className="py-5 px-5 bg-mist-500 rounded-xl shadow-md hover:scale-105 transition font-bold text-dark dark:text-light"
          >
            District:
            <span className="text-amber-300 font-sans text-2xl ml-2">
              {villageInfo.district}
            </span>
          </motion.p>

          <motion.p
            variants={itemVariant}
            className="py-5 px-5 bg-mist-500 rounded-xl shadow-md hover:scale-105 transition font-bold text-dark dark:text-light"
          >
            State:
            <span className="text-amber-300 font-sans text-2xl ml-2">
              {villageInfo.state}
            </span>
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default VillageInfo;
