import React, { useContext } from 'react';
import { AllContext } from '../../index.jsx';

const Profile = () => {
  // const { userType } = useContext(AllContext);
  const userType = 'seeker';

  if (userType === 'seeker') {
    // const { first_name, last_name, email, career_catogery, resumeURL, coord } = useContext(AllContext);
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
    const { first_name, last_name, email, company, }
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

const user = {
  "recruiter_uuid": "rxXyEEJqImavbPtUBHrINcvIK5p2",
  "company": "ACME",
  "zipcode": "90210",
  "job_type": "inPerson",
  "industry": "Research",
  "title": "Mad Scientist",
  "salary_low": "80000",
  "salary_high": "100000",
  "pay_adjuster": "year",
  "description": "Make questionable technology",
  "num_positions": "1",
  "employment_type": "Full Time",
  "shift_schedule": "mondayToFriday",
  "isRemote": false,
  "requested_keywords": "chemistry, science, lack of restraint"
};