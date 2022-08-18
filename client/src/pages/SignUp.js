import React, { useEffect, useState, useContext, useRef } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from '../components/AuthContext.jsx';
import geoConverter from '../Google_API/geolocation.jsx';
import axios from 'axios';
import { AllContext } from '../index.jsx';
import Button from '@mui/material/Button';
import HeaderGallery from "../components/Header/ImageGallery.jsx";
import NavigationBar from '../components/NavBar/NavigationBar.jsx';


const SignUp = () => {
  // console.log('useAuth: ', useAuth);
  //---------------------- State Hooks --------------------------
  const [ email, setEmail ] = useState();
  const [ accountType, setAccountType ] = useState();
  const [ firstName, setFirstName ] = useState();
  const [ lastName, setLastName ] = useState();
  const [ preferredIndustry, setPreferredIndustry ] = useState();
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
  if (accountType === undefined) {
    return (
      <div>
        <NavigationBar/>
        <HeaderGallery />
        <h1>Sign Up Form </h1>
        <div>Form elements</div>
        <div className="registration_container">
          <h2>First Name</h2>
          <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="First Name" />
          <h2>Last Name</h2>
          <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Last Name" />
          <h2>Account Type</h2>
          <span>
            <input type="radio" value="seeker" name="account_type" onClick={() => setAccountType("seeker")} />
            <div>Job Seeker</div>
          {/* </span>
          <span> */}
            <input type="radio" value="recruiter" name="account_type" onClick={() => setAccountType("recruiter")} />
            <div>Recruiter</div>
          </span>
        </div>
        <br />
        <h3> Please select account type.</h3>
      </div>
    )
  } else if (accountType === "seeker") {
    return (
      <div>
        <HeaderGallery />
        <h1>Sign Up Form </h1>
        <div>Form elements</div>
        <div className="registration_container">
          <h2>First Name</h2>
          <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="First Name" />
          <h2>Last Name</h2>
          <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Last Name" />
          <h2>Account Type</h2>
          <span>
            <input type="radio" value="seeker" name="account_type" onClick={() => setAccountType("seeker")} />
            <div>Job Seeker</div>
          </span>
          <span>
            <input type="radio" value="recruiter" name="account_type" onClick={() => setAccountType("recruiter")} />
            <div>Recruiter</div>
          </span>
          <h2>Email</h2>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="youremail@domain.com" />
          <h2>Password</h2>
          <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
          <h2>Preferred Industry</h2>
          <select value={preferredIndustry} onChange={(e) => setPreferredIndustry(e.target.value)}>
            <option value="">Select One</option>
            <option value="Art">Art</option>
            <option value="Aviation">Aviation</option>
            <option value="Construction">Construction</option>
            <option value="Education">Education</option>
            <option value="Food">Food</option>
            <option value="Healthcare">Healthcare</option>
            <option value="Music">Music</option>
            <option value="Tech">Tech</option>
            <option value="Transportation">Transportation</option>
          </select>
          <h2>Zip Code</h2>

          <input type="text" value={zipCode} onChange={(e) => {
                                                              setZipCode(e.target.value);
                                                              geoConverter(zipCode)
                                                              .then(geos => {
                                                                setCoord_lat(geos.lat);
                                                                setCoord_long(geos.lng);
                                                              })
                                                              .catch(err => { console.log('lat long err: ', err) })
                                                              }} placeholder="Zip Code" />
          {uploaded
          ? <p> Resume Uploaded </p>
          : <>
            <Button variant='contained' onClick={() => fileInputRef.current.click()}>
              Upload A Resume
            </Button>
            <input onChange={handleUpload} multiple={false} ref={fileInputRef} type='file' hidden />
            </>
          }
        </div>
      </div>
    )
  } else if (accountType === "recruiter") {
    return (
      <div>
        <HeaderGallery />
        <h1>Sign Up Form </h1>
        <div>Form elements</div>
        <div className="registration_container">
          <h2>First Name</h2>
          <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="First Name" />
          <h2>Last Name</h2>
          <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Last Name" />
          <h2>Account Type</h2>
          <span>
            <input type="radio" value="seeker" name="account_type" onClick={() => setAccountType("seeker")} />
            <div>Job Seeker</div>
          </span>
          <span>
            <input type="radio" value="recruiter" name="account_type" onClick={() => setAccountType("recruiter")} />
            <div>Recruiter</div>
          </span>
          <h2>Email</h2>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="youremail@domain.com" />
          <h2>Password</h2>
          <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
          <h2>Company</h2>
          <input type="text" value={company} onChange={(e) => setCompany(e.target.value)} placeholder="Company" />
        </div>
        <Button variant='contained' onClick={register} disabled={loading}>Create Account</Button>
      </div>
    )
  }

};

export default SignUp;
