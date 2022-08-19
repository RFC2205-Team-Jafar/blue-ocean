import React, { useEffect, useState, useContext, useRef } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from '../components/AuthContext.jsx';
import geoConverter from '../Google_API/geolocation.jsx';
import axios from 'axios';
import { AllContext } from '../index.jsx';
import { fileUpload } from '../components/fileHandlers.jsx'
import HeaderGallery from "../components/Header/ImageGallery.jsx";
import {Grid, Paper, Avatar, TextField, Button, Typography, Select, FormControl, InputLabel, MenuItem} from "@mui/material";
import NavigationBar from '../components/NavBar/NavigationBar.jsx';


const SignUp = () => {

  const paperStyle={ padding: 20, height: "100%", width: "95%", borderRadius: '10px'};
  const avatarStyle={backgroundColor:'#1bbd7e'};
  const btnstyle={margin:'8px 0'};
  const closebtnstyle={ position: "relative", left: "100px", margin:'8px 0'};
  // console.log('useAuth: ', useAuth);
  //---------------------- State Hooks --------------------------
  const [ email, setEmail ] = useState();
  const [ accountType, setAccountType ] = useState("Select One");
  const [ firstName, setFirstName ] = useState();
  const [ lastName, setLastName ] = useState();
  const [ preferredIndustry, setPreferredIndustry ] = useState("Select One");
  const [ zipCode, setZipCode ] = useState();
  const [ company, setCompany ] = useState();
  const [ coord_lat, setCoord_lat ] = useState();
  const [ coord_long, setCoord_long ] = useState();
  const [ resumeUrl, setResumeUrl ] = useState();
  // local states
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
    // const {login, googleLogin} = useAuth();
  const { signup } = useAuth();
  const fileInputRef = useRef()
  const [uploaded, setUploaded] = useState(false);

  //---------------------- Embedded Functions -------------------

  const handleUpload = (event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append('file', file);
    formData.append('fileName', file.name);

    const config = {
      headers: {
        'content-type': 'multipart/form-data',
      }
    }

    axios.post('/uploadFile', formData, config)
      .then((res) => {
        setUploaded(true)
        setResumeUrl(res.data.url);
      })
      .catch((err) => { console.log('err occurred in upload') })
  }

  const register = () => {
    if (!firstName) alert("Please enter a first name");
    if (!lastName) alert("Please enter a last name");
    if (!email) alert("Please enter an email address");
    if (!password) alert("Please enter a password");
    if (accountType === "seeker" && !preferredIndustry) alert("Please select your preferred industry");
    if (accountType === "seeker" && !zipCode) alert("Please enter a zip code");
    if (accountType === "recruiter" && !company) alert("Please enter a company");
    const name = firstName + " " + lastName;
    setLoading(true);
    signup(email, password)
      .then(res => {
        const uid = res.user.uid;
        // console.log('res: ', res);
        const body = {
          user_uuid: uid,
          first_name: firstName,
          last_name: lastName,
          email: email,
          account_type: accountType,
          pref_industry: preferredIndustry,
          zip: zipCode,
          coord_lat: coord_lat,
          coord_long: coord_long,
          resume_url: resumeUrl,
          company_name: company
        };
        axios.post('/jobs/adduser', body)
          .then((res) => console.log(res))
          .catch(err => console.log(err));
      })
      .then(() => setLoading(false))
      .then(() => {
        setAccountType();
        setFirstName();
        setLastName();
        setCompany();
        setCoord_lat();
        setCoord_long();
        setResumeUrl();
        setZipCode();
        setPreferredIndustry();
        navigate("/", { replace: true });
      })
      .catch(err => console.log("There was an error creating your account: ", err))
  };

  //-------------------- Returned DOM --------------------------
  if (accountType === "Select One") {
    return (
      <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
        <NavigationBar/>
        <HeaderGallery />
        <Paper elevation={10} style={paperStyle}>
        <h1 style={{textAlign:"center", fontSize:"64px", margin:"0px"}}>Create Account</h1>
        <br/>
        <Grid container rowSpacing={4} columnSpacing={4}>
          <Grid item xs={4}>
            <h2 style={{textAlign:"center", margin:"5px"}}>First Name</h2>
            <TextField label='First Name' placeholder='First Name' fullWidth value={firstName} onChange={(e) => setFirstName(e.target.value)} />
          </Grid>
          <Grid item xs={4}>
            <h2 style={{textAlign:"center", margin:"5px"}}>Last Name</h2>
            <TextField label='Last Name' placeholder='Last Name' fullWidth value={lastName} onChange={(e) => setLastName(e.target.value)} />
          </Grid>
          <Grid item xs={4}>
            <h2 style={{textAlign:"center", margin:"5px"}}>Account Type</h2>
            <FormControl sx={{ width: "100%" }}>
              <Select value={accountType} onChange={(e) => setAccountType(e.target.value)} placeholder="Select One">
                <MenuItem value="seeker">Job Seeker</MenuItem>
                <MenuItem value="recruiter">Recruiter</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        <br />
        <h2 style={{textAlign:"center", margin:"30px"}}>Please select an account type.</h2>
        </Paper>
      </div>
    )
  } else if (accountType === "seeker") {
    return (
      <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
        <NavigationBar/>
        <HeaderGallery />
        <Paper elevation={10} style={paperStyle}>
        <h1 style={{textAlign:"center", fontSize:"64px", margin:"0px"}}>Create Account</h1>
        <br/>
        <Grid container rowSpacing={4} columnSpacing={4}>
          <Grid item xs={4}>
            <h2 style={{textAlign:"center", margin:"5px"}}>First Name</h2>
            <TextField label='First Name' placeholder='First Name' fullWidth value={firstName} onChange={(e) => setFirstName(e.target.value)} />
          </Grid>
          <Grid item xs={4}>
            <h2 style={{textAlign:"center", margin:"5px"}}>Last Name</h2>
            <TextField label='Last Name' placeholder='Last Name' fullWidth value={lastName} onChange={(e) => setLastName(e.target.value)} />
          </Grid>
          <Grid item xs={4}>
            <h2 style={{textAlign:"center", margin:"5px"}}>Account Type</h2>
            <FormControl sx={{ width: "100%" }}>
              <Select value={accountType} onChange={(e) => setAccountType(e.target.value)} placeholder="Select One">
                <MenuItem value="seeker">Job Seeker</MenuItem>
                <MenuItem value="recruiter">Recruiter</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        <br/>
        <br/>
        <br/>
        <br/>
        <Grid container rowSpacing={4} columnSpacing={4}>
          <Grid item xs={4}>
            <h2 style={{textAlign:"center", margin:"5px"}}>Email</h2>
            <TextField label='Email' placeholder="youremail@domain.com" fullWidth value={email} onChange={(e) => setEmail(e.target.value)} />
          </Grid>
          <Grid item xs={4}>
            <h2 style={{textAlign:"center", margin:"5px"}}>Password</h2>
            <TextField label='Password' placeholder='Min. 6 Characters' fullWidth value={password} onChange={(e) => setPassword(e.target.value)} />
          </Grid>
          <Grid item xs={4}>
          <h2 style={{textAlign:"center", margin:"5px"}}>Preferred Industry</h2>
            <FormControl sx={{ width: "100%" }}>
              <Select value={preferredIndustry} onChange={(e) => setPreferredIndustry(e.target.value)} placeholder="Select One">
                <MenuItem value="Art">Art</MenuItem>
                <MenuItem value="Aviation">Aviation</MenuItem>
                <MenuItem value="Construction">Construction</MenuItem>
                <MenuItem value="Education">Education</MenuItem>
                <MenuItem value="Food">Food</MenuItem>
                <MenuItem value="Healthcare">Healthcare</MenuItem>
                <MenuItem value="Music">Music</MenuItem>
                <MenuItem value="Tech">Tech</MenuItem>
                <MenuItem value="Transportation">Transportation</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        <br/>
        <br/>
        <br/>
        <br/>
        <Grid container rowSpacing={4} columnSpacing={4} alignItems="center" justifyContent="center">
          <Grid item xs={4}>
          <h2 style={{textAlign:"center", margin:"5px"}}>Zip Code</h2>
            <TextField label='Zip Code' placeholder='Zip Code' fullWidth value={zipCode} onChange={(e) => {
                                                              setZipCode(e.target.value);
                                                              geoConverter(zipCode)
                                                              .then(geos => {
                                                                setCoord_lat(geos.lat);
                                                                setCoord_long(geos.lng);
                                                              })
                                                              .catch(err => { console.log('lat long err: ', err) })
                                                              }} />
          </Grid>
          <Grid item xs={4}>
            {uploaded
            ? <p> Resume Uploaded </p>
            : <>
              <Button variant='contained' onClick={() => fileInputRef.current.click()}>
                Upload A Resume
              </Button>
              <input onChange={handleUpload} multiple={false} ref={fileInputRef} type='file' hidden />
              </>
            }
          </Grid>
          <Grid item xs={4}>
            <div></div>
          </Grid>
        </Grid>
        <br/>
        <br/>
        <br/>
        <br/>
        <Grid container rowSpacing={4} columnSpacing={4} alignItems="center" justifyContent="center">
          <Grid item xs={5}>
            <div></div>
          </Grid>
          <Grid alignItems="center" justifyContent="center" item xs={2}>
            <Button color='primary' variant="contained" style={closebtnstyle} onClick={register} disabled={loading}>Create Account</Button>
          </Grid>
          <Grid item xs={5}>
            <div></div>
          </Grid>
        </Grid>
        </Paper>
      </div>
    )
  } else if (accountType === "recruiter") {
    return (
      <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
        <NavigationBar/>
        <HeaderGallery />
        <Paper elevation={10} style={paperStyle}>
        <h1 style={{textAlign:"center", fontSize:"64px", margin:"0px"}}>Create Account</h1>
        <br/>
        <Grid container rowSpacing={4} columnSpacing={4}>
          <Grid item xs={4}>
            <h2 style={{textAlign:"center", margin:"5px"}}>First Name</h2>
            <TextField label='First Name' placeholder='First Name' fullWidth value={firstName} onChange={(e) => setFirstName(e.target.value)} />
          </Grid>
          <Grid item xs={4}>
            <h2 style={{textAlign:"center", margin:"5px"}}>Last Name</h2>
            <TextField label='Last Name' placeholder='Last Name' fullWidth value={lastName} onChange={(e) => setLastName(e.target.value)} />
          </Grid>
          <Grid item xs={4}>
            <h2 style={{textAlign:"center", margin:"5px"}}>Account Type</h2>
            <FormControl sx={{ width: "100%" }}>
              <Select value={accountType} onChange={(e) => setAccountType(e.target.value)} placeholder="Select One">
                <MenuItem value="seeker">Job Seeker</MenuItem>
                <MenuItem value="recruiter">Recruiter</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        <br/>
        <br/>
        <br/>
        <br/>
        <Grid container rowSpacing={4} columnSpacing={4}>
          <Grid item xs={4}>
            <h2 style={{textAlign:"center", margin:"5px"}}>Email</h2>
            <TextField label='Email' placeholder="youremail@domain.com" fullWidth value={email} onChange={(e) => setEmail(e.target.value)} />
          </Grid>
          <Grid item xs={4}>
            <h2 style={{textAlign:"center", margin:"5px"}}>Password</h2>
            <TextField label='Password' placeholder='Min. 6 Characters' fullWidth value={password} onChange={(e) => setPassword(e.target.value)} />
          </Grid>
          <Grid item xs={4}>
            <h2 style={{textAlign:"center", margin:"5px"}}>Company</h2>
            <TextField label='Company' placeholder='Company' fullWidth value={company} onChange={(e) => setCompany(e.target.value)} />
          </Grid>
        </Grid>
        <Grid container rowSpacing={4} columnSpacing={4} alignItems="center" justifyContent="center">
          <Grid item xs={5}>
            <div></div>
          </Grid>
          <Grid alignItems="center" justifyContent="center" item xs={2}>
            <Button color='primary' variant="contained" style={closebtnstyle} onClick={register} disabled={loading}>Create Account</Button>
          </Grid>
          <Grid item xs={5}>
            <div></div>
          </Grid>
        </Grid>
        </Paper>
      </div>
    )
  }

};

export default SignUp;
