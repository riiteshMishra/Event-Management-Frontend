
const EventCardsSkeleton = () => {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 container py-4">
      {[...Array(3)].map((_, index) => (
        <div
          key={index}
          className="bg-white/10 dark:bg-dark rounded-xl overflow-hidden animate-pulse shadow-xl "
        >
          {/* Image skeleton */}
          <div className="h-48 w-full bg-[#c6d3d6] dark:bg-black/80"></div>

          {/* Content */}
          <div className="p-4 space-y-3">
            {/* Title */}
            <div className="h-5 w-3/4 bg-[#c6d3d6] dark:bg-black/60 rounded"></div>

            {/* Date */}
            <div className="h-4 w-1/2 bg-[#c6d3d6] dark:bg-black/60 rounded"></div>

            {/* Location */}
            <div className="h-4 w-1/3 bg-[#c6d3d6] dark:bg-black/60 rounded"></div>

            {/* Description */}
            <div className="h-4 w-full bg-[#c6d3d6] dark:bg-black/60 rounded"></div>
            <div className="h-4 w-5/6 bg-[#c6d3d6] dark:bg-black/60 rounded"></div>

            {/* Button */}
            <div className="h-10 w-full bg-[#c6d3d6] dark:bg-black/60 rounded-lg mt-4"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EventCardsSkeleton;
