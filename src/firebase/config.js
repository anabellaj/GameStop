// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDptikhQJ7s9xjVG7KQIH7mM4jQirfNf0M",
  authDomain: "gamestop-448bb.firebaseapp.com",
  projectId: "gamestop-448bb",
  storageBucket: "gamestop-448bb.appspot.com",
  messagingSenderId: "486103726324",
  appId: "1:486103726324:web:d0c86125fa5157748e86a1",
  measurementId: "G-VSR132MY3D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);