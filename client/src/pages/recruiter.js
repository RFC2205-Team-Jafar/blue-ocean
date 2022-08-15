/*========== EXTERNAL MODULES ==========*/
import React from 'react';
import { Link } from "react-router-dom";
import EmbedCalendar from '../Google_API/calendar.jsx'


/*========== INTERNAL MODULES ==========*/
import {Page} from '../../public/stylesheets/styles';
import PostJob from '../components/PostJob/PostJob.jsx'

const Recruiter = () => {
  return (
    <Page>
      <h1>Recruiter View </h1>
      <PostJob />
      <Link to="/"> Back to Home </Link>
      <EmbedCalendar/>
    </Page>
  )
};



/*========== EXPORTS ==========*/
export default Recruiter;


/*========== STYLES ==========*/