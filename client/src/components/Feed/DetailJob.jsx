/*========== EXTERNAL MODULES ==========*/
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import axios from 'axios';

/*========== INTERNAL MODULES ==========*/
import { Column, Row, ButtonTray } from '../../../public/stylesheets/styles.js';


/*========== EXPORTS ==========*/
export default function DetailJob({ targetPost }) {

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
  };

  /*----- RENDER METHODS -----*/
  const renderApply = () => {
    if (canApply) {
      return (
      <Button
        variant='contained'
        onClick={handleApply}
        >APPLY
      </Button>
      )
    } else {
      return (
        <Button
          variant='contained'
          disabled
          >APPLIED
        </Button>
      )
    }
    setPostSuccess(true);
    setTimeout(() => setPostSuccess(false), 3000);
  }

  const renderSuccess = () => {
    if (postSuccess) {
      return (
        <Alert
          severity='success'
          sx={{position: 'absolute', zIndex: '2'}}
          >
          <AlertTitle>Success</AlertTitle>
          Your job has been posted!
        </Alert>
      )
    }
  }

  /*----- RENDERER -----*/
  return (
    <JobDetail>
        <DetailHeader>
        <JobTitle>Job Title</JobTitle>
        <JobLocation>Job Location</JobLocation>
        <JobSalary>Salary</JobSalary>
        </DetailHeader>
        <ButtonBox>
          {renderApply()}
          <Button
            variant='contained'
            sx={{
              transform: 'scale(.75)'
            }}
            >+ Cover Letter
          </Button>
        </ButtonBox>
        <JobDescription>Job Description:</JobDescription>
      <DetailBody>
        {renderSuccess()}
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque convallis a cras semper auctor. Et magnis dis parturient montes nascetur. Lectus proin nibh nisl condimentum id. Nunc consequat interdum varius sit. Laoreet suspendisse interdum consectetur libero id faucibus. Platea dictumst quisque sagittis purus sit. Felis bibendum ut tristique et egestas quis. Scelerisque mauris pellentesque pulvinar pellentesque. Luctus accumsan tortor posuere ac ut consequat semper. Vitae aliquet nec ullamcorper sit amet risus nullam. At varius vel pharetra vel. Faucibus scelerisque eleifend donec pretium vulputate. Venenatis a condimentum vitae sapien pellentesque. Mauris augue neque gravida in fermentum. Velit egestas dui id ornare arcu odio ut sem nulla.

          Aliquam etiam erat velit scelerisque in dictum. Aenean pharetra magna ac placerat vestibulum. Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit amet. Augue neque gravida in fermentum et sollicitudin ac orci phasellus. Vulputate ut pharetra sit amet aliquam id. Mauris pharetra et ultrices neque ornare aenean euismod elementum. Mi bibendum neque egestas congue quisque egestas diam in arcu. Pellentesque elit ullamcorper dignissim cras tincidunt. Ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget gravida. Etiam tempor orci eu lobortis elementum. Tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin libero. Morbi tempus iaculis urna id volutpat lacus laoreet. Aliquam id diam maecenas ultricies mi eget mauris pharetra. Vitae sapien pellentesque habitant morbi tristique senectus et netus. Ut morbi tincidunt augue interdum velit euismod. Vel pretium lectus quam id leo in vitae turpis massa. Semper quis lectus nulla at volutpat. Pharetra et ultrices neque ornare aenean euismod elementum nisi. Tellus in metus vulputate eu scelerisque felis imperdiet. Sit amet nisl purus in.

          Morbi tincidunt augue interdum velit. Aliquet sagittis id consectetur purus ut faucibus pulvinar elementum integer. In eu mi bibendum neque egestas. Erat pellentesque adipiscing commodo elit at imperdiet dui. Massa tincidunt nunc pulvinar sapien et ligula. Platea dictumst quisque sagittis purus sit amet volutpat. Quam quisque id diam vel quam elementum pulvinar etiam non. Aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc sed. Ipsum nunc aliquet bibendum enim facilisis. Ullamcorper sit amet risus nullam eget felis eget nunc. Ac feugiat sed lectus vestibulum mattis ullamcorper. Morbi tristique senectus et netus et malesuada fames ac turpis. Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue. Lectus urna duis convallis convallis.
        </p>
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
  height: 800px;
  overflow: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const JobDetail = styled(Column)`
  position: relative;
  align-items: flex-start;
  background-color: #fcfaf5;
  height: 55em;
  margin: 10px;
  padding: 10px;
  border-radius: 10px;
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

const ButtonBox = styled(Column)`
  top: 15px;
  right: 5px;
  position: absolute;
`;