import React from 'react';
import { useSelector } from "react-redux";
import ShimmerEffect from './Shimmer';
import MovieList from './MovieList';

const GptMovieSuggestion = () => {
  const moviename = useSelector(store => store.gpt.showgptresult);
  const movieresult = useSelector(store => store.gpt.addGptMovieResult); 

  // Check for valid data
  if (!moviename || !Array.isArray(moviename) || moviename.length === 0) {
    return <ShimmerEffect />;
  }

  return (
    <div>
      {moviename.map((name, index) => {
        const movies = Array.isArray(movieresult) && movieresult[index] ? movieresult[index] : [];
        return (
          <MovieList key={name} title={name} movies={movies} />
        );
      })}
    </div>
  );
};

export default GptMovieSuggestion;
