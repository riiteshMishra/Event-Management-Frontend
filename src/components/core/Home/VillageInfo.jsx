import React, { useRef, useMemo } from "react";
import { motion, useInView } from "framer-motion";
import { villageInfo } from "../../../data/home";
import useCounter from "../../../hooks/useCounter";

const containerVariant = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariant = {
  hidden: { y: 30, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.35,
      ease: "easeOut",
    },
  },
};

const VillageInfo = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // 🔥 counters
  const population = useCounter({
    end: isInView ? villageInfo.population : 0,
    duration: 2000,
  });

  const households = useCounter({
    end: isInView ? villageInfo.households : 0,
    duration: 2000,
  });

  // 🔥 data array (clean + reusable)
  const stats = useMemo(() => [
    {
      label: "Population",
      value: `${population.toLocaleString()}+`,
    },
    {
      label: "Households",
      value: `${households.toLocaleString()}+`,
    },
    {
      label: "District",
      value: villageInfo.district,
    },
    {
      label: "State",
      value: villageInfo.state,
    },
  ], [population, households]);

  return (
    <section
      ref={ref}
      className="py-6 overflow-hidden"
    >
      <div className="container">
        <motion.div
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          variants={containerVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {stats.map((item, i) => (
            <motion.div
              key={i}
              variants={itemVariant}
              whileHover={{ scale: 1.05, y: -3 }}
              className="flex flex-col gap-1 p-5 bg-mist-500 rounded-xl shadow-md cursor-pointer"
            >
              {/* Label */}
              <p className="font-semibold text-dark dark:text-light">
                {item.label}
              </p>

              {/* Value */}
              <span className="text-amber-300 font-sans text-2xl">
                {item.value}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default VillageInfo;