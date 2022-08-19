/*========== EXTERNAL MODULES ==========*/
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Button from '@mui/material/Button';

/*========== INTERNAL MODULES ==========*/
import { Column, Row, ButtonTray } from '../../../public/stylesheets/styles.js';
import DetailApplicant from './DetailApplicant.jsx';
import DetailJob from './DetailJob.jsx';


/*========== EXPORTS ==========*/
export default function DetailList({ targetPost, recruiterPostings, targetListing, appliedJobs, unsignedJobs }) {
  const path = location.pathname;

  /*----- RENDER METHODS -----*/

  const renderDetail = () => {
   targetPost = targetPost || (appliedJobs[0] || unsignedJobs[0] );
   targetListing = targetListing || recruiterPostings.listings[0]

    if (targetPost && path === '/seeker') return <DetailJob targetPost={targetPost} />

    if (targetListing && path === '/recruiter') {
      if (targetListing.applicants) {
        return targetListing.applicants.map((applicant, index) => {
          return <DetailApplicant key={index} applicant={applicant}/>
        })
      }
    }
  }


/*----- RENDERER -----*/
return (
  <DetailSection>
    {renderDetail()}
  </DetailSection>
  )
}




/*========== STYLES ==========*/
const DetailSection = styled(Column)`
  border-radius: 10px;
  padding: 10px;
  margin: 10px;
  width: 48%;
  height: 1200px;
  overflow: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;