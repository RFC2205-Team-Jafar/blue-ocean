/*========== EXTERNAL MODULES ==========*/
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Button from '@mui/material/Button';

/*========== INTERNAL MODULES ==========*/
import { Column, Row, ButtonTray } from '../../../public/stylesheets/styles.js';
import DetailApplicant from './DetailApplicant.jsx';
import DetailJob from './DetailJob.jsx';


/*========== EXPORTS ==========*/
export default function DetailList({ displayPost, postings, view: { view }, applicants }) {
  /*
  TODO: send children to be rendered to the function as props along with an
  identifier to indicate that it is on the job seeker or the recruiters page
  */

  /*----- STATE HOOKS -----*/
  // const [] = useState();


  /*----- LIFESTYLE METHODS -----*/
  // useEffect(() =>  {}, []);

  /*----- EVENT HANDLERS -----*/
  // const handleChange = ({target: {name, value}}) => {
  //   setJobPosting(prev => ({
  //     ...prev,
  //     [name]: value
  //   }))
  // };

  /*----- RENDER METHODS -----*/

  const renderDetail = (targetPost) => {
    /*
    NOTE:
    - on page load, renders detailed information on the first listing,
    - should conditionally render buttons specific to the parent page
    */
   targetPost = targetPost || postings[0];

    if (targetPost && view === 'seeker') return <DetailJob targetPost={targetPost} />

    if (applicants && view === "recruiter") {
      return applicants.map(applicant => {
        return <DetailApplicant applicant={applicant}/>
    })
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
  background-color: #fff;
  border-radius: 10px;
  padding: 10px;
  margin: 10px;
  width: 48%;
  overflow: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
  `;

const DetailHeader = styled(Row)`

`;

const DetailBody = styled(Column)`
  background-color: #fff;
  border-radius: 10px;
  padding: 10px;
  margin: 10px;
  height: 800px;
  overflow: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const ApplicantName = styled(Row)`
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  font-size: 16pt;
  font-weight: bold;
`;

const ApplicantLocation = styled(Row)`
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  font-size: 12pt;
`;