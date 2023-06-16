// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCltTtTkHlGqyCQKLG_kZOX6FVt630CKFo",
  authDomain: "auth-d2006.firebaseapp.com",
  projectId: "auth-d2006",
  storageBucket: "auth-d2006.appspot.com",
  messagingSenderId: "704855577590",
  appId: "1:704855577590:web:cc3d2debdbe0c0b50e6dd7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export  const auth =getAuth(app);
