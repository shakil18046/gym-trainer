// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbf1l4QwUBTRU_9yNWUCAd_7JsjylE8IY",
  authDomain: "gym-trainer-4e31f.firebaseapp.com",
  projectId: "gym-trainer-4e31f",
  storageBucket: "gym-trainer-4e31f.appspot.com",
  messagingSenderId: "880631459560",
  appId: "1:880631459560:web:4376e69ed24f63ac32235d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
