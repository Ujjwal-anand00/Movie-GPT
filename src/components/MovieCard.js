import React, { useEffect, useState } from "react";
import { Poster_URL } from "../utils/constants";
import { API_OPTIONS } from "../utils/constants";

const MovieCard = ({ poster, id }) => {
  
  const [trailerID, setTrailerID] = useState(null);
  const [isHovered, setIsHovered] = useState(false); 
  

  const getpostervedio = async () => {
    try {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
        API_OPTIONS
      );
      const json = await data.json();

      const filterData = json.results.filter((video) => video.type === "Trailer");
      const trailer = filterData.length ? filterData[0] : null; 
      setTrailerID(trailer?.key || null); 
    } catch (error) {
      console.error("Error fetching video:", error);
    }
  };

  useEffect(() => {
    getpostervedio();
  }, [id]);
  if(!poster) return null;

  return (
    <div
      className="w-48 transform hover:scale-110 transition-transform duration-300 cursor-pointer relative"
      onMouseEnter={() => setIsHovered(true)} 
      onMouseLeave={() => setIsHovered(false)} 
    >
      
      {!isHovered || !trailerID ? (
        <img
          alt="Movie-Card"
          src={Poster_URL + poster}
          className="rounded-md shadow-lg object-cover"
        />
      ) : (
        
        <iframe
          className="absolute top-0 left-0 w-full h-full object-cover rounded-md shadow-lg"
          src={`https://www.youtube.com/embed/${trailerID}?autoplay=1&mute=1&loop=1&playlist=${trailerID}`}
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
          title="Movie Trailer"
        ></iframe>
      )}
    </div>
  );
};

export default MovieCard;







