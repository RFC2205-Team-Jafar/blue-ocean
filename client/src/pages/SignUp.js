import React, {useEffect, useState} from 'react';
import { Link, useNavigate } from "react-router-dom";
import {useAuth} from '../components/AuthContext.jsx';
import geoConverter from '../Google_API/geolocation.jsx';



const SignUp = () => {
  // console.log('useAuth: ', useAuth);
  //---------------------- State Hooks --------------------------
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [accountType, setAccountType] = useState("");
  const [preferredIndustry, setPreferredIndustry] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [company, setCompany] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  // const history = useHistory();
  const {signup} = useAuth();
  // console.log('signup: ', signup);

  //---------------------- Embedded Functions -------------------
  const register = () => {
    if (!firstName) alert("Please enter a first name");
    if (!lastName) alert("Please enter a last name");
    if (!email) alert("Please enter an email address");
    if (!password) alert("Please enter a password");
    if (accountType === "seeker" && !preferredIndustry)  alert ("Please select your preferred industry");
    if (accountType === "seeker" && !zipCode)  alert ("Please enter a zip code");
    if (accountType === "recruiter" && !company)  alert ("Please enter a company");
    const name = firstName + " " + lastName;
    var lat;
    var long;
    geoConverter(zipCode)
    .then(geos => {
      lat = geos.lat;
      long = geos.lng;
    })
    .catch(err => {console.log('lat long err: ', err)})
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
          coord_lat: lat,
          coord_long: long,
          // resume_url: ,
          company_name: company
        };
        // console.log('body: ', body)
      })
      .then(() => setLoading(false))
      .then(() => {
        if (accountType === "seeker") {
          navigate("/seeker", {replace: true});
        } else {
          navigate("/recruiter", {replace: true});
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
        <div className ="registration_container">
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
        <br/>
        <h3> Please select account type.</h3>
      </div>
    )
  } else if (accountType === "seeker") {
    return (
      <div>
        <h1>Sign Up Form </h1>
        <div>Form elements</div>
        <div className ="registration_container">
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
          <button>Resume Upload Here</button>
          <button onClick={register} disabled={loading}>Create Account</button>
        </div>
      </div>
    )
  }else if (accountType === "recruiter") {
    return (
      <div>
        <h1>Sign Up Form </h1>
        <div>Form elements</div>
        <div className ="registration_container">
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
        <button onClick={register} disabled={loading}>Create Account</button>
      </div>
    )
  }

};

export default SignUp;