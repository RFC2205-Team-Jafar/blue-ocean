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
  const { firstName } = useContext(AllContext);

  return (
    <>
      <h1>Site logo</h1>
      <h1>Welcome back, Seeker: {firstName}</h1>
      <HeaderGallery />

      <div><Link to="profile" >Profile</Link></div>
      <div><Link to="">Jobs for you</Link></div>
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
