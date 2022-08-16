import React, {useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { StyledModal } from './StyledModal';
import {useAuth} from '../AuthContext.jsx';


const LoginForm = () => {

  //----------------State Hooks  -------------------------
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [user, loading, error] = useAuthState(auth);
  const {login, googleLogin} = useAuth();
  const [loading, setLoading] = useState(false);

  //----------------Modal Functions ----------------------
  const [modalOpen, setModalOpen] = useState(false);

  const hideModal = () => {
    setModalOpen(false);
  };
  //----------------Embedded Functions -------------------
  const handlePlainLogin = () => {
    setLoading(true);
    login(email, password)
    .then(() => {
      setLoading(false);
    })
    .catch(err => {console.log('There was an error logging in: ', err)})
  }
  const handleGoogleLogin = () => {
    setLoading(true);
    googleLogin()
    .then(() => {
      setLoading(false);
    })
    .catch(err => {console.log('There was an error logging in: ', err)})
  }
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
          <button onClick={() => handlePlainLogin()}> Login </button>
          <button onClick={() => handleGoogleLogin()}>Login with Google</button>
        </div>
        <div>
          Don't have an account? <Link to="signUp">Create</Link> an account now.
        </div>
      </StyledModal>
    </>
  )
}

export default LoginForm;