import React, { useContext } from 'react';
import { Link, Outlet } from "react-router-dom";
import { AllContext } from '../index.jsx';
import EmbedCalendar from '../Google_API/calendar.jsx'


const Seeker = () => {

  return (
    <>
      <h1>Site logo  +  Seeker  Account</h1>

      {/* Profile shall be placed in a modal */}
      <div><Link to="profile" >Profile</Link></div>

      <div> Image Gallery </div>
      <div><Link to="">Jobs for you</Link></div>

      {/* Element from nested route will be rendered into <Outlet /> */}
      <Outlet />

      <Link to="/">Back to Home</Link>
      <EmbedCalendar/>
    </>
  )
};

export default Seeker;