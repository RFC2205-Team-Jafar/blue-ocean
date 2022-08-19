import React, { useEffect, useState, useContext } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { StyledModal } from './StyledModal';
import { useAuth } from '../AuthContext.jsx';
import axios from 'axios';
import { AllContext } from "../../index.jsx";
import {Grid, Paper, Avatar, TextField, Button, Typography, FormControlLabel} from "@mui/material";
import {Link as MUILink} from '@mui/material/Link';
import { LockOutlined } from '@mui/icons-material';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import { Row } from '../../../public/stylesheets/styles.js';

const LoginForm = () => {

  const paperStyle={position: "relative", top: "150px", padding :20, height:'47vh', width:280, margin:"30px auto", borderRadius: '10px'};
  const avatarStyle={backgroundColor:'#1bbd7e'};
  const btnstyle={margin:'8px 0'}
  const closebtnstyle={ position: "relative", left: "100px", margin:'8px 0'};

  //----------------State Hooks  -------------------------
  const { uuid, setUuid } = useContext(AllContext);
  const { email, setEmail } = useContext(AllContext);
  const { accountType, setAccountType } = useContext(AllContext);
  // const {login, googleLogin} = useAuth();
  const { firstName, setFirstName } = useContext(AllContext);
  const { lastName, setLastName } = useContext(AllContext);
  const { preferredIndustry, setPreferredIndustry } = useContext(AllContext);
  const { zipCode, setZipCode } = useContext(AllContext);
  const { company, setCompany } = useContext(AllContext);
  const { coord_lat, setCoord_lat } = useContext(AllContext);
  const { coord_long, setCoord_long } = useContext(AllContext);
  const { resuemUrl, setResumeUrl } = useContext(AllContext);
  const { defaultJobs, setDefaultJobs } = useContext(AllContext);
  const { appliedJobs, setAppliedJobs } = useContext(AllContext);
  const { login } = useAuth();
  // local states
  const [modalOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  //----------------Modal Functions ----------------------
  const hideModal = () => {
    setModalOpen(false);
  };
  //----------------Embedded Functions -------------------
  const handlePlainLogin = async () => {
    setLoading(true);
    const r = await login(email, password);
    const uid = r.user.uid;
    const res = await axios.get(`/jobs/${uid}/signon`);
    // TODO: remove console.log
    console.log(res.data);
    await setUuid(res.data.user_uuid);
    await setAccountType(res.data.account_type);
    await setFirstName(res.data.first_name);
    await setLastName(res.data.last_name);
    await setCompany(res.data.company_name);
    await setCoord_lat(res.data.coord_lat);
    await setCoord_long(res.data.coord_long);
    await setResumeUrl(res.data.resume_url);
    await setZipCode(res.data.zip);
    await setPreferredIndustry(res.data.pref_industry);
    await setAppliedJobs(res.data.defaultJobs);
    await setDefaultJobs(res.data.appliedJobs);
    if (res.data.account_type === "seeker") {
      navigate("/seeker", { replace: true });
    } else if (res.data.account_type === "recruiter") {
      navigate("/recruiter", { replace: true });
    }
    setLoading(false);
  }
  //---------------- DOM Return -------------------------
  return (
    <>
      {/* Plug in your title here */}
      <Row onClick={() => setModalOpen(true)} >
      <h2 style={{fontWeight: 'lighter', 'color': 'black' }}>Login</h2>
      &nbsp;
      <LoginOutlinedIcon style={{'color': 'black' }} />
      </Row>

      {/* Modal Section */}
      <StyledModal
        show={modalOpen}
        handleClose={hideModal}>
        {/* <Grid> */}
          <Paper elevation={10} style={paperStyle}>
            <Grid align = 'center'>
              <Avatar style={avatarStyle}><LockOutlined/></Avatar>
              <h2>Sign In</h2>
            </Grid>
            <TextField label='Username' placeholder='Enter username' style={{paddingTop: "5px", paddingBottom:"7px"}} fullWidth value={email} onChange={(e) => setEmail(e.target.value)} required />
            <TextField label='Password' placeholder='Enter password' style={{paddingTop: "5px", paddingBottom:"7px"}} type='password' fullWidth value={password} onChange={(e) => setPassword(e.target.value)} required/>
            <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth onClick={() => handlePlainLogin()}>Sign in</Button>
            <Typography style={{textAlign: "center"}}> Don't have an account? <br/>
                <Link to="signUp" onClick={() => {setModalOpen(false)}}>
                Create
                </Link>
                &nbsp;one now.
            </Typography>
            <Button color='primary' variant="contained" style={closebtnstyle} onClick={() => {setModalOpen(false)}}>Back</Button>
          </Paper>
          {/* <div>Email </div>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="E-Mail Address" />
          <div>Password</div>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
          <button onClick={() => handlePlainLogin()}> Login </button>
          {/* <button onClick={() => handleGoogleLogin()}>Login with Google</button> */}
        {/* </div>
        <div>
          Don't have an account? <Link to="signUp">Create</Link> an account now.
        // </div> */}
        {/* </Grid> */}
      </StyledModal>
    </>
  )
}

export default LoginForm;
