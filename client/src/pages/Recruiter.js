/*========== EXTERNAL MODULES ==========*/
import React from 'react';
import { Link, Outlet } from "react-router-dom";
import EmbedCalendar from '../Google_API/calendar.jsx'


/*========== INTERNAL MODULES ==========*/
import {Page} from '../../public/stylesheets/styles';
import PostJob from '../components/PostJob/PostJob.jsx'
import Feed from '../components/Feed/Feed.jsx';

const Recruiter = () => {
  return (
    <Page>
      <h1>Recruiter View </h1>

      <h1>Site logo  +  Recruiter  Account</h1>

      {/* Profile shall be placed in a modal */}
      <div><Link to="profile" >Profile</Link></div>

      <div> Image Gallery </div>
      <div><Link to="">Active postings</Link></div>
      <Feed />
      <div><Link to="postAJob">Post a new job</Link></div>
      {/* Element from nested route will be rendered into <Outlet /> */}
      <Outlet />
      <Link to="/"> Back to Home </Link>
      <EmbedCalendar/>
    </Page>
  )
};



/*========== EXPORTS ==========*/
export default Recruiter;


/*========== STYLES ==========*/