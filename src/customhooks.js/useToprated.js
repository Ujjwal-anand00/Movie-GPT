import { useDispatch } from "react-redux";
import { addtopratedMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from '../utils/constants'




const useToprated=()=>{
const dispatch=useDispatch();

  const getToprated=async ()=>{
    const data=await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', API_OPTIONS);
    const json=await data.json();
    // console.log(json.results);
    dispatch(addtopratedMovies(json.results));
  


  }
  useEffect(()=>{
  
    getToprated();
  },[]);
}
export default useToprated;