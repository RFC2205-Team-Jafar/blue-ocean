import React, { useContext } from 'react';
import { AllContext } from '../../index.jsx';

const Profile = ({ userType }) => {
  // const { userType } = useContext(AllContext);

  if (userType === 'seeker') {
    const { first_name, last_name, career_catogery, resumeURL, zip } = useContext(AllContext);
    return (
      <>
        <div>
          <label> First Name: </label>
          <input type="text" value={first_name}></input>
        </div>
        <div>
          <label> Last Name: </label>
          <input type="text" value={last_name}></input>
        </div>
        <div>
          <label> Career_catogery: </label>
          <input type="text" value={career_catogery}></input>
        </div>
        <div>
          <label> Resume: </label>
          <input type="text" value={resumeURL}></input>
        </div>
        <div>
          <label> Location: </label>
          <input type="text" value=""></input>
        </div>
      </>
    )
  } else if (userType === 'recruiter') {
    const { first_name, last_name, email, company } = useContext(AllContext);
    return (
      <>
        <div>
          <label> First Name: </label>
          <input type="text" value={first_name}></input>
        </div>
        <div>
          <label> Last Name: </label>
          <input type="text" value={last_name}></input>
        </div>
        <div>
          <label> Company: </label>
          <input type="text" value={company}></input>
        </div>
      </>
    )
  }
};

export default Profile;