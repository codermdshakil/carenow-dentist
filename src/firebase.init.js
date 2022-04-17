// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCo9okP3TVl-zcwTnzquyuLK2RMo-xsCY",
  authDomain: "carenow-dentist.firebaseapp.com",
  projectId: "carenow-dentist",
  storageBucket: "carenow-dentist.appspot.com",
  messagingSenderId: "565932868744",
  appId: "1:565932868744:web:ea830231b4af3c6b5d4b3d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;
