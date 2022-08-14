import React from 'react';
import { Link } from "react-router-dom";

const Login = () => {
  return (
  <>
    <h1>Login In </h1>
    <div><Link to="/seeker">Redirect to Seeker view </Link></div>
    <div><Link to="/recruiter">Redirect to Recruiter view </Link></div>
    <div><Link to="/">Back to Home</Link></div>
  </>
  )
};

export default Login;