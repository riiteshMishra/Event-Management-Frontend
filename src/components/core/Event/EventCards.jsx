const EventCards = ({ events }) => {
  console.log("events", events);
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {events.map((event) => (
        // ✅ FIX: _id use karo, id nahi
        <div key={event._id} className="bg-gray-800 rounded-xl overflow-hidden">
          {/* ✅ FIX: thumbnail field */}
          <img
            src={event.thumbnail}
            alt={event.title}
            className="h-48 w-full object-cover"
          />

          <div className="p-4">
            <h2 className="text-xl font-semibold">{event.title}</h2>
            {/* ✅ FIX: startDate field */}
            <p className="text-sm text-gray-400 mt-1">
              📅 {new Date(event.startDate).toLocaleDateString("hi-IN")}
            </p>
            {/* ✅ FIX: village + district */}
            <p className="text-sm text-gray-400">
              📍 {event.village}, {event.district}
            </p>

            <p className="text-sm mt-2 text-gray-300 line-clamp-2">
              {event.description}
            </p>

            <button className="mt-4 w-full bg-yellow-400 text-black py-2 rounded-lg">
              View Details
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EventCards;