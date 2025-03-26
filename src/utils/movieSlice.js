import { createSlice } from "@reduxjs/toolkit";




const movieSlice=createSlice({
    name:'movies',
    initialState:{

        nowPlayngMovies:null,
        nowPopularMovies:null,
        nowTopratedMovies:null,
        nowUpcomingMovies:null,

    },
    reducers:{
        addNowplayingMovies:(state,action)=>{
            state.nowPlayngMovies=action.payload;

        },
        addpopularMovies:(state,action)=>{
            state.nowPopularMovies=action.payload;
        },
        addtopratedMovies:(state,action)=>{
            state.nowTopratedMovies=action.payload;
        },
        addupcomingMovies:(state,action)=>{
            state.nowUpcomingMovies=action.payload;
        }

    }

});
export const {addNowplayingMovies,addpopularMovies,addtopratedMovies,addupcomingMovies}=movieSlice.actions
export default movieSlice.reducer;
