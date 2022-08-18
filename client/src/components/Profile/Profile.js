import React, { useContext } from 'react';
import { AllContext } from '../../index.jsx';
import { fileUpload } from '../fileHandlers.jsx';

const Profile = () => {

  const accountType = 'seeker';
  // const { accountType } = useContext(AllContext);
  const { firstName, lastName, email, preferredIndustry, resumeUrl, zipCode, company } = useContext(AllContext);
  const { setFirstName, setLastName, setEmail, setPreferredIndustry, setResumeUrl, setZipCode, setCompany } = useContext(AllContext);

  const updateProfile = () => {

  }

  if (accountType === 'seeker') {
    return (
      <>
        <div>
          <label> First Name: </label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
        </div>
        <div>
          <label> Last Name: </label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />
        </div>
        <div>
          <label> Email: </label>
          {/* NOT ALLOW USER TO CHANGE EMAIL */}
          <input
            type="email"
            value={email}
          />
        </div>
        <div>
          <label> Preferred Industry: </label>
          <input
            type="text"
            value={preferredIndustry}
            onChange={(e) => {
              setPreferredIndustry(e.target.value);
            }}
          />
        </div>
        <div>
          <label> Resume: </label>
          <div>Upload a resume button </div>
          {fileUpload('resume')}
        </div>
        <div>
          <label> Zip Code: </label>
          <input
            type="text"
            value={zipCode}
            onChange={(e) => {
              setZipCode(e.target.value);
            }}
          />
        </div>
        <button > Update Profile </button>
      </>
    )
  } else if (accountType === 'recruiter') {
    return (
      <>
        <div>
          <label> First Name: </label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
        </div>
        <div>
          <label> Last Name: </label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />
        </div>
        <div>
          <label> Email: </label>
          {/* NOT ALLOW USER TO CHANGE EMAIL */}
          <input
            type="email"
            value={email}
          />
        </div>
        <div>
          <label> Company: </label>
          <input
            type="text"
            value={company}
            onChange={(e) => {
              setCompany(e.target.value);
            }}
          />
        </div>
      </>
    )
  } else {
    return <div> Not signed in yet. There is no account_type</div>
  }
};

export default Profile;