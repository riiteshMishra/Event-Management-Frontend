import { motion } from "framer-motion";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import NoEvents from "./NoEvents";

const EventCards = ({ events }) => {

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {events.map((event) => (
        <motion.div
          key={event._id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-gray-800 rounded-xl overflow-hidden"
        >
          <img
            src={event.thumbnail}
            alt={event.title}
            className="h-48 w-full object-cover"
          />

          <div className="p-4">
            <h2 className="text-xl font-semibold">{event.title}</h2>

            <p className="text-sm text-gray-400 mt-1">
              {new Date(event.startDate).toLocaleDateString("hi-IN")}
            </p>

            <p className="text-sm text-gray-400">
              📍 {event.village}, {event.district}
            </p>

            <p className="text-sm mt-2 text-gray-300 line-clamp-2">
              {event.description}
            </p>

            <button className="mt-4 w-full bg-yellow-400 text-black py-2 rounded-lg hover:bg-yellow-300 transition">
              View Details
            </button>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default EventCards;
