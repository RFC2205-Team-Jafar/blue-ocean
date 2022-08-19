/*========== EXTERNAL MODULES ==========*/
import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import Button from "@mui/material/Button";

/*========== INTERNAL MODULES ==========*/
import { AllContext } from "../index.jsx";
import EmbedCalendar from "../Google_API/calendar.jsx";
import Feed from "../components/Feed/Feed.jsx";
import HeaderGallery from "../components/Header/ImageGallery.jsx";
import FilterFunctions from "../components/Filters/FilterFunctions.jsx";
import FilterStatus from "../components/Filters/FilterStatus.jsx";
import SignOut from '../components/Profile/SignOut.js';
import NavigationBar from '../components/NavBar/NavigationBar.jsx';


const Seeker = () => {
  const { firstName } = useContext(AllContext);

  return (
    <>
      <NavigationBar/>
      <HeaderGallery />

      <Button variant = 'contained'>
        <Link to="">Jobs for you</Link>
      </Button>

      <Outlet />
      <EmbedCalendar />
    </>
  );
};

/*========== EXPORTS ==========*/
export default Seeker;

/*========== STYLES ==========*/
