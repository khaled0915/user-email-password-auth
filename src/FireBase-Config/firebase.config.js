// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATkQa3FkxG0uvFbw9WdFZ-rhj0EIc22dY",
  authDomain: "email-password-auth-user.firebaseapp.com",
  projectId: "email-password-auth-user",
  storageBucket: "email-password-auth-user.appspot.com",
  messagingSenderId: "1055392479874",
  appId: "1:1055392479874:web:6de0b55ef90f196075529b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;