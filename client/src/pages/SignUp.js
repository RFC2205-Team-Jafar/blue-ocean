import React, { useEffect, useState, useContext, useRef } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from '../components/AuthContext.jsx';
import geoConverter from '../Google_API/geolocation.jsx';
import axios from 'axios';
import { AllContext } from '../index.jsx';
<<<<<<< HEAD
import Button from '@mui/material/Button';// import {fileUpload} from '../components/fileHandlers.jsx'
=======
import { fileUpload } from '../components/fileHandlers.jsx'
import Button from '@mui/material/Button';
>>>>>>> 385b57bf64ebc47655dddd7fd650e4d6e9a6f3e0

const SignUp = () => {
  // console.log('useAuth: ', useAuth);
  //---------------------- State Hooks --------------------------
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
  // local states
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  // const history = useHistory();
  const { signup } = useAuth();
  // console.log('signup: ', signup);
  //add resume button
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
    var lat;
    var long;
    geoConverter(zipCode)
      .then(geos => {
        setCoord_lat(geos.lat);
        setCoord_long(geos.lng);
      })
      .catch(err => { console.log('lat long err: ', err) })
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
          userType: accountType,
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
        if (accountType === "seeker") {
          navigate("/seeker", { replace: true });
        } else {
          navigate("/recruiter", { replace: true });
        }
      })
      .catch(err => console.log("There was an error creating your account: ", err))
  };

  //-------------------- Returned DOM --------------------------
  if (accountType === "") {
    return (
      <div>

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
        </div>
        <br />
        <h3> Please select account type.</h3>
      </div>
    )
  } else if (accountType === "seeker") {
    return (
      <div>
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
            <option value="accounting">Accounting</option>
            <option value="education">Education</option>
            <option value="information technology">Information Technology</option>
            <option value="software development">Software Development</option>
            {/* <option value=""></option> */}
          </select>
          <h2>Zip Code</h2>

          <input type="text" value={zipCode} onChange={(e) => setZipCode(Number(e.target.value))} placeholder="Zip Code" />
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