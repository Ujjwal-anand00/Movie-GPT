
import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  // Check if movies is defined and has at least one movie
  if (!movies || movies.length === 0) {
    return (
      <div className="text-gray-400 text-center mt-4 text-lg">
        No movies available.
      </div>
    );
  }

  return (
    <div className=" bg-black">
      
      <h1 className="text-white text-2xl font-bold  py-3 px-10">{title}</h1>


      <div className="flex overflow-x-scroll scrollbar-hide px-10 space-x-4 py-4">
        <div className="flex space-x-4">
          {movies.map((movies) => (
            <MovieCard key={movies.id} poster={movies.poster_path} id={movies?.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;

