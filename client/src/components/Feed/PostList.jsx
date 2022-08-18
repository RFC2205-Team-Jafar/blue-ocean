/*========== EXTERNAL MODULES ==========*/
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Button from '@mui/material/Button';

/*========== INTERNAL MODULES ==========*/
import { Column } from '../../../public/stylesheets/styles.js';
import PostedJob from './PostedJob.jsx';
import ActiveJob from './ActiveJob.jsx';


/*========== EXPORTS ==========*/
export default function PostList({ handleClick, postings, view: { view } }) {
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
    if (postings && view === 'seeker')return postings.map(post => <PostedJob handleClick={handleClick}/>)

    if (postings && view === 'recruiter') return postings.map(post => <ActiveJob handleClick={handleClick}/>)
  }


/*----- RENDERER -----*/
return (
  <ListSection>
    {renderList()}
  </ListSection>
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