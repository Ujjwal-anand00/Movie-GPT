import React from 'react'
import Header from './Header'
import useNowplayingMovies from '../customhooks.js/useNowplayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../customhooks.js/usePopularMovies';
import useToprated from '../customhooks.js/useToprated';
import useUpcoming from '../customhooks.js/useUpcomig';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';



const Browse = () => {
  const gptview=useSelector(store=>store.gpt.showGptSearch)
  useNowplayingMovies();
  usePopularMovies();
  useToprated();
  useUpcoming();

  
  return (
    <div>
      <Header/>
      {gptview?(<GptSearch/>):(
        <>
        <MainContainer/>
        {/* if gpt view is true the browse gptsearch otheriwse browse these two containeer  */}
        <SecondaryContainer/>
        </>
      )}
      
      
      
      
    </div>
  )
}

export default Browse;