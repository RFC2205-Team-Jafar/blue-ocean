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
  const renderDetail = () => {
    if (view && view.view !== 'unsigned') {
      return (
        <DetailList targetPost={targetPost} postings={postings} view={view} applicants={applicants}/>
      )
    }
  }


  /*----- RENDERER -----*/
  return (
    <FeedSection>
        {/* <Row>
          <h4 style={{padding-left: '5px'}}>Check out these opportunities</h4>
        </Row> */}
          {/* <h4 style={{paddingLeft: '5px'}}>Jobs based on your criteria</h4> */}
        <Row>
          <PostList handleClick={handleClick} postings={postings} view={view} />
          {renderDetail()}
        </Row>
    </FeedSection>
  )
}




/*========== STYLES ==========*/