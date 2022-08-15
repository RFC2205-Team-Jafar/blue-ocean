import React from 'react';
import { Link, Outlet } from "react-router-dom";
import EmbedCalendar from '../Google_API/calendar.jsx'

const Recruiter = () => {
  return (
    <>
      <h1>Site logo  +  Recruiter  Account</h1>

      {/* Profile shall be placed in a modal */}
      <div><Link to="profile" >Profile</Link></div>

      <div> Image Gallery </div>

      <div><Link to="">Active postings</Link></div>
      <div><Link to="postAJob">Post a new job</Link></div>
      {/* Element from nested route will be rendered into <Outlet /> */}
      <Outlet />
      <Link to="/"> Back to Home </Link>
      <EmbedCalendar/>
    </>
  )
};

export default Recruiter;