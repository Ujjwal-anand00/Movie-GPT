
import React from "react";
import { useSelector } from "react-redux";
import Vediotitle from "./Vediotitle";
import Vediobackground from "./Vediobackground";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayngMovies);
  if (movies === null) return null;
  const mainmovie = movies[0];

  return (
    <div className="relative z-0">
    
      <Vediotitle movie={mainmovie} />
      <Vediobackground movie={mainmovie} />
    </div>
  );
};

export default MainContainer;
