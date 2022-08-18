import React, {useEffect, useState, useContext } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { StyledModal } from './StyledModal';
import {useAuth} from '../AuthContext.jsx';
import axios from 'axios';
import { AllContext } from "../../index.jsx";


const LoginForm = () => {

  //----------------State Hooks  -------------------------
  const {email, setEmail } = useContext(AllContext);
  const {accountType, setAccountType} = useContext(AllContext);
  // const {login, googleLogin} = useAuth();
  const {firstName, setFirstName} = useContext(AllContext);
  const {lastName, setLastName} = useContext(AllContext);
  const {preferredIndustry, setPreferredIndustry} = useContext(AllContext);
  const {zipCode, setZipCode} = useContext(AllContext);
  const {company, setCompany} = useContext(AllContext);
  const {coord_lat, setCoord_lat} = useContext(AllContext);
  const {coord_long, setCoord_long} = useContext(AllContext);
  const {resuemUrl, setResumeUrl} = useContext(AllContext);
  // local states
  const [modalOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");
//----------------Modal Functions ----------------------
  const hideModal = () => {
    setModalOpen(false);
  };
  //----------------Embedded Functions -------------------
  const handlePlainLogin = () => {
    setLoading(true);
    login(email, password)
    .then((res => {
      const uid = res.user.uid
      axios.get(`/jobs/getuser/${uid}`) //rework this route
      .then((res => {
        console.log('handlePlainLogin axios get res: ', res)
        setAccountType(res.body.accountType);
      }))
      .catch(err => console.log('there was an error from the server login: ', err))
    })) //two important pieces: res.user.uid, res.user.email
    .then(() => {
      setLoading(false);
      if (accountType = "seeker") {
        navigate("./Seeker.js", {replace: true});
      } else {
        navigate("./Recruiter.js", {replace: true});
      }
    })
    .catch(err => {console.log('There was an error logging in: ', err)})
  }
  // const handleGoogleLogin = () => {
  //   setLoading(true);
  //   googleLogin()
  //   .then(() => {
  //     setLoading(false);
  //     if (accountType = "seeker") {
  //       navigate("/seeker", {replace: true});
  //     } else {
  //       navigate("/recruiter", {replace: true});
  //     }
  //   })
  //   .catch(err => {console.log('There was an error logging in: ', err)})
  // }
  //---------------- DOM Return -------------------------
  return (
    <>
      {/* Plug in your title here */}
      <h1 onClick={() => setModalOpen(true)} > Login </h1>

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
          {/* <button onClick={() => handleGoogleLogin()}>Login with Google</button> */}
        </div>
        <div>
          Don't have an account? <Link to="signUp">Create</Link> an account now.
        </div>
      </StyledModal>
    </>
  )
}

export default LoginForm;