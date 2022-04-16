// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import getAuth from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBdim3QfCBMDT00zmcl09XgSbFMEwQqBKw",
    authDomain: "cloven-498c7.firebaseapp.com",
    projectId: "cloven-498c7",
    storageBucket: "cloven-498c7.appspot.com",
    messagingSenderId: "1000721659262",
    appId: "1:1000721659262:web:44ac9ab24e283de79baf2f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;
