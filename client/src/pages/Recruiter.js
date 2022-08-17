
/*========== EXTERNAL MODULES ==========*/

import React from 'react';
import { Link, Outlet } from "react-router-dom";
import EmbedCalendar from '../Google_API/calendar.jsx';


/*========== INTERNAL MODULES ==========*/
import {Page} from '../../public/stylesheets/styles';
import PostJob from '../components/PostJob/PostJob.jsx'
// import Feed from '../components/Feed/Feed.jsx';

const Recruiter = () => {
  return (
    <Page>
      <h1>Recruiter View </h1>
      <h1>Site logo  +  Recruiter  Account</h1>
      <h1> Image Gallery </h1>

      <div><Link to="profile" >Profile</Link></div>
      <div><Link to="">Active postings</Link></div>
      <Feed view={{view:'recruiter'}} applicants={[1, 2, 3, 4, 5, 6]}/>
      <div><Link to="postAJob">Post a new job</Link></div>
      <Outlet />

      <Link to="/"> Back to Home </Link>
      <EmbedCalendar/>
    </Page>
  )
};



/*========== EXPORTS ==========*/
export default Recruiter;



/*========== STYLES ==========*/