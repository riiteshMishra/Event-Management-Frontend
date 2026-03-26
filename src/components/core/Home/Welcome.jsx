import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { welcome } from "../../../data/home";
import { langMap } from "../../../utils/helper";

const Welcome = () => {
  const { language } = useSelector((state) => state.language);

  // FIX: fallback add kiya (agar language undefined ho ya map fail ho jaye)
  const selectedLang = langMap[language] || "english";

  return (
    <motion.h1
      className="container font-heading dark:text-light text-dark text-4xl text-center my-10 leading-9"
      initial={{ y: 30, opacity: 0.3 }}
      whileInView={{
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.3,
          delay: 0.5,
          ease: "easeIn",
          type: "spring",
          damping: 10,
          stiffness: 200,
        },
      }}
      viewport={{ once: true }}
    >
      {welcome[selectedLang]}
    </motion.h1>
  );
};

export default Welcome;
