import { animate, useMotionValue, motion } from "framer-motion";
import { useEffect, useState } from "react";

const Counter = ({ start = 0, end = 100, clases }) => {
  const count = useMotionValue(start);
  const [display, setDisplay] = useState(start);

  useEffect(() => {
    const controls = animate(count, end, {
      duration: 5,
      onUpdate: (latest) => {
        setDisplay(latest.toFixed(0));
      },
    });

    return () => controls.stop();
  }, [end, count]);

  return <motion.pre className={`${clases}`}>{display}</motion.pre>;
};

export default Counter;
