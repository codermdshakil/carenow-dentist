// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQXGizWEe_Vk9By22VJRL5N6pjYvizuOU",
  authDomain: "carenow-fdbba.firebaseapp.com",
  projectId: "carenow-fdbba",
  storageBucket: "carenow-fdbba.appspot.com",
  messagingSenderId: "957369076285",
  appId: "1:957369076285:web:9793d67b9b5d5db15e7854"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
