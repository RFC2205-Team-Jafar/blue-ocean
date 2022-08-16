import React, { useState } from 'react';
import { Link } from "react-router-dom";
import EmbedCalendar from '../Google_API/calendar.jsx'
import { InterviewInviteModal } from '../Google_API/interviewInvite.jsx'

const Recruiter = () => {
  const [showInterview, setShowInterview] = useState(false);

  const handleClose = () => setShowInterview(false);
  const handleShow = () => setShowInterview(true);

  return (
    <>
      <h1>Recruiter View </h1>
      <Link to="/"> Back to Home </Link>
      <EmbedCalendar/>
      <InterviewInviteModal props={handleClose, handleShow}/>
    </>
  )
};

export default Recruiter;