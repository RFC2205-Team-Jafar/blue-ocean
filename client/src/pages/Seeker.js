/*========== EXTERNAL MODULES ==========*/
import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";

/*========== INTERNAL MODULES ==========*/
import { AllContext } from "../index.jsx";
import EmbedCalendar from "../Google_API/calendar.jsx";
import Feed from "../components/Feed/Feed.jsx";
import HeaderGallery from "../components/Header/ImageGallery.jsx";
import FilterFunctions from "../components/Filters/FilterFunctions.jsx";
import FilterStatus from "../components/Filters/FilterStatus.jsx";
import SignOut from '../components/Profile/SignOut.js';


const Seeker = () => {
  const { firstName } = useContext(AllContext);

  return (
    <>
      <h1>Site logo</h1>
      <h1>
        Welcome back, Seeker: {firstName}
        <SignOut />
      </h1>
      <HeaderGallery />

      <div>
        <Link to="profile">Profile</Link>
      </div>
      <div>
        <Link to="">Jobs for you</Link>
      </div>
      <FilterFunctions />
      <FilterStatus />
      <Outlet />

      <Link to="/">Back to Home</Link>
      <EmbedCalendar />
    </>
  );
};

/*========== EXPORTS ==========*/
export default Seeker;

/*========== STYLES ==========*/
