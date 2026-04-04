import { useEffect, useState } from "react";

const useCounter = ({ end, start = 0, duration = 2000, delay = 1 }) => {
  const [count, setCount] = useState(start);

  useEffect(() => {
    let startTime;
    let animationFrame;

    const startCounter = () => {
      const step = (timestamp) => {
        if (!startTime) startTime = timestamp;

        const progress = timestamp - startTime;
        const progressPercent = Math.min(progress / duration, 1);

        const currentValue =
          start + (end - start) * progressPercent;

        setCount(Math.floor(currentValue));

        if (progress < duration) {
          animationFrame = requestAnimationFrame(step);
        } else {
          setCount(end); // ensure exact value
        }
      };

      animationFrame = requestAnimationFrame(step);
    };

    const timer = setTimeout(startCounter, delay);

    return () => {
      clearTimeout(timer);
      cancelAnimationFrame(animationFrame);
    };
  }, [start, end, duration, delay]);

  return count;
};

export default useCounter;