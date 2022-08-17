import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { AllContext } from '../index.jsx';

import LoginForm from "../components/loginComponents/LoginForm.jsx";
import { InterviewInviteModal } from "../Google_API/interviewInvite.jsx"
import PostJob from '../components/PostJob/PostJob.jsx'

import {fileUpload} from '../components/fileHandlers.jsx'

const Home = () => {

  return (
    <>
      <h1> LinkedOut Navbar </h1>
      <LoginForm />
      <h1> Image Gallery </h1>
      <h1> Jobs (newest 20) </h1>

      <div><Link to="signUp">Create Account</Link></div>
      <div><Link to="seeker">Redirect to Seeker view </Link></div>
      <div><Link to="recruiter">Redirect to Recruiter view </Link></div>

      {fileUpload('Resume')}


    </>
  )
};

export default Home;