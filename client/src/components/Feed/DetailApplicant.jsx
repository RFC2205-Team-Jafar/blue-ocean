/*========== EXTERNAL MODULES ==========*/
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import axios from 'axios';

/*========== INTERNAL MODULES ==========*/
import { Column, Row, ButtonBox } from '../../../public/stylesheets/styles.js';
import { InterviewInviteModal } from '../../Google_API/interviewInvite.jsx'
import {fileViewer} from '../fileHandlers.jsx'

/*========== EXPORTS ==========*/
export default function DetailApplicant({ applicant }) {
  if (applicant) {
    var { first_name, last_name, matched_keywords, user_email } = applicant;
  }

  /*
  NOTE:
    add PUT request to remove candidate using '/jobs/removecandidate'
    EXPECTS:
      {
        "seeker_uuid": "oSl2HNei1PTAsG3TijrfidKJ6dI2",
        "listing_id": 99
      }
  */
  /*

  /*----- STATE HOOKS -----*/
  const [canReject, setCanReject] = useState(true);
  const [rejectSuccess, setRejectSuccess] = useState(false);


  /*----- LIFESTYLE METHODS -----*/
  // useEffect(() =>  {}, []);

  /*----- EVENT HANDLERS -----*/
  const handleReject = () => {
    axios.put('/jobs/closeposting',)
    .then(onClose => {
      setCanReject(false);
      setRejectSuccess(true);
      setTimeout(() => setRejectSuccess(false), 3000);
    })
    .catch(err => console.error(err))
}

  /*----- RENDER METHODS -----*/
  const renderReject = () => {
    if (canReject) {
      return (
      <ApplicantButton
        onClick={handleReject}
        >REJECT
      </ApplicantButton>
      )
    } else {
      return (
        <ApplicantButton
          disabled
          >REJECTED
        </ApplicantButton>
      )
    }
  }

  const renderAlert = () => {
    if (rejectSuccess) {
      return (
        <Alert
          severity='error'
          sx={{
            position: 'absolute',
            zIndex: '2',
            width: '90%',
          }}
          >
          <AlertTitle>Success</AlertTitle>
          This applicant has been <strong>rejected</strong>
        </Alert>
      )
    }
  }

/*----- RENDERER -----*/
return (
  <ApplicantDetail
    style={{
      position: 'relative',
    }}
    >
    <ApplicantHeader>
      <ApplicantName>{first_name} {last_name}</ApplicantName>
      <ApplicantLocation>keywords: {matched_keywords}</ApplicantLocation>
      <ApplicantResume>Applicant Resume:</ApplicantResume>
    </ApplicantHeader>
      <ButtonBox>
        <InterviewInviteModal user_email={user_email}/> {/* Need to pass through applicant email and company name */}
        {renderReject()}
      </ButtonBox>
    <ApplicantBody>
      {fileViewer('https://jafar-2022.s3.amazonaws.com/Bandit.docx')}
    </ApplicantBody>
  </ApplicantDetail>
  )
}




/*========== STYLES ==========*/
const ApplicantDetail = styled(Column)`
  background-color: #fcfaf5;
  margin: 10px;
  padding: 10px;
  border-radius: 10px;
  box-shadow:  5px 5px 3px #84c9b7,
           -5px -5px 3px #90d9c7;

`;

const ApplicantHeader = styled(Column)`
   width: 100%;
`;

const ApplicantButton = styled(Button)({
  margin: '3px',
  borderColor:'#f44336',
  color:'#f44336',
  '&:hover': {
    color: '#fff',
    backgroundColor:'#f44336',
    borderColor:'#f44336',
  },
});

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

const ApplicantBody = styled(Column)`
  background-color: #fcfaf5;
  border-radius: 10px;
  padding: 10px;
  margin: 10px;
  height: 800px;
  overflow: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const ApplicantResume = styled(Row)`
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 10px;
  width: 100%;
  font-weight: bold;
  font-size: 12pt;
`;