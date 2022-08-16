import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { AllContext } from '../index.jsx';

import LoginForm from "../components/loginComponents/LoginForm.jsx";
import { InterviewInviteModal } from "../Google_API/interviewInvite.jsx"
import EmbedCalendar from '../Google_API/calendar.jsx'

const Home = () => {
  return (

    <>
      <h1> LinkedOut Navbar      <span>signUp/login(modal)</span> </h1>

      {/* create account shall be placed in login modal */}

      <LoginForm />
      <Link to="signUp">Create Account</Link>
      <InterviewInviteModal/>
      <EmbedCalendar/>

      <h1> Image Gallery </h1>

      <h1> Jobs (newest 20) </h1>

    </>
  )
};

export default Home;