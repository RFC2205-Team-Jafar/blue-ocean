/*========== EXTERNAL MODULES ==========*/
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import axios from 'axios';

/*========== INTERNAL MODULES ==========*/
import { Column, Label, Row, ButtonTray, JobPosting } from '../../../public/stylesheets/styles.js';


/*========== EXPORTS ==========*/
export default function ActiveJob({ handleClick }) {
  /*
  NOTE:
    add PUT request to close posting using '/jobs/closeposting'
    EXPECTS:
      {
        "listing_id": 93
      }
  */


  /*----- STATE HOOKS -----*/
  const [canClose, setCanClose] = useState(true);
  const [closeSuccess, setCloseSuccess] = useState(false);


  /*----- LIFESTYLE METHODS -----*/
  // useEffect(() =>  {}, []);

  /*----- EVENT HANDLERS -----*/
const handleClose = () => {
  axios.put('/jobs/closeposting',)
  .then(onClose => {
    setCanClose(false);
    setCloseSuccess(true);
    setTimeout(() => setCloseSuccess(false), 3000);
  })
  .catch(err => console.error(err))
}

  /*----- RENDER METHODS -----*/
  const renderClose = () => {
    if (canClose) {
      return (
      <Button
        sx={{
          position: 'absolute',
          top: '15px',
          right: '5px',
          color: '#f44336'
        }}
        onClick={handleClose}
        >Close Posting
      </Button>
      )
    } else {
      return (
        <Button
          sx={{
            position: 'absolute',
            top: '15px',
            right: '5px'
          }}
          disabled
          >CLOSED
        </Button>
      )
    }
  }

  const renderAlert = () => {
    if (closeSuccess) {
      return (
        <Alert
          severity='error'
          sx={{
            position: 'absolute',
            zIndex: '2',
            width: '90%',
            // backgroundColor: '#8FC645'
          }}
          >
          <AlertTitle>Success</AlertTitle>
          This posting has been <strong>closed</strong>
        </Alert>
      )
    }
  }


  /*----- RENDERER -----*/
  return (
    <JobPosting
      style={{
        position: 'relative',
      }}
      onClick={ handleClick }
      >
      <PostingName>Job Title</PostingName>
      <PostingLocation>Job Location</PostingLocation>
      {renderClose()}
      <PostingBody>
        {renderAlert()}
        <p>
          Job Description:
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum . . .
        </p>
      </PostingBody>
    </JobPosting>
  )
}




/*========== STYLES ==========*/
const PostingHeader = styled(Column)`

`;

const ApplicantButton = styled(Button)({
  borderColor:'#f44336',
  color:'#f44336',
  '&:hover': {
    color: '#fff',
    backgroundColor:'#f44336',
    borderColor:'#f44336',
  },
});

const PostingName = styled(Row)`
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  font-size: 16pt;
  font-weight: bold;
`;

const PostingLocation = styled(Row)`
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  font-size: 12pt;
`;

const PostingBody = styled(Column)`
  background-color: #fcfaf5;
  border-radius: 10px;
  padding: 10px;
  margin: 10px;
  overflow: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;