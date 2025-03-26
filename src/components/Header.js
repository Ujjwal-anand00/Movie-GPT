import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";

import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import { auth } from "../utils/firebase";
import { toggleGptSearchView } from "../utils/gptSlice";
import { SUPPORTED_LANGUAGE } from "../utils/constants";
import { changeLang } from "../utils/configSlice";
import language from "../utils/languageconstant";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const Langkeys = useSelector((store) => store.config.lang);


  const user = useSelector((store) => store.user);
  



  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        // An error happened.
      });
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // if my user is present means sign in case (either signin /or signout case )

        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
        // whenever user signin or signup this part will be executed and and whenever signout else part will be executed
        // when the user signin /signup let us redirect user to browser page for the convinenve
        // for this we will use a hook that is called use navigate  from react router dom
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
  }, []);
  const handlegptclick = () => {
    // toogle gpt search
    dispatch(toggleGptSearchView());
  };
  const handleLanguageChange = (e) => {
    dispatch(changeLang(e.target.value));


  };
  return (
    <div className="absolute flex w-full px-8 py-2 bg-gradient-to-b from-black z-30 justify-between items-center">
      <img
        className="w-44"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="Netflix Logo"
        
      />
      <div className="flex items-center ml-auto">
        <select
          onChange={handleLanguageChange}
          className="bg-transparent text-gray-300 py-2 px-4 border border-gray-600 rounded-md outline-none cursor-pointer hover:scale-105 transition ease-in-out duration-300 focus:border-blue-400 focus:ring-2 focus:ring-blue-400 mr-4"
        >
          {SUPPORTED_LANGUAGE.map((lang) => (
            <option
              key={lang.identifier}
              value={lang.identifier}
              className="bg-black text-white"
            >
              {lang.identifier}
            </option>
          ))}
        </select>
      </div>
      {user && (
        <div className="flex p-2 items-center">
          <button
            onClick={handlegptclick}
            className="flex items-center m-4 space-x-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-semibold py-2 px-6 rounded-full shadow-lg hover:bg-gradient-to-l from-blue-600 via-purple-600 to-pink-600 transition ease-in-out duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10 11a4 4 0 110-8 4 4 0 010 8zm4 4h-4v6m10-2l-2-2m0 0l2-2m-2 2h-6"
              />
            </svg>
            <span>{language[Langkeys].GPTSearch}</span>
          </button>

          <img className="w-12 h-12" alt="usericon" src={user.photoURL} />

          <button
            onClick={handleSignOut}
            className="p-2 m-2 font-bold text-xl text-white"
          >
            {language[Langkeys].logout}
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
