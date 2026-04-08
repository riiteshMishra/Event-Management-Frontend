import { motion } from "framer-motion";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const EventCards = ({ events }) => {
  //  Empty UI
  if (!events || events.length < 1) {
    return (
      <div className="flex items-center justify-center ">

        <motion.div
          initial={{ y: 40, opacity: 0, scale: 0.8 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 120, damping: 12 }}
          className="text-center space-y-4"
        >

          {/*  Icon */}
          <DotLottieReact
            src="https://lottie.host/761a0c99-08f5-435e-9f73-048a30784a60/VVyFMhukul.lottie"
            loop
            autoplay
            className="min-h-28"
          />

          {/*  Heading */}
          <p className="text-2xl font-semibold text-gray-300">
            No Events Found
          </p>

          {/*  Description */}
          <p className="text-sm text-gray-500 max-w-xs mx-auto">
            Looks like there are no events available right now. Please check
            back later.
          </p>

          {/*  Action Button */}
          <button
            onClick={() => window.location.reload()}
            className="mt-2 px-4 py-2 bg-yellow-400 text-black rounded-lg hover:bg-yellow-300 transition"
          >
            Refresh
          </button>
        </motion.div>
      </div>
    );
  }


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
