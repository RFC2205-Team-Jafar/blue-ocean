/*========== EXTERNAL MODULES ==========*/

import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import EmbedCalendar from '../Google_API/calendar.jsx';


/*========== INTERNAL MODULES ==========*/
import { Page } from "../../public/stylesheets/styles";
import PostJob from "../components/PostJob/PostJob.jsx";
import Feed from "../components/Feed/Feed.jsx";
import HeaderGallery from "../Components/Header/ImageGallery.jsx";
import { AllContext } from '../index.jsx';
import SignOut from '../components/Profile/SignOut.js';

const Recruiter = () => {

  const { firstName } = useContext(AllContext);

  return (
    <Page>
      <h1>Site logo</h1>
      <h1>
        Welcome back, Recruiter: {firstName},
        <SignOut />
      </h1>
      <HeaderGallery />

      <div><Link to="profile" >Profile</Link></div>
      <div><Link to="">Active postings</Link></div>
      <div><Link to="postAJob">Post a new job</Link></div>
      <Outlet />

      <Link to="/"> Back to Home </Link>
      <EmbedCalendar />
    </Page>
  );
};

/*========== EXPORTS ==========*/
export default Recruiter;



/*========== STYLES ==========*/
