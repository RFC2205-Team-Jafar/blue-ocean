import React, { useContext, useState } from 'react';
import axios from 'axios';

import { AllContext } from '../../index.jsx';
import { fileUpload } from '../fileHandlers.jsx';
import { Form, Label, Row, Input, ButtonGroup } from '../../../public/stylesheets/styles.js';
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';


import './Profile.css';

const Profile = () => {

  // const accountType = 'recruiter';
  const { accountType } = useContext(AllContext);
  const { uuid } = useContext(AllContext);
  const { firstName } = useContext(AllContext);
  const { lastName } = useContext(AllContext);
  const { email } = useContext(AllContext);
  const { preferredIndustry } = useContext(AllContext);
  const { resumeUrl, setResumeUrl } = useContext(AllContext);
  const { zipCode } = useContext(AllContext);
  const { company } = useContext(AllContext);
  // local states
  const [updated, setUpdated] = useState(false);
  const [first_name, setFirst_name] = useState(firstName);
  const [last_name, setLast_name] = useState(lastName);
  const [pref_industry, setPref_industry] = useState(preferredIndustry);
  const [company_name, setCompany_name] = useState(company);
  const [zip, setZip] = useState(zipCode);

  const updateProfile = () => {
    const data = {
      user_uuid: uuid,
      account_type: accountType,
      first_name: first_name,
      last_name: last_name,
      pref_industry: pref_industry,
      resume_url: resumeUrl,
      zip: zip,
      company_name: company_name
    };
    console.log(data);
    axios.put('/jobs/changeprofile', data)
      .then(() => {
        setUpdated(true);
      })
      .catch(e => {
        console.log('update failed', e);
      })
  }

  const renderAlert = () => {
    if (updated) {
      return (
        <Alert severity="success">
          <AlertTitle>Success! Your profile has been <strong>updated</strong>.</AlertTitle>
        </Alert>
      )
    }
  };

  const seekerDOM = (
    <div className="seekerProfile">
      <TextField
        id="outlined-basic"
        label="First Name"
        variant="outlined"
        defaultValue={firstName}
        onChange={(e) => {
          setFirst_name(e.target.value);
        }}
      />

      <TextField
        id="outlined-basic"
        label="Last Name"
        variant="outlined"
        defaultValue={lastName}
        onChange={(e) => {
          setLast_name(e.target.value);
        }}
      />

      <TextField
        id="outlined-read-only-input"
        label="Read Only"
        defaultValue={email}
        InputProps={{
          readOnly: true,
        }}
      />

      <TextField
        id="outlined-basic"
        label="Preferred Industry"
        variant="outlined"
        defaultValue={preferredIndustry}
        onChange={(e) => {
          setPref_industry(e.target.value);
        }}
      />

      <TextField
        id="outlined-basic"
        label="Zip Code"
        variant="outlined"
        defaultValue={zipCode}
        onChange={(e) => {
          setZip(e.target.value);
        }}
      />

      <div className="uploadUpdate">
        {fileUpload('resume')}
        <Button variant="contained" onClick={updateProfile} style={{ "margin-left": "5px" }}> Update Profile </Button>
      </div>
    </div>
  );

  const recruiterDOM = (
    <div className="recruiterProfile">
      <TextField
        id="outlined-basic"
        label="First Name"
        variant="outlined"
        defaultValue={firstName}
        onChange={(e) => {
          setFirst_name(e.target.value);
        }}
      />
      <TextField
        id="outlined-basic"
        label="Last Name"
        variant="outlined"
        defaultValue={lastName}
        onChange={(e) => {
          setLast_name(e.target.value);
        }}
      />
      <TextField
        id="outlined-read-only-input"
        label="Read Only"
        defaultValue={email}
        InputProps={{
          readOnly: true,
        }}
      />
      <TextField
        id="outlined-basic"
        label="Company"
        variant="outlined"
        defaultValue={company}
        onChange={(e) => {
          setCompany_name(e.target.value);
        }}
      />

      <Button variant="contained" onClick={updateProfile}> Update Profile </Button>
    </div>
  );

  return (
    <div className="profile">
      {accountType === 'seeker' && seekerDOM}
      {accountType === 'recruiter' && recruiterDOM}
      {renderAlert()}
    </div>
  );

};


export default Profile;