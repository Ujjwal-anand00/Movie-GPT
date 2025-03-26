import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from "./movieSlice";
import gptReducer from "./gptSlice";
import configReducer from "./configSlice"
// So, you're essentially importing the userSlice.reducer from the userSlice.js file, 
// but you’re giving it an alias of userReducer when you import it.
//  The userReducer name is just an alias you use in your store. 
// It's common practice to name the imported reducer something like userReducer,
//  but there doesn't have to be a file specifically named userReducer.js.
//  The reducer is coming from the userSlice.js file where createSlice created the reducer

// Why It Works: Since your userSlice.js exports the correct userSlice.reducer and you import it as userReducer
// , everything works as expected. Redux Toolkit expects a reducer function, which is what userSlice.reducer
//  is, regardless of the name you're using for the import.

const appStore=configureStore(
    {
        
        reducer:{
            user:userReducer,
            movies:movieReducer,
            gpt:gptReducer,
            config:configReducer,

        }
    }
)
export default appStore;