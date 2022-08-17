/*========== EXTERNAL MODULES ==========*/
import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";

/*========== INTERNAL MODULES ==========*/
import { AllContext } from "../index.jsx";
import EmbedCalendar from "../Google_API/calendar.jsx";
import Feed from "../components/Feed/Feed.jsx";
import HeaderGallery from "../Components/Header/ImageGallery.jsx";
import FilterFunctions from "../Components/Filters/FilterFunctions.jsx";
import FilterStatus from "../Components/Filters/FilterStatus.jsx";

const Seeker = () => {
  return (
    <>
      <h1>Seeker View </h1>
      <h1>Site logo  +  Seeker  Account</h1>
      <HeaderGallery/>

      <div><Link to="profile" >Profile</Link></div>
      <div><Link to="">Jobs for you</Link></div>
      <FilterFunctions/>
      <FilterStatus/>
      {/* <Feed view={{view:'seeker'}}/> */}
      <Outlet />

      <Link to="/">Back to Home</Link>
      <EmbedCalendar />
    </>
  );
};

/*========== EXPORTS ==========*/
export default Seeker;

/*========== STYLES ==========*/
