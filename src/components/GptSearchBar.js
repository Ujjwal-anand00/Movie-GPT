import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import language from "../utils/languageconstant";
// import client from "../utils/openAi";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { API_OPTIONS, OPENAI_GPTKEY } from "../utils/constants";
import { addGptMovieResult, showgptresult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const Langkey = useSelector((store) => store.config.lang);
  const searchtext = useRef(null);
  const dispatch = useDispatch();
  // movie split and will fetch things from tmdb data base API
  const fetchMovie = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handleGptsearchclick = async () => {
    console.log(searchtext.current.value);
    const gptQuery =
      "Act as a movie reccomedation system and give me a movie recommendation based on the following query : " +
      searchtext.current.value +
      ".only give me names of 10 movies.comma seprated like the example result given ahead .Example Result:Bodyguard,Don,Bajrangi Bhaijaan";

    const genAI = new GoogleGenerativeAI(OPENAI_GPTKEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = gptQuery;

    const result = await model.generateContent(prompt);
    // console.log(result.response.text());
    const movieList =
      result.response.candidates[0].content.parts[0].text.split(",");
      dispatch(showgptresult(movieList));
    // console.log(movieList);
    // for each movie i will search the result in tmdb api and get the poster url and display it in the result
    const PromiseArray = movieList.map((movie) => fetchMovie(movie));
    // the result we will get from the call will be chain or array of promises
    const TMDBResult = await Promise.all(PromiseArray);
    // tmdb promises will be resolved here
    // now my program will wait for promise.all to finish it up .. promise.all is a function which help promise to resolve and until that program will wait
    // the function will return promise and the data will be like promise array so converting or resolving the promise
    // console.log(TMDBResult);
    dispatch(addGptMovieResult(TMDBResult));
  };
  const handleSearch = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex justify-center items-center h-[80vh] bg-gradient-to-b from-black via-gray-900 to-black">
      <form className="w-full max-w-lg flex space-x-3" onSubmit={handleSearch}>
        <input
          type="text"
          ref={searchtext}
          placeholder={language[Langkey].gptSearchPlaceholder}
          className="flex-grow p-4 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 text-lg"
        />
        <button
          type="submit"
          className="px-8 py-4 bg-gradient-to-r from-red-600 to-red-500 text-white font-bold rounded-md shadow-lg hover:shadow-xl hover:scale-105 transition duration-300 focus:outline-none focus:ring-4 focus:ring-red-300"
          onClick={handleGptsearchclick}
        >
          {language[Langkey].search}
        </button>
      </form>
    </div>
  );
  
};

export default GptSearchBar;
