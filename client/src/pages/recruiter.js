import React from 'react';
import { Link } from "react-router-dom";
import EmbedCalendar from '../Google_API/calendar.jsx'

const Recruiter = () => {
  return (
    <>
      <h1>Recruiter View </h1>
      <Link to="/"> Back to Home </Link>
      <EmbedCalendar/>
    </>
  )
};

export default Recruiter;