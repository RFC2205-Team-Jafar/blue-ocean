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
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const signInWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then(res => {
        const user = res.user;
        //send res.user.uid to db
      })
      .catch(err => {alert(err.message)});
  };
  /* Need to build the login with email and password function out*/
  // const logInWithEmailAndPassword = (email, password) => {
  //   signInWithEmailAndPassword(auth, email, password)
  //     .then(res => {
  //       axios.get()
  //     })
  // }
  const registerWithEmailAndPassword = (name, email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(res => {
        const user = res.user;
        console.log(user);
        //send res.user.uid to DB
      })
      .catch(err => {alert(err.message)});
  };




//call firebase.auth().signInWithEmailAndPassword(email, password);
  //.then(res => {console.log(res)}) //res contains uuid (pass to DB)

//once authenticated, call firebase.auth().currentUser.uid

export {registerWithEmailAndPassword};