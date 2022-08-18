/*========== EXTERNAL MODULES ==========*/

import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import EmbedCalendar from '../Google_API/calendar.jsx';
import styled from 'styled-components';
import Button from '@mui/material/Button';
import { HiPencilAlt } from "react-icons/hi";


/*========== INTERNAL MODULES ==========*/
import { Page } from "../../public/stylesheets/styles";
import PostJob from "../components/PostJob/PostJob.jsx";
import Feed from "../components/Feed/Feed.jsx";
import HeaderGallery from "../components/Header/ImageGallery.jsx";
<<<<<<< HEAD
=======
import { AllContext } from '../index.jsx';
>>>>>>> 385b57bf64ebc47655dddd7fd650e4d6e9a6f3e0

const Recruiter = () => {

  const { firstName } = useContext(AllContext);

  return (
    <Page>
      <h1>Site logo</h1>
      <h1>Welcome back, Recruiter: {firstName}</h1>
      <HeaderGallery />

      <div><Link to="profile" >Profile</Link></div>
      <div><Link to="">Active postings</Link></div>
      <Outlet />

      <Link to="/"> Back to Home </Link>
      <PostNewJob
        variant='contained'
        ><StyledLink to="postAJob">{<HiPencilAlt style={{
          marginRight: '10px',
          transform: 'scale(1.5)'
        }}
        />} New Posting</StyledLink>
      </PostNewJob>
      <EmbedCalendar />
    </Page>
  );
};

/*========== EXPORTS ==========*/
export default Recruiter;



/*========== STYLES ==========*/
const PostNewJob = styled(Button)({
  position: 'fixed',
  bottom: '50px',
  right: '20px',
});

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  font-size: 14pt;
`;