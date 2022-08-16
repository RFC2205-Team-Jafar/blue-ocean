import React from 'react';
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
  <>
    <h1>Sign Up Form </h1>
    <div>Form elements</div>

    {/* After authentication, redirect based on role. Following tags shall be switched to navigate and use in .then() of authentication */}

    <div><Link to="/seeker">Redirect to Seeker view </Link></div>
    <div><Link to="/recruiter">Redirect to Recruiter view </Link></div>
  </>
  )
};

export default SignUp;