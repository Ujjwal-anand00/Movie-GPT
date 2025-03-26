import React, { useRef, useState } from "react";
import { auth } from "../utils/firebase";
import Header from "./Header";
import { CheckValidData } from "../utils/validate";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utils/userSlice";
import language from "../utils/languageconstant";

const Login = () => {
  const [isSignInForm, setisSignInForm] = useState(true);
  const [errormessage, seterrormessage] = useState(null);
  const Langkeyss = useSelector((store) => store.config.lang);

  const dispatch = useDispatch();
  // direct q karna hai jab wo change hote rhta hai toh !!
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const HandleButtonClick = () => {
    // validate the form data through it
    const message = CheckValidData(email.current.value, password.current.value);
    // console.log(email.current.value,password.current.value);
    // console.log(message);
    seterrormessage(message);

    if (message) return;
    //  otherwise signin and signup  functionality

    if (!isSignInForm) {
      // signup logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          // console.log(user);
          updateProfile(user, {
            displayName: name.current.value,
            photoURL:
              "https://media.licdn.com/dms/image/v2/D5603AQEP76lmjfzBIw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1714983740330?e=1737590400&v=beta&t=Kb5VMHpHQVuY_u0axSJ2SHmA2T73toEL0-ro8FkB2VY",
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              seterrormessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrormessage(errorCode + "-" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrormessage(errorCode + "-" + errorMessage);
        });
    }
  };

  const toggleSignINform = () => {
    setisSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          className="w-full"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/f272782d-cf96-4988-a675-6db2afd165e0/web/IN-en-20241008-TRIFECTA-perspective_b28b640f-cee0-426b-ac3a-7c000d3b41b7_large.jpg"
          alt="logo"
        />
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="absolute w-3/12 mx-auto my-36 right-0 left-0 p-12 bg-black bg-opacity-80 text-white"
      >
        <h1 className="text-3xl font-bold py-4">
          {isSignInForm
            ? language[Langkeyss].signIn
            : language[Langkeyss].signUp}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Name"
            className="p-4 my-2 w-full bg-gray-700 rounded-sm"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-2 w-full bg-gray-700 rounded-sm"
        />
        <input
          ref={password}
          type="text"
          placeholder="Password"
          className="p-4 my-2 w-full bg-gray-700 rounded-sm"
        />
        <p className="text-red-600 font-bold text-lg py-2">{errormessage}</p>
        <button
          className="p-4 my-6 bg-red-700 w-full rounded-sm"
          onClick={HandleButtonClick}
        >
          {isSignInForm
            ? language[Langkeyss].signIn
            : language[Langkeyss].signUp}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignINform}>
          {isSignInForm
            ? language[Langkeyss].dontHaveAccount
            : language[Langkeyss].alreadyHaveAccount
          }
        </p>
      </form>
    </div>
  );
};

export default Login;
