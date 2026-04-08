import React from "react";
import { motion } from "framer-motion";

const EventGuidlines = () => {
  const data = [
    "All events include date, time and location details",
    "Participation rules vary depending on the event type",
    "Events can be free or paid",
    "Winners receive rewards and recognition",

    "Election events include voting and public discussions",
    "Party events include music and celebration",
    "Meetings focus on planning and decision making",
    "Functions include social and cultural programs",
    "Festivals include traditional celebrations",
    "Health care events provide medical services and checkups",
  ];

  return (
    <section className="grid gap-4 sm:grid-cols-2 mt-6">
      {data.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 30,scale:.7 }}
          whileInView={{ opacity: 1, y: 0 ,scale:.8}}
          transition={{ delay: i * 0.08 }}
          whileHover={{
            scale: .8,
            y: -5,
          }}
          viewport={{once:true}}
          className="bg-light dark:bg-accent/50 p-4 rounded-xl text-sm text-gray-700 dark:text-gray-300 shadow-sm hover:shadow-lg cursor-pointer"
        >
          <div className="flex items-start gap-2">
            <span className="text-yellow-500">✔️</span>
            <p className="text-xl">{item}</p>
          </div>
        </motion.div>
      ))}
    </section>
  );
};

export default EventGuidlines;