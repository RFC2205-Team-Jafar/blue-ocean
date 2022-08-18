import React, { useContext, useState } from 'react';
import axios from 'axios';

import { AllContext } from '../../index.jsx';
import { fileUpload } from '../fileHandlers.jsx';

const Profile = () => {

  const accountType = 'recruiter';
  // const { accountType } = useContext(AllContext);
  const { uuid } = useContext(AllContext);
  const { firstName, setFirstName } = useContext(AllContext);
  const { lastName, setLastName } = useContext(AllContext);
  const { email } = useContext(AllContext);
  const { preferredIndustry, setPreferredIndustry } = useContext(AllContext);
  const { resumeUrl, setResumeUrl } = useContext(AllContext);
  const { zipCode, setZipCode } = useContext(AllContext);
  const { company, setCompany } = useContext(AllContext);
  const [updated, setUpdated] = useState(false);

  const updateProfile = () => {
    const data = {
      user_uuid: 'rxXyEEJqImavbPtUBHrINcvIK5p2',//uuid, // 'oSl2HNei1PTAsG3TijrfidKJ6dI2'
      account_type: 'recruiter', //accountType, // 'seeker'
      first_name: firstName,
      last_name: lastName,
      pref_industry: preferredIndustry,
      resume_url: resumeUrl,
      zip: zipCode,
      company_name: company
    };
    axios.put('/jobs/changeprofile', data)
      .then(() => {
        setUpdated(true);
      })
      .catch(e => {
        console.log('update failed', e);
      })
  }


  const msg = (
    <>
      <div>
        Profile Updated Successfully!
        <span onClick={() => setUpdated(false)}> &#10005; </span>
      </div>
    </>
  );

  const seekerDOM = (
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
        <input
          type="email"
          value={email}
          disabled
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
      <button onClick={updateProfile}> Update Profile </button>
    </>
  );

  const recruiterDOM = (
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
        <input
          type="email"
          value={email}
          disabled
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
      <button onClick={updateProfile}> Update Profile </button>
    </>
  );

  return (
    <>
      {updated && msg}
      {accountType === 'seeker' && seekerDOM}
      {accountType === 'recruiter' && recruiterDOM}
      {accountType !== 'seeker' && accountType !== 'recruiter' && <div> Not signed in yet. There is no account_type</div>}
    </>
  );
};


export default Profile;