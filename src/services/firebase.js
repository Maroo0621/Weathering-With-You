// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFNhe9MWmyt0iqNrL7Q9V81LndU1SIipw",
  authDomain: "weather-app-d1c0d.firebaseapp.com",
  databaseURL: "https://weather-app-d1c0d-default-rtdb.firebaseio.com",
  projectId: "weather-app-d1c0d",
  storageBucket: "weather-app-d1c0d.appspot.com",
  messagingSenderId: "462157168285",
  appId: "1:462157168285:web:b5b4ddc861d076422dde74"
};

// Initialize Firebase
const FBconfig = initializeApp(firebaseConfig);

export default FBconfig