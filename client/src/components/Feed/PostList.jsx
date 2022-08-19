/*========== EXTERNAL MODULES ==========*/
import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import Button from '@mui/material/Button';

/*========== INTERNAL MODULES ==========*/
import { Column } from '../../../public/stylesheets/styles.js';
import PostedJob from './PostedJob.jsx';
import ActiveJob from './ActiveJob.jsx';
import { AllContext } from '../../index.jsx';

/*========== EXPORTS ==========*/
export default function PostList({ handleClick, handleListing, postings, defaultJobs, appliedJobs, unsignedJobs, recruiterPostings }) {
  const path = location.pathname;
  /*----- STATE HOOKS -----*/
  // const [] = useState();
  const {currentList, setCurrentList} = useContext(AllContext);

  /*----- LIFESTYLE METHODS -----*/
  // useEffect(() =>  {}, []);

  /*----- EVENT HANDLERS -----*/




  /*----- RENDER METHODS -----*/
  const renderList = () => {
    if (currentList === 'default' && defaultJobs && path === '/seeker') {
      const seeker = defaultJobs.map(job => {
        return <PostedJob key={job.listing_id} job={job} handleClick={handleClick}/>
      })
      return (
        <ListSection>
          {seeker}
        </ListSection>
      )
    }

    if (currentList === 'applied' && appliedJobs && path === '/seeker') {
      const seeker = appliedJobs.map(job => {
        return <PostedJob key={job.listing_id} job={job} handleClick={handleClick}/>
      })
      return (
        <ListSection>
          {seeker}
        </ListSection>
      )
    }

    if (recruiterPostings && path === '/recruiter') {
      const recruiter = recruiterPostings.listings.map(listing => <ActiveJob key={listing.listing_id} listing={listing} handleListing={handleListing}/>)
      return (
        <ListSection>
          {recruiter}
        </ListSection>
      )
    }
  }

  const renderUnsigned = () => {
    if (unsignedJobs && path === '/') {
      const unsigned = unsignedJobs.map(job => <PostedJob style={{width: '50vw'}} key={job.listing_id} job={job}/>)
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