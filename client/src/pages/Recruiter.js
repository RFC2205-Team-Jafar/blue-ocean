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
import { AllContext } from '../index.jsx';
import SignOut from '../components/Profile/SignOut.js';
import NavigationBar from '../components/NavBar/NavigationBar.jsx';


const Recruiter = () => {
  const { firstName } = useContext(AllContext);

  return (
    <Page>
      <NavigationBar/>
      <HeaderGallery />
      <Button variant = 'contained'><Link to="">Active postings</Link></Button>
      <Outlet />
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