import React, {useContext, useState, useEffect} from 'react';
import {auth, methods} from './firebase.jsx';

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({children}) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  function login(email, password) {
    return methods.signInWithEmailAndPassword(auth, email, password)
  }

  function signup(email, password) {
    return methods.createUserWithEmailAndPassword(auth, email, password)
  }

  function logOut() {
    return methods.signOut(auth);
  }

  // function googleLogin() {
  //   console.log('made it here')
  //   const googleAuthProvider = new methods.GoogleAuthProvider();
  //   return methods.signInWithPopup(auth, googleAuthProvider);
  // }

  useEffect(() => {
    const unsubscribe = methods.onAuthStateChanged(auth, user => {
      setCurrentUser(user)
      setLoading(false)
    })
    return unsubscribe
  }, [])


  const value={
    currentUser: currentUser,
    login,
    signup,
    // googleLogin,
    logOut
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}

