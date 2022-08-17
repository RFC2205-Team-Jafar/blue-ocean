import React, { useContext } from 'react';
import { AllContext } from '../../index.jsx';

const Profile = () => {
  const { accountType } = useContext(AllContext);
  // const accountType = 'recruiter';

  if (accountType === 'seeker') {
    const { firstName, lastName, email, preferredIndustry, resumeUrl, zipCode } = useContext(AllContext);
    const { setFirstName, setLastName, setEmail, setPreferredIndustry, setResumeUrl, setZipCode } = useContext(AllContext);

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
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
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
          {/* add a upload resume button here */}
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
      </>
    )
  } else if (accountType === 'recruiter') {
    const { firstName, lastName, email, company } = useContext(AllContext);
    const { setFirstName, setLastName, setEmail, setCompany } = useContext(AllContext);
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
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
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