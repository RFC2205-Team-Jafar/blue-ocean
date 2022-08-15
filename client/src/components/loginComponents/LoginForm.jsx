import React, {useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { StyledModal } from './StyledModal';
import { auth, signInWithEmailAndPassword, signInWithGoogle } from "../firebase.jsx";
import { useAuthState } from "react-firebase-hooks/auth";


const LoginForm = () => {

  //----------------State Hooks  -------------------------
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);

  //----------------Modal Functions ----------------------
  const [modalOpen, setModalOpen] = useState(false);

  const hideModal = () => {
    setModalOpen(false);
  };
  //----------------Embedded Functions -------------------


  //---------------- DOM Return -------------------------
  return (
    <>
      {/* Plug in your title here */}
      <h1 onClick={() => setModalOpen(true)} > Click Here to Login </h1>

      {/* Modal Section */}
      <StyledModal
        show={modalOpen}
        handleClose={hideModal}>

        <div className="login__container">
          <div>Email </div>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="E-Mail Address"/>
          <div>Password</div>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password"/>
          <button onClick={() => signInWithEmailAndPassword(email, password)}> Login </button>
          <button onClick={signInWithGoogle}>Login with Google</button>
        </div>
        <div>
          Don't have an account? <Link to="/signUp">Sign up</Link> now.
        </div>
      </StyledModal>
    </>
  )
}

export default LoginForm;