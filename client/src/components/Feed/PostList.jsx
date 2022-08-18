/*========== EXTERNAL MODULES ==========*/
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Button from '@mui/material/Button';

/*========== INTERNAL MODULES ==========*/
import { Column } from '../../../public/stylesheets/styles.js';
import PostedJob from './PostedJob.jsx';
import ActiveJob from './ActiveJob.jsx';


/*========== EXPORTS ==========*/
export default function PostList({ handleClick, postings, view: { view }, defaultJobs, appliedJobs }) {
  /*----- STATE HOOKS -----*/
  // const [] = useState();


  /*----- LIFESTYLE METHODS -----*/
  // useEffect(() =>  {}, []);

  /*----- EVENT HANDLERS -----*/




  /*----- RENDER METHODS -----*/
  const renderList = () => {
    /*
    NOTE:
    - should render the basic information from the provided List prop,
    - should conditionally render buttons specific to the parent page
    - on Click -> sends the clicked posting information to the Details listing
    */

    if (defaultJobs && view === 'seeker') {
      const seeker = defaultJobs.map(job => <PostedJob job={job} handleClick={handleClick}/>)
      return (
        <ListSection>
          {seeker}
        </ListSection>
      )
    }

    if (postings && view === 'recruiter') {
      const recruiter = postings.map(post => <ActiveJob handleClick={handleClick}/>)
      return (
        <ListSection>
          {recruiter}
        </ListSection>
      )
    }
  }

  const renderUnsigned = () => {
    if (postings && view === 'unsigned') {
      const unsigned = postings.map(post => <PostedJob/>)
      return (
        <ListSection
          style={{
            width: '100%'
          }}
          >
          {unsigned}
        </ListSection>
      )
    }
  }

  /*----- RENDERER -----*/
  return (
    <>
      {renderList()}
      {renderUnsigned()}
    </>
  )
}




/*========== STYLES ==========*/
const ListSection = styled(Column)`
  margin: 10px;
  width: 48%;
  height: 1200px;
  overflow: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;