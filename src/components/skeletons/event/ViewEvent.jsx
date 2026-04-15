import React from "react";

const EventSkeleton = () => {
    return (
        <div className="p-6 animate-pulse">

            {/* Title */}
            <div className="h-8 w-1/2 bg-gray-300 rounded mb-4"></div>

            {/* Image */}
            <div className="w-full h-[300px] bg-gray-300 rounded-lg mb-4"></div>

            {/* Description */}
            <div className="space-y-2 mb-4">
                <div className="h-4 bg-gray-300 rounded w-full"></div>
                <div className="h-4 bg-gray-300 rounded w-5/6"></div>
            </div>

            {/* Details */}
            <div className="space-y-2 mb-6">
                <div className="h-4 bg-gray-300 rounded w-1/3"></div>
                <div className="h-4 bg-gray-300 rounded w-1/4"></div>
                <div className="h-4 bg-gray-300 rounded w-1/5"></div>
            </div>

            {/* Candidates */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[1, 2, 3].map((_, i) => (
                    <div key={i} className="border p-4 rounded-lg">
                        <div className="w-full h-[150px] bg-gray-300 rounded mb-2"></div>
                        <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
                        <div className="h-3 bg-gray-300 rounded w-1/2 mb-2"></div>
                        <div className="h-8 bg-gray-300 rounded w-full mt-3"></div>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default EventSkeleton;