import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const parentVariants = {
  open: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const childVariants = {
  open: {
    opacity: 1,
    y: 0,
  },
  close: {
    opacity: 0,
    y: 30,
  },
};

const PageNotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--color-bg-light)] dark:bg-[var(--color-bg-dark)] px-4">
      
      <motion.div
        variants={parentVariants}
        initial="close"
        animate="open"
        className="text-center space-y-6"
      >
        {/* SVG Illustration */}
        <motion.div
          variants={childVariants}
          className="flex justify-center"
        >
          <svg
            width="220"
            height="220"
            viewBox="0 0 24 24"
            fill="none"
            className="text-[var(--color-primary)]"
          >
            <circle
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="2"
            />
            <path
              d="M8 10h.01M16 10h.01"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M8 16c1.5-2 6.5-2 8 0"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </motion.div>

        {/* 404 Text */}
        <motion.h1
          variants={childVariants}
          className="text-6xl font-bold font-[var(--font-heading)] text-[var(--color-primary)]"
        >
          404
        </motion.h1>

        {/* Message */}
        <motion.p
          variants={childVariants}
          className="text-lg font-[var(--font-body)] text-[var(--color-muted)]"
        >
          Oops! Page not found 😕
        </motion.p>

        {/* Button */}
        <motion.div variants={childVariants}>
          <Link
            to="/"
            className="inline-block px-6 py-3 rounded-lg bg-[var(--color-primary)] text-white font-[var(--font-ui)] hover:scale-105 transition"
          >
            Go Back Home
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default PageNotFound;