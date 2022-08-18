/*========== EXTERNAL MODULES ==========*/
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Button from '@mui/material/Button';

/*========== INTERNAL MODULES ==========*/
import { Row, FeedSection } from '../../../public/stylesheets/styles.js';
import PostList from './PostList.jsx';
import DetailList from './DetailList.jsx';


/*========== EXPORTS ==========*/
export default function Feed({view, applicants}) {
  /*
  TODO: send children to be rendered to the function as props along with an
  identifier to indicate that it is on the job seeker or the recruiters page
  */

  /*----- STATE HOOKS -----*/
  const [postings, setPostings] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
  const [targetPost, setTargetPost] = useState();


  /*----- LIFESTYLE METHODS -----*/
  // useEffect(() =>  {}, []);

  /*----- EVENT HANDLERS -----*/
  const handleClick = ({ target: { name, value } }) => {
    //TODO: set modify the background of the clicked button to be a different color
    setTargetPost(prev => ({
      ...prev,
      [name]: value
    }))
  };


  /*----- RENDER METHODS -----*/


  /*----- RENDERER -----*/
  return (
    <>
      <FeedHeader><h4>YOUR FEED</h4></FeedHeader>
      <FeedSection>
        <Row>
          <PostList handleClick={handleClick} postings={postings} view={view} />
          <DetailList targetPost={targetPost} postings={postings} view={view} applicants={applicants}/>
        </Row>
      </FeedSection>
    </>
  )
}




/*========== STYLES ==========*/

const FeedHeader = styled(Row)`
  font-size: 1pt;
  font-weight: bold;
  justify-content: center;
  border: none;
  border-top: 1em solid linear-gradient(50deg, rgba(119, 201, 212, 0.75), rgba(87, 188, 144, 0.75));
`;