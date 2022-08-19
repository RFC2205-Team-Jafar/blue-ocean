/*========== EXTERNAL MODULES ==========*/
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import axios from 'axios';

/*========== INTERNAL MODULES ==========*/

import { Column, Row, ButtonBox } from '../../../public/stylesheets/styles.js';
import {fileUpload} from '../fileHandlers.jsx';

/*========== EXPORTS ==========*/
export default function DetailJob({ targetPost }) {
  if (targetPost) {
    var {
      title,
      salary_low,
      salary_high,
      pay_adjuster,
      desc,
      industry,
      listing_id,
      employement_type,
      num_positions,
    } = targetPost;
  }

  /*
  NOTE:
   - if view has applied to this job and interview date has passed
    - render verify salary question using routes:
      PUT request '/jobs/verifysalary'
      {
        "seeker_uuid": "oSl2HNei1PTAsG3TijrfidKJ6dI2",
        "listing_id": 99,
        "didReceivePromisedPay": false
      }
  */
 /*
  NOTE:
   - POST request to '/jobs/applyforajob'
      {
        "seeker_uuid": "oSl2HNei1PTAsG3TijrfidKJ6dI2",
        "listing_id": 93,
        "coverletter_url": "someCoverLetterUrl",
        "resume_Url": "soemResumeUrl",
        "requested_keywords": "react, postgres"
      }
    requested_keywords should be sent at as string
  */

  /*----- STATE HOOKS -----*/
  const [canApply, setCanApply] = useState(true);
  const [postSuccess, setPostSuccess] = useState(false);


  /*----- LIFESTYLE METHODS -----*/
  // useEffect(() =>  {}, []);

  /*----- EVENT HANDLERS -----*/
  const handleApply = ({target: {name, value}}) => {
  //   axios.post('/jobs/applyforajob',)
  //   .then(applied => setCanApply(false))
  //   .catch(err => console.error(err))
    setCanApply(false);
    setPostSuccess(true);
    setTimeout(() => setPostSuccess(false), 3000);
  };

  /*----- RENDER METHODS -----*/

  const renderApply = () => {
    if (canApply) {
      return (
      <Button
        variant='contained'
        onClick={handleApply}
        sx={{
          margin: '5px'
        }}
        >APPLY
      </Button>
      )
    } else {
      return (
        <Button
          variant='contained'
          disabled
          sx={{
            margin: '5px'
          }}
          >APPLIED
        </Button>
      )
    }
  }

  const renderSuccess = () => {
    if (postSuccess) {
      return (
        <Alert
          severity='success'
          sx={{
            position: 'absolute',
            zIndex: '2',
            width: '90%',
            backgroundColor: '#8FC645'
          }}
          >
          <AlertTitle>Success</AlertTitle>
          Your <strong>application</strong> has been sent!
        </Alert>
      )
    }
  }

  /*----- RENDERER -----*/
  return (
    <JobDetail>

        <DetailHeader>
        <JobTitle>{title}</JobTitle>
        <JobLocation>{industry}</JobLocation>
        <JobSalary>${salary_low} to ${salary_high} a {pay_adjuster}</JobSalary>
        </DetailHeader>
        <ButtonBox>
          {renderApply()}
          {fileUpload('Cover Letter')}
        </ButtonBox>
        <JobDescription>Job Description:</JobDescription>
      <DetailBody>
        {renderSuccess()}
        <p>Number of Openings: {num_positions}</p>
        <p>Industry: {industry}</p>
        <p>Employement Type: {employement_type}</p>
        <p>   </p>
        <p>{desc}</p>
      </DetailBody>
    </JobDetail>
  )
}




/*========== STYLES ==========*/
const DetailHeader = styled(Column)`
`;

const DetailBody = styled(Column)`
  background-color: #fcfaf5;
  border-radius: 10px;
  padding: 10px;
  margin: 10px;
  min-height: 55em;
  height: 100%
  max-height: 1200px;
  align-items: flex-start;
  justify-content: flex-start;
  overflow: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const JobDetail = styled(Column)`
  position: relative;
  align-items: flex-start;
  background-color: #fcfaf5;
  margin: 10px;
  padding: 10px;
  border-radius: 10px;
  box-shadow:  5px 5px 3px #84c9b7,
           -5px -5px 3px #90d9c7;
`;

const JobTitle = styled(Row)`
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  font-size: 16pt;
  font-weight: bold;
`;

const JobLocation = styled(Row)`
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  font-size: 12pt;
`;

const JobSalary = styled(Row)`
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  font-size: 10pt;
`;

const JobDescription = styled(Row)`
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 10px;
  width: 100%;
  font-weight: bold;
  font-size: 12pt;
`;