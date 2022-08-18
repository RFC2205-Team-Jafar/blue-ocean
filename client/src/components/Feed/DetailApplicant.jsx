/*========== EXTERNAL MODULES ==========*/
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import axios from 'axios';

/*========== INTERNAL MODULES ==========*/
<<<<<<< HEAD
import { Column, Row, ButtonTray } from '../../../public/stylesheets/styles.js';
import { InterviewInviteModal } from '../../Google_API/interviewInvite.jsx';
=======
import { Column, Row, ButtonBox } from '../../../public/stylesheets/styles.js';
import { InterviewInviteModal } from '../../Google_API/interviewInvite.jsx'
>>>>>>> dev


/*========== EXPORTS ==========*/
export default function DetailApplicant({ applicant }) {

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
      <ApplicantName>Applicant Name</ApplicantName>
      <ApplicantLocation>Applicant Location</ApplicantLocation>
<<<<<<< HEAD
      <ButtonTray>
        <ApplicantButton variant='outlined'>Reject</ApplicantButton>
        <InterviewInviteModal/>
      </ButtonTray>
=======
      <ApplicantResume>Applicant Resume:</ApplicantResume>
>>>>>>> dev
    </ApplicantHeader>
      <ButtonBox>
        <InterviewInviteModal/>
        {renderReject()}
      </ButtonBox>
    <ApplicantBody>
      {renderAlert()}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque convallis a cras semper auctor. Et magnis dis parturient montes nascetur. Lectus proin nibh nisl condimentum id. Nunc consequat interdum varius sit. Laoreet suspendisse interdum consectetur libero id faucibus. Platea dictumst quisque sagittis purus sit. Felis bibendum ut tristique et egestas quis. Scelerisque mauris pellentesque pulvinar pellentesque. Luctus accumsan tortor posuere ac ut consequat semper. Vitae aliquet nec ullamcorper sit amet risus nullam. At varius vel pharetra vel. Faucibus scelerisque eleifend donec pretium vulputate. Venenatis a condimentum vitae sapien pellentesque. Mauris augue neque gravida in fermentum. Velit egestas dui id ornare arcu odio ut sem nulla.

        Aliquam etiam erat velit scelerisque in dictum. Aenean pharetra magna ac placerat vestibulum. Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit amet. Augue neque gravida in fermentum et sollicitudin ac orci phasellus. Vulputate ut pharetra sit amet aliquam id. Mauris pharetra et ultrices neque ornare aenean euismod elementum. Mi bibendum neque egestas congue quisque egestas diam in arcu. Pellentesque elit ullamcorper dignissim cras tincidunt. Ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget gravida. Etiam tempor orci eu lobortis elementum. Tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin libero. Morbi tempus iaculis urna id volutpat lacus laoreet. Aliquam id diam maecenas ultricies mi eget mauris pharetra. Vitae sapien pellentesque habitant morbi tristique senectus et netus. Ut morbi tincidunt augue interdum velit euismod. Vel pretium lectus quam id leo in vitae turpis massa. Semper quis lectus nulla at volutpat. Pharetra et ultrices neque ornare aenean euismod elementum nisi. Tellus in metus vulputate eu scelerisque felis imperdiet. Sit amet nisl purus in.

        Morbi tincidunt augue interdum velit. Aliquet sagittis id consectetur purus ut faucibus pulvinar elementum integer. In eu mi bibendum neque egestas. Erat pellentesque adipiscing commodo elit at imperdiet dui. Massa tincidunt nunc pulvinar sapien et ligula. Platea dictumst quisque sagittis purus sit amet volutpat. Quam quisque id diam vel quam elementum pulvinar etiam non. Aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc sed. Ipsum nunc aliquet bibendum enim facilisis. Ullamcorper sit amet risus nullam eget felis eget nunc. Ac feugiat sed lectus vestibulum mattis ullamcorper. Morbi tristique senectus et netus et malesuada fames ac turpis. Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue. Lectus urna duis convallis convallis.
      </p>
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