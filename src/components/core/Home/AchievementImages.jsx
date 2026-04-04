import React from "react";
import { motion } from "framer-motion";

const AchievementImages = ({ data }) => {
  return (
    <div className=" py-10">
      <section className="flex flex-wrap gap-10 items-center sm:justify-start justify-center">
        {data.map((item, index) => (
          <motion.figure
            key={index}
            className="group relative h-70 w-90 overflow-hidden rounded-xl shadow-lg cursor-pointer"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            {/* Image */}
            <motion.img
              src={item.image}
              loading="lazy"
              alt={item.title}
              className="w-full h-full object-cover object-center transition duration-300 group-hover:scale-110"
              title={item.title }
            />

            {/* Overlay Caption */}
            <figcaption
              className="absolute bottom-0 left-0 w-full 
              bg-black/60 text-white text-center py-2 
              opacity-0 group-hover:opacity-100 
              transition duration-300"
            >
              {item.title}
            </figcaption>
          </motion.figure>
        ))}
      </section>
    </div>
  );
};

export default AchievementImages;
