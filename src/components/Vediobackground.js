
import React, { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constants";

const Vediobackground = ({ movie }) => {
  const [trailerID, setTrailerID] = useState(null);
  const { id } = movie;

  const getMoviesVedios = async () => {
    try {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
        API_OPTIONS
      );
      const json = await data.json();
      
      const filterData = json.results.filter((video) => video.type === "Trailer");
      const trailer = filterData.length ? filterData[0] : json.results[0];
      setTrailerID(trailer?.key);
    } catch (error) {
      console.error("Error fetching video:", error);
    }
  };

  useEffect(() => {
    getMoviesVedios();
  }, [id]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Fullscreen Video Background */}
      {trailerID && (
        <iframe
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={`https://www.youtube.com/embed/${trailerID}?autoplay=1&mute=1&loop=1&playlist=${trailerID}`}
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
          title="Movie Trailer"
        ></iframe>
      )}

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-80 z-10"></div>
    </div>
  );
};

export default Vediobackground;





