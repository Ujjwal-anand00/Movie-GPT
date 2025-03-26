import React from "react";

const ShimmerEffect = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
      {Array(6) // Number of shimmer cards
        .fill("")
        .map((_, index) => (
          <div
            key={index}
            className="bg-gray-300 rounded-lg shadow-md animate-pulse overflow-hidden"
          >
            <div className="h-72 bg-gray-400"></div>
            <div className="p-4">
              <div className="h-5 bg-gray-400 rounded mb-3"></div>
              <div className="h-4 bg-gray-400 rounded mb-2"></div>
              <div className="h-4 bg-gray-400 rounded w-3/4"></div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ShimmerEffect;
