
import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import language from "../utils/languageconstant";

const SecondaryContainer = () => {
  const movies = useSelector(store => store?.movies?.nowPlayngMovies);
  const popularMovies = useSelector(store => store?.movies?.nowPopularMovies);
  const toprated=useSelector(store=> store?.movies?.nowTopratedMovies);
  const upcoming=useSelector(store=> store?.movies?.nowUpcomingMovies);
  const key = useSelector((store) => store.config.lang);

  // console.log(movies);

  return (
    <div className="relative z-10 mt-[-30px] bg-transparent">
      {/* The transparent background ensures the secondary container won't block the video */}
      <MovieList title={language[key].NowPlaying} movies={movies} />
      <MovieList title={language[key].Popular} movies={popularMovies} />
      <MovieList title={language[key].TopRated} movies={toprated} />
      <MovieList title={language[key].Upcoming} movies={upcoming} />
    </div>
  );
};

export default SecondaryContainer;



