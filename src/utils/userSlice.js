import { createSlice } from "@reduxjs/toolkit";

const userSlice=createSlice(
    {
        name:'user',
        initialState:null,
        reducers:{
            addUser:(state,action)=>{
                return  action.payload;
                // isse direct initial state iss data se replace ho jayega 



            },
            removeUser :(state,action)=>{
                return null;


            },
        }
    }

);
export const {addUser,removeUser}=userSlice.actions;
export default userSlice.reducer;
