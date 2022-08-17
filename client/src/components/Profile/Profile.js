import React, { useContext } from 'react';
import { AllContext } from '../../index.jsx';

const Profile = () => {
  const { userType } = useContext(AllContext);

  if (userType === 'seeker') {
    const { first_name, last_name, career_catogery, resumeURL, zip } = useContext(AllContext);
    return (
      <>
        <label> First Name: </label>
        <input type="text" value={first_name}></input>

        <label> Last Name: </label>
        <input type="text" value={last_name}></input>

        <label> Career_catogery: </label>
        <input type="text" value={career_catogery}></input>

        <label> Resume: </label>
        <input type="text" value={resumeURL}></input>

        <label> Location: </label>
        <input type="text" value={ }></input>
      </>
    )
  } else if (userType === 'recruiter') {
    const { first_name, last_name, email, company } = useContext(AllContext);
    return (
      <>
        <label> First Name: </label>
        <input type="text" value={first_name}></input>

        <label> Last Name: </label>
        <input type="text" value={last_name}></input>

        <label> Company: </label>
        <input type="text" value={company}></input>
      </>
    )
  }
};

export default Profile;