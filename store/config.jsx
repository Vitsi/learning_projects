// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDUpM6TtQJsM-XHFsYSt0CHaq2kZipAuq8",
  authDomain: "rbg-game-fb.firebaseapp.com",
  projectId: "rbg-game-fb",
  storageBucket: "rbg-game-fb.firebasestorage.app",
  messagingSenderId: "221207364895",
  appId: "1:221207364895:web:523f4c3843d803cbc09c2a",
  measurementId: "G-KWDNYHLJ3R"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//init firestore
export const db = getFirestore(app)