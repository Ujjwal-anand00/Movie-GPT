import { useDispatch } from "react-redux";
import { addpopularMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from '../utils/constants'




const usePopularMovies=()=>{
const dispatch=useDispatch();

  const getPopularmovies=async ()=>{
    const data=await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', API_OPTIONS);
    const json=await data.json();
    // console.log(json.results);
    dispatch(addpopularMovies(json.results));
  


  }
  useEffect(()=>{
  
    getPopularmovies();
  },[]);
}
export default usePopularMovies;