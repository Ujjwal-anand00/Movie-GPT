import { useDispatch } from "react-redux";
import { addNowplayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from '../utils/constants'




const useNowplayingMovies=()=>{
const dispatch=useDispatch();

  const getnowplayingmovies=async ()=>{
    const data=await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);
    const json=await data.json();
    // console.log(json.results);
    dispatch(addNowplayingMovies(json.results));
  


  }
  useEffect(()=>{
  
    getnowplayingmovies();
  },[]);
}
export default useNowplayingMovies;