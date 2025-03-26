// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA5IdU0cm1L4abFX2SqMKYueQQJOAmIpXw",
  authDomain: "moviegpt-79bb9.firebaseapp.com",
  projectId: "moviegpt-79bb9",
  storageBucket: "moviegpt-79bb9.appspot.com",
  messagingSenderId: "326444199240",
  appId: "1:326444199240:web:07bb6f89338cd9fb7f177d",
  measurementId: "G-FB0G1EDHV8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();