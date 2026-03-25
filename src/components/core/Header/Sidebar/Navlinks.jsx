import { AnimatePresence, motion } from "framer-motion";
import { navlinks } from "../../../../data/navbar";
import { NavLink } from "react-router-dom";
import { FaArrowTrendUp } from "react-icons/fa6";
import { useEffect } from "react";

const parentVariants = {
  open: {
    opacity: 1,
    x: 0,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
  close: {
    opacity: 0,
    x: 100,
  },
};

const childVariants = {
  close: { opacity: 0, x: 20 },
  open: { opacity: 1, x: 0 },
};

const Navlinks = ({ active, setActive }) => {
  useEffect(() => {
    if (active) {
      const body = document.getElementsByTagName("body");
      body.style = "overFlow:hidden";
    }
  }, [active]);
  return (
    <AnimatePresence>
      {active && (
        <>
          {/* Backdrop */}
          <motion.div
            onClick={() => setActive((prev) => !prev)}
            className="fixed top-14 left-0 right-0 bottom-0 bg-black/30 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Menu */}
          <motion.div
            onClick={() => setActive((prev) => !prev)}
            className="fixed top-14 left-0 right-0 bottom-0 bg-light dark:bg-dark z-50"
            variants={parentVariants}
            initial="close"
            animate="open"
            exit="close"
          >
            {navlinks.map((link) => (
              <motion.div
                key={link.name}
                variants={childVariants}
                onClick={() => setActive((prev) => !prev)}
              >
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    ` cursor-pointer p-3 font-semibold flex items-center rounded-br-lg rounded-bl-lg ${
                      isActive
                        ? "text-[#ff0000] font-bold"
                        : "text-black dark:text-light"
                    }`
                  }
                >
                  <span className="flex items-center gap-x-10">
                    {link.name} <FaArrowTrendUp />
                  </span>{" "}
                </NavLink>
              </motion.div>
            ))}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Navlinks;
