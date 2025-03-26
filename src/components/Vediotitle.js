import React from "react";

const Vediotitle = ({ movie }) => {
  const { original_title, overview } = movie;

  return (
    <div className="absolute top-1/2 left-12 text-white space-y-4 z-10 max-w-lg">
      
      <h1 className="text-5xl font-bold text-white">{original_title}</h1>

      
      <p className="text-lg text-gray-300">{overview}</p>

      {/* Buttons */}
      <div className="flex space-x-4 mt-4">
        <button className="bg-white text-black px-6 py-2 rounded-md font-semibold shadow-md hover:bg-gray-300 transition">
          ▶ Play
        </button>
        <button className="bg-gray-700 bg-opacity-70 text-white px-6 py-2 rounded-md font-semibold shadow-md hover:bg-gray-600 transition">
          ℹ More Info
        </button>
      </div>
    </div>
  );
};

export default Vediotitle;
