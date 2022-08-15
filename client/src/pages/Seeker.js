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

      <h1>Seeker View </h1>
      <div>Current Counter: {counter}</div>
      <button onClick={() => setCounter(prev => prev + 1)}>Increase Counter by 1</button>
      <Link to="/">Back to Home</Link>
      <EmbedCalendar/>
    </>
  )
};

export default Seeker;