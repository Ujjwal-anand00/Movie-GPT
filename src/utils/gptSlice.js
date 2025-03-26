import { createSlice } from "@reduxjs/toolkit";

const gptSlice=createSlice({
    name:'gpt',
    initialState:{
        showGptSearch:false,
        addGptMovieResult:null,
        showgptresult:null,
    },
    reducers:{
        toggleGptSearchView:(state,action)=>{
            state.showGptSearch=!state.showGptSearch;

        },
        addGptMovieResult:(state,action)=>{
            state.addGptMovieResult=action.payload;
        },
        showgptresult:(state,action)=>{
            state.showgptresult=action.payload;
        }

    }

});
export const {toggleGptSearchView,addGptMovieResult,showgptresult}=gptSlice.actions;
export default gptSlice.reducer;