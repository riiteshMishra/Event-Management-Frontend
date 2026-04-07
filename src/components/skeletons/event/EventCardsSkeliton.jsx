
const EventCardsSkeleton = () => {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 container">
      {[...Array(3)].map((_, index) => (
        <div
          key={index}
          className="bg-gray-800 rounded-xl overflow-hidden animate-pulse"
        >
          {/* Image skeleton */}
          <div className="h-48 w-full bg-gray-700"></div>

          {/* Content */}
          <div className="p-4 space-y-3">
            {/* Title */}
            <div className="h-5 w-3/4 bg-gray-700 rounded"></div>

            {/* Date */}
            <div className="h-4 w-1/2 bg-gray-700 rounded"></div>

            {/* Location */}
            <div className="h-4 w-1/3 bg-gray-700 rounded"></div>

            {/* Description */}
            <div className="h-4 w-full bg-gray-700 rounded"></div>
            <div className="h-4 w-5/6 bg-gray-700 rounded"></div>

            {/* Button */}
            <div className="h-10 w-full bg-gray-700 rounded-lg mt-4"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EventCardsSkeleton;
