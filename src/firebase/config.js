// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

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
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();