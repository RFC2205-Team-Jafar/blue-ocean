// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {GoogleAuthProvider, getAuth, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail, signOut} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCXHztSdUYmWKr8H7yo0MEMG5tMciErkxI",
  authDomain: "project-linkedout.firebaseapp.com",
  projectId: "project-linkedout",
  storageBucket: "project-linkedout.appspot.com",
  messagingSenderId: "485336557489",
  appId: "1:485336557489:web:a17aca029441b8c897ff90",
  measurementId: "G-R0L11JYQF6"
};

// Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
export const auth = getAuth(app);


export default app;