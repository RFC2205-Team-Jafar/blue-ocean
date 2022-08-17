import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { AllContext } from '../index.jsx';

import LoginForm from "../components/loginComponents/LoginForm.jsx";
import PostJob from '../components/PostJob/PostJob.jsx';



const Home = () => {
  return (
    <>

      <h1> LinkedOut Navbar      <span>signUp/login(modal)</span> </h1>

      {/* create account shall be placed in login modal */}

      <LoginForm />
      <Link to="signUp">Create Account</Link>
      <div><Link to="/seeker">Redirect to Seeker view </Link></div>
      <div><Link to="/recruiter">Redirect to Recruiter view </Link></div>
      <h1> Image Gallery </h1>

      <h1> Jobs (newest 20) </h1>

    </>
  )
};

export default Home;