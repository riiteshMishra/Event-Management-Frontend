import { motion } from "framer-motion";
import { FaLocationArrow } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const EventCards = ({ events }) => {

  const navigate = useNavigate()

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
    >
      {events?.map((event) => (
        <Link key={event._id} to={`/events/${event?.slug}`}>
          <motion.div
            variants={cardVariants}
            transition={{ duration: 0.5, ease: "easeOut" }}
            whileHover={{ scale: 1, rotateX: 3, rotateY: -3 }}
            className="group bg-white dark:bg-mist-700 text-gray-900 dark:text-gray-100 border border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300"
          >
            {/* Image */}
            <div className="relative p-2 overflow-hidden">
              <span className="text-right font-semibold capitalize pl-2">
                status: <span className={`${event.status === "completed" ? "text-green-500"
                  : event.status === "upcoming" ? "text-yellow-400"
                    : "text-blue-400"


                  }`}>{event.status}
                </span>
              </span>

              <motion.img
                src={event.thumbnail}
                alt={event.title}
                loading="lazy"
                className="h-48 w-full object-cover rounded-xl"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.4 }}
              />

              {/* subtle overlay glow */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition duration-300 rounded-xl" />
            </div>

            {/* Divider */}
            <div className="h-2 w-20 bg-accent dark:bg-light mx-auto rounded-xl group-hover:w-28 transition-all duration-300" />

            {/* Content */}
            <div className="p-2">
              <div className="p-3 rounded-2xl bg-light dark:bg-accent backdrop-blur-sm transition-all duration-300 group-hover:bg-light/80 dark:group-hover:bg-accent/80">

                <h2 className="text-lg font-semibold line-clamp-1 group-hover:text-yellow-400 transition">
                  {event.title}
                </h2>

                <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                  {new Date(event.startDate).toLocaleDateString("hi-IN")}
                </p>

                <p className="text-xs text-gray-600 dark:text-gray-400 flex items-center gap-1 mt-1">
                  <FaLocationArrow className="text-xs" />
                  <span className="truncate">
                    {event.village}, {event.district}
                  </span>
                </p>

                <p className="text-sm mt-3 text-gray-700 dark:text-gray-300 line-clamp-2 leading-relaxed">
                  {event.description}
                </p>

                {/* Button */}
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  whileHover={{ scale: 1.05 }}
                  className="relative mt-4 w-full bg-yellow-400 text-black py-2 rounded-lg font-medium overflow-hidden cursor-pointer"
                  onClick={() => navigate(`/evnet/${event?._id}`)}
                >
                  {/* Shine effect */}
                  <span className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition duration-700" />

                  <span className="relative z-10">
                    View Details
                  </span>
                </motion.button>

              </div>
            </div>
          </motion.div>
        </Link>
      ))}
    </motion.div>
  );
};

export default EventCards;